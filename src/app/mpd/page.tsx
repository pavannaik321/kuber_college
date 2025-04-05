import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/HeroSection";
import React from "react";
const school_info = [
    { sl_no: 1, INFORMATION: "NAME OF THE SCHOOL", DETAILS: "HIMALAYA LOWER PRIMARY SCHOOL" },
    { sl_no: 2, INFORMATION: "AFFILIATION NUMBER", DETAILS: 830811 },
    { sl_no: 3, INFORMATION: "SCHOOL CODE", DETAILS: 45829 },
    { sl_no: 4, INFORMATION: "SCHOOL ADDRESS WITH PIN CODE", DETAILS: "POOJAGERI,ANKOLA 581-353" },
    { sl_no: 5, INFORMATION: "PRINCIPAL NAME", DETAILS: "Mrs. SAVITA KANOJI (Principal)" },
    { sl_no: 6, INFORMATION: "CONTACT DETAILS (LANDLINE/MOBILE)", DETAILS: "Phone : 08388-295622" },
  ];

  const additional_info = [
    { sl_no: 1, INFORMATION: "FEE STRUCTURE OF THE SCHOOL", DOCUMENTS: "Click here" },
    { sl_no: 2, INFORMATION: "ANNUAL ACADEMIC CALENDAR", DOCUMENTS: "Click here" },
    { sl_no: 3, INFORMATION: "LIST OF SCHOOL MANAGEMENT COMMITTEE (SMC)", DOCUMENTS: "Click here" },
    { sl_no: 4, INFORMATION: "LIST OF PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS", DOCUMENTS: "Click here" },
    { sl_no: 5, INFORMATION: "LAST TWO-YEAR RESULT OF THE BOARD EXAMINATION AS PER APPLICABLILITY", DOCUMENTS: "Click here" },
  ];

  const staff_details = [
    { sl_no: 1, INFORMATION: "PRINCIPAL", DETAILS: "Mrs. Savita Kanoji (Principal)" },
    { sl_no: 2, INFORMATION: "TOTAL NO. OF TEACHERS", DETAILS: 49 },
    { sl_no: 2.1, INFORMATION: "NTT", DETAILS: 5 },
    { sl_no: 2.2, INFORMATION: "TGT", DETAILS: 23 },
    { sl_no: 2.3, INFORMATION: "PRT", DETAILS: 19 },
    { sl_no: 2.4, INFORMATION: "PET", DETAILS: 2 },
    { sl_no: 3, INFORMATION: "TEACHERS SECTION RATIO", DETAILS: "1:1.54" },
    { sl_no: 4, INFORMATION: "DETAILS OF SPECIAL EDUCATOR", DETAILS: "Ms.Komal Revankar" },
    { sl_no: 5, INFORMATION: "DETAILS OF COUNSELLOR AND WELNESS TEACHER", DETAILS: "Dr.Jayashree Nayak" },
    { sl_no: 6, INFORMATION: "Staff (Teaching)", DETAILS: "Click here" },
  ];
  
  

  const document_info = [
    { sl_no: 1, INFORMATION: "EXTENSION OF AFFILIATION", DOCUMENTS: "/syllabus/class1.pdf" },
    { sl_no: 2, INFORMATION: "COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE", DOCUMENTS: "Click here" },
    { sl_no: 3, INFORMATION: "COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED, IF APPLICABLE, BY THE STATE GOVT./UT", DOCUMENTS: "Click here" },
    { sl_no: 4, INFORMATION: "COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT, 2009, AND IT'S RENEWAL IF APPLICABLE", DOCUMENTS: "Click here" },
    { sl_no: 5, INFORMATION: "COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL BUILDING CODE", DOCUMENTS: "Click here" },
    { sl_no: 6, INFORMATION: "COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY", DOCUMENTS: "Click here" },
    { sl_no: 7, INFORMATION: "COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATES", DOCUMENTS: "Click here" },
    { sl_no: 8, INFORMATION: "DECLARATION OF BOOK", DOCUMENTS: "Click here" },
    { sl_no: 9, INFORMATION: "CERTIFICATE OF LAND", DOCUMENTS: "Click here" },
    { sl_no: 10, INFORMATION: "SARAS Documents", DOCUMENTS: "Click here" },
  ];

  const exam_results = [
    {
      sl_no: 1,
      Course_Class: "AISSE MARCH 2022",
      No_of_Students_appeared: 22,
      No_of_Students_passed: 22,
      Percent_of_Passing: "100%",
    },
    {
      sl_no: 2,
      Course_Class: "AISSE May 2023",
      No_of_Students_appeared: 24,
      No_of_Students_passed: 24,
      Percent_of_Passing: "100%",
    },
  ];

  const infrastructure_details = [
    { sl_no: 1, INFORMATION: "TOTAL CAMPUS AREA OF THE SCHOOL (IN SQUARE MTR)", DETAILS: "17118 Sq.ft" },
    { sl_no: 2, INFORMATION: "NO. AND SIZE OF THE CLASS ROOMS (IN SQ MTR)", DETAILS: "30 class rooms / 600 Sq.Mtrs" },
    { sl_no: 3, INFORMATION: "NO. AND SIZE OF LABORATORIES INCLUDING COMPUTER", DETAILS: "02 Laboratories / 600 Sq.Mtrs" },
    { sl_no: 4, INFORMATION: "COMPUTER LAB", DETAILS: "01 Computer Labs / 600 Sq. Mtrs" },
    { sl_no: 5, INFORMATION: "INTERNET FACILITY (Y/N)", DETAILS: "YES" },
    { sl_no: 6, INFORMATION: "NO. OF GIRLS TOILETS", DETAILS: "04" },
    { sl_no: 7, INFORMATION: "NO. OF BOYS TOILETS", DETAILS: "03" },
    { sl_no: 8, INFORMATION: "LINK OF YOUTUBE VIDEO OF THE INSPECTION OF SCHOOL COVERING THE INFRASTRUCTURE", DETAILS: "Click here" }
  ];
