"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import Link from "next/link";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState("");
  const [isaboutActive, setisaboutActive] = useState(false);
  const [isadmistrationActive, setisadmistrationActive] = useState(false);
  const [isadmissionActive, setisadmissionActive] = useState(false);
  const [isacademicsActive, setisacademicsActive] = useState(false);
  const [isactivitiesActive, setisactivitiesActive] = useState(false);

  const pathname = usePathname();
  useEffect(() => {
    if (pathname == "/aboutus/vissionmission" || pathname == "/aboutus/abouthimalaya" || pathname == "/aboutus/principaldesk" || pathname == "/aboutus/chairmandesk") {
      setisaboutActive(true);
    }
    if (pathname == "/administration/Managementcommittee" || pathname == "/administration/Schooladvisorycommittee" || pathname == "/administration/Studentscouncilmembers" || pathname == "/administration/Successiveprincipals" || pathname == "/administration/Childcare" || pathname == "/administration/Staff" || pathname == "/administration/Schoollevelcommittees") {
      setisadmistrationActive(true);
    }
    if (pathname == "/admission/Enrollmentpolicy" || pathname == "/admission/Admissionform") {
      setisadmissionActive(true)
    }
    if (
      pathname === "/activities/CoCurricularActivities" || 
      pathname === "/activities/PaceSettingActivities" || 
      pathname === "/activities/GameAndSports" || 
      pathname === "/activities/GreenCampus" || 
      pathname === "/activities/MorningAssembly" || 
      pathname === "/activities/SBSB" || 
      pathname === "/activities/Achievements" || 
      pathname === "/activities/Events" || 
      pathname === "/activities/Gallery"
    ) {
      setisactivitiesActive(true);
    }
    
    if (
      pathname === "/academics/Studentstrength" ||
      pathname === "/academics/Academicschedule" ||
      pathname === "/academics/Classwisesyllabus" ||
      pathname === "/academics/Projectsassignments" ||
      pathname === "/academics/ICTeducation" ||
      pathname === "/academics/Arteducation" ||
      pathname === "/academics/SkillDevelopment" ||
      pathname === "/academics/AnnualCalender" ||
      pathname === "/academics/HouseMastersMistress" ||
      pathname === "/academics/CareerGuidance"
    ) {
      setisacademicsActive(true);
    }

  }, [pathname]);

  const getActiveClass = (path: string) =>
    pathname === path ? "bg-orange-500 text-white px-3 py-1 rounded-md" : "hover:text-green-600";


  const toggleDropdown = (menu: string) => {
    setDropdownOpen(dropdownOpen === menu ? "" : menu);
  };

  return (
    <header className="w-full z-50">
      {/* Top Bar */}
      <div className="bg-green-900 text-white flex justify-between items-center px-6 sm:px-20 py-2 text-sm">
        <div className="flex items-center space-x-4">
          <span className="flex items-center space-x-1">
            <FaPhoneAlt className="text-red-500" />
            <span>+91 9951822111</span>
          </span>
          <span className="flex items-center space-x-1">
            <FaMapMarkerAlt className="text-red-500" />
            <span>Chintal Quthbullapur, Hyderabad</span>
          </span>
        </div>
        <div className="hidden sm:flex space-x-3">
          <FaFacebookF className="text-blue-500 cursor-pointer" />
          <FaInstagram className="text-red-500 cursor-pointer" />
          <FaTwitter className="text-yellow-400 cursor-pointer" />
          <FaLinkedin className="text-green-500 cursor-pointer" />
          <FaYoutube className="text-orange-500 cursor-pointer" />
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white flex justify-between items-center px-6 sm:px-20 py-4 shadow-md relative">
        {/* Logo & School Name */}
        <div className="flex items-center space-x-3">
          <img src="/school_logo.png" alt="School Logo" className="h-10" />
          {/* <span className="text-lg font-bold text-green-900">DELHI WORLD SCHOOL</span> */}
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-gray-800 font-medium relative z-50">
          <li>
            <Link href="/" className={getActiveClass("/")}>Home</Link>
          </li>

          {/* About Us */}
          <li className="relative group">
            <Link href="#" className={`${isaboutActive ? "bg-orange-500 flex items-center text-white px-3 rounded-md" : "text-black flex items-center px-3 rounded-md"}`}>
              About Us <FaChevronDown className="ml-1 text-sm" />
            </Link>
            <ul className="absolute left-0 bg-white shadow-lg rounded-md hidden group-hover:block py-2 w-48">
              <li>
                <Link href="/aboutus/vissionmission" className="block px-4 py-2 hover:bg-gray-100">
                  Vision & Mission
                </Link>
              </li>
              <li>
                <Link href="/aboutus/abouthimalaya" className="block px-4 py-2 hover:bg-gray-100">
                  About Himalaya
                </Link>
              </li>
              <li><Link href="/aboutus/principaldesk" className="block px-4 py-2 hover:bg-gray-100">Principal Desk</Link></li>
              <li><Link href="/aboutus/chairmandesk" className="block px-4 py-2 hover:bg-gray-100">Chairman Desk</Link></li>
            </ul>
          </li>

          {/* Administration */}
          <li className="relative group">
            <Link href="#" className={`${isadmistrationActive ? "bg-orange-500 flex items-center text-white px-3 rounded-md" : "text-black flex items-center px-3 rounded-md"}`}>
              Administration <FaChevronDown className="ml-1 text-sm" />
            </Link>
            <ul className="absolute left-0 bg-white shadow-lg rounded-md hidden group-hover:block py-2 w-56">
              <li><Link href="/administration/Managementcommittee" className="block px-4 py-2 hover:bg-gray-100">School Management Committee</Link></li>
              <li><Link href="/administration/Schooladvisorycommittee" className="block px-4 py-2 hover:bg-gray-100">School Advisory Committee</Link></li>
              <li><Link href="/administration/Staff" className="block px-4 py-2 hover:bg-gray-100">Teaching/Non Teaching Staff</Link></li>
              <li><Link href="/administration/Schoollevelcommittees" className="block px-4 py-2 hover:bg-gray-100">School Level Committees</Link></li>
              <li><Link href="/administration/Studentscouncilmembers" className="block px-4 py-2 hover:bg-gray-100">Students Council Members</Link></li>
              <li><Link href="/administration/Successiveprincipals" className="block px-4 py-2 hover:bg-gray-100">Successive Principals</Link></li>
              <li><Link href="/administration/Childcare" className="block px-4 py-2 hover:bg-gray-100">Child care</Link></li>
            </ul>
          </li>

          {/* Admision */}
          <li className="relative group">
            <Link href="#" className={`${isadmissionActive ? "bg-orange-500 flex items-center text-white px-3 rounded-md" : "text-black flex items-center px-3 rounded-md"}`}>
              Admision <FaChevronDown className="ml-1 text-sm" />
            </Link>
            <ul className="absolute left-0 bg-white shadow-lg rounded-md hidden group-hover:block py-2 w-56">
              <li><Link href="/admission/Enrollmentpolicy" className="block px-4 py-2 hover:bg-gray-100">Enrollment Policy</Link></li>
              <li><Link href="/admission/Admissionform" className="block px-4 py-2 hover:bg-gray-100">Admission Form</Link></li>

            </ul>
          </li>

          {/* Academics */}
          <li className="relative group">
            <a href="#" className={`${isacademicsActive ? "bg-orange-500 flex items-center text-white px-3 rounded-md" : "text-black flex items-center px-3 rounded-md"}`}>
              Academics <FaChevronDown className="ml-1 text-sm" />
            </a>
            <ul className="absolute left-0 bg-white shadow-lg rounded-md hidden group-hover:block py-2 w-56">
              <li><a href="/academics/Studentstrength" className="block px-4 py-2 hover:bg-gray-100">Student Strength</a></li>
              <li><a href="/academics/Academicschedule" className="block px-4 py-2 hover:bg-gray-100">Academic Schedule</a></li>
              <li><a href="/academics/Classwisesyllabus" className="block px-4 py-2 hover:bg-gray-100">Class-wise Syllabus</a></li>
              <li><a href="/academics/Projectsassignments" className="block px-4 py-2 hover:bg-gray-100">Projects & Assignments</a></li>
              <li><a href="/academics/ICTeducation" className="block px-4 py-2 hover:bg-gray-100">ICT in Education</a></li>
              <li><a href="/academics/Arteducation" className="block px-4 py-2 hover:bg-gray-100">Art Education</a></li>
              <li><a href="/academics/SkillDevelopment" className="block px-4 py-2 hover:bg-gray-100">Skill Development</a></li>
              <li><a href="/academics/AnnualCalender" className="block px-4 py-2 hover:bg-gray-100">Annual Calender</a></li>
              <li><a href="/academics/HouseMastersMistress" className="block px-4 py-2 hover:bg-gray-100">House Masters/Mistress</a></li>
              <li><a href="/academics/CareerGuidance" className="block px-4 py-2 hover:bg-gray-100">Career Guidance</a></li>
            </ul>
          </li>

          {/* Activities */}
          <li className="relative group">
            <a href="#" className={`${isactivitiesActive ? "bg-orange-500 flex items-center text-white px-3 rounded-md" : "text-black flex items-center px-3 rounded-md"}`}>
              Activities <FaChevronDown className="ml-1 text-sm" />
            </a>
            <ul className="absolute left-0 bg-white shadow-lg rounded-md hidden group-hover:block py-2 w-56">
              <li><a href="/activities/CoCurricularActivities" className="block px-4 py-2 hover:bg-gray-100">Co-Curricular Activities</a></li>
              <li><a href="/activities/PaceSettingActivities" className="block px-4 py-2 hover:bg-gray-100">Pace Setting Activities</a></li>
              <li><a href="/activities/GameAndSports" className="block px-4 py-2 hover:bg-gray-100">Game and Sports</a></li>
              <li><a href="/activities/GreenCampus" className="block px-4 py-2 hover:bg-gray-100">Green Campus</a></li>
              <li><a href="/activities/MorningAssembly" className="block px-4 py-2 hover:bg-gray-100">Morning Assembly</a></li>
              <li><a href="/activities/SBSB" className="block px-4 py-2 hover:bg-gray-100">SBSB (Swatch Bharat & Shrest Bharat)</a></li>
              <li><a href="/activities/Achievements" className="block px-4 py-2 hover:bg-gray-100">Achievements</a></li>
              <li><a href="/activities/Events" className="block px-4 py-2 hover:bg-gray-100">Events</a></li>
              <li><a href="/activities/Gallery" className="block px-4 py-2 hover:bg-gray-100">Gallery</a></li>
            </ul>
          </li>

          <li><Link href="/mpd" className={getActiveClass("/mpd")}>MPD</Link></li>
          <li><Link href="/contactus" className={getActiveClass("/contactus")}>Contact Us</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
  <div className="md:hidden bg-white text-gray-800 py-4 px-6 space-y-4 shadow-md relative z-50">
    <Link href="/" className="block py-2 hover:text-green-600">Home</Link>

    {/* About Us */}
    <div>
      <button
        onClick={() => toggleDropdown("about")}
        className="w-full text-left flex justify-between items-center py-2 hover:text-green-600"
      >
        About Us <FaChevronDown className={`ml-1 transition-transform ${dropdownOpen === "about" ? "rotate-180" : ""}`} />
      </button>
      {dropdownOpen === "about" && (
        <div className="pl-4 space-y-2">
          <Link href="/aboutus/vissionmission" className="block py-1 hover:text-green-600">Vision & Mission</Link>
          <Link href="/aboutus/abouthimalaya" className="block py-1 hover:text-green-600">About Himalaya</Link>
          <Link href="/aboutus/principaldesk" className="block py-1 hover:text-green-600">Principal Desk</Link>
          <Link href="/aboutus/chairmandesk" className="block py-1 hover:text-green-600">Chairman Desk</Link>
        </div>
      )}
    </div>

    {/* Administration */}
    <div>
      <button
        onClick={() => toggleDropdown("admin")}
        className="w-full text-left flex justify-between items-center py-2 hover:text-green-600"
      >
        Administration <FaChevronDown className={`ml-1 transition-transform ${dropdownOpen === "admin" ? "rotate-180" : ""}`} />
      </button>
      {dropdownOpen === "admin" && (
        <div className="pl-4 space-y-2">
          <Link href="/administration/Managementcommittee" className="block py-1 hover:text-green-600">School Management Committee</Link>
          <Link href="/administration/Schooladvisorycommittee" className="block py-1 hover:text-green-600">School Advisory Committee</Link>
          <Link href="/administration/Staff" className="block py-1 hover:text-green-600">Teaching/Non Teaching Staff</Link>
          <Link href="/administration/Schoollevelcommittees" className="block py-1 hover:text-green-600">School Level Committees</Link>
          <Link href="/administration/Studentscouncilmembers" className="block py-1 hover:text-green-600">Students Council Members</Link>
          <Link href="/administration/Successiveprincipals" className="block py-1 hover:text-green-600">Successive Principals</Link>
          <Link href="/administration/Childcare" className="block py-1 hover:text-green-600">Child Care</Link>
        </div>
      )}
    </div>

    {/* Admission */}
    <div>
      <button
        onClick={() => toggleDropdown("admission")}
        className="w-full text-left flex justify-between items-center py-2 hover:text-green-600"
      >
        Admission <FaChevronDown className={`ml-1 transition-transform ${dropdownOpen === "admission" ? "rotate-180" : ""}`} />
      </button>
      {dropdownOpen === "admission" && (
        <div className="pl-4 space-y-2">
          <Link href="/admission/Enrollmentpolicy" className="block py-1 hover:text-green-600">Enrollment Policy</Link>
          <Link href="/admission/Admissionform" className="block py-1 hover:text-green-600">Admission Form</Link>
        </div>
      )}
    </div>

    {/* Academics */}
    <div>
      <button
        onClick={() => toggleDropdown("academics")}
        className="w-full text-left flex justify-between items-center py-2 hover:text-green-600"
      >
        Academics <FaChevronDown className={`ml-1 transition-transform ${dropdownOpen === "academics" ? "rotate-180" : ""}`} />
      </button>
      {dropdownOpen === "academics" && (
        <div className="pl-4 space-y-2">
          <Link href="/academics/Studentstrength" className="block py-1 hover:text-green-600">Student Strength</Link>
          <Link href="/academics/Academicschedule" className="block py-1 hover:text-green-600">Academic Schedule</Link>
          <Link href="/academics/Classwisesyllabus" className="block py-1 hover:text-green-600">Class-wise Syllabus</Link>
          <Link href="/academics/Projectsassignments" className="block py-1 hover:text-green-600">Projects & Assignments</Link>
          <Link href="/academics/ICTeducation" className="block py-1 hover:text-green-600">ICT in Education</Link>
          <Link href="/academics/Arteducation" className="block py-1 hover:text-green-600">Art Education</Link>
          <Link href="/academics/SkillDevelopment" className="block py-1 hover:text-green-600">Skill Development</Link>
          <Link href="/academics/AnnualCalender" className="block py-1 hover:text-green-600">Annual Calendar</Link>
          <Link href="/academics/HouseMastersMistress" className="block py-1 hover:text-green-600">House Masters/Mistress</Link>
          <Link href="/academics/CareerGuidance" className="block py-1 hover:text-green-600">Career Guidance</Link>
        </div>
      )}
    </div>

    {/* Activities */}
    <div>
      <button
        onClick={() => toggleDropdown("activities")}
        className="w-full text-left flex justify-between items-center py-2 hover:text-green-600"
      >
        Activities <FaChevronDown className={`ml-1 transition-transform ${dropdownOpen === "activities" ? "rotate-180" : ""}`} />
      </button>
      {dropdownOpen === "activities" && (
        <div className="pl-4 space-y-2">
          <Link href="/activities/CoCurricularActivities" className="block py-1 hover:text-green-600">Co-Curricular Activities</Link>
          <Link href="/activities/PaceSettingActivities" className="block py-1 hover:text-green-600">Pace Setting Activities</Link>
          <Link href="/activities/GameAndSports" className="block py-1 hover:text-green-600">Game and Sports</Link>
          <Link href="/activities/GreenCampus" className="block py-1 hover:text-green-600">Green Campus</Link>
          <Link href="/activities/MorningAssembly" className="block py-1 hover:text-green-600">Morning Assembly</Link>
          <Link href="/activities/SBSB" className="block py-1 hover:text-green-600">SBSB</Link>
          <Link href="/activities/Achievements" className="block py-1 hover:text-green-600">Achievements</Link>
          <Link href="/activities/Events" className="block py-1 hover:text-green-600">Events</Link>
          <Link href="/activities/Gallery" className="block py-1 hover:text-green-600">Gallery</Link>
        </div>
      )}
    </div>

    <Link href="/mpd" className="block py-2 hover:text-green-600">MPD</Link>
    <Link href="/contactus" className="block py-2 hover:text-green-600">Contact Us</Link>

    {/* Social Icons */}
    <div className="flex justify-center space-x-3 pt-4">
      <FaFacebookF className="text-blue-500 cursor-pointer" />
      <FaInstagram className="text-red-500 cursor-pointer" />
      <FaTwitter className="text-yellow-400 cursor-pointer" />
      <FaLinkedin className="text-green-500 cursor-pointer" />
      <FaYoutube className="text-orange-500 cursor-pointer" />
    </div>
  </div>
)}

    </header>
  );
}
