'use client'
import { useEffect, useState } from 'react'
import FaqAccordionList from './FaqAccordionList'

export default function GetInTouch({ data, faqLimit, faqViewAllHref }) {
  if (!data) return null
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const showToast = (msg) => {
    setToast(msg)
    setTimeout(() => setToast(null), 3000)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true);

    const token = await grecaptcha.execute(
      process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
      { action: "contact" }
    );

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
      token: token
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const dataResp = await res.json()

      if (dataResp.success) {
        showToast('Message sent successfully!')
        e.target.reset()
      } else {
        showToast('Something went wrong')
      }
    } catch (err) {
      console.error(err)
      showToast('Error submitting form')
    }

    setLoading(false)
  }

  return (
    <div className="bg-[#003777]/9 px-6 md:px-16 lg:px-28 py-12 md:py-20 w-full home-form relative" id="get-in-touch">
      <div className="flex flex-col lg:flex-row justify-between gap-12 md:gap-16">
        <form onSubmit={handleSubmit} className="w-full flex flex-col lg:gap-4 gap-10 items-start">
          <div className="flex flex-col lg:gap-2 gap-6">
            <p className="text-[18px] md:text-[22px] text-white px-5 py-1 bg-[#003777] w-fit">{data.sub_heading}</p>
            <div>
              <h3 className="text-[32px] md:text-[48px] text-black font-medium leading-tight tracking-0">{data.heading_1}</h3>
              <h3 className="text-[38px] md:text-[58px] text-black font-medium leading-tight tracking-0">{data.heading_2}</h3>
            </div>
          </div>
          <div className="flex flex-col w-full gap-5">
            <input type="text" name="name" placeholder="Name" autoComplete="off" className="bg-transparent border-[#8EA7C4] px-6 py-5 text-[16px] text-[#5C296C] font-semibold border border-solid" required />
            <input type="text" name="phone" placeholder="Phone" autoComplete="off" className="bg-transparent border-[#8EA7C4] px-6 py-5 text-[16px] text-[#5C296C] font-semibold border border-solid" />
            <input type="email" name="email" placeholder="Email" autoComplete="off" className="bg-transparent border-[#8EA7C4] px-6 py-5 text-[16px] text-[#5C296C] font-semibold border border-solid" required />
            <textarea name="message" rows="4" placeholder="Message" autoComplete="off" className="bg-transparent min-h-[100px] xl:min-h-[188px] border-[#8EA7C4] text-[#5C296C] px-6 py-5 text-[16px] font-semibold border border-solid" required></textarea>
          </div>
          <div>
            <button type='submit' disabled={loading} className="ip-btn ip-btn-primary w-fit mt-3">
              {loading ? (
                <>
                  <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"></span>
                  Sending...
                </>
              ) : (
                <>
                  {data.form_button_text}
                  <span>→</span>
                </>
              )}
            </button>
          </div>
        </form>
        <div className="w-full flex flex-col gap-8">
          <div>
            <img loading='lazy' src={data.image?.url} alt={data.image?.alt ?? data.sub_heading} className="w-full" />
          </div>
          <FaqAccordionList
            faqs={faqLimit ? data.faqs?.slice(0, faqLimit) : data.faqs}
            viewAllHref={faqLimit && faqViewAllHref ? faqViewAllHref : undefined}
          />
        </div>
      </div>
      {toast && (
        <div className="fixed bottom-5 right-5 bg-black text-white px-4 py-2 rounded-lg shadow-lg">
          {toast}
        </div>
      )}
    </div>
  )
}
