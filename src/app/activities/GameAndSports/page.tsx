import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/HeroSection";
import React from "react";
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

const GameAndSports = () => {
  return (
    <div>
        <Header/>
          <HeroSection
                     backgroundImage="/aboutpage/vision_mission.jpg"
                     title="GAMES AND SPORTS"
                     subtitle="At Himalaya, we are dedicated to nurturing young minds with knowledge, values, and leadership."
                   />
    <div className="p-6 md:p-12 bg-gray-100">
      {/* Section 1: Art in Education */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">GAMES AND SPORTS</h2>
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
          <p className="text-gray-700 leading-relaxed">
          It will be obligatory for every child to take part in Sports and Games, like Mass Drills, athletic events, and Yoga under the guidance of the Dept. of Sports and Games. Teams for the participation in local Sports n Games Meet, will be chosen and trained in a planned way. Each child is expected to excel minimum in two outer games, one indoor game and one athletic event.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
          Inter House Matches will be conducted on League Basis as per the schedule outlined in the Calendar of Events. All the possible games – i.e. Practice of Meditation, Kho-Kho, Kabbadi, Foot Ball, Volley Ball, Hand Ball, Cricket, Tennicoit, Shuttle Badminton, Table Tennis, Carom and Chess will be entertained by the School.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
          In order to inculcate hobbies and to develop them among the children, Clubs have been formed as per the requirement of New Education Policy. It will be obligatory for every child to take part in Sports and Games. Athletic events, drills of various types and Yoga will be dealt by the Dept. of Sports and Games.
          </p>
        </div>
      </div>
      

      <div className="max-w-4xl mx-auto mt-8">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">VARIOUS GAMES</h3>
        <div className="text-gray-700 bg-white shadow-lg p-6 rounded-lg border border-gray-200">
        <p className="text-gray-700 leading-relaxed">
        1.Volley Ball, 2. Kho-Kho, 3. Kabaddi, 4. Hand ball, 5. Basket Ball, 6. Foot Ball, 7. Table Tennis, 8.Tennicoit ( for Girls ) 9. Cricket as per the facilities available in the Campus.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-8">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">ATHELETICS</h3>
        <div className="text-gray-700 bg-white shadow-lg p-6 rounded-lg border border-gray-200">
        <p className="text-gray-700 leading-relaxed">
        All events except Hammer throw & Pole Vault.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-8">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">USE OF LIGHT APP., Hindi Lezium with Exercises.</h3>
        <div className="text-gray-700 bg-white shadow-lg p-6 rounded-lg border border-gray-200">
        <p className="text-gray-700 leading-relaxed">
        Action Song Dumbles:- Eight exercises. (The above exercises of mass display will be Exhibited during, Sports day, Republic Day and Other Meets like Cluster / Block Level/ District Level Meets)
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-8">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">VARIOUS CLUBS IN ACTION:</h3>
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
};

export default GameAndSports;