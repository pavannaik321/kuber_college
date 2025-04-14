"use client";

import { useState } from "react";
import {  FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import Link from "next/link";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState("");

  const toggleDropdown = (menu: string) => {
    setDropdownOpen(dropdownOpen === menu ? "" : menu);
  };

  return (
    <header className="z-50">


      {/* Main Navigation */}
      <nav className="bg-[#314863] px-6 py-4 flex justify-between sm:relative">
        {/* Logo & School Name */}
        {/* <div className="flex items-center space-x-3"> */}
          {/* <img src="/school_logo.png" alt="School Logo" className="h-10" /> */}
          {/* <span className="text-lg font-bold text-green-900">DELHI WORLD SCHOOL</span> */}
        {/* </div> */}

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-white font-medium relative z-50">
          <li>
            <Link href="/" className="">Home</Link>
          </li>

          {/* About Us */}
          <li className="relative group">
            <Link href="#" className="text-white flex items-center px-3 rounded-md">
              About Us <FaChevronDown className="ml-1 text-sm" />
            </Link>
            <ul className="absolute left-0 bg-[#314863] shadow-lg rounded-md hidden group-hover:block py-2 w-48">
              <li>
                <Link href="#" className="block px-4 py-2">
                History
                </Link>
              </li>
              <li>
                <Link href="" className="block px-4 py-2">
                Facilities
                </Link>
              </li>
              <li><Link href="#" className="block px-4 py-2">Why Himalaya</Link></li>
              <li><Link href="#" className="block px-4 py-2">Chairman</Link></li>
              <li><Link href="#" className="block px-4 py-2">Board of Management</Link></li>
              <li><Link href="#" className="block px-4 py-2">Vission & Misssion</Link></li>
            </ul>
          </li>

          {/* Courses */}
          <li className="relative group">
            <Link href="#" className="text-white flex items-center px-3 rounded-md">
            Courses <FaChevronDown className="ml-1 text-sm" />
            </Link>
            <ul className="absolute left-0 bg-[#314863] shadow-lg rounded-md hidden group-hover:block py-2 w-56">
              <li><Link href="/administration/Managementcommittee" className="block px-4 py-2">PUC</Link></li>
              <li><Link href="/administration/Managementcommittee" className="block px-4 py-2">BCA</Link></li>
            
            </ul>
          </li>

          {/* For Students */}
          <li className="relative group">
            <Link href="#" className="text-white flex items-center px-3 rounded-md">
            For Students <FaChevronDown className="ml-1 text-sm" />
            </Link>
            <ul className="absolute left-0 bg-[#314863] shadow-lg rounded-md hidden group-hover:block py-2 w-56">
              <li><Link href="/admission/Enrollmentpolicy" className="block px-4 py-2">Rules & Regulatiions</Link></li>
              <li><Link href="/admission/Admissionform" className="block px-4 py-2">Campus Life</Link></li>
              <li><Link href="/admission/Admissionform" className="block px-4 py-2">Student Achievements</Link></li>
              <li><Link href="/admission/Admissionform" className="block px-4 py-2">Admission Updates</Link></li>
              <li><Link href="/admission/Admissionform" className="block px-4 py-2">Exam Updates</Link></li>
              <li><Link href="/admission/Admissionform" className="block px-4 py-2">Scholarship Updates</Link></li>
              <li><Link href="/admission/Admissionform" className="block px-4 py-2">FAQ</Link></li>
              <li><Link href="/admission/Admissionform" className="block px-4 py-2">Lectures & Staff</Link></li>
            </ul>
          </li>

          {/* Gallery */}
          <li className="relative group">
            <a href="#" className="text-white flex items-center px-3 rounded-md">
            Gallery <FaChevronDown className="ml-1 text-sm" />
            </a>
            <ul className="absolute left-0 bg-[#314863] shadow-lg rounded-md hidden group-hover:block py-2 w-56">
              <li><a href="/academics/Studentstrength" className="block px-4 py-2">PUC</a></li>
              <li><a href="/academics/Academicschedule" className="block px-4 py-2">BCA</a></li>
            </ul>
          </li>

          <li><Link href="/contactus" className="">Contact Us</Link></li>
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
          <Link href="#" className="block py-1 hover:text-green-600">History</Link>
          <Link href="#" className="block py-1 hover:text-green-600">Facilities</Link>
          <Link href="#" className="block py-1 hover:text-green-600">Why Himalaya</Link>
          <Link href="#" className="block py-1 hover:text-green-600">Chairman</Link>
          <Link href="#" className="block py-1 hover:text-green-600">Board of Management</Link>
          <Link href="#" className="block py-1 hover:text-green-600">Vission & Misssion</Link>
        </div>
      )}
    </div>

    {/* Courses */}
    <div>
      <button
        onClick={() => toggleDropdown("courses")}
        className="w-full text-left flex justify-between items-center py-2 hover:text-green-600"
      >
        Courses <FaChevronDown className={`ml-1 transition-transform ${dropdownOpen === "courses" ? "rotate-180" : ""}`} />
      </button>
      {dropdownOpen === "courses" && (
        <div className="pl-4 space-y-2">
          <Link href="/administration/Managementcommittee" className="block py-1 hover:text-green-600">PUC</Link>
          <Link href="/administration/Managementcommittee" className="block py-1 hover:text-green-600">BCA</Link>
        </div>
      )}
    </div>

    {/* For Students */}
    <div>
      <button
        onClick={() => toggleDropdown("students")}
        className="w-full text-left flex justify-between items-center py-2 hover:text-green-600"
      >
        For Students <FaChevronDown className={`ml-1 transition-transform ${dropdownOpen === "students" ? "rotate-180" : ""}`} />
      </button>
      {dropdownOpen === "students" && (
        <div className="pl-4 space-y-2">
          <Link href="/admission/Enrollmentpolicy" className="block py-1 hover:text-green-600">Rules & Regulations</Link>
          <Link href="/admission/Admissionform" className="block py-1 hover:text-green-600">Campus Life</Link>
          <Link href="/admission/Admissionform" className="block py-1 hover:text-green-600">Student Achievements</Link>
          <Link href="/admission/Admissionform" className="block py-1 hover:text-green-600">Admission Updates</Link>
          <Link href="/admission/Admissionform" className="block py-1 hover:text-green-600">Exam Updates</Link>
          <Link href="/admission/Admissionform" className="block py-1 hover:text-green-600">Scholarship Updates</Link>
          <Link href="/admission/Admissionform" className="block py-1 hover:text-green-600">FAQ</Link>
          <Link href="/admission/Admissionform" className="block py-1 hover:text-green-600">Lectures & Staff</Link>
        </div>
      )}
    </div>

    {/* Gallery */}
    <div>
      <button
        onClick={() => toggleDropdown("gallery")}
        className="w-full text-left flex justify-between items-center py-2 hover:text-green-600"
      >
        Gallery <FaChevronDown className={`ml-1 transition-transform ${dropdownOpen === "gallery" ? "rotate-180" : ""}`} />
      </button>
      {dropdownOpen === "gallery" && (
        <div className="pl-4 space-y-2">
          <Link href="/academics/Studentstrength" className="block py-1 hover:text-green-600">PUC</Link>
          <Link href="/academics/Academicschedule" className="block py-1 hover:text-green-600">BCA</Link>
        </div>
      )}
    </div>

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