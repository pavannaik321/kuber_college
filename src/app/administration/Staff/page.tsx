"use client"
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/HeroSection";
import { useState } from "react";

const teachingStaff = [
  { id: 1, name: "SMT. SAVITHA KANOJI", qualification: "BSc, BEd", designation: "Principal" },
  { id: 2, name: "HEENA KOUSER", qualification: "BSc, BEd", designation: "TGT, Mathematics" },
  { id: 3, name: "MEGHA NAYAK", qualification: "BCA", designation: "COMPUTER TEACHER" },
  { id: 4, name: "K LAVANYA", qualification: "BSc, BEd", designation: "TGT, Science" },
  { id: 6, name: "UMA NAYAK", qualification: "BA, BEd", designation: "TGT, Kannada" },
  { id: 7, name: "KRUTI UNAVANE", qualification: "MCom", designation: "TGT, Social Science" },
  { id: 8, name: "KOMAL REVANKAR", qualification: "DIPLOMA(E&C)", designation: "PRT, English" },
  { id: 9, name: "TRUPTI NAIK", qualification: "BA, BEd", designation: "TGT, Kannada" },
  { id: 10, name: "JYOTI SHET", qualification: "MA, BEd", designation: "PGT, Hindi" },
];

const nonTeachingStaff = [
  { id: 1, name: "Ganapati Prabhu", department: "Office Staff" },
  { id: 2, name: "Anjana Nayak", department: "Office Staff" },
  { id: 3, name: "Poonam Raikar", department: "Office Staff" },
];

export default function StaffPage() {
  const [activeTab, setActiveTab] = useState("teaching");

  return (
    <div>
<Header />
    <HeroSection
     backgroundImage="/aboutpage/vision_mission.jpg"
     title="Teaching & Non Teaching Staff"
     subtitle="At Himalaya, we are dedicated to nurturing young minds with knowledge, values, and leadership."
   />
 
    <div className="p-6">
      <div className="flex justify-center gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "teaching" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => setActiveTab("teaching")}
        >
          Teaching Staff
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "non-teaching" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => setActiveTab("non-teaching")}
        >
          Non-Teaching Staff
        </button>
      </div>

      {activeTab === "teaching" ? (
        <div>
          <h2 className="text-xl font-bold mb-4">Teaching Staff</h2>
          <div className="overflow-x-auto shadow-lg rounded-lg">

          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead className="bg-gray-200 text-gray-700 uppercase text-sm">
              <tr>
                <th className="px-6 py-3 text-left">Sl. No</th>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Qualification</th>
                <th className="px-6 py-3 text-left">Designation</th>
              </tr>
            </thead>
            <tbody>
              {teachingStaff.map((staff,index) => (
                <tr key={staff.id} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                  <td className="px-6 py-4 font-semibold">{staff.id}</td>
                  <td className="px-6 py-4">{staff.name}</td>
                  <td className="px-6 py-4">{staff.qualification}</td>
                  <td className="px-6 py-4">{staff.designation}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-bold mb-4">Non-Teaching Staff</h2>
          <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-200 text-gray-700 uppercase text-sm">
                <tr>
                <th className="px-6 py-3 text-left">Sl. No</th>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Department</th>
              </tr>
            </thead>
            <tbody>
              {nonTeachingStaff.map((staff,index) => (
                <tr key={staff.id} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                <td className="px-6 py-4 font-semibold">{staff.id}</td>
                <td className="px-6 py-4">{staff.name}</td>
                <td className="px-6 py-4">{staff.department}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      )}
    </div>
    <Footer />
    </div>
  );
}
