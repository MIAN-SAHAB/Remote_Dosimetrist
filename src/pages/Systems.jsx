import React from "react";
import PageHero from "../components/PageHero";
import SectionReveal from "../components/SectionReveal";
import GetInTouch from "../components/GetInTouch";
import ReviewSlider from "../components/review-slider";

const systems = [
  {
    title: "MiM Maestro",
    image: "assets/maestro-mim.jpg",
    text: "MIM Maestro provides a suite of tools that make adaptive therapy a practical standard of care. From tracking daily delivered dose with ART Assist\u2122 to automatically re-contouring your patient when the physician decides to replan, MIM Maestro will simplify and automate the adaptive process from start to finish.",
  },
  {
    title: "Varian Eclipse & Aria",
    image: "assets/medical.jpg",
    texts: [
      "The rich functionality of the Eclipse\u2122 treatment planning system helps simplify modern radiation therapy planning for all standard treatment modalities, including 3D conformal, VMAT, brachytherapy, electron and proton therapy.",
      "ARIA supports medical and radiation oncology, including proton therapy. Review clinical images, prescriptions, lab results, QA, outcomes, and more.",
    ],
  },
  {
    title: "RaySearch RayStation",
    image: "assets/raytherapy.jpg",
    text: "RayStation\u00ae is a flexible, innovative treatment planning system chosen by many of the leading cancer centers worldwide. It combines unique features like unmatched adaptive therapy capabilities, multi-criteria optimization, and optimization for HDR brachytherapy and external beam therapy.",
  },
  {
    title: "Philips Pinnacle (v16)",
    image: "assets/xRay.jpg",
    text: "Treatment planning systems are a critical component of radiation therapy delivery, ensuring the tumor site receives maximum therapeutic dose while sparing surrounding tissue. As treatment methods evolve, more sophisticated technology is required.",
  },
  {
    title: "Elekta Oncentra Brachytherapy",
    image: "assets/elekta.jpg",
    text: "In contemporary brachytherapy, the dosimetrist needs to process an increasing amount of information and turn it into effective treatment plans in a limited time. The latest version of Oncentra\u00ae Brachy offers tools that facilitate many repetitive tasks.",
  },
  {
    title: "Elekta Mosaiq",
    image: "assets/Mosaiq.jpg",
    text: "MOSAIQ\u00ae is a complete patient management information system that centralizes radiation oncology, particle therapy and medical oncology patient data into a single user interface \u2014 a global leader in oncology information systems.",
  },
];

export default function Systems() {
  return (
    <section className="ip-page-enter ip-grain">
      {/* ── Hero ── */}
      <PageHero
        title="Our Systems"
        subtitle="Industry-leading treatment planning systems we work with every day."
        breadcrumb="Systems"
      />

      {/* ── Intro ── */}
      <div className="ip-section ip-section-white py-32 relative">
        <div className="ip-ambient ip-ambient-1"></div>
        <SectionReveal>
          <div className="max-w-[1000px] mx-auto text-center px-6 gap-6 flex flex-col items-center relative z-10">
            <span className="sr-item ip-label">Technology Partners</span>
            <h2 className="sr-item text-[#003777] text-[48px] font-bold leading-[52px] -tracking-[1.2px]">
              The Best Systems In The Industry
            </h2>
            <div className="sr-item flex justify-center">
              <div className="ip-section-divider"></div>
            </div>
            <p className="sr-item text-[#434961] text-[20px] leading-[34px] -tracking-[0.3px] max-w-[700px] mt-3">
              All information is taken from each company's website, and is solely
              the property of the respective company.
            </p>
          </div>
        </SectionReveal>
      </div>

      {/* ── System Sections — Full-Width ── */}
      {systems.map((system, index) => {
        const isEven = index % 2 === 0;
        const num = String(index + 1).padStart(2, "0");
        const bgClass = isEven ? "ip-section-light" : "ip-section-white";

        return (
          <React.Fragment key={system.title}>
            <div className="ip-glow-divider"></div>

            <div className={`ip-section ${bgClass} py-24 relative`}>
              {isEven && <div className="ip-ambient ip-ambient-1"></div>}
              {!isEven && <div className="ip-ambient ip-ambient-2"></div>}

              <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <SectionReveal direction={isEven ? "left" : "right"}>
                  <div className="sr-item group">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                      {/* Image */}
                      <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                        <div className="ip-image-wrap relative">
                          <img
                            src={system.image}
                            alt={system.title}
                            className="w-full object-cover object-center h-[480px]"
                          />
                          <div className="absolute bottom-5 left-6 z-10">
                            <div
                              className="w-11 h-11 rounded-xl flex items-center justify-center text-white text-[14px] font-bold"
                              style={{
                                background: "rgba(255,255,255,0.15)",
                                backdropFilter: "blur(8px)",
                                border: "1px solid rgba(255,255,255,0.20)",
                              }}
                            >
                              {num}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className={`relative ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                        <span className="absolute -top-4 right-0 text-[160px] font-black leading-none select-none pointer-events-none text-[#003777]/[0.03]">
                          {num}
                        </span>
                        <div className="relative flex flex-col gap-6">
                          <div className="flex items-center gap-4">
                            <div className="ip-number-badge">{num}</div>
                            <div className="ip-accent-line"></div>
                          </div>
                          <h3 className="text-[#003777] text-[38px] font-extrabold -tracking-[0.95px] leading-[1.1]">
                            {system.title}
                          </h3>
                          {system.texts ? (
                            system.texts.map((t, i) => (
                              <p key={i} className="text-[#434961] text-[18px] leading-[32px] -tracking-[0.2px] max-w-[560px]">
                                {t}
                              </p>
                            ))
                          ) : (
                            <p className="text-[#434961] text-[18px] leading-[32px] -tracking-[0.2px] max-w-[560px]">
                              {system.text}
                            </p>
                          )}
                          <button className="ip-btn ip-btn-primary w-fit mt-3">
                            Discover More <span>→</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </SectionReveal>
              </div>
            </div>
          </React.Fragment>
        );
      })}

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
