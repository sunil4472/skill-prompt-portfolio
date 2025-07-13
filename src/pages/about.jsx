import React from "react";

const AboutPage = () => {
  return (
    <section id="about" className="bg-gray-100 min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-gray-900 relative inline-block pb-2">
            About Me
            {/* <span className="absolute left-0 bottom-0 h-1.5 w-12 bg-[#2c7ce6] rounded"></span>
            <span className="absolute left-0 bottom-[-8px] h-1.5 w-6 bg-[#2c7ce6] rounded"></span> */}
          </h2>
        </div>

        <div className="flex flex-wrap gap-10">
          <div className="flex-1 min-w-[280px] max-w-3xl">
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                I'm Sunil Neupane and{" "}
                <span className="text-[#2c7ce6]">MERN Stack Developer</span>
              </h3>
              <p className="text-gray-700 text-xl ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consequatur Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Nesciunt, cupiditate! Repellat eveniet natus eos nam harum
                adipisci magnam doloribus dolores. architecto optio dolorem
                corporis repellendus natus id modi at autem doloribus!
              </p>
            </div>

            <div className=" mx-auto mt-6 text-gray-900 font-semibold border-t border-gray-300 pt-6">
              <div className="flex flex-wrap">
                {[
                  ["Age", "22"],
                  ["Dob", "2003-10-03"],
                  ["Email", "neupanesunil472@gmail.com"],
                  ["Address", "Palpa Nepal"],
                  ["Degree", "Bsc CSIT"],
                  // ["Freelancing", "Available"],
                ].map(([label, value], i) => (
                  <div key={i} className="w-full mb-4 flex justify-between">
                    <span>{label}</span>
                    <span className="font-normal text-gray-600">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 space-x-4">
              <a
                href="./Sunil Neupane - Frontend Developer.pdf"
                download={true}
                className="inline-block bg-[#2c7ce6] text-white py-3 px-8 rounded-full text-sm font-medium transition-transform hover:scale-105"
              >
                Download CV
              </a>
              <a
                href="/contact"
                className="inline-block bg-gray-800 text-white py-3 px-8 rounded-full text-sm font-medium hover:bg-[#2c7ce6] transition-colors"
              >
                Hire Me
              </a>
            </div>
          </div>

          <div className="flex-1 min-w-[280px] max-w-md flex justify-center items-center mt-10 md:mt-0">
            <img
              src="/sunil.jpg"
              alt="About Me"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>

        <div className="mt-16 mx-auto mb-10 max-w-7xl">
          <h2 className="text-4xl font-bold mb-10 text-gray-900 relative inline-block pb-2">
            My Education
          </h2>

          <div className="space-y-8">
            <div className="flex justify-between items-start">
              <div className="min-w-[220px]">
                <div className="flex items-center space-x-2 text-[#2c7ce6] font-semibold mb-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Apr, 2022 - Present</span>
                </div>
                <div className="text-gray-900 font-semibold text-lg">
                  Bachelor of Science in Computer Science and Information
                  Technology (BSc. CSIT)
                </div>
              </div>

              <div className="text-right min-w-[300px]">
                <div className="text-gray-900 font-semibold text-lg">
                  Bhairahawa Multiple Campus (BMC)
                </div>
                <div className="text-gray-600 text-sm">Bhairahawa, Nepal</div>
              </div>
            </div>

            <hr className="border-gray-300" />

            <div className="flex justify-between items-start">
              <div className="min-w-[220px]">
                <div className="flex items-center space-x-2 text-[#2c7ce6] font-semibold mb-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Jun, 2019 - Dec, 2021</span>
                </div>
                <div className="text-gray-900 font-semibold text-lg">
                  Higher Secondary Education
                </div>
              </div>

              <div className="text-right min-w-[300px]">
                <div className="text-gray-900 font-semibold text-lg">
                  Kanti Higher Secondary School
                </div>
                <div className="text-gray-600 text-sm">Butwal, Nepal</div>
              </div>
            </div>

            <hr className="border-gray-300" />

            <div className="flex justify-between items-start">
              <div className="min-w-[220px]">
                <div className="flex items-center space-x-2 text-[#2c7ce6] font-semibold mb-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Apr, 2008 - Mar, 2019</span>
                </div>
                <div className="text-gray-900 font-semibold text-lg">
                  Secondary Education
                </div>
              </div>

              <div className="text-right min-w-[300px]">
                <div className="text-gray-900 font-semibold text-lg">
                  Shree Prabhat Secondary School
                </div>
                <div className="text-gray-600 text-sm">Palpa, Nepal</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
