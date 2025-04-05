"use client"
import Footer from '@/components/footer';
import Header from '@/components/header';
import HeroSection from '@/components/HeroSection';
import React, { useState } from 'react';


export default function EnrollmentComponent() {
  const [selectedClass, setSelectedClass] = useState<string>('Class VIII');

  const classDescriptions: { [key: string]: string } = {
    'Class VIII':
      "I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.",
    'Class IX':
      "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.",
    'Class X':
      "I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.",
  };

  return (
    <div>
      <Header />
      <HeroSection
        backgroundImage="/aboutpage/vision_mission.jpg"
        title="Enrolment Policy"
        subtitle="Coming Together Is A Beginning. Keeping Together Is Progress. Working Together Is Success."
      />
      <div className="container mx-auto p-4 md:p-8">
        <section className="mb-8 p-6 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Enrollment Policy</h2>
          <p className="text-gray-700">
            As usual during the tag end of each Academic Year, as directed by the Management, efforts will be made to prepare Hand Bills, Posters and Flex Boards for the effective distribution in and around Ankola. In the last week of April/May, efforts will be made to expedite and ensure admissions for all the classes from Kindergarten to class 10. This will enable new students to begin with the rest of the students the New Academic Year in the first week of June of every year OR as per the declaration of Summer Vacation by the HET Management in consultation with State Government and Local Education Department, BEO, Ankola, every year.
          </p>
          <p className="mt-4 text-gray-700">
            Admission will be allowed for different classes as per CBSE and NEP guidelines.
          </p>
        </section>

        <section className="p-6 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Eligibility Conditions and Composition of the Test</h2>

          <div className="mb-4">
            <div className="flex space-x-2">
              <button
                className={`px-4 py-2 rounded-md text-gray-700 ${
                  selectedClass === 'Class VIII' ? 'bg-blue-200' : 'bg-gray-200'
                }`}
                onClick={() => setSelectedClass('Class VIII')}
              >
                Class VIII
              </button>
              <button
                className={`px-4 py-2 rounded-md text-gray-700 ${
                  selectedClass === 'Class IX' ? 'bg-blue-200' : 'bg-gray-200'
                }`}
                onClick={() => setSelectedClass('Class IX')}
              >
                Class IX
              </button>
              <button
                className={`px-4 py-2 rounded-md text-gray-700 ${
                  selectedClass === 'Class X' ? 'bg-blue-200' : 'bg-gray-200'
                }`}
                onClick={() => setSelectedClass('Class X')}
              >
                Class X
              </button>
            </div>
          </div>

          <div className="text-gray-700">
            <p>{classDescriptions[selectedClass]}</p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}