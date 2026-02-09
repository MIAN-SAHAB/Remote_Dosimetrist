import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import PlansThatHelp from "../components/PlansThatHelp";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ReviewSlider from "../components/review-slider"; 
import GetInTouch from "../components/GetInTouch"; 


export default function Home() {
    const wrapperRef = useRef(null);
    const alreadyShown = useRef(sessionStorage.getItem("preloaderShown"));
    useEffect(() => {
        if (alreadyShown) {
            wrapperRef.current.style.opacity = 1;
        }
    }, [alreadyShown])
    return (
        <section ref={wrapperRef} style={{ opacity: 0 }}>
            <div className="bg-main-video relative">
                <div className="w-full h-full flex justify-center items-end pb-[179px]">
                    <video className="object-cover absolute top-0 left-0 w-full h-full pointer-events-none z-0"
                        autoPlay
                        muted
                        loop
                        playsInline
                        src="assets/bg-video.mp4"></video>
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
                        style={{
                            // background: `radial-gradient(rgba(255, 255, 255, 0) 25%, rgb(255, 255, 255) 67%)`,
                            backgroundImage: `url('assets/fade-overlay.png')`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        }}
                    ></div>
                    <div className="absolute top-[380px] left-[210px] flex flex-row-reverse gap-[38px]">
                        <img src="assets/line-banner-2.png" alt="" />
                        <p className="text-[18px] font-thin text-[#434961] leading-[24px] w-[280px] content-end text-end mb-[-37px]">Advanced Radiotherapy Treatment Process</p>
                    </div>
                    <div className="absolute top-[150px] right-[16.3%] flex gap-[9px]">
                        <img src="assets/line-banner-1.png" alt="" />
                        <p className="text-[20px] text-[#434961] leading-[24px] w-[200px] content-end mb-[-25px]">Remote-Only Dosimetry Company</p>
                    </div>
                    <div className="p-0  z-10 relative">
                        <h1 className="!text-[100px] !text-[#003777] !leading-[96px] !-tracking-[2.5px] font-extrabold">
                            Dosimetry Made Simple
                        </h1>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex justify-center flex-col items-center gap-[36px] py-[36px]">
                    <p className="w-[695px] text-center text-[26px] leading-[37px] tracking-[-0.65px]">
                        A group of certified medical dosimetrists that truly care. We always have the patient's best needs at heart on any treatment plan that we create for you, the client.
                    </p>
                    <button className="w-[223px] h-[54px] rounded-full">
                        Discover More
                    </button>
                </div>
            </div>
            <div className="w-full min-h-dvh relative">
                <video
                    className="absolute inset-0 h-full w-full object-cover"
                    src="assets/3rd-sec-video.mp4"
                    poster="assets/3rd-sec-video-poster.png"
                    autoPlay
                    muted
                    loop
                    playsInline
                />
                <div className="absolute inset-0 h-full w-full object-cover z-1 bg-[#0A388D] opacity-80 z-[2] mix-blend-screen"></div>
                <div className="pt-[93px]  pb-[66px] z-5 relative">
                    <div className="flex justify-center flex-col items-center relative z-10 gap-[38px]">
                        <h2 className="text-[70px] font-extrabold text-white">Plans That Help</h2>
                        <p className="w-[532px] text-center text-white">
                            The Remote Dosimetrist staff can offer the right solution for your cancer center radiation oncology department's needs.
                        </p>
                    </div>
                    <div className="pt-[61px] flex flex-row items-center gap-[23px] items-center px-[278px]">
                        <div className="relative group overflow-hidden w-[393px] h-[394px]">
                            <img
                                src="assets/3D Planning.png"
                                alt="3D Planning"
                                className="h-full w-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-blue-900/60 flex items-center justify-center">
                                <h3 className="text-3xl font-bold text-white">3D Planning</h3>
                            </div>
                        </div>
                        <div className="relative group overflow-hidden w-[532px] h-[532px]">
                            <img
                                src="assets/VMRL.png"
                                alt="VMAT"
                                className="h-full w-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-blue-900/75 flex flex-col items-center justify-center px-6 text-center gap-[36px]">
                                <h3 className="text-4xl font-extrabold text-white">
                                    VMAT
                                </h3>
                                <p className="text-blue-100 text-sm w-[432px]">
                                    Volumetric modulated arc therapy (VMAT) has rapidly become the
                                    standard of care in the radiation oncology...
                                </p>
                                <button className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition">
                                    Discover More
                                    <span>→</span>
                                </button>
                            </div>
                        </div>
                        <div className="relative group overflow-hidden w-[393px] h-[394px]">
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
            <div className="w-full min-h-dvh relative flex justify-center items-center"
                style={{
                    backgroundColor: '#003777',
                    backgroundImage: `url('assets/bg-fourth-section.png')`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}>
                <div className="w-full h-full">
                    <div className="flex flex-row justify-center">
                        <h2 className="text-[38px] w-[180px] absolute top-[44%] left-[45.3%] text-white font-extrabold text-center -tracking-[0.95px]">
                            Areas of Focus
                        </h2>
                        <img src="public/assets/slider-group.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="w-full min-h-dvh relative flex flex-col justify-between items-center gap-10">
                <img className="absolute top-0 h-full" src="assets/bg-fourth-section.png" alt="" />
                <div className="py-10 w-full" style={{
                    backgroundColor: '#003777'
                }}>
                    <h2 className="text-[38px] text-white font-extrabold text-center -tracking-[0.95px]">
                        Areas of Focus
                    </h2>
                </div>
                <div className="h-full w-full px-50 py-10 -mb-70 z-15">
                    <Swiper
                        className="modules-slider"
                        modules={[Navigation, A11y]}
                        spaceBetween={50}
                        slidesPerView={3}
                        loop={true}
                        centeredSlides
                        navigation
                        speed={1200}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            <div className="flex flex-col gap-[19px] justify-between items-center">
                                <img src="assets/img-1.png" alt=""  className="w-[250px] p-5"/>
                                <h2 className="text-[#003777] text-[38px] -tracking-[0.95px] leading-[38px] font-extrabold text-center">Head & Neck</h2>
                                <p className="text-[#003777] text-[26px] -tracking-[0.65px] leading-[37px] text-center w-[376px]">Our team focuses on every region of the body, ranging from the pelvis, head, breast, chest, and many more!</p>
                                <button className="inline-flex w-[35%] !text-[13px] font-thin items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition">
                                    Discover More
                                    <span>→</span>
                                </button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-col gap-[19px] justify-between items-center">
                                <img src="assets/img-2.png" alt=""  className="w-[250px] p-5"/>
                                <h2 className="text-[#003777] text-[38px] -tracking-[0.95px] leading-[38px] font-extrabold text-center">Head & Neck</h2>
                                <p className="text-[#003777] text-[26px] -tracking-[0.65px] leading-[37px] text-center w-[376px]">Our team focuses on every region of the body, ranging from the pelvis, head, breast, chest, and many more!</p>
                                <button className="inline-flex w-[35%] !text-[13px] font-thin items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition">
                                    Discover More
                                    <span>→</span>
                                </button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-col gap-[19px] justify-between items-center">
                                <img src="assets/img-3.png" alt=""  className="w-[250px] p-5"/>
                                <h2 className="text-[#003777] text-[38px] -tracking-[0.95px] leading-[38px] font-extrabold text-center">Head & Neck</h2>
                                <p className="text-[#003777] text-[26px] -tracking-[0.65px] leading-[37px] text-center w-[376px]">Our team focuses on every region of the body, ranging from the pelvis, head, breast, chest, and many more!</p>
                                <button className="inline-flex w-[35%] !text-[13px] font-thin items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition">
                                    Discover More
                                    <span>→</span>
                                </button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-col gap-[19px] justify-between items-center">
                                <img src="assets/img-4.png" alt="" className="w-[250px] p-5"/>
                                <h2 className="text-[#003777] text-[38px] -tracking-[0.95px] leading-[38px] font-extrabold text-center">Head & Neck</h2>
                                <p className="text-[#003777] text-[26px] -tracking-[0.65px] leading-[37px] text-center w-[376px]">Our team focuses on every region of the body, ranging from the pelvis, head, breast, chest, and many more!</p>
                                <button className="inline-flex w-[35%] !text-[13px] font-thin items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition">
                                    Discover More
                                    <span>→</span>
                                </button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-col gap-[19px] justify-between items-center">
                                <img src="assets/img-5.png" alt="" className="w-[250px] p-5"/>
                                <h2 className="text-[#003777] text-[38px] -tracking-[0.95px] leading-[38px] font-extrabold text-center">Head & Neck</h2>
                                <p className="text-[#003777] text-[26px] -tracking-[0.65px] leading-[37px] text-center w-[376px]">Our team focuses on every region of the body, ranging from the pelvis, head, breast, chest, and many more!</p>
                                <button className="inline-flex w-[35%] !text-[13px] font-thin items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition">
                                    Discover More
                                    <span>→</span>
                                </button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-col gap-[19px] justify-between items-center">
                                <img src="assets/img-1.png" alt="" className="w-[250px] p-5"/>
                                <h2 className="text-[#003777] text-[38px] -tracking-[0.95px] leading-[38px] font-extrabold text-center">Head & Neck</h2>
                                <p className="text-[#003777] text-[26px] -tracking-[0.65px] leading-[37px] text-center w-[376px]">Our team focuses on every region of the body, ranging from the pelvis, head, breast, chest, and many more!</p>
                                <button className="inline-flex w-[35%] !text-[13px] font-thin items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition">
                                    Discover More
                                    <span>→</span>
                                </button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-col gap-[19px] justify-between items-center">
                                <img src="assets/img-2.png" alt="" className="w-[250px] p-5"/>
                                <h2 className="text-[#003777] text-[38px] -tracking-[0.95px] leading-[38px] font-extrabold text-center">Head & Neck</h2>
                                <p className="text-[#003777] text-[26px] -tracking-[0.65px] leading-[37px] text-center w-[376px]">Our team focuses on every region of the body, ranging from the pelvis, head, breast, chest, and many more!</p>
                                <button className="inline-flex w-[35%] !text-[13px] font-thin items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition">
                                    Discover More
                                    <span>→</span>
                                </button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-col gap-[19px] justify-between items-center">
                                <img src="assets/img-3.png" alt="" className="w-[250px] p-5"/>
                                <h2 className="text-[#003777] text-[38px] -tracking-[0.95px] leading-[38px] font-extrabold text-center">Head & Neck</h2>
                                <p className="text-[#003777] text-[26px] -tracking-[0.65px] leading-[37px] text-center w-[376px]">Our team focuses on every region of the body, ranging from the pelvis, head, breast, chest, and many more!</p>
                                <button className="inline-flex w-[35%] !text-[13px] font-thin items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition">
                                    Discover More
                                    <span>→</span>
                                </button>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="py-20 bg-white w-full z-10">
                    <h2 className="text-[38px] text-white font-extrabold text-center -tracking-[0.95px] opacity-0">
                        Areas of Focus
                    </h2>                    
                </div>
            </div>
            <div className="w-full min-h-dvh relative flex flex-row justify-between items-stretch gap-[38px] px-[140px]">
                <div className="flex flex-col justify-center gap-[55px]">
                    <div className="flex flex-col justify-between gap-[32px] p-10 stay-col" 
                    style={{
                        background: `linear-gradient(45deg, #003777, #0E3CF6)`,
                        borderRadius: '32px'
                    }}>
                        <h2 className="text-[#003777] text-[48px] text-white -tracking-[1.2px] leading-[52px] font-bold  w-[500px]">Remote Dosimetry Is Here To Stay</h2>
                        <p className="text-[#003777] text-[26px] text-white -tracking-[0.65px] leading-[37px] w-[694px]">Remote Dosimetrist has shown to be more efficient than on-site dosimetry. It is structured to help our clients effectively and safely handle the treatment of their cancer patients especially during these critical and challenging times of mandated or self-quarantine.</p>
                        <button className="border-[1px] inline-flex w-[35%] !text-[13px] font-thin items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition">
                            Discover More
                            <span>→</span>
                        </button>
                    </div>
                    <div>
                        <img src="assets/5th-sec-img-1.png" alt="" />
                    </div>
                </div>
                <div className="flex flex-col justify-start p-10 gap-[32px] rounded-[32px] bg-no-repeat bg-cover bg-bottom" style={{ backgroundImage: 'url(assets/5th-sec-img-2.png)'}}>
                    {/* <img src="assets/5th-sec-img-2.png" alt="" /> */}
                    <h2 className="text-[#003777] text-[48px] text-white -tracking-[1.2px] leading-[52px] font-bold  w-[500px]">Why Hire A Remote Dosimetrist?</h2>
                        <p className="text-[#003777] text-[26px] text-white -tracking-[0.65px] leading-[37px] w-[694px]">While the number of cancer patients increases and the demand for professional dosimetrists remains high, it’s not always feasible for smaller, rural centers to have full-time dosimetrists on the staff. If the patient demand isn’t enough for a small town, hiring a remote worker makes more sense.</p>
                        <button className="border-[1px] inline-flex w-[35%] !text-[13px] font-thin items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition">
                            Discover More
                            <span>→</span>
                        </button>
                </div>
            </div>
            <div className="review-section w-full"
            style={{
                backgroundImage:`url("assets/18773521_6022556_Artboard 1.png")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
            }}>
                <ReviewSlider />
                <GetInTouch />
                
            </div>
        </section>
    );
}