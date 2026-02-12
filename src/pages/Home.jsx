import React, { useEffect, useRef, useState } from "react";
import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ReviewSlider from "../components/review-slider";
import GetInTouch from "../components/GetInTouch";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home({ alreadyShown }) {
  const wrapperRef = useRef(null);
  const videoRef = useRef(null);
  const [hoverData, setHoverData] = useState({
    heading: "Head & Neck", // Default heading
    para: "Lorem Ipsum Lorem set dummy buy to lorem" // Default para
  });

  const handleHover = (e) => {
    const { heading, para } = e.target.dataset;
    setHoverData({ heading, para });
  };
  useEffect(() => {
    if (alreadyShown) {
      wrapperRef.current.style.opacity = 1;
      videoRef.current.style.opacity = 1;
    }
  }, [alreadyShown]);

  useGSAP(() => {

    gsap.set(".s-3-div-1, .s-3-div-3", { width: 620, height: 566 });
    gsap.set(".s-3-div-2", { width: 620 });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".first-container",
        start: "bottom 70%",
        end: "+=300",
        scrub: 1,
        // toggleActions: "play none none reverse"
      },
      delay: 0,
      onComplete: () => { },
    });
    tl.to(videoRef.current, {
      opacity: 0.5,
      duration: 1,
      ease: "power4.inOut",
    });
    tl.to(
      ".fCH1",
      {
        y: 200,
        duration: 2,
        ease: "power4.inOut",
      },
      "<",
    );
    tl.to(
      ".second-c-div",
      {
        y: 0,
        duration: 2,
        ease: "power4.inOut",
      },
      "<",
    );
    tl.to(
      ".s-3-video",
      {
        y: -200,
        duration: 2,
        ease: "power1.inOut",
      },
      ">",
    );

    const tls3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-3",
        start: "top 70%",
        end: "top 10%",
        scrub: 1,
        // toggleActions: "play none none reverse",
      },
      delay: 0,
      onComplete: () => { },
    });
    tls3.to(".s-3-video", {
      width: "100%",
      left: "0%",
      height: "100%",
      top: "0%",
      y: 0,
      duration: 1,
      ease: "power4.inOut",
    });
    tls3.to(
      ".s-3-video-overlay",
      {
        opacity: 0.8,
        duration: 1,
      },
      "<",
    );
    tls3.to(
      ".s-3-divs",
      {
        paddingBottom: "66px",
        paddingLeft: "278px",
        paddingRight: "278px",
      },
      "<",
    );
    tls3.to(
      ".s-3-div-1, .s-3-div-3",
      {
        width: "393px",
        height: "394px",
      },
      ">",
    );
    tls3.to(
      ".s-3-content",
      {
        y: 0,
        duration: 1,
      },
      "<",
    );
    tls3.to(
      ".s-3-div-2",
      {
        y: 0,
        width: "532px",
        height: "532px",
        duration: 1,
      },
      "<",
    );

    const tls5 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-5",
        start: "top 80%",
        end: "+=500",
        scrub: 1,
        // toggleActions: "play none none reverse",
        // scrub: true,
        // markers: true
      },
      delay: 0,
      onComplete: () => { },
    });
    tls5.to(".s-5-c-1", {
      y: 0,
      opacity: 1,
      duration: 1,
    });
    tls5.to(
      ".s-5-h2, .s-5-p, .s-5-button",
      {
        y: 0,
        opacity: 1,
        duration: 1,
      },
      "<",
    );

    const tls4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-4",
        start: "top top",
        end: "+=500",
        scrub: 1,
        // pin: '.s-4-bg-image-c'
        // toggleActions: "play none none reverse",
        // scrub: true,
        // markers: true
      },
      delay: 0,
      onComplete: () => { },
    });
    tls4.to(".area-main", {
      scale: 1.8,
      rotate: 180,
      duration: 1
    })
      .to(".s-4-heading-2", {
        opacity: 0,
        duration: 2
      }, "<")
      .to(".s-4-heading-1", {
        opacity: 1,
        duration: 2
      }, "<")
      .to(".area-main", {
        y: 300,
        duration: 2
      }, "<")
      .to(".s-4-bg-color", {
        height: "20%",
        duration: 2
      }, "<")
      .to(".s-4-bg-image", {
        scale: 1,
        rotate: -180,
        duration: 2
      }, "<")
      .to(".content-main", {
        scale: 1,
        rotate: 180,
        duration: 2
      }, "<")
      .to(".content-main", {
        opacity: 1,
        duration: 2
      }, ">");
  });
  return (
    <section
      ref={wrapperRef}
      style={{
        opacity: 0,
        transition: "opacity 1s ease-in",
      }}
    >
      <div className="first-container bg-main-video relative">
        <div className="w-full h-full flex justify-center items-end pb-[179px]">
          <video
            className="object-cover absolute top-0 left-0 w-full h-full pointer-events-none z-0"
            ref={videoRef}
            style={{
              opacity: 0,
              transition: "opacity 1s ease-in",
            }}
            autoPlay
            muted
            loop
            playsInline
            src="assets/bg-video.mp4"
          ></video>
          <div
            className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
            style={{
              // background: `radial-gradient(rgba(255, 255, 255, 0) 25%, rgb(255, 255, 255) 67%)`,
              backgroundImage: `url('assets/fade-overlay.png')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="absolute top-[380px] left-[210px] flex flex-row-reverse gap-[38px]">
            <img src="assets/line-banner-2.png" alt="" />
            <p className="text-[20px] text-[#434961] leading-[24px] w-[280px] content-end text-end mb-[-37px]">
              Advanced Radiotherapy Treatment Process
            </p>
          </div>
          <div className="absolute top-[150px] right-[16.3%] flex gap-[9px]">
            <img src="assets/line-banner-1.png" alt="" />
            <p className="text-[20px] text-[#434961] leading-[24px] w-[200px] content-end mb-[-25px]">
              Remote-Only Dosimetry Company
            </p>
          </div>
          <div className="p-0  z-10 relative">
            <h1 className="fCH1 !text-[100px] !text-[#003777] !leading-[96px] !-tracking-[2.5px] font-extrabold">
              Dosimetry Made Simple
            </h1>
          </div>
        </div>
      </div>
      <div>
        <div className="second-c-div flex justify-center flex-col items-center gap-[36px] py-[36px] top-25">
          <p className="w-[695px] text-center text-[26px] leading-[37px] tracking-[-0.65px]">
            A group of certified medical dosimetrists that truly care. We always
            have the patient's best needs at heart on any treatment plan that we
            create for you, the client.
          </p>
          <button className="ip-btn ip-btn-primary w-fit mt-3">
            Discover More <span>→</span>
          </button>
        </div>
      </div>
      <div className="min-h-[150dvh]">
        <div className="section-3 w-full min-h-dvh relative overflow-hidden sticky top-0">
          <video
            className="s-3-video absolute inset-0 h-full w-full object-cover origin-center"
            src="assets/3rd-sec-video.mp4"
            poster="assets/3rd-sec-video-poster.png"
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: "35%",
              left: "32.5%",
              height: "65%",
              top: "37%",
              duration: 0.5,
            }}
          />
          <div className="s-3-video-overlay absolute inset-0 h-full w-full object-cover bg-[#0A388D] opacity-0 z-2 mix-blend-screen"></div>
          <div className="pt-[93px] z-5 relative">
            <div className="s-3-content flex justify-center flex-col items-center relative z-10 gap-[38px] translate-y-[400px]">
              <h2 className="text-[70px] font-extrabold text-white">
                Plans That Help
              </h2>
              <p className="w-[532px] text-center text-white">
                The Remote Dosimetrist staff can offer the right solution for
                your cancer center radiation oncology department's needs.
              </p>
            </div>
            <div className="pt-[61px] flex flex-row items-center gap-[23px] items-center s-3-divs">
              <div className="s-3-div-1 relative group overflow-hidden w-[620px] h-[566px]">
                <img
                  src="assets/3D Planning.png"
                  alt="3D Planning"
                  className="h-full w-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-900/60 flex items-center justify-center">
                  <h3 className="text-3xl font-bold text-white">3D Planning</h3>
                </div>
              </div>
              <div className="s-3-div-2 relative group overflow-hidden translate-y-[800px] w-[620px]">
                <img
                  src="assets/VMRL.png"
                  alt="VMAT"
                  className="h-full w-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-900/75 flex flex-col items-center justify-center px-6 text-center gap-[36px]">
                  <h3 className="text-4xl font-extrabold text-white">VMAT</h3>
                  <p className="text-blue-100 text-sm w-[432px]">
                    Volumetric modulated arc therapy (VMAT) has rapidly become
                    the standard of care in the radiation oncology...
                  </p>
                  <button className="ip-btn ip-btn-primary w-fit mt-3">
                    Discover More <span>→</span>
                  </button>
                </div>
              </div>
              <div className="s-3-div-3 relative group overflow-hidden  w-[620px] h-[566px]">
                <img
                  src="assets/IMRT.png"
                  alt="IMRT"
                  className="h-full w-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-900/60 flex items-center justify-center">
                  <h3 className="text-3xl font-bold text-white">IMRT</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[200dvh]">
        <div className="section-4 w-full min-h-dvh relative flex justify-center items-center sticky top-0">
          <div className="w-full h-full">

            <div className="s-4-bg-color w-full h-full flex justify-center absolute left-0 top-0 items-center"
              style={{
                backgroundColor: "#003777",
              }}
            >
              <h2 className="s-4-heading-1 text-[38px] w-[500px] top-[44%] left-[45.3%] text-white font-extrabold text-center -tracking-[0.95px] opacity-0">
                Areas of Focus
              </h2>
            </div>
            <div className="s-4-bg-image-c w-full h-full flex justify-center absolute left-0 top-0">
              <img src="assets/bg-fourth-section.png" alt="" className="s-4-bg-image  scale-105" />
            </div>
            <div className="flex flex-row justify-center">
              <h2 className="s-4-heading-2 text-[38px] w-[180px] absolute top-[44%] left-[45.3%] text-white font-extrabold text-center -tracking-[0.95px]">
                Areas of Focus
              </h2>
              <div className="area-main">
                <div className="content-main opacity-0">
                  <div className="innter-content">
                    <h2 className="text-[#003777] s-4-heading-change text-[24px] text-center font-extrabold">
                      {hoverData.heading}
                    </h2>
                    <p className="text-[#003777] s-4-para-change text-center !text-[18px]">
                      {hoverData.para}
                    </p>
                    <div className="m-auto flex justify-center btn-circle">
                      <button className="w-[223px] h-[54px] rounded-full">
                        Discover More
                      </button>
                    </div>
                  </div>
                </div>
                <div className="image-01">
                  <img src="assets/img-1.png" alt="Area 01" onMouseEnter={handleHover} data-heading="Head & Neck" data-para="Lorem Ipsum Lorem set dummy buy to lorem" />
                </div>
                <div className="image-02">
                  <img src="assets/img-2.png" alt="Area 01" onMouseEnter={handleHover} data-heading="Thoracic" data-para="Lorem Ipsum Lorem set dummy buy to lorem" />
                </div>
                <div className="image-03">
                  <img src="assets/img-3.png" alt="Area 01" onMouseEnter={handleHover} data-heading="Abdominal" data-para="Lorem Ipsum Lorem set dummy buy to lorem" />
                </div>
                <div className="image-04">
                  <img src="assets/img-4.png" alt="Area 01" onMouseEnter={handleHover} data-heading="Pelvic" data-para="Lorem Ipsum Lorem set dummy buy to lorem" />
                </div>
                <div className="image-05">
                  <img src="assets/img-5.png" alt="Area 01" onMouseEnter={handleHover} data-heading="Other" data-para="Lorem Ipsum Lorem set dummy buy to lorem" />
                </div>
                <div className="image-06">
                  <img src="assets/img-1.png" alt="Area 01" onMouseEnter={handleHover} data-heading="Head & Neck" data-para="Lorem Ipsum Lorem set dummy buy to lorem" />
                </div>
                <div className="image-07">
                  <img src="assets/img-2.png" alt="Area 01" onMouseEnter={handleHover} data-heading="Thoracic" data-para="Lorem Ipsum Lorem set dummy buy to lorem" />
                </div>
                <div className="image-08">
                  <img src="assets/img-3.png" alt="Area 01" onMouseEnter={handleHover} data-heading="Abdominal" data-para="Lorem Ipsum Lorem set dummy buy to lorem" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-5 w-full min-h-dvh mt-[400px] relative flex flex-row justify-between items-stretch gap-[38px] px-[140px]">
        <div className="flex flex-col justify-center gap-[55px]">
          <div
            className="s-5-c-1 flex flex-col justify-between gap-[32px] p-10 stay-col opacity-0 translate-y-[500px]"
            style={{
              background: `linear-gradient(45deg, #003777, #0E3CF6)`,
              borderRadius: "32px",
            }}
          >
            <h2 className="text-[#003777] text-[48px] text-white -tracking-[1.2px] leading-[52px] font-bold  w-[500px]">
              Remote Dosimetry Is Here To Stay
            </h2>
            <p className="text-[#003777] text-[26px] text-white -tracking-[0.65px] leading-[37px] w-[694px]">
              Remote Dosimetrist has shown to be more efficient than on-site
              dosimetry. It is structured to help our clients effectively and
              safely handle the treatment of their cancer patients especially
              during these critical and challenging times of mandated or
              self-quarantine.
            </p>
            <a href="/about" className="ip-btn ip-btn-outline w-fit">
              Discover More <span>→</span>
            </a>
          </div>
          <div>
            <img src="assets/5th-sec-img-1.png" alt="" />
          </div>
        </div>
        <div
          className="flex flex-col justify-start p-10 gap-[32px] rounded-[32px] bg-no-repeat bg-cover bg-bottom"
          style={{ backgroundImage: "url(assets/5th-sec-img-2.png)" }}
        >
          {/* <img src="assets/5th-sec-img-2.png" alt="" /> */}
          <h2 className="s-5-h2 text-[#003777] text-[48px] text-white -tracking-[1.2px] leading-[52px] font-bold  w-[500px] opacity-0 translate-y-[500px]">
            Why Hire A Remote Dosimetrist?
          </h2>
          <p className="s-5-p text-[#003777] text-[26px] text-white -tracking-[0.65px] leading-[37px] w-[694px] opacity-0  translate-y-[500px]">
            While the number of cancer patients increases and the demand for
            professional dosimetrists remains high, it’s not always feasible for
            smaller, rural centers to have full-time dosimetrists on the staff.
            If the patient demand isn’t enough for a small town, hiring a remote
            worker makes more sense.
          </p>
          <a href="/about" className="ip-btn ip-btn-outline w-fit">
            Discover More <span>→</span>
          </a>
        </div>
      </div>
      <div
        className="review-section w-full"
        style={{
          backgroundImage: `url("assets/18773521_6022556_Artboard 1.png")`,
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
