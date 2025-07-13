import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center px-6 gap-10 bg-white"
      id="home"
    >
      <div className="flex-1 max-w-4xl space-y-6">
        <h1 className="text-5xl md:text-6xl font-extrabold">
          Hi, I’m <br />
          <span className="text-[#2c7ce6]">Sunil Neupane</span>
        </h1>

        <h3 className="inline-block px-4 py-1 bg-[#2c7ce6] text-white text-lg  rounded-full shadow-sm">
          🚀 MERN Stack Developer
        </h3>

        <p className="text-gray-700 text-xl max-w-xl leading-relaxed">
          I am a passionate full-stack web developer specializing in JavaScript,
          React, Node.js, and MongoDB. I build modern, scalable, and efficient
          web applications with clean UI and smooth UX.
        </p>

        <p className="text-gray-700 text-lg max-w-xl">
          With <strong className="text-blue-600">3+ years</strong> of
          experience, I've built solutions for startups, agencies, and freelance
          clients worldwide.
        </p>

        <div className="flex gap-6 mt-4 text-2xl">
          <a
            href="https://github.com/sunil4472"
            target="_blank"
            className="text-black hover:text-[#333] transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/sunil-neupane"
            target="_blank"
            className="text-black hover:text-[#0A66C2] transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com/_sunil472"
            target="_blank"
            className="text-black hover:text-[#E1306C] transition-colors duration-300"
          >
            <FaInstagram />
          </a>
        </div>

        <a
          href="/contact"
          className="mt-6 inline-block bg-[#2c7ce6] hover:bg-blue-700 transition-all text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl"
        >
          Contact Me
        </a>
      </div>

      <div className="relative w-[500px] h-[500px] md:w-[380px] md:h-[380px]  z-0 overflow-visible">
        <div className="absolute inset-0 bg-[#2c7ce6] rounded-full blur-[30px] z-[-1] pointer-events-none opacity-90" />
        <img
          src="/pp.webp"
          alt="Sunil Neupane"
          className="rounded-full object-cover w-full h-full border-[4px] border-none"
        />
      </div>
    </section>
  );
};

export default Hero;
