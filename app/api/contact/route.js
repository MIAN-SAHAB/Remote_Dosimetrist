export async function POST(req) {
  const body = await req.json();

  const { token } = body;

  if (!token) {
    return Response.json(
      { success: false, message: "Missing reCAPTCHA token" },
      { status: 400 }
    );
  }

  try {
    // ✅ 1. Verify reCAPTCHA with Google
    const recaptchaRes = await fetch(
      `https://www.google.com/recaptcha/api/siteverify`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: process.env.RECAPTCHA_SECRET_KEY,
          response: token,
        }),
      }
    );

    const recaptchaData = await recaptchaRes.json();


    // ❌ Block if invalid or low score
    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return Response.json(
        recaptchaData,
        { status: 403 }
      );
    }

    // Optional: verify action
    if (recaptchaData.action && recaptchaData.action !== "contact") {
      return Response.json(
        { success: false, message: "Invalid action" },
        { status: 403 }
      );
    }

    // ✅ 2. Forward request to WordPress API
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}custom/v1/contact-submission-next`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.WP_API_SECRET_KEY,
        },
        body: JSON.stringify(body),
      }
    );

    const data = await res.json();

    return Response.json(data);
  } catch (err) {
    return Response.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}