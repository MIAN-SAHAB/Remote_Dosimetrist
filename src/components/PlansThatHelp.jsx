export default function PlansThatHelp() {
  return (
    <section className="relative bg-[#1E3A8A] py-24 overflow-hidden">
      {/* Background network effect (optional image) */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            `url('assets/3rd-sec-video.mp4')`, // optional
        }}
      />
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="assets/3rd-sec-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Plans That Help
        </h2>

        <p className="mt-6 max-w-3xl mx-auto text-lg text-blue-100">
          The Remote Dosimetrist staff can offer the right solution for your
          cancer center radiation oncology department's needs.
        </p>

        {/* Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Card 1 */}
          <div className="relative group overflow-hidden rounded-xl">
            <img
              src="/images/3d-planning.jpg"
              alt="3D Planning"
              className="h-full w-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-blue-900/60 flex items-center justify-center">
              <h3 className="text-3xl font-bold text-white">3D Planning</h3>
            </div>
          </div>

          {/* Card 2 (Highlighted) */}
          <div className="relative group overflow-hidden rounded-xl scale-105">
            <img
              src="/images/vmat.jpg"
              alt="VMAT"
              className="h-full w-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-blue-900/75 flex flex-col items-center justify-center px-6 text-center">
              <h3 className="text-4xl font-extrabold text-white mb-4">
                VMAT
              </h3>
              <p className="text-blue-100 text-sm mb-6">
                Volumetric modulated arc therapy (VMAT) has rapidly become the
                standard of care in the radiation oncology...
              </p>
              <button className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition">
                Discover More
                <span>→</span>
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative group overflow-hidden rounded-xl">
            <img
              src="/images/imrt.jpg"
              alt="IMRT"
              className="h-full w-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-blue-900/60 flex items-center justify-center">
              <h3 className="text-3xl font-bold text-white">IMRT</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
