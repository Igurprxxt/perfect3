import React, { useState } from "react";
import { Check, Star, Truck } from "lucide-react";
import Link from "next/link";

const TrainingPackage = () => {
  const [hoverId, setHoverId] = useState();
  const trainingPackages = [
    {
      id: 1,
      tag: "Top Choice",
      title: "Perfect Plus Training Program",
      icon: <Star className="w-6 h-6 text-[#FF6B00]" />,
      features: [
        { label: "4–6 Weeks Duration" },
        { label: "Classroom + Behind-the-Wheel Training" },
        { label: "Pre-Trip Inspection & Road Test Prep" },
        { label: "CDL Class A License" },
      ],
    },
    {
      id: 2,
      tag: "Accelerated Option",
      title: "CDL Class A – Fast Track Package",
      icon: null,
      features: [
        { label: "3 Weeks Intensive Training" },
        { label: "Extended Daily Training Hours" },
        { label: "Weekend & Evening Classes Available" },
        { label: "Includes All Perfect Plus Features" },
      ],
    },
    {
      id: 3,
      tag: "For Returning Drivers",
      title: "CDL Refresher Course",
      icon: null,
      features: [
        { label: "1–2 Weeks Duration" },
        { label: "Skills Assessment + Safety Updates" },
        { label: "Road Training Included" },
        { label: "24/7 Premium Support" },
      ],
    },
    {
      id: 4,
      tag: "Bus & Delivery Focused",
      title: "CDL Class B Training",
      icon: null,
      features: [
        { label: "2–4 Weeks Duration" },
        { label: "Straight Truck & Bus Training" },
        { label: "Classroom + Hands-On Instruction" },
        { label: "Ideal for School Bus & Delivery Jobs" },
      ],
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-10 px-0 md:px-4 bg-[#0F256E] text-white font-inter">
      <div className="container mx-auto max-w-max">
        {/* Section Title */}

        <div className="text-center mb-16">
          <span className="sub-title mb-25">Pacific Truck School Programs</span>
          {/* <span className="text-[#FF6B00] text-lg sm:text-xl font-semibold mb-4 block animate-fade-in-down">
            Perfect Plus Training Program
          </span> */}
          <h2 className="text-2xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-up">
            Best Value Program
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up delay-200">
            Transform your career with our comprehensive training packages
            designed for every skill level.
          </p>
        </div>

        {/* Training Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 gap-y-10 justify-items-center">
          {trainingPackages?.map((pkg, index) => (
            <div
              key={pkg.id}
              className={`relative w-full max-w-sm bg-white text-[#0F256E] p-4 md:p-8 rounded-2xl shadow-xl border border-transparent
        transition-all duration-500 ease-in-out transform hover:scale-105 hover:border-[#FF6B00]
        group flex flex-col justify-between
        ${index === 0 ? "outline outline-2 outline-[#FF6B00]" : ""}`}
            >
              <div className="flex justify-center mt-2">
                <div className="w-16 h-16 bg-gradient-to-br from-[#08006a] to-[#0a0080] rounded-xl flex items-center justify-center shadow-lg">
                  <Truck className="w-8 h-8 text-white" />
                </div>
              </div>
              <div
                className={`absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 min-w-[220px] text-center rounded-full text-sm font-bold
    ${
      pkg.tag === "Top Choice"
        ? "bg-[#FF6B00] text-white shadow-md flex items-center justify-center gap-2"
        : "bg-gray-200 text-gray-700"
    }`}
              >
                {pkg.tag === "Top Choice" && pkg.icon}
                {pkg.tag}
              </div>

              <h4 className="text-xl md:text-2xl font-bold mt-4 md:t-8 mb-4 !text-[#0F256E] group-hover:text-[#FF6B00] transition-colors duration-300">
                {pkg.title}
              </h4>

              <ul className="space-y-3 mb-6 md:mb-8 flex-grow">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check
                      color="#0F256E"
                      className="w-5 h-5 flex-shrink-0 text-[#0F256E] group-hover:text-[#FF6B00] transition-colors duration-300"
                    />
                    <span className="text-gray-700 group-hover:text-[#0F256E] transition-colors duration-300">
                      {feature.label}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className="w-full py-3 mt-auto rounded-lg font-semibold text-white bg-[#0F256E] border border-[#0F256E]
                           transition-all duration-300 ease-in-out
                           hover:bg-[#FF6B00] hover:border-[#FF6B00] hover:shadow-lg"
              >
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
    // <section className="features-section rel z-1 py-130 rpy-100  bg-blue text-white">
    //   <div className="container">
    //     <div className="row justify-content-center mb-10">
    //       <div className="col-lg-8 text-center">
    //         <div className="section-title text-center mb-10">
    //           <span className="sub-title mb-25">
    //             Perfect Plus Training Program
    //           </span>
    //           <h2>Best Value Program</h2>
    //         </div>
    //       </div>{" "}
    //     </div>{" "}
    //     <div className="flex flex-wrap justify-center gap-6 w-full">
    //       {trainingPackages?.map((pkg, i) => (
    //         <div
    //           key={i}
    //           className="w-full cursor-pointer sm:w-[350px] border border-white text-white p-4 rounded-lg shadow-md transition-all duration-300 hover:bg-white hover:text-[#0F256E] hover:border-[#0F256E]"
    //           onMouseEnter={() => {
    //             setHoverId(i);
    //           }}
    //           onMouseLeave={() => {
    //             setHoverId();
    //           }}
    //         >
    //           {pkg.tag && (
    //             <span className="text-sm text-white bg-blue px-2 py-1 rounded-full inline-block mb-2 transition-all duration-300  ">
    //               {pkg.tag}
    //             </span>
    //           )}
    //           <h4
    //             className="text-lg font-semibold mb-3"
    //             style={{
    //               color: hoverId == i ? "#0F256E" : "",
    //             }}
    //           >
    //             {pkg.title}
    //           </h4>
    //           <ul className="space-y-2 mb-4">
    //             {pkg.features.map((feature, idx) => (
    //               <li key={idx} className="flex items-center gap-2">
    //                 {hoverId === i ? (
    //                   <Check className="w-4 h-4 stroke-[#0F256E]" />
    //                 ) : (
    //                   <Check className="w-4 h-4 stroke-white" />
    //                 )}

    //                 <span
    //                   style={{
    //                     color: hoverId == i ? "#0F256E" : "",
    //                   }}
    //                   className="hover:text-[#0F256E]"
    //                 >
    //                   {feature.label}
    //                 </span>
    //               </li>
    //             ))}
    //           </ul>
    //           <button className="bg-blue text-white border border-white px-4 py-2 rounded transition-all duration-300 ">
    //             <Link href="/enrollment"> Enroll Now</Link>
    //           </button>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    //   <img
    //     className="rectangle-dots"
    //     src="assets/images/shapes/rectangle-dots.png"
    //     alt="Shape"
    //   />
    //   <img
    //     className="circle-dots"
    //     src="assets/images/shapes/circle-dots.png"
    //     alt="Shape"
    //   />
    // </section>
  );
};

export default TrainingPackage;
