import { useState } from "react";

const EducationSection = () => {
  const [openIndex, setOpenIndex] = useState({}); // Use an object to store open index for each category

  const toggleAccordion = (category, index) => {
    setOpenIndex((prevState) => ({
      ...prevState,
      [category]: prevState[category] === index ? null : index, // Toggle based on category
    }));
  };

  const educationAndCertificatesData = [
    {
      category: "Education",
      items: [
        {
          title:
            "Technical University of Cluj Napoca - Automation and Applied Informatics",
          year: "2019 - 2023",
          description: [
            "Lorem ipsum odor amet, consectetuer adipiscing elit. Libero turpis porta aliquam dui malesuada cursus ante curabitur. Pulvinar efficitur velit venenatis turpis commodo venenatis morbi at maecenas. Ante ligula nisl rutrum donec montes venenatis. Hendrerit nec non ad dolor, rutrum libero ante.",
          ],
        },
        {
          title: "Budapest Theological Academy",
          year: "2020 - 2024",
          description: [
            "Lorem ipsum odor amet, consectetuer adipiscing elit. Iaculis elementum et arcu; a eget dui. Montes enim per primis maximus in sapien bibendum potenti. Malesuada sit placerat est nam tristique mi est aptent. Maximus ridiculus lobortis ridiculus vitae viverra blandit. Vehicula elementum aptent; eget convallis lobortis egestas. Leo hendrerit primis; nulla tempor ultrices nascetur venenatis dictumst. Ac mattis condimentum molestie sem tortor tempus dapibus praesent. Malesuada est molestie magnis potenti vehicula iaculis. Finibus nunc eget feugiat risus fusce dapibus per class.",
          ],
        },
      ],
    },
    {
      category: "Certificates",
      items: [
        {
          title: "AlgoExpert - FrontEnd Expert",
          description: ["This certification validates"],
        },
        {
          title: ".NET 8 Microservices",
          description: ["Udemy course"],
        },
        {
          title:
            "Design Microservices Architectures With Patterns & Principles",
          description: ["Udemy course"],
        },
      ],
    },
  ];

  return (
    <section id="education" className="bg-white px-8 py-16">
      <div className="text-left mb-16">
        <span className="text-sm text-gray-600">My Education</span>
        <h2 className="text-4xl font-extrabold text-gray-800 mt-4">
          Education & Certificates
        </h2>
      </div>

      <div>
        {educationAndCertificatesData.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-8">
            <div className="mb-4">
              <h3 className="text-2xl font-semibold text-gray-700">
                {category.category}
              </h3>
            </div>
            {category.items.map((item, index) => (
              <div key={index} className="mb-4">
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                  <button
                    className="w-full px-6 py-4 text-left font-semibold text-gray-800 bg-gray-200 hover:bg-gray-300 focus:outline-none"
                    onClick={() => toggleAccordion(category.category, index)} // Pass category and index
                  >
                    <div className="flex justify-between items-center">
                      <span>{item.title}</span>
                      {item.year && (
                        <span className="text-sm text-gray-600">
                          {item.year}
                        </span>
                      )}
                    </div>
                  </button>
                  <div
                    className={`${
                      openIndex[category.category] === index
                        ? "block"
                        : "hidden"
                    } px-6 py-4 text-gray-700 bg-gray-50`}
                  >
                    <p>{item.description.join(", ")}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
