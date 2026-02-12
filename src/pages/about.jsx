import React from "react";
import PageHero from "../components/PageHero";
import SectionReveal from "../components/SectionReveal";
import GetInTouch from "../components/GetInTouch";
import ReviewSlider from "../components/review-slider";

export default function About() {
  return (
    <section className="ip-page-enter ip-grain">
      {/* ── Hero ── */}
      <PageHero
        title="About Dosimetrist"
        subtitle="A group of certified medical dosimetrists that truly care about patient outcomes."
        breadcrumb="About Us"
      />

      {/* ── Vision / Mission / Values ── */}
      <div className="ip-section ip-section-white py-32 relative">
        <div className="ip-ambient ip-ambient-1"></div>
        <div className="ip-ambient ip-ambient-2"></div>

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <SectionReveal>
            <div className="text-center mb-20">
              <span className="sr-item ip-label">Who We Are</span>
              <h2 className="sr-item text-[#003777] text-[48px] font-bold leading-[52px] -tracking-[1.2px] mt-5">
                Our Foundation
              </h2>
              <div className="sr-item flex justify-center mt-7">
                <div className="ip-section-divider"></div>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal stagger={0.18}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
              {/* Vision */}
              <div className="sr-item ip-card ip-card-hover-blue p-10 rounded-2xl">
                <div className="flex justify-center mb-7">
                  <div className="ip-card-icon w-20 h-20 flex items-center justify-center rounded-full bg-[#e6f0ff] transition-all duration-500">
                    <svg className="w-10 h-10 text-[#003777] transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 transition-colors duration-500">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed transition-colors duration-500">
                  Our vision is to create long and lasting partnerships with our clients
                  and to share information within our network that improves workflow in every department.
                </p>
              </div>

              {/* Mission */}
              <div className="sr-item ip-card ip-card-hover-blue p-10 rounded-2xl">
                <div className="flex justify-center mb-7">
                  <div className="ip-card-icon w-20 h-20 flex items-center justify-center rounded-full bg-[#e6f0ff] transition-all duration-500">
                    <svg className="w-10 h-10 text-[#003777] transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 transition-colors duration-500">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed transition-colors duration-500">
                  Our mission is to gain our clients' trust and appreciation by providing
                  the highest quality plans in the most efficient manner possible.
                </p>
              </div>

              {/* Values */}
              <div className="sr-item ip-card ip-card-hover-blue p-10 rounded-2xl">
                <div className="flex justify-center mb-7">
                  <div className="ip-card-icon w-20 h-20 flex items-center justify-center rounded-full bg-[#e6f0ff] transition-all duration-500">
                    <svg className="w-10 h-10 text-[#003777] transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 transition-colors duration-500">Our Values</h3>
                <p className="text-gray-600 leading-relaxed transition-colors duration-500">
                  We value honesty, communication, fairness, consistency, and efficiency.
                  All of our clients and their patients are treated with utmost care.
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>

      {/* ── Glow Divider ── */}
      <div className="ip-glow-divider"></div>

      {/* ── Get To Know Us ── */}
      <div className="ip-section ip-section-light py-28 relative">
        <div className="ip-ambient ip-ambient-purple" style={{ top: '10%', right: '5%' }}></div>

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
            <SectionReveal direction="left">
              <div className="sr-item flex flex-col gap-12 h-full">
                {/* Blue gradient card */}
                <div
                  className="flex flex-col gap-8 p-12 flex-1"
                  style={{
                    background: "linear-gradient(45deg, #003777, #0E3CF6)",
                    borderRadius: "32px",
                  }}
                >
                  <div className="relative">
                    <div className="ip-dots -left-10 -top-10"></div>
                    <h2 className="text-[42px] text-white -tracking-[1px] leading-[1.1] font-bold relative z-10">
                      Get To Know Us
                    </h2>
                  </div>
                  <p className="text-white/90 text-[18px] leading-[30px]">
                    We are a remote-only dosimetry company and more specifically, a group of
                    certified medical dosimetrists that truly care. We always have the
                    patient's best needs at heart on any treatment plan that we create for
                    you, the client.
                  </p>
                  <p className="text-white/90 text-[18px] leading-[30px]">
                    We'd like to think of ourselves as an a-la-carte type business. You may
                    call upon our services when you truly need some dosimetry work. We strive
                    to fill a niche of providing dosimetry coverage from filling a void of
                    personal time off (PTO), work overflow, sick time, to filling the workload
                    of a full-time employee, and anything in between.
                  </p>
                  <button className="ip-btn ip-btn-outline w-fit">
                    Discover More <span>→</span>
                  </button>
                </div>
                {/* Bottom image */}
                <div className="ip-image-wrap">
                  <img src="assets/5th-sec-img-1.png" alt="Remote dosimetry team" className="w-full object-cover h-[300px]" />
                </div>
              </div>
            </SectionReveal>

            <SectionReveal direction="right">
              <div
                className="sr-item relative isolate flex flex-col justify-start p-12 gap-8 rounded-[32px] bg-no-repeat bg-cover bg-center h-full min-h-[700px]"
                style={{
                  backgroundImage: "url(assets/about-bg.jpg)",
                  backgroundPosition: "left",
                  backgroundSize: "cover",
                }}
              >
                <div
                  className="absolute inset-0 rounded-[32px] pointer-events-none"
                  style={{ background: "linear-gradient(180deg, rgba(0,55,119,0.55), rgba(0,29,64,0.70))" }}
                ></div>
                <div className="z-10 flex flex-col gap-8">
                  <div className="relative">
                    <div className="ip-dots -left-10 -top-10" style={{ opacity: 0.08 }}></div>
                    <h2 className="text-[42px] text-white -tracking-[1px] leading-[1.1] font-bold relative z-10">
                      Delivering Quality Care
                    </h2>
                  </div>
                  <p className="text-white/90 text-[18px] leading-[30px]">
                    We provide high quality plans to you at a fraction of the cost of the
                    competitors. We have very little overhead costs and we are sure to pass
                    those savings on to you, to keep your costs to a minimum.
                  </p>
                  <p className="text-white/90 text-[18px] leading-[30px]">
                    Priding ourselves on fast turnarounds, more often than not overnight, by
                    our experienced staff is one of our highest priorities. Each of our
                    certified medical dosimetrists have a minimum of 15 years of dedicated
                    dosimetry experience.
                  </p>
                  <button className="ip-btn ip-btn-outline w-fit">
                    Discover More <span>→</span>
                  </button>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>

      {/* ── Glow Divider ── */}
      <div className="ip-glow-divider"></div>

      {/* ── Why Hire Section ── */}
      <div className="ip-section ip-section-white py-28 relative">
        <div className="ip-ambient ip-ambient-1" style={{ top: '-10%', left: '-15%' }}></div>
        <div className="ip-edge-accent ip-edge-accent-left"></div>

        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <SectionReveal direction="left">
            <div className="sr-item flex flex-col justify-center relative">
              {/* Watermark */}
              <span className="absolute -top-4 right-0 text-[160px] font-black leading-none select-none pointer-events-none text-[#003777]/[0.03]">01</span>
              <span className="ip-label mb-5">Why Hire a Remote Dosimetrist?</span>
              <h2 className="text-[38px] md:text-[42px] font-bold text-gray-900 mb-6 leading-[1.15] -tracking-[1px]">
                Flexible staffing for growing cancer centers
              </h2>
              <div className="ip-section-divider mb-10"></div>
              <div className="space-y-6 text-[#434961] text-[18px] leading-[30px]">
                <p>
                  While the number of cancer patients increases and the demand for
                  professional dosimetrists remains high, it's not always feasible for
                  smaller, rural centers to have full-time dosimetrists on the staff. If
                  the patient demand isn't enough for a small town, hiring a remote worker
                  makes more sense.
                </p>
                <p>
                  Using remote treatment planning can be cost-effective for many
                  organizations while allowing for steady patient growth. Plus, limiting
                  the number of people that a cancer patient encounters is safer for that
                  individual.
                </p>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal direction="right" parallax>
            <div className="sr-item ip-image-wrap">
              <img
                src="assets/information.jpg"
                alt="Professional workspace showing remote dosimetry work setup"
                className="w-full object-cover h-[580px]"
              />
            </div>
          </SectionReveal>
        </div>
      </div>

      {/* ── Glow Divider ── */}
      <div className="ip-glow-divider"></div>

      {/* ── Remote Dosimetry Is Here To Stay ── */}
      <div className="ip-section ip-section-light py-28 relative">
        <div className="ip-ambient ip-ambient-2" style={{ bottom: '0', right: '-10%' }}></div>
        <div className="ip-edge-accent ip-edge-accent-right"></div>

        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <SectionReveal direction="left" parallax>
            <div className="sr-item ip-image-wrap">
              <img
                src="assets/img-4.png"
                alt="The future of dosimetry"
                className="w-full object-cover h-[580px]"
              />
            </div>
          </SectionReveal>

          <SectionReveal direction="right">
            <div className="sr-item flex flex-col justify-center relative">
              {/* Watermark */}
              <span className="absolute -top-4 right-0 text-[160px] font-black leading-none select-none pointer-events-none text-[#003777]/[0.03]">02</span>
              <span className="ip-label mb-5">The Future of Care</span>
              <h2 className="text-[38px] md:text-[42px] font-bold text-gray-900 mb-6 leading-[1.15] -tracking-[1px]">
                Remote dosimetry is here to stay
              </h2>
              <div className="ip-section-divider mb-10"></div>
              <div className="space-y-6 text-[#434961] text-[18px] leading-[30px]">
                <p>
                  Remote Dosimetrist has shown to be more efficient than on-site
                  dosimetry. It is structured to help our clients effectively and safely
                  handle the treatment of their cancer patients especially during these
                  critical and challenging times.
                </p>
                <p>
                  Using our services allows you to maintain high-quality treatment for
                  your patients safely and be prepared for unexpected employee absences or
                  other situations.
                </p>
              </div>
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
