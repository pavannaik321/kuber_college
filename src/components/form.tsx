'use client';

import { useState } from 'react';

export default function AdmissionForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    campus: '',
    grade: '',
    dob: '',
    gender: '',
    motherName: '',
    motherContact: '',
    fatherName: '',
    fatherContact: '',
    address: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="min-h-[80vh] w-full bg-[#314863] text-white py-8 px-4">
      <h1 className="text-3xl font-semibold text-center mb-8 tracking-wide">
        Admission Form
      </h1>

      <div className="max-w-4xl mx-auto bg-white text-gray-800 p-6 rounded-xl shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* First Name */}
          <div>
            <label className="block text-sm font-medium">First Name *</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-md text-sm"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium">Last Name *</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-md text-sm"
            />
          </div>

          {/* Campus */}
          <div>
  <label className="block text-sm font-medium">Select Campus</label>
  <div className="relative mt-1">
    <select
      name="campus"
      value={formData.campus}
      onChange={handleChange}
      className="appearance-none w-full p-2 pr-10 border rounded-md bg-white text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#314863]"
    >
      <option value="">Select Campus</option>
      <option value="North">North Campus</option>
      <option value="South">South Campus</option>
    </select>
    <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
      <svg
        className="w-4 h-4 text-gray-500"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  </div>
</div>


{/* Grade */}
<div>
  <label className="block text-sm font-medium">Select Grade *</label>
  <div className="relative mt-1">
    <select
      name="grade"
      value={formData.grade}
      onChange={handleChange}
      className="appearance-none w-full p-2 pr-10 border rounded-md bg-white text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#314863]"
    >
      <option value="">Select Grade</option>
      <option value="Grade 1">Grade 1</option>
      <option value="Grade 2">Grade 2</option>
    </select>
    <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
      <svg
        className="w-4 h-4 text-gray-500"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  </div>
</div>


          {/* DOB */}
          <div>
            <label className="block text-sm font-medium">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-md text-sm"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium">Gender *</label>
            <div className="mt-2 flex gap-4">
              <label className="flex items-center text-sm">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === 'Male'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Male
              </label>
              <label className="flex items-center text-sm">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === 'Female'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Female
              </label>
            </div>
          </div>

          {/* Mother Name */}
          <div>
            <label className="block text-sm font-medium">Mothers Name</label>
            <input
              type="text"
              name="motherName"
              value={formData.motherName}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-md text-sm"
            />
          </div>

          {/* Mother Contact */}
          <div>
            <label className="block text-sm font-medium">Mothers Contact No.</label>
            <input
              type="text"
              name="motherContact"
              value={formData.motherContact}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-md text-sm"
            />
          </div>

          {/* Father Name */}
          <div>
            <label className="block text-sm font-medium">Fathers Name</label>
            <input
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-md text-sm"
            />
          </div>

          {/* Father Contact */}
          <div>
            <label className="block text-sm font-medium">Fathers Contact No. *</label>
            <input
              type="text"
              name="fatherContact"
              value={formData.fatherContact}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-md text-sm"
            />
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-md text-sm"
              rows={3}
            ></textarea>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6 text-center">
          <button className="w-full md:w-1/2 bg-[#314863] text-white font-medium py-2.5 px-5 rounded-md hover:bg-[#25384d] transition-all duration-200 text-sm">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
