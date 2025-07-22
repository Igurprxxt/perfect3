import React, { useState } from "react";
import { trainingPackages } from "../../../pages";
import { Check } from "lucide-react";

const TrainingPackage = () => {
  const [hoverId, setHoverId] = useState();

  return (
    <section className="features-section rel z-1 py-130 rpy-100  bg-blue text-white">
      <div className="container">
        <div className="row justify-content-center mb-10">
          <div className="col-lg-8 text-center">
            <div className="section-title text-center mb-10">
              <span className="sub-title mb-25">
                Perfect Plus Training Program
              </span>
              <h2>Best Value Program</h2>
            </div>
          </div>{" "}
        </div>{" "}
        <div className="flex flex-wrap justify-center gap-6 w-full">
          {trainingPackages?.map((pkg, i) => (
            <div
              key={i}
              className="w-full cursor-pointer sm:w-[350px] border border-white text-white p-4 rounded-lg shadow-md transition-all duration-300 hover:bg-white hover:text-[#0F256E] hover:border-[#0F256E]"
              onMouseEnter={() => {
                setHoverId(i);
              }}
              onMouseLeave={() => {
                setHoverId();
              }}
            >
              {pkg.tag && (
                <span className="text-sm text-white bg-blue px-2 py-1 rounded-full inline-block mb-2 transition-all duration-300  ">
                  {pkg.tag}
                </span>
              )}
              <h4
                className="text-lg font-semibold mb-3"
                style={{
                  color: hoverId == i ? "#0F256E" : "",
                }}
              >
                {pkg.title}
              </h4>
              <ul className="space-y-2 mb-4">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    {hoverId === i ? (
                      <Check className="w-4 h-4 stroke-[#0F256E]" />
                    ) : (
                      <Check className="w-4 h-4 stroke-white" />
                    )}

                    <span
                      style={{
                        color: hoverId == i ? "#0F256E" : "",
                      }}
                      className="hover:text-[#0F256E]"
                    >
                      {feature.label}
                    </span>
                  </li>
                ))}
              </ul>
              <button className="bg-blue text-white border border-white px-4 py-2 rounded transition-all duration-300 ">
                <a href="/enrollment"> Enroll Now</a>
              </button>
            </div>
          ))}
        </div>
      </div>
      <img
        className="rectangle-dots"
        src="assets/images/shapes/rectangle-dots.png"
        alt="Shape"
      />
      <img
        className="circle-dots"
        src="assets/images/shapes/circle-dots.png"
        alt="Shape"
      />
    </section>
  );
};

export default TrainingPackage;
