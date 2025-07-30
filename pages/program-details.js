"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Check,
  Mail,
  Phone,
  Heart,
  ArrowLeft,
  ArrowRight,
  MapPin,
  UsersRound,
  CheckCheck,
  Clock3,
  Laptop,
  CalendarClock,
  GraduationCap,
  LibraryBig,
} from "lucide-react";
import { useRef } from "react";
import { useRouter } from "next/router";
import Layout from "../src/layout/Layout";
import { trainingPackages } from "../src/components/trainingPackage";
import { notFound } from "next/navigation";
import E404 from "./404";

const Program = () => {
  const router = useRouter();
  const { id } = router?.query;

  console.log("router", router, id);

  const pkg = trainingPackages?.find((p) => p.id == id);

  const otherPackages = trainingPackages?.filter((p) => p.id != id);

  console.log("otherPackages", otherPackages);

  console.log("pkg", pkg);
  const [active, setActive] = useState(`collapse1`);
  const onClick = (value) => {
    console.log(value);
    setActive(value === active ? "" : value);
  };

  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(1);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const fullText = pkg?.fullDesc;

  const shortText = pkg?.fullDesc;

  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 300;
      const gap = 24;
      scrollContainerRef.current.scrollBy({
        left: -(cardWidth + gap),
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 300;
      const gap = 24;
      scrollContainerRef.current.scrollBy({
        left: cardWidth + gap,
        behavior: "smooth",
      });
    }
  };

  const iconList = [
    { icon: CheckCheck, label: "Conventional" },
    { icon: Clock3, label: "Realistic" },
    { icon: UsersRound, label: "Social" },
  ];
  const details = [
    {
      icon: CheckCheck,
      label: "Type:",
      value: "Short-term training 0-6 months",
    },
    {
      icon: Laptop,
      label: "Format:",
      value: "Online",
    },
    {
      icon: CalendarClock,
      label: "Hours:",
      value: "Part-time",
    },
    {
      icon: UsersRound,
      label: "Age:",
      value: "18 and up",
    },
    {
      icon: GraduationCap,
      label: "Requirements:",
      value: "High school diploma or equivalency",
    },
  ];

  if (!pkg) return E404();

  return (
    <>
      <Layout footer={1} header={1}>
        <section className="course-details-area pt-130 rpt-100">
          <div className="container">
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
              <div className="flex flex-col md:flex-row gap-6">
                <img
                  src={pkg?.image}
                  alt="Dental tools"
                  className="w-full md:w-80 h-48 rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">
                    {pkg?.title}
                  </h1>
                  <p className="text-sm text-gray-600 mb-4">{pkg?.shortDesc}</p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {isExpanded ? fullText : shortText}
                  </p>
                  {/* <button
                    onClick={toggleReadMore}
                    className="text-blue-500 text-sm font-medium flex items-center hover:text-blue-600"
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                    <svg
                      className={`w-4 h-4 ml-1 transform transition-transform ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button> */}
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
              {/* Left Column */}
              <div className="flex-1">
                {/* Career Stats Dashboard */}
                <div className="bg-blue-900 border text-white rounded-lg p-6 relative overflow-hidden">
                  {/* Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <svg
                      className="w-full h-full"
                      viewBox="0 0 400 300"
                      fill="none"
                    >
                      <path
                        d="M50 50L150 150M150 50L50 150M200 50L300 150M300 50L200 150M350 50L450 150"
                        stroke="currentColor"
                        strokeWidth="1"
                      />
                      <path
                        d="M0 100L100 200M100 100L0 200M150 100L250 200M250 100L150 200"
                        stroke="currentColor"
                        strokeWidth="1"
                      />
                    </svg>
                  </div>

                  <div className="relative z-10">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                      {/* Each stat card */}
                      <div className="bg-blue-900 rounded-lg p-2 md:p-4 border border-slate-600/30">
                        <p className="text-gray-300 text-sm mb-1">Leads to</p>
                        <p className="text-green-400 text-2xl md:text-3xl font-bold">
                          $46.5k Carrers
                        </p>
                      </div>
                      <div className="bg-blue-900 rounded-lg p-2 md:p-4 border border-slate-600/30">
                        <p className="text-gray-300 text-sm mb-1">Costs</p>
                        <p className="text-yellow-400 text-2xl md:text-3xl font-bold">
                          $4k
                        </p>
                      </div>
                      <div className="bg-blue-900 rounded-lg p-2 md:p-4 border border-slate-600/30">
                        <p className="text-gray-300 text-sm mb-1">Takes</p>
                        <p className="text-cyan-400 text-2xl md:text-3xl font-bold">
                          14 Weeks
                        </p>
                      </div>
                    </div>

                    {/* Career Example */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <span className="text-[#df6b2f] text-xs">
                          <LibraryBig color="#df6b2f" />
                        </span>
                      </div>
                      <div>
                        <p className="text-xs text-white font-bold tracking-wider">
                          EXAMPLE CAREER
                        </p>
                        <p className="text-white font-bold text-lg">
                          Dental Assistants
                        </p>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-3 mb-4 md:mb-6">
                      {iconList.map(({ icon: Icon, label }, idx) => (
                        <span
                          key={label} // safe and unique
                          className="bg-[#df6b2f] text-white px-2 md:px-4 py-1 md:py-2 rounded-full text-sm font-medium flex items-center gap-2"
                        >
                          <Icon className="text-xs" />
                          {label}
                        </span>
                      ))}
                    </div>

                    {/* Salary Table */}
                    <div className="bg-white text-gray-900 rounded-xl p-6 mb-6 shadow-lg overflow-x-auto">
                      <p className="text-xs text-gray-500 mb-4 font-medium tracking-wider">
                        SHOWING WAGE DATA FOR:
                      </p>
                      <table className="w-full min-w-[600px]">
                        <thead>
                          <tr className="border-b-2 border-gray-100">
                            <th className="text-left py-3 font-bold text-gray-800"></th>
                            <th className="text-center py-3 font-bold text-gray-800">
                              Entry
                            </th>
                            <th className="text-center py-3 font-bold text-gray-800">
                              Median
                            </th>
                            <th className="text-center py-3 font-bold text-gray-800">
                              High
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-100">
                            <td className="py-3 font-semibold text-gray-700">
                              Salary
                            </td>
                            <td className="text-center py-3 font-semibold text-gray-900">
                              $35,470
                            </td>
                            <td className="text-center py-3 font-semibold text-gray-900">
                              $46,540
                            </td>
                            <td className="text-center py-3 font-semibold text-gray-900">
                              $61,060
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 font-semibold text-gray-700">
                              Hourly Wage
                            </td>
                            <td className="text-center py-3 font-semibold text-gray-900">
                              $17.05
                            </td>
                            <td className="text-center py-3 font-semibold text-gray-900">
                              $22.38
                            </td>
                            <td className="text-center py-3 font-semibold text-gray-900">
                              $29.35
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <button className="w-full text-sm md:text-lg mt-4 md:mt-6 bg-[#df6b2f] text-white py-1 px-3 md:py-3 md:px-6 rounded-lg font-semibold transition-colors duration-200">
                        Show Salaries for my Area
                      </button>
                    </div>

                    {/* FAQs */}
                    <div className="space-y-1">
                      {[
                        "What skills and credentials will I gain?",
                        "What types of costs and discounts are involved?",
                        "Does it provide the support I need?",
                      ].map((question, index) => (
                        <div key={index}>
                          <button
                            onClick={() => toggleFaq(index)}
                            className="w-full text-left text-white hover:bg-blue-700 p-4 rounded-lg flex justify-between items-center transition-colors duration-200 font-medium"
                          >
                            {question}
                            <svg
                              className={`w-5 h-5 transform transition-transform duration-200 ${
                                expandedFaq === index ? "rotate-180" : ""
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </button>
                          {expandedFaq === index && (
                            <div className="bg-blue-700 p-4 rounded-lg mt-1 text-gray-300 border-l-4 border-orange-500">
                              <p>
                                Additional information about{" "}
                                {question.toLowerCase()}
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-80">
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
                  <h3 className="text-lg font-semibold mb-4">Quick Facts</h3>

                  <div className="space-y-4">
                    {details.map(({ icon: Icon, label, value }, i) => (
                      <div key={label} className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-[#df6b2f] rounded-full flex items-center justify-center mt-0.5">
                          <Icon size={16} className="text-white" />
                        </div>
                        <div>
                          <p className="font-medium">{label}</p>
                          <p className="text-sm text-gray-600">{value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <button
                    className="w-full text-white py-2 px-4 rounded font-medium hover:opacity-90"
                    style={{ backgroundColor: "#df6b2f" }}
                    onClick={() => {
                      router.push({
                        pathname: "/enrollment",
                      });
                    }}
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>

            <div className=" border my-6 rounded-md px-2 py-4 md:px-6 lg:px-8">
              <section className="mb-6 md:mb-12">
                <h2 className="text-xl md:text-3xl font-bold text-[#df6b2f] mb-2 md:mb-6">
                  Admissions
                </h2>
                <div className="flex items-center gap-2 text-md md:text-lg text-gray-700">
                  <Check className="w-5 h-5 text-[#df6b2f]" />
                  <span>High school diploma or equivalency</span>
                </div>
              </section>

              <section className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12 border p-3 md:p-4 rounded-md">
                <div>
                  <h2 className="text-xl md:text-3xl font-bold text-[#df6b2f] mb-6">
                    Who do I Contact?
                  </h2>
                  <div className="grid gap-6">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-100">
                        <Mail className="w-5 h-5 text-[#df6b2f]" />
                      </div>
                      <Link
                        href="#"
                        className="text-sm md:text-lg text-[#df6b2f] hover:underline"
                      >
                        Email: contact@getcdlready.com
                      </Link>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-100">
                        <Phone className="w-5 h-5 text-[#df6b2f]" />
                      </div>
                      <Link
                        href="#"
                        className="text-sm md:text-lg text-[#df6b2f] hover:underline"
                      >
                        Call: 916-595-9200
                      </Link>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-100">
                        <MapPin className="w-5 h-5 text-[#df6b2f]" />
                      </div>
                      <Link
                        href="#"
                        className="text-sm md:text-lg text-[#df6b2f] hover:underline"
                      >
                        WhatsApp: 916-595-9200
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="relative w-full h-[300px] rounded-lg overflow-hidden shadow-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14564.03187527638!2d-121.56258197067827!3d38.58378865234521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ad4171d24dd55%3A0x7f990eef29745109!2s532%20Houston%20St%2C%20West%20Sacramento%2C%20CA%2095691%2C%20USA!5e0!3m2!1sen!2sin!4v1753203962274!5m2!1sen!2sin"
                    height={900}
                    style={{ border: 0, width: "100%" }}
                    allowFullScreen=""
                    loading="lazy"
                  />
                  <div className="text-xs text-gray-600">
                    <p>Google</p>
                    <p>Map data {"\u00A9"}2025 Terms</p>
                  </div>
                </div>
              </section>

              <section className="border p-2 md:p-4 rounded-md">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg md:text-3xl font-bold text-[#df6b2f]">
                    Other Programs You Might Like
                  </h2>
                  <div className="flex gap-2">
                    <button
                      className="flex items-center justify-center rounded-full w-10 h-10 border border-[#df6b2f] text-[#df6b2f] hover:bg-[#e0f2f7] bg-transparent"
                      onClick={scrollLeft}
                    >
                      <ArrowLeft className="w-5 h-5" />
                    </button>
                    <button
                      className="flex items-center justify-center rounded-full w-10 h-10 border border-[#df6b2f] text-[#df6b2f] hover:bg-[#e0f2f7] bg-transparent"
                      onClick={scrollRight}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div
                  ref={scrollContainerRef}
                  className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide snap-x snap-mandatory"
                >
                  {otherPackages?.map((ele, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        router.push({
                          pathname: "/program-details/",
                          query: {
                            title: pkg.title,
                            id: pkg?.id,
                          },
                        });
                      }}
                      className="min-w-[260px] md:min-w-[300px] cursor-pointer max-w-[300px] rounded-lg overflow-hidden shadow-md snap-center bg-white"
                    >
                      <div className="relative w-full h-[180px]">
                        <Image
                          src={ele?.image}
                          alt="Electronic Medical Records"
                          layout="fill"
                          objectFit="cover"
                          className="rounded-t-lg"
                        />
                        <button className="absolute top-3 right-3 bg-white/80 rounded-full w-8 h-8 flex items-center justify-center">
                          <Heart className="w-5 h-5 text-gray-500" />
                        </button>
                      </div>
                      <div className="p-4">
                        <span className="inline-flex items-center rounded-md bg-[#df6b2f] px-2 py-1 text-xs font-medium text-white mb-2">
                          {ele?.title}
                        </span>
                        <h3 className="text-sm font-semibold text-gray-800 mb-2">
                          {ele?.shortDesc}
                        </h3>

                        {ele?.features?.map((ite, idx) => (
                          <div
                            key={idx}
                            className="flex flex-wrap gap-2 text-sm text-gray-700"
                          >
                            <span className="font-medium text-[#df6b2f]">
                              {ite?.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};
export default Program;
