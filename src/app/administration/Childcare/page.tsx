import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/HeroSection";

export default function ChildCare() {
    const schoolCommittee = [
        { id: 1, name: "SMT. Savitha Kanoji, Principal Himalaya LP & High School", post: "Chairman" },
        { id: 2, name: "K Lavanya, Senior Most Teacher", post: "Member" },
        { id: 3, name: "DS Jolad, PGT (Male)", post: "Member" },
        { id: 4, name: "Kruti Unavane, PGT (Female)", post: "Member" },
        { id: 5, name: "Amar Gaonkar, PET", post: "Member" },
        { id: 6, name: "Uma Nayak, TGT (Female)", post: "Member" },
        { id: 7, name: "Ganapati Prabhu, Office Assistant", post: "Member" },
        { id: 8, name: "N.V. Anvith, Boys Captain", post: "Member" },
        { id: 9, name: "Raksha Harikantra, Girls Captain", post: "Member" }
      ];
    return (
        <div>
   <Header />
    <HeroSection
     backgroundImage="/aboutpage/vision_mission.jpg"
     title="POCSO"
     subtitle="At Himalaya, we are dedicated to nurturing young minds with knowledge, values, and leadership."
   />
      <section className="py-12 px-4 md:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">
          POCSO(Protection of Children from Sexual Offenses) Committee]
          </h2>
          <div className="overflow-x-auto shadow-lg rounded-lg">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-200 text-gray-700 uppercase text-sm">
                <tr>
                  <th className="px-6 py-3 text-left">Sl.No</th>
                  <th className="px-6 py-3 text-left">Name</th>
                  <th className="px-6 py-3 text-left">Post Held</th>
                </tr>
              </thead>
              <tbody>
                {schoolCommittee.map((member, index) => (
                  <tr
                    key={member.id}
                    className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                  >
                    <td className="px-6 py-4 font-semibold">{member.id}</td>
                    <td className="px-6 py-4">{member.name}</td>
                    <td className="px-6 py-4">{member.post}</td>

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
