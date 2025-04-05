import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/HeroSection";

export default function AdviceCommittee() {
    const committeeMembers = [
      { id: 1, name: "SHRI. MAYUR R NAYAK", membership: "CHAIRMAN", appointment: "" },
      { id: 2, name: "SHRI. M I MAHALE, PRINCIPAL, HIMALAYA PU SCHOOL, ANKOLA", membership: "MEMBER", appointment: "" },
      { id: 3, name: "SHRI. G R NAYAK, RTD. PRINCIPAL, LOCAL EDUCATIONIST", membership: "MEMBER", appointment: "" },
      { id: 4, name: "SHRI. SANJEEV NAYAK, TALUK. PWD, (BUILDING), PWD, ANKOLA", membership: "MEMBER", appointment: "" },
      { id: 5, name: "SMT. MANGALALAKSHMI M PATIL BLOCK EDUCATION OFFICER, ANKOLA", membership: "MEMBER", appointment: "" },
      { id: 6, name: "DR. ARCHANA NAYAK TALUK HEALTH OFFICER", membership: "MEMBER", appointment: "" },
      { id: 7, name: "SHRI. RAJU NAYAK VII, PARENT REPRESENTATIVE (GIRLS)", membership: "MEMBER", appointment: "" },
      { id: 8, name: "SMT. UMA NAYAK VIII, PARENT REPRESENTATIVE (BOYS)", membership: "MEMBER", appointment: "" },
      { id: 9, name: "K LAVANYA, SENIOR MOST TEACHER, HIMALAYA SCHOOL", membership: "MEMBER", appointment: "" },
      { id: 10, name: "SMT. SAVITHA KANOJI, PRINCIPAL", membership: "MEMBER SECRETARY", appointment: "" }
    ];
  
    return (
        <div>
   <Header />
    <HeroSection
     backgroundImage="/aboutpage/vision_mission.jpg"
     title="Advisory Committee"
     subtitle="At Himalaya, we are dedicated to nurturing young minds with knowledge, values, and leadership."
   />
      <section className="py-12 px-4 md:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">
            Himalaya School Advisory Committee
          </h2>
          <div className="overflow-x-auto shadow-lg rounded-lg">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-200 text-gray-700 uppercase text-sm">
                <tr>
                  <th className="px-6 py-3 text-left">Sl.No</th>
                  <th className="px-6 py-3 text-left">Officers Name & Designation</th>
                  <th className="px-6 py-3 text-left">Membership</th>
                  <th className="px-6 py-3 text-left">Appointment</th>
                </tr>
              </thead>
              <tbody>
                {committeeMembers.map((member, index) => (
                  <tr
                    key={member.id}
                    className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                  >
                    <td className="px-6 py-4 font-semibold">{member.id}</td>
                    <td className="px-6 py-4">{member.name}</td>
                    <td className="px-6 py-4">{member.membership}</td>
                    <td className="px-6 py-4">{member.appointment}</td>
                  </tr>
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