const MDP = () => {
  return (
    <div>
        <Header/>
          <HeroSection
                     backgroundImage="/aboutpage/vision_mission.jpg"
                     title="Mandatory Disclosure"
                     subtitle="At Himalaya, we are dedicated to nurturing young minds with knowledge, values, and leadership."
                   />
    <div className="p-6 md:p-12 bg-gray-100">
      {/* Section 1: Art in Education */}
      {/* <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Mandatory Disclosure</h2>
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
          <p className="text-gray-700 leading-relaxed">
          It will be obligatory for every child to take part in Sports and Games, like Mass Drills, athletic events, and Yoga under the guidance of the Dept. of Sports and Games. Teams for the participation in local Sports n Games Meet, will be chosen and trained in a planned way. Each child is expected to excel minimum in two outer games, one indoor game and one athletic event.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
          Inter House Matches will be conducted on League Basis as per the schedule outlined in the Calendar of Events. All the possible games – i.e. Practice of Meditation, Kho-Kho, Kabbadi, Foot Ball, Volley Ball, Hand Ball, Cricket, Tennicoit, Shuttle Badminton, Table Tennis, Carom and Chess will be entertained by the School.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
          In order to inculcate hobbies and to develop them among the children, Clubs have been formed as per the requirement of New Education Policy. It will be obligatory for every child to take part in Sports and Games. Athletic events, drills of various types and Yoga will be dealt by the Dept. of Sports and Games.
          </p>
        </div>
      </div>
       */}

      <div className="max-w-4xl mx-auto mt-8">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">A : SCHOOL INFORMATION</h3>
        <div className="overflow-x-auto shadow-lg rounded-lg">

<table className="min-w-full bg-white border border-gray-200 rounded-lg">
  <thead className="bg-gray-200 text-gray-700 uppercase text-sm">
    <tr>
      <th className="px-6 py-3 text-left">Sl. No</th>
      <th className="px-6 py-3 text-left">INFORMATION</th>
      <th className="px-6 py-3 text-left">DETAILS</th>

    </tr>
  </thead>
  <tbody>
    {school_info.map((staff,index) => (
      <tr key={staff.sl_no} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
        <td className="px-6 py-4 font-semibold">{staff.sl_no}</td>
        <td className="px-6 py-4">{staff.INFORMATION}</td>
        <td className="px-6 py-4">{staff.DETAILS}</td>
      </tr>
    ))}
  </tbody>
</table>

</div>
      </div>

      <div className="max-w-4xl mx-auto mt-8">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">B : DOCUMENTS AND INFORMATION</h3>
        <div className="overflow-x-auto shadow-lg rounded-lg">

<table className="min-w-full bg-white border border-gray-200 rounded-lg">
  <thead className="bg-gray-200 text-gray-700 uppercase text-sm">
    <tr>
      <th className="px-6 py-3 text-left">Sl. No</th>
      <th className="px-6 py-3 text-left">INFORMATION</th>
      <th className="px-6 py-3 text-left">DETAILS</th>

    </tr>
  </thead>
  <tbody>
    {document_info.map((staff,index) => (
      <tr key={staff.sl_no} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
        <td className="px-6 py-4 font-semibold">{staff.sl_no}</td>
        <td className="px-6 py-4">{staff.INFORMATION}</td>
        <td className="px-6 py-4"><a
              href={staff.DOCUMENTS}
              download
              className=" text-black"
            >
              Download PDF File
            </a></td>
      </tr>
    ))}
  </tbody>
</table>

</div>

      </div>

      <div className="max-w-4xl mx-auto mt-8">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">C : RESULT AND ACADEMICS</h3>
        <div className="overflow-x-auto shadow-lg rounded-lg">

<table className="min-w-full bg-white border border-gray-200 rounded-lg">
  <thead className="bg-gray-200 text-gray-700 uppercase text-sm">
    <tr>
      <th className="px-6 py-3 text-left">Sl. No</th>
      <th className="px-6 py-3 text-left">INFORMATION</th>
      <th className="px-6 py-3 text-left">DETAILS</th>

    </tr>
  </thead>
  <tbody>
    {additional_info.map((staff,index) => (
      <tr key={staff.sl_no} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
        <td className="px-6 py-4 font-semibold">{staff.sl_no}</td>
        <td className="px-6 py-4">{staff.INFORMATION}</td>
        <td className="px-6 py-4"><a
              href={staff.DOCUMENTS}
              download
              className=" text-black"
            >
              Download PDF File
            </a></td>
      </tr>
    ))}
  </tbody>
</table>

</div>
      </div>

       <div className="max-w-4xl mx-auto mt-8">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">D: STAFF (TEACHING)</h3>
        <div className="overflow-x-auto shadow-lg rounded-lg">

<table className="min-w-full bg-white border border-gray-200 rounded-lg">
  <thead className="bg-gray-200 text-gray-700 uppercase text-sm">
    <tr>
      <th className="px-6 py-3 text-left">Sl. No</th>
      <th className="px-6 py-3 text-left">INFORMATION</th>
      <th className="px-6 py-3 text-left">DETAILS</th>

    </tr>
  </thead>
  <tbody>
    {staff_details.map((staff,index) => (
      <tr key={staff.sl_no} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
        <td className="px-6 py-4 font-semibold">{staff.sl_no}</td>
        <td className="px-6 py-4">{staff.INFORMATION}</td>
        <td className="px-6 py-4">{staff.DETAILS}</td>
      </tr>
    ))}
  </tbody>
</table>

</div>
      </div>

       <div className="max-w-4xl mx-auto mt-8">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">RESULT CLASS: X</h3>
        <div className="overflow-x-auto shadow-lg rounded-lg">

<table className="min-w-full bg-white border border-gray-200 rounded-lg">
  <thead className="bg-gray-200 text-gray-700 uppercase text-sm">
    <tr>
      <th className="px-6 py-3 text-left">Sl. No</th>
      <th className="px-6 py-3 text-left">Course & Class</th>
      <th className="px-6 py-3 text-left">No. of Students appeared</th>
      <th className="px-6 py-3 text-left">No. of Students passed</th>
      <th className="px-6 py-3 text-left">% of Passing</th>

    </tr>
  </thead>
  <tbody>
    {exam_results.map((staff,index) => (
      <tr key={staff.sl_no} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
        <td className="px-6 py-4 font-semibold">{staff.sl_no}</td>
        <td className="px-6 py-4">{staff.Course_Class}</td>
        <td className="px-6 py-4">{staff.No_of_Students_appeared}</td>
        <td className="px-6 py-4">{staff.No_of_Students_passed}</td>
        <td className="px-6 py-4">{staff.Percent_of_Passing}</td>
      </tr>
    ))}
  </tbody>
</table>

</div>
      </div>

       <div className="max-w-4xl mx-auto mt-8">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">E: SCHOOL INFRASTRUCTURE:</h3>
        <div className="overflow-x-auto shadow-lg rounded-lg">

<table className="min-w-full bg-white border border-gray-200 rounded-lg">
  <thead className="bg-gray-200 text-gray-700 uppercase text-sm">
    <tr>
      <th className="px-6 py-3 text-left">Sl. No</th>
      <th className="px-6 py-3 text-left">INFORMATION</th>
      <th className="px-6 py-3 text-left">DETAILS</th>

    </tr>
  </thead>
  <tbody>
    {infrastructure_details.map((staff,index) => (
      <tr key={staff.sl_no} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
        <td className="px-6 py-4 font-semibold">{staff.sl_no}</td>
        <td className="px-6 py-4">{staff.INFORMATION}</td>
        <td className="px-6 py-4">{staff.DETAILS}</td>
      </tr>
    ))}
  </tbody>
</table>

</div>
      </div>
      



    </div>
    <Footer />
    </div>
  );
};

export default MDP;