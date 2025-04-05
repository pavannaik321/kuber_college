import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/HeroSection";
import React from "react";

interface Committee {
  id: number;
  name: string;
  members: { name: string; role: string }[];
}

export default function SchoolLevelCommittees() {
  const committees: Committee[] = [
    {
      id: 1,
      name: "Time Table Arrangements",
      members: [
        { name: "Heena Kouser", role: "In-Charge" },
        { name: "Kratika Naik", role: "In-Charge" },
        { name: "Renuka Naik", role: "In-Charge" },
        { name: "Amita Nayak", role: "In-Charge" },
        { name: "Laxmi Vernekar", role: "In-Charge" },
        { name: "Krapa Naik", role: "In-Charge" },
      ],
    },
    {
      id: 2,
      name: "CCA",
      members: [
        { name: "Chandana Nayak", role: "Co-ordinator" },
        { name: "Yashoda Achari", role: "In-Charge" },
        { name: "Krapa Naik", role: "In-Charge" },
        { name: "Trupti Naik", role: "In-Charge" },
        { name: "Sarita", role: "In-Charge" },
        { name: "Deepak Nayak", role: "In-Charge" },
      ],
    },
    {
      id: 3,
      name: "Discipline",
      members: [
        { name: "Amar Gaonkar", role: "In-Charge" },
        { name: "Wilson R", role: "Member" },
        { name: "Dayanand Gouda", role: "Member" },
      ],
    },
    {
      id: 4,
      name: "Sports & Games",
      members: [
        { name: "PHE & All class teachers.", role: "In-Charge" },
      ],
    },
    {
      id: 5,
      name: "Examination",
      members: [
        { name: "Uma Nayak", role: "In-Charge" },
        { name: "Kruti Unnavane", role: "Member" },
        { name: "Jyoti Shet", role: "Member" },
        { name: "Kratika Naik", role: "Member" },
        { name: "Yashoda Achari", role: "Member" },
        { name: "Wilson R", role: "Member" },
      ],
    },
    {
      id: 6,
      name: "Dining & Food Committee",
      members: [
        { name: "Shruti Nayak", role: "In-Charge" },
        { name: "Chandana Nayak", role: "Member" },
        { name: "Revati Gouda", role: "Member" },
        { name: "Sneha Naik", role: "Member" },
        { name: "Rekha Achari", role: "Member" },
      ],
    },
    {
      id: 7,
      name: "Attendance",
      members: [
        { name: "Ibtessam", role: "In-Charge" },
        { name: "Kratika", role: "Member" },
      ],
    },
    {
      id: 8,
      name: "Press Report Committee",
      members: [
        { name: "Revati", role: "In-Charge" },
        { name: "Komal", role: "In-Charge" },
      ],
    },
  ];

  return (
    <div>
      <Header />
      <HeroSection
        backgroundImage="/aboutpage/vision_mission.jpg"
        title="School Level Committees"
        subtitle="Dedicated teams managing various school functions efficiently."
      />
      <section className="py-12 px-4 md:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">
            Himalaya School Level Committees
          </h2>
          <div className="overflow-x-auto shadow-lg rounded-lg">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-200 text-gray-700 uppercase text-sm">
                <tr>
                  <th className="px-6 py-3 text-left">Sl.No</th>
                  <th className="px-6 py-3 text-left">Committee</th>
                  <th className="px-6 py-3 text-left">Members</th>
                  <th className="px-6 py-3 text-left">Role</th>
                </tr>
              </thead>
              <tbody>
  {committees.map((committee, index) => (
    <React.Fragment key={committee.id}>
      {committee.members.map((member, memberIndex) => (
        <tr
          key={`${committee.id}-${memberIndex}`} // Ensuring a unique key
          className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
        >
          {memberIndex === 0 && (
            <td className="px-6 py-4 font-semibold" rowSpan={committee.members.length}>
              {committee.id}
            </td>
          )}
          {memberIndex === 0 && (
            <td className="px-6 py-4 font-semibold" rowSpan={committee.members.length}>
              {committee.name}
            </td>
          )}
          <td className="px-6 py-4">{member.name}</td>
          <td className="px-6 py-4">{member.role}</td>
        </tr>
      ))}
    </React.Fragment>
  ))}
</tbody>

            </table>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
