"use client";

import { useState, useRef, useEffect } from "react";
// import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (document.querySelector('script[src*="recaptcha/api.js"]')) return;
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`;
    script.async = true;
    document.body.appendChild(script);
  }, []);
  //   const recaptchaRef = useRef();

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const token = recaptchaRef.current.getValue();

    // if (!token) {
    //   showToast("Please verify captcha");
    //   return;
    // }

    setLoading(true);

    if (typeof window === "undefined" || !window.grecaptcha) {
      showToast("reCAPTCHA not loaded yet, please try again");
      setLoading(false);
      return;
    }

    let token;
    try {
      token = await new Promise((resolve, reject) => {
        window.grecaptcha.ready(async () => {
          try {
            const t = await window.grecaptcha.execute(
              process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
              { action: "contact" }
            );
            resolve(t);
          } catch (err) {
            reject(err);
          }
        });
      });
    } catch (err) {
      console.error("reCAPTCHA error:", err);
      showToast("reCAPTCHA verification failed");
      setLoading(false);
      return;
    }

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
      contact_method: e.target["contact-method"]?.value || "",
      token
      //   recaptcha: token,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        showToast("Message sent successfully!");
        e.target.reset();
        // recaptchaRef.current.reset();
      } else {
        showToast("Something went wrong");
      }
    } catch (err) {
      console.error(err);
      showToast("Error submitting form");
    }

    setLoading(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input name="name" placeholder="Full Name" className="ip-form-input" required />
        <input name="email" type="email" placeholder="Email Address" className="ip-form-input" required />
        <input name="phone" placeholder="Phone Number" className="ip-form-input" />
        <textarea name="message" placeholder="Your Message" rows="5" className="ip-form-textarea" required />
        <div className="flex gap-6">
          <label className="flex gap-2">
            <input type="radio" name="contact-method" value="email" />
            Email
          </label>
          <label className="flex gap-2">
            <input type="radio" name="contact-method" value="phone" />
            Phone
          </label>
        </div>

        {/*
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          ref={recaptchaRef}
        /> */}

        <button
          type="submit"
          disabled={loading}
          className="ip-btn ip-btn-primary flex items-center gap-2"
        >
          {loading ? (
            <>
              <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span>
              Sending...
            </>
          ) : (
            <>Send Message →</>
          )}
        </button>
      </form>

      {/* ✅ Toast */}
      {toast && (
        <div className="fixed bottom-5 right-5 bg-black text-white px-4 py-2 rounded-lg shadow-lg">
          {toast}
        </div>
      )}
    </>
  );
}