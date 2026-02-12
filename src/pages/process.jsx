import React from "react";
import PageHero from "../components/PageHero";
import SectionReveal from "../components/SectionReveal";
import GetInTouch from "../components/GetInTouch";
import ReviewSlider from "../components/review-slider";

const methods = [
  {
    number: "01",
    title: "Direct Citrix Access",
    description: "Direct Citrix access to your server and treatment planning system.",
    link: "https://www.citrix.com/solutions/healthcare/",
    linkText: "Learn more about Citrix",
  },
  {
    number: "02",
    title: "RSA SecurID",
    description:
      "RSA SecurID gives highly secure VPN access to your server and treatment planning system. A user must enter a personal PIN to ensure that unsecured access is not granted.",
    link: "https://www.rsa.com/en-us/products/rsa-securid-suite/rsa-securid-access",
    linkText: "Learn more about RSA",
  },
  {
    number: "03",
    title: "Imprivata ID",
    description:
      "Imprivata ID gives highly secure VPN access to your server and treatment planning system. A user must use their fingerprint on their device to ensure that unsecured access is not granted.",
    link: "https://www.imprivata.com/remote-access",
    linkText: "Learn more about Imprivata",
  },
  {
    number: "04",
    title: "VMWare Horizon",
    description:
      "VMWare Horizon via personal password grants access to a local on-site desktop. Access to the treatment planning system is granted via the on-site desktop.",
    link: "https://www.vmware.com/ca/products/horizon.html",
    linkText: "Learn more about VMWare",
  },
];

export default function Process() {
  return (
    <section className="ip-page-enter ip-grain">
      {/* ── Hero ── */}
      <PageHero
        title="Our Methods"
        subtitle="Secure, HIPAA-compliant remote access to your treatment planning systems."
        breadcrumb="Process"
      />

      {/* ── Intro ── */}
      <div className="ip-section ip-section-white py-32 relative">
        <div className="ip-ambient ip-ambient-1"></div>

        <SectionReveal>
          <div className="max-w-[1000px] mx-auto text-center px-6 gap-6 flex flex-col items-center relative z-10">
            <span className="sr-item ip-label">How It Works</span>
            <h2 className="sr-item text-[#003777] text-[48px] font-bold leading-[52px] -tracking-[1.2px]">
              Secure Remote Access Methods
            </h2>
            <div className="sr-item flex justify-center">
              <div className="ip-section-divider"></div>
            </div>
            <p className="sr-item text-[#434961] text-[20px] leading-[34px] -tracking-[0.3px] max-w-[700px] mt-3">
              All accomplished through trusted, secure methods — often including
              two-factor authentication for remote network access.
            </p>
          </div>
        </SectionReveal>

        {/* ── Method Cards ── */}
        <SectionReveal stagger={0.12} className="max-w-[1400px] mx-auto px-6 mt-24 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {methods.map((method) => (
              <div
                key={method.number}
                className="sr-item ip-card p-10 rounded-[24px] flex flex-col gap-6 group"
              >
                <div className="flex items-center gap-4">
                  <div className="ip-number-badge">{method.number}</div>
                  <div className="ip-accent-line"></div>
                </div>
                <h3 className="text-[#003777] text-[26px] font-bold -tracking-[0.5px]">
                  {method.title}
                </h3>
                <p className="text-[#434961] text-[17px] leading-[28px] max-w-[440px]">
                  {method.description}
                </p>
                <a
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#003777] font-semibold text-[14px] hover:text-[#0E3CF6] transition-colors mt-auto group/link"
                >
                  {method.linkText}
                  <span className="transform group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>

      {/* ── Glow Divider ── */}
      <div className="ip-glow-divider"></div>

      {/* ── Additional Information ── */}
      <div className="ip-section ip-section-light py-28 relative">
        <div className="ip-ambient ip-ambient-purple" style={{ top: '10%', left: '60%' }}></div>
        <div className="ip-edge-accent ip-edge-accent-left"></div>

        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <SectionReveal direction="left" parallax>
            <div className="sr-item ip-image-wrap">
              <img
                src="assets/information.jpg"
                alt="Secure remote dosimetry process"
                className="w-full object-cover h-[480px]"
              />
            </div>
          </SectionReveal>

          <SectionReveal direction="right">
            <div className="sr-item flex flex-col gap-7 relative">
              <span className="absolute -top-4 right-0 text-[160px] font-black leading-none select-none pointer-events-none text-[#003777]/[0.03]">01</span>
              <span className="ip-label">Your Data, Your System</span>
              <h2 className="text-[#003777] text-[38px] font-extrabold -tracking-[0.95px] leading-[1.1]">
                Additional Information
              </h2>
              <div className="ip-section-divider"></div>
              <p className="text-[#434961] text-[18px] leading-[32px] -tracking-[0.2px] max-w-[560px]">
                Unlike other dosimetry companies that require that you send them
                DICOM files, we will NEVER be in possession of your legally
                protected patient information. We calculate YOUR plans on YOUR
                system with YOUR beam data.
              </p>
              <p className="text-[#434961] text-[18px] leading-[32px] -tracking-[0.2px] max-w-[560px]">
                Once we learn your Radiation Oncologist preferences and department
                requirements, we're ready to securely login and work with your
                pre-existing departmental dosimetry worksheets.
              </p>
            </div>
          </SectionReveal>
        </div>
      </div>

      {/* ── Glow Divider ── */}
      <div className="ip-glow-divider"></div>

      {/* ── Why Hire Section ── */}
      <div className="ip-section ip-section-white py-28 relative">
        <div className="ip-ambient ip-ambient-2" style={{ top: '-5%', right: '-10%' }}></div>
        <div className="ip-edge-accent ip-edge-accent-right"></div>

        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <SectionReveal direction="right" className="lg:order-2" parallax>
            <div className="sr-item ip-image-wrap">
              <img
                src="assets/img-4.png"
                alt="Why hire a remote dosimetrist"
                className="w-full object-cover h-[480px]"
              />
            </div>
          </SectionReveal>

          <SectionReveal direction="left" className="lg:order-1">
            <div className="sr-item flex flex-col gap-7 relative">
              <span className="absolute -top-4 right-0 text-[160px] font-black leading-none select-none pointer-events-none text-[#003777]/[0.03]">02</span>
              <span className="ip-label">The Smart Choice</span>
              <h2 className="text-[#003777] text-[38px] font-extrabold -tracking-[0.95px] leading-[1.1]">
                Why Hire A Remote Dosimetrist?
              </h2>
              <div className="ip-section-divider"></div>
              <p className="text-[#434961] text-[18px] leading-[32px] -tracking-[0.2px] max-w-[560px]">
                While the number of cancer patients increases and the demand for
                professional dosimetrists remains high, it's not always feasible
                for smaller, rural centers to have full-time staff. Hiring a
                remote worker makes more sense.
              </p>
              <p className="text-[#434961] text-[18px] leading-[32px] -tracking-[0.2px] max-w-[560px]">
                Remote treatment planning can be cost-effective for many
                organizations while allowing for steady patient growth — without
                affecting your bottom line.
              </p>
              <button className="ip-btn ip-btn-primary w-fit mt-3">
                Get Started <span>→</span>
              </button>
            </div>
          </SectionReveal>
        </div>
      </div>

      {/* ── Reviews & Contact ── */}
      <div
        className="review-section w-full"
        style={{
          backgroundImage: 'url("assets/18773521_6022556_Artboard 1.png")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <ReviewSlider />
        <GetInTouch />
      </div>
    </section>
  );
}
