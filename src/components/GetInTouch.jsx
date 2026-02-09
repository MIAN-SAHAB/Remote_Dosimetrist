export default function GetInTouch() {
    return (
        <div className="bg-[#003777]/9 px-70.75 py-23.5 w-full home-form">
            <div className="flex flex-row justify-between gap-38">
                <div className="w-full flex flex-col gap-13.5 items-start">
                    <div className="flex flex-col gap-7.25">
                        <p className="text-[22px] text-white px-6.75 py-0.75 bg-[#003777] w-50.25">Get in Touch!</p>
                        <div>
                            <h2 className="text-[48px] text-black font-medium leading-14.5 tracking-0">Get Started, No Waiting</h2>
                            <h2 className="text-[58px] text-black font-medium leading-14.5 tracking-0">JUST RESULTS</h2>
                        </div>
                    </div>
                    <div className="flex flex-col w-full gap-5">
                        <input type="text" name="name" id="name" placeholder="Name" autoComplete="off" className="bg-transparent border-[#8EA7C4] px-8.25 py-7.5 text-[16px] text-[#5C296C] font-semibold border border-solid" />
                        <input type="email" name="email" id="email" placeholder="Email" autoComplete="off" className="bg-transparent border-[#8EA7C4] px-8.25 py-7.5 text-[16px] text-[#5C296C] font-semibold border border-solid" />
                        <textarea name="message" id="message" cols="1" rows="2" placeholder="Message" autoComplete="off" className="bg-transparent min-h-[188px] border-[#8EA7C4] text-[#5C296C] px-8.25 py-7.5 text-[16px] font-semibold border border-solid"></textarea>
                    </div>
                    <div>
                        <button className="rounded-full bg-[#003777] text-[13px]! uppercase tracking-0 leading-4 text-white! px-7.75 py-4.75 flex flex-row gap-15.75">
                            Book Now
                            <span>→</span>
                        </button>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-9.75">
                    <div>
                        <img src="assets/CAR-dosometrist-.png" alt="" />
                    </div>
                    <div>
                        <div className="flex flex-col gap-4.25">
                            <div className="border border-gray-500 px-14 py-4.25 flex flex-col">
  <button onClick={() => toggleAccordion(1)} className="w-full flex justify-between items-center bg-transparent!">
    <span className="text-[#003777]">What is Material Tailwind?</span>
    <span id="icon-1" className="text-slate-800 transition-transform duration-300">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
        <path fill-rule="evenodd" d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" />
      </svg>
    </span>
  </button>
  <div id="content-1" className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
    <div className="text-sm text-black">
      Material Tailwind is a framework that enhances Tailwind CSS with additional styles and components.
    </div>
  </div>
</div>
 

<div className="border border-gray-500 px-14 py-4.25 flex flex-col">
  <button onClick={() => toggleAccordion(2)} className="w-full flex justify-between items-center bg-transparent!">
    <span className="text-[#003777]">How to use Material Tailwind?</span>
    <span id="icon-2" className="text-slate-800 transition-transform duration-300">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
        <path fill-rule="evenodd" d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" />
      </svg>
    </span>
  </button>
  <div id="content-2" className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
    <div className="text-sm text-black">
      You can use Material Tailwind by importing its components into your Tailwind CSS project.
    </div>
  </div>
</div>
 

<div className="border border-gray-500 px-14 py-4.25 flex flex-col">
  <button onClick={() => toggleAccordion(3)} className="w-full flex justify-between items-center bg-transparent!">
    <span className="text-[#003777]">What can I do with Material Tailwind?</span>
    <span id="icon-3" className="text-slate-800 transition-transform duration-300">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
        <path fill-rule="evenodd" d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" />
      </svg>
    </span>
  </button>
  <div id="content-3" className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
    <div className="text-sm text-black">
      Material Tailwind allows you to quickly build modern, responsive websites with a focus on design.
    </div>
  </div>
</div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}