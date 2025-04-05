"use client";

import Image from "next/image";
import { useState } from "react";

export default function AdmissionForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    campus: "",
    grade: "",
    dob: "",
    gender: "",
    motherName: "",
    motherContact: "",
    fatherName: "",
    fatherContact: "",
    address: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  return (
    <div className="max-w-7xl mx-auto py-12 px-4 md:px-8 flex flex-col md:flex-row items-center gap-8 bg-white">
      {/* Left Side Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="relative">
          <Image
            src="/form/form_image.png" // Replace with the actual image path
            alt="School Activities"
            width={500}
            height={500}
            // className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Right Side Form Section */}
      <div className="w-full md:w-1/2 bg-gray-100 p-6 md:p-8 rounded-lg shadow-lg text-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* First Name */}
          <div>
            <label className="block text-gray-700 text-sm font-semibold">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-md"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-gray-700 text-sm font-semibold">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-md"
            />
          </div>

          {/* Select Campus */}
          <div>
            <label className="block text-gray-700 text-sm font-semibold">Select Campus</label>
            <select
              name="campus"
              value={formData.campus}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-md bg-white"
            >
              <option value="">Select Campus</option>
              <option value="North">North Campus</option>
              <option value="South">South Campus</option>
            </select>
          </div>

          {/* Select Grade */}
          <div>
            <label className="block text-gray-700 text-sm font-semibold">
              Select Grade <span className="text-red-500">*</span>
            </label>
            <select
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-md bg-white"
            >
              <option value="">Select Grade</option>
              <option value="Grade 1">Grade 1</option>
              <option value="Grade 2">Grade 2</option>
            </select>
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-gray-700 text-sm font-semibold">Date Of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-md"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-gray-700 text-sm font-semibold">
              Gender <span className="text-red-500">*</span>
            </label>
            <div className="mt-1 flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === "Male"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Male
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === "Female"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Female
              </label>
            </div>
          </div>

          {/* Mother Name */}
          <div>
            <label className="block text-gray-700 text-sm font-semibold">Mother Name</label>
            <input
              type="text"
              name="motherName"
              value={formData.motherName}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-md"
            />
          </div>

          {/* Mother Contact No */}
          <div>
            <label className="block text-gray-700 text-sm font-semibold">Mother Contact No</label>
            <input
              type="text"
              name="motherContact"
              value={formData.motherContact}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-md"
            />
          </div>

          {/* Father Name */}
          <div>
            <label className="block text-gray-700 text-sm font-semibold">Father Name</label>
            <input
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-md"
            />
          </div>

          {/* Father Contact No */}
          <div>
            <label className="block text-gray-700 text-sm font-semibold">
              Father Contact No <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fatherContact"
              value={formData.fatherContact}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-md"
            />
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="block text-gray-700 text-sm font-semibold">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-md"
            ></textarea>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6 text-center">
          <button className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
