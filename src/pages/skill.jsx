import React from "react";

const skills = [
  {
    name: "HTML",
    img: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
  },
  { name: "CSS", img: "https://cdn-icons-png.flaticon.com/512/732/732190.png" },
  {
    name: "JavaScript",
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
  },
  {
    name: "TypeScript",
    img: "./ts.webp",
  },

  {
    name: "Color Pallete",
    img: "./color.png",
  },
  {
    name: "Tailwind CSS",
    img: "./tailwind.webp",
  },
  {
    name: "React",
    img: "./react.webp",
  },
];

const SkillPage = () => {
  return (
    <section className="min-h-screen bg-gray-100 flex flex-col items-center py-16 px-6">
      <h2 className="text-4xl font-bold text-gray-900 mb-12  inline-block pb-2">
        My Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 max-w-4xl w-full">
        {skills.map(({ name, img }) => (
          <div
            key={name}
            className="relative group cursor-pointer rounded-lg p-6 bg-white shadow-lg flex flex-col items-center justify-center border-4 border-transparent hover:border-blue-600 transition-all hover:scale-105"
          >
            <img
              src={img}
              alt={name}
              className="w-20 h-20 object-contain rounded-md"
            />

            <div className="mt-4 opacity-0 group-hover:opacity-100 text-blue-600 font-semibold text-lg transition-opacity">
              {name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillPage;
