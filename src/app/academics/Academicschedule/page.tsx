
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/HeroSection";


const academic_schedule= [
    { from: "09:30AM", to: "09:40AM", activity: "ASSEMBLY" },
    { from: "09:40AM", to: "10:20AM", activity: "Ist PERIOD" },
    { from: "10:20AM", to: "11:00AM", activity: "IInd PERIOD" },
    { from: "11:00AM", to: "11:10AM", activity: "SHORT BREAK" },
    { from: "11:10AM", to: "11:50AM", activity: "IIIrd PERIOD" },
    { from: "11:50AM", to: "12:30PM", activity: "IVth PERIOD" },
    { from: "12:30PM", to: "1:20PM", activity: "LUNCH BREAK" },
    { from: "1:20PM", to: "2:00PM", activity: "Vth PERIOD" },
    { from: "2:00PM", to: "2:40PM", activity: "VIth PERIOD" },
    { from: "2:40PM", to: "2:50PM", activity: "SHORT BREAK" },
    { from: "2:50PM", to: "3:30PM", activity: "VIIth PERIOD" },
    { from: "3:30PM", to: "4:10PM", activity: "VIIIth PERIOD" },
    { from: "4:10PM", to: "", activity: "LONG BELL" },
    { from: "4:10PM", to: "4:45PM", activity: "Special Classes & Remedial work by the Teachers." }
  ]
export default function Academicshedule() {


  return (
    <div>
<Header />
    <HeroSection
     backgroundImage="/aboutpage/vision_mission.jpg"
     title="Academic Schedule"
     subtitle="At Himalaya, we are dedicated to nurturing young minds with knowledge, values, and leadership."
   />
 
    <div className="p-6">
     
        <div>
          <h2 className="text-xl font-bold mb-4">Academic Schedule</h2>
          <div className="overflow-x-auto shadow-lg rounded-lg">

          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead className="bg-gray-200 text-gray-700 uppercase text-sm">
              <tr>
                <th className="px-6 py-3 text-left">From</th>
                <th className="px-6 py-3 text-left">To</th>
                <th className="px-6 py-3 text-left">Activity</th>
              </tr>
            </thead>
            <tbody>
              {academic_schedule.map((staff,index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                  <td className="px-6 py-4 font-semibold">{staff.from}</td>
                  <td className="px-6 py-4">{staff.to}</td>
                  <td className="px-6 py-4">{staff.activity}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
  
    </div>
    <Footer />
    </div>
  );
}
