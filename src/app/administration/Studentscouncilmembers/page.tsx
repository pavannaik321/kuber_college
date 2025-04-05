import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/HeroSection";

const studentCouncil = [
  {
    id: "A",
    names: ["Yateesh Nayak", "Koushiki Kudalkar"],
    post: "School Captain",
    appointment: ["X std [Boys]", "X std [Girls]"]
  },
  {
    id: "B",
    names: ["Abhishek Gouda", "Harshita Gattimane"],
    post: "Sports Captain",
    appointment: ["IX std [Boys]", "IX std [Girls]"]
  },
  {
    id: "C",
    names: ["Aniket Kanjan", "Nishka Nayak"],
    post: "Cultural Captain",
    appointment: ["VIII A std [Boys]", "IX std [Girls]"]
  },
  {
    id: "D",
    names: ["N V Anvit", "Harshita Gader"],
    post: "Discipline Captain",
    appointment: ["VIII std [Boys]", "IX std [Girls]"]
  }
];

export default function StudentCouncil() {
  return (
    <div>
      <Header />
      <HeroSection
        backgroundImage="/aboutpage/vision_mission.jpg"
        title="Student Council Members Session 2022-23"
        subtitle="Nurturing leadership among students."
      />
      <section className="py-12 px-4 md:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">
            Student Council Members
          </h2>
          <div className="overflow-x-auto shadow-lg rounded-lg">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-200 text-gray-700 uppercase text-sm">
                <tr>
                  <th className="px-6 py-3 text-left">Sl.No</th>
                  <th className="px-6 py-3 text-left">Name</th>
                  <th className="px-6 py-3 text-left">Post Held</th>
                  <th className="px-6 py-3 text-left">Appointment</th>
                </tr>
              </thead>
              <tbody>
                {studentCouncil.map((member, index) => (
                  <tr
                    key={member.id}
                    className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                  >
                    <td className="px-6 py-4 font-semibold">{member.id}</td>
                    <td className="px-6 py-4">
                      {member.names.map((name, idx) => (
                        <div key={idx}>{idx + 1}] {name}</div>
                      ))}
                    </td>
                    <td className="px-6 py-4">{member.post}</td>
                    <td className="px-6 py-4">
                      {member.appointment.map((app, idx) => (
                        <div key={idx}>{app}</div>
                      ))}
                    </td>
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
