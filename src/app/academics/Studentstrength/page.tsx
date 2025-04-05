
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/HeroSection";


const studetstrength =  [
    { sl_no: 1, class: "LKG", strength: 17, class_teacher: "REKHA ACHARI" },
    { sl_no: 2, class: "UKG A", strength: 24, class_teacher: "SNEHA NAIK" },
    { sl_no: 3, class: "UKG B", strength: 26, class_teacher: "MANJULA" },
    { sl_no: 4, class: "I A", strength: 37, class_teacher: "KAVYA NAIK" },
    { sl_no: 5, class: "I B", strength: 37, class_teacher: "AMITA NAYAK" },
    { sl_no: 6, class: "II A", strength: 34, class_teacher: "SHIREEN SHAIKH" },
    { sl_no: 7, class: "II B", strength: 34, class_teacher: "REVATI GOUDA" },
    { sl_no: 8, class: "III A", strength: 37, class_teacher: "ANJALI GOUDA" },
    { sl_no: 9, class: "III B", strength: 40, class_teacher: "SHRUTI NAYAK" },
    { sl_no: 10, class: "IV A", strength: 32, class_teacher: "KARTIKA PEDNEKAR" },
    { sl_no: 11, class: "IV B", strength: 31, class_teacher: "KRATIKA NAIK" },
    { sl_no: 12, class: "IV C", strength: 30, class_teacher: "SAVITA NAYAK" },
    { sl_no: 13, class: "V A", strength: 29, class_teacher: "KRAPA NAIK" },
    { sl_no: 14, class: "V B", strength: 31, class_teacher: "LAXMI VERNEKAR" },
    { sl_no: 15, class: "V C", strength: 28, class_teacher: "YASHODA ACHARI" },
    { sl_no: 16, class: "VI A", strength: 31, class_teacher: "HEENA KOUSER" },
    { sl_no: 17, class: "VI B", strength: 31, class_teacher: "JYOTI GAONKAR" },
    { sl_no: 18, class: "VI C", strength: 32, class_teacher: "PRIYANKA ASHNOTKAR" },
    { sl_no: 19, class: "VII A", strength: 38, class_teacher: "UMA NAYAK" },
    { sl_no: 20, class: "VII B", strength: 35, class_teacher: "TRUPTI NAIK" },
    { sl_no: 21, class: "VII C", strength: 32, class_teacher: "JYOTI SHET" },
    { sl_no: 22, class: "VIII A", strength: 34, class_teacher: "MADHURA NAYAK" },
    { sl_no: 23, class: "VIII B", strength: 35, class_teacher: "UMA NAYAK" },
    { sl_no: 24, class: "IX A", strength: 33, class_teacher: "K LAVANYA" },
    { sl_no: 25, class: "IX B", strength: 34, class_teacher: "D.S.JOLAD" },
    { sl_no: 26, class: "X", strength: 24, class_teacher: "MEGHA NAYAK" }
  ]

export default function Studentstrength() {


  return (
    <div>
<Header />
    <HeroSection
     backgroundImage="/aboutpage/vision_mission.jpg"
     title="Student Strength"
     subtitle="At Himalaya, we are dedicated to nurturing young minds with knowledge, values, and leadership."
   />
 
    <div className="p-6">
     
        <div>
          <h2 className="text-xl font-bold mb-4">Student Strength</h2>
          <div className="overflow-x-auto shadow-lg rounded-lg">

          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead className="bg-gray-200 text-gray-700 uppercase text-sm">
              <tr>
                <th className="px-6 py-3 text-left">Sl. No</th>
                <th className="px-6 py-3 text-left">Class</th>
                <th className="px-6 py-3 text-left">Strength</th>
                <th className="px-6 py-3 text-left">Class Teacher</th>
              </tr>
            </thead>
            <tbody>
              {studetstrength.map((staff,index) => (
                <tr key={staff.sl_no} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                  <td className="px-6 py-4 font-semibold">{staff.sl_no}</td>
                  <td className="px-6 py-4">{staff.class}</td>
                  <td className="px-6 py-4">{staff.strength}</td>
                  <td className="px-6 py-4">{staff.class_teacher}</td>
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
