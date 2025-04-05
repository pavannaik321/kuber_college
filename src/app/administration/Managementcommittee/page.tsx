import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/HeroSection";

export default function ManagementCommittee() {
    const committeeMembers = [
      { id: 1, name: "SHRI. MAYUR R NAYAK", membership: "CHAIRMAN", appointment: "" },
      { id: 2, name: "DR SHRUTI M NAYAK", membership: "MEMBER SECRETORY", appointment: "" },
      { id: 3, name: "SMT. SAVITA KANOJI", membership: "MEMBER", appointment: "" },
      { id: 4, name: "SHRI. PRAVEEN NAIK", membership: "MEMBER", appointment: "" },
      { id: 5, name: "SHRI. RAJESH NAYAK", membership: "MEMBER", appointment: "" },
      { id: 6, name: "Dr. ARCHANA NAYAK", membership: "MEMBER", appointment: "" },
      { id: 7, name: "SMT. SUNITA GOUDA", membership: "MEMBER", appointment: "" },
      { id: 8, name: "SMT. K LAVANYA", membership: "MEMBER", appointment: "" },
    ];
  
    return (
        <div>

   <Header />
    <HeroSection
     backgroundImage="/aboutpage/vision_mission.jpg"
     title="Management Committee"
     subtitle="At Himalaya, we are dedicated to nurturing young minds with knowledge, values, and leadership."
   />
      <section className="py-12 px-4 md:px-16 bg-gray-50">
        
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">
            Himalaya School Management Committee
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
  