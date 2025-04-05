import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/HeroSection";
import React from "react";

const syllabusData = [
  { className: "Class I", pdfLink: "/syllabus/class1.pdf" },
  { className: "Class II", pdfLink: "/syllabus/class2.pdf" },
  { className: "Class III", pdfLink: "/syllabus/class3.pdf" },
  { className: "Class IV", pdfLink: "/syllabus/class4.pdf" },
  { className: "Class V", pdfLink: "/syllabus/class5.pdf" },
  { className: "Class VI", pdfLink: "/syllabus/class6.pdf" },
  { className: "Class VII", pdfLink: "/syllabus/class7.pdf" },
  { className: "Class VIII", pdfLink: "/syllabus/class8.pdf" },
  { className: "Class IX", pdfLink: "/syllabus/class9.pdf" },
  { className: "Class X", pdfLink: "/syllabus/class10.pdf" },
];

const SyllabusDownload = () => {
  return (
    <div>
        <Header />
            <HeroSection
             backgroundImage="/aboutpage/vision_mission.jpg"
             title="Class Wise Syllabus"
             subtitle="At Himalaya, we are dedicated to nurturing young minds with knowledge, values, and leadership."
           />
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Class wise Syllabus</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-gray-200 p-4 rounded-lg">
        {syllabusData.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
            <p className="text-lg font-semibold mb-2">{item.className}</p>
            <a
              href={item.pdfLink}
              download
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Download PDF File
            </a>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default SyllabusDownload;
