import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/HeroSection";

export default function Successiveprincipals() {
    const principalData = [
        { id: 1, name: "Gulshad Begum", from: 2017, to: 2018 },
        { id: 2, name: "M I Mahale", from: 2018, to: 2019 },
        { id: 3, name: "Dr. ACS Reddy", from: 2019, to: 2023 },
        { id: 4, name: "Smt. Savitha Kanoji", from: 2023, to: "till today" }
      ];
  
    return (
        <div>
   <Header />
    <HeroSection
     backgroundImage="/aboutpage/vision_mission.jpg"
     title="Successive Principals"
     subtitle="At Himalaya, we are dedicated to nurturing young minds with knowledge, values, and leadership."
   />
      <section className="py-12 px-4 md:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">
          Successive Principals
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
                {principalData.map((member, index) => (
                  <tr
                    key={member.id}
                    className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                  >
                    <td className="px-6 py-4 font-semibold">{member.id}</td>
                    <td className="px-6 py-4">{member.name}</td>
                    <td className="px-6 py-4">{member.from}</td>
                    <td className="px-6 py-4">{member.to}</td>
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
