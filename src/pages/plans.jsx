import React from "react";
import PageHero from "../components/PageHero";
import SectionReveal from "../components/SectionReveal";
import GetInTouch from "../components/GetInTouch";
import ReviewSlider from "../components/review-slider";

const plans = [
  {
    title: "3D Plans",
    image: "assets/3dplans.png",
    text: "Whether your 3D plan consists of a simple palliative spine mets plan to a complex four field breast 3D plan, the price is dependent on the level of complexity. We are sensitive to the level of complexity and cost, and accordingly, to the amount of time it would take our dosimetrists to complete the plan for you.",
  },
  {
    title: "IMRT Plans",
    image: "assets/IMRTPLANS.png",
    text: "Our Intensity-Modulated Radiation Therapy (IMRT) plans are designed to deliver precise radiation doses to the tumor while minimizing dose to surrounding normal tissues. We utilize advanced optimization algorithms to create highly conformal dose distributions, ensuring optimal target coverage and organ sparing.",
  },
  {
    title: "VMAT Plans",
    image: "assets/VMAT-remote.png",
    text: "Volumetric Modulated Arc Therapy (VMAT) offers faster delivery times and superior dose conformity. Our team is expert in VMAT planning, balancing modulation and delivery efficiency to provide the best possible treatment for your patients.",
  },
  {
    title: "SBRT / SABR",
    image: "assets/Spine-SBRT.jpg",
    text: "Stereotactic Body Radiation Therapy (SBRT) and Stereotactic Ablative Radiotherapy (SABR) require extreme precision. We provide meticulous planning for these high-dose-per-fraction treatments, ensuring steep dose gradients and maximal organ protection.",
  },
  {
    title: "Brachytherapy Plans",
    image: "assets/Brachytherapy.png",
    text: "We offer comprehensive brachytherapy planning services, including HDR and LDR planning. Our expertise ensures accurate dose distribution for optimal therapeutic outcomes.",
  },
];

export default function Plans() {
  return (
    <section className="ip-page-enter ip-grain">
      {/* ── Hero ── */}
      <PageHero
        title="Our Plans"
        subtitle="Expert treatment planning for every modality, delivered with precision."
        breadcrumb="Our Plans"
      />

      {/* ── Intro ── */}
      <div className="ip-section ip-section-white py-32 relative">
        <div className="ip-ambient ip-ambient-2"></div>
        <SectionReveal>
          <div className="max-w-[1000px] mx-auto text-center px-6 gap-6 flex flex-col items-center relative z-10">
            <span className="sr-item ip-label">Treatment Planning</span>
            <h2 className="sr-item text-[#003777] text-[48px] font-bold leading-[52px] -tracking-[1.2px]">
              How We Help You On Your Journey
            </h2>
            <div className="sr-item flex justify-center">
              <div className="ip-section-divider"></div>
            </div>
            <p className="sr-item text-[#434961] text-[20px] leading-[34px] -tracking-[0.3px] max-w-[740px] mt-3">
              Our skillset includes all types of 3D plans, IMRT plans, VMAT plans,
              and brachytherapy plans. We nearly always have the plan complete and
              ready for your oncologist's review in less than 24 hours.
            </p>
          </div>
        </SectionReveal>
      </div>

      {/* ── Plan Sections — Full-Width ── */}
      {plans.map((plan, index) => {
        const isEven = index % 2 === 0;
        const num = String(index + 1).padStart(2, "0");
        const bgClass = isEven ? "ip-section-light" : "ip-section-white";

        return (
          <React.Fragment key={plan.title}>
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
                            src={plan.image}
                            alt={plan.title}
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
                            {plan.title}
                          </h3>
                          <p className="text-[#434961] text-[18px] leading-[32px] -tracking-[0.2px] max-w-[560px]">
                            {plan.text}
                          </p>
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
