import Link from "next/link";
import Layout from "../src/layout/Layout";

const NoSSRSelect = dynamic(() => import("react-select"), { ssr: false });
import dynamic from "next/dynamic";
import Slider from "react-slick";
import Index1WorkStepSlider from "../src/components/slider/Index1WorkStepSlider";
import { index1EventWrap, index1Testimonial } from "../src/sliderProps";
import { Check, Flag, Handshake, ShieldCheck, Star, Truck } from "lucide-react";
import z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import priceIcon_1 from "../public/assets/images/icon/6.webp";
import priceIcon_2 from "../public/assets/images/icon/7.webp";
import priceIcon_3 from "../public/assets/images/icon/8.webp";
import Image from "next/image";
import PricingPlan from "./pricing";
import { useState } from "react";
import BlogSection from "../src/components/blogSection";
import Testimonial from "../src/components/testimonials";

const Index1Isotope = dynamic(
  () => import("../src/components/isotope/Index1Isotope"),
  {
    ssr: false,
  }
);

export const trainingPackages = [
  {
    title: "Perfect Plus Training Program",
    tag: "Top Choice",
    // price: "$3,499",
    features: [
      { label: "4–6 Weeks Duration", icon: "Check" },
      { label: "Classroom + Behind-the-Wheel Training", icon: "Check" },
      { label: "Pre-Trip Inspection & Road Test Prep", icon: "Check" },
      { label: "CDL Class A License", icon: "Check" },
    ],
  },
  {
    title: "CDL Class A – Fast Track Package",
    tag: "Accelerated Option",
    // price: "$3,999",
    features: [
      { label: "3 Weeks Intensive Training", icon: "Check" },
      { label: "Extended Daily Training Hours", icon: "Check" },
      { label: "Weekend & Evening Classes Available", icon: "Check" },
      { label: "Includes All Perfect Plus Features", icon: "Check" },
    ],
  },
  {
    title: "CDL Refresher Course",
    tag: "For Returning Drivers",
    // price: "$1,299",
    features: [
      { label: "1–2 Weeks Duration", icon: "Check" },
      { label: "Skills Assessment + Safety Updates", icon: "Check" },
      { label: "Road Training Included", icon: "Check" },
      { label: "Flexible Scheduling", icon: "Check" },
    ],
  },
  {
    title: "CDL Class B Training",
    tag: "Bus & Delivery Focused",
    // price: "$2,499",
    features: [
      { label: "2–4 Weeks Duration", icon: "Check" },
      { label: "Straight Truck & Bus Training", icon: "Check" },
      { label: "Classroom + Hands-On Instruction", icon: "Check" },
      { label: "Ideal for School Bus & Delivery Jobs", icon: "Check" },
    ],
  },
];

const schema = z.object({
  name: z.string().optional(),
  email: z.string().optional(),
  phone: z.string().min(10, "Enter a valid phone number"),
  // inquiry: z.string().optional(),
  message: z.string().optional(),
});

const inquiryOptions = [
  { value: "cdl", label: "CDL Training" },
  { value: "pricing", label: "Pricing" },
  { value: "schedule", label: "Class Schedule" },
  { value: "other", label: "Other" },
];

export const reviews = [
  {
    name: "Bhupinder Singh",
    date: "2 months ago",
    content:
      "“The Best Training Experience You Can Get!” I’ve seen other CDL programs, but nothing compares to the training at Pacific Truck School. The staff is knowledgeable, professional, and dedicated to student success. Every lesson was clear, and the driving practice was solid. Highly recommend!",
    response:
      "Thank you so much for your kind words and support! We’re thrilled to hear that you had a great experience with us here in West Sacramento. Our team works hard to provide excellent service, and it means a lot to know we’re hitting the mark. If there’s anything else we can help you with, don’t hesitate to reach out. Looking forward to serving you again!",
  },
  {
    name: "Gurdeep Singh",
    date: "2 months ago",
    content:
      "A friend referred me to Pacific Truck School. The Perfect Plus CDL package they offer is very budget friendly compared to other truck schools in Sacramento. My instructor was very knowledgeable and flexible with my schedules. I got my class A CDL license in just 2 weeks!!",
    response:
      "Thank you so much for your kind words and support! We’re thrilled to hear that you had a great experience with us here in West Sacramento. Our team works hard to provide excellent service, and it means a lot to know we’re hitting the mark. If there’s anything else we can help you with, don’t hesitate to reach out. Looking forward to serving you again!",
  },
  {
    name: "Ravi Daksh",
    date: "2 months ago",
    content:
      "“Top-Quality CDL Training!” Pacific Truck School offers the best training in the area. The instructors are experienced and truly know how to prepare you for the road and the exam. They focus on safety, hands-on practice, and real-world driving. I got my Class A CDL confidently and quickly!",
  },
  {
    name: "Steve McKim",
    date: "2 months ago",
    content:
      "I had an amazing instructor and one-on-one attention when I needed it. Dave had walk-around videos that helped me with my pre-trip, which was the area I needed the most help in. He also made himself available on certain days and times to ensure I could make the hours I needed. All the people at Pacific Truck School were very accommodating, polite, and fun to work with.",
  },
  {
    name: "jbhangu",
    date: "2 months ago",
    content:
      "“Top-Rated Commercial Truck School!” This is the best Class A truck driving school in the area. They offer professional training, flexible scheduling, and excellent support throughout the process. I passed my test on the first try thanks to their high-quality program.",
  },
];

const Index = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      inquiry: "",
      message: "",
    },
  });
  const [hoverId, setHoverId] = useState();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };
  return (
    <Layout header={1} footer={1}>
      <section
        className="position-relative text-white"
        style={{
          backgroundImage: `url('/assets/images/vehicle-move_23-2151846038.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh", // ensure full height
        }}
      >
        {/* Blue Overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: 1,
          }}
        ></div>

        {/* Content */}
        <div
          className="container position-relative"
          style={{ zIndex: 2, paddingTop: 150, paddingBottom: 75 }}
        >
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="hero-content rpt-25 rmb-75">
                {/* <span className="sub-title style-two mb-4 wow fadeInUp delay-0-2s">
                  Driving School
                </span> */}
                <h1 className="mb-4 leading-tight font-bold text-6xl wow fadeInUp delay-0-4s text-blue ">
                  Looking for a driving school?
                </h1>
                <p className="wow fadeInUp delay-0-6s">
                  You’re in the perfect spot.
                </p>
                <div className="hero-btn mt-30 wow fadeInUp delay-0-8s">
                  {/* <Link legacyBehavior href="/course-grid"> */}
                  <a className="theme-btn">
                    Get Your Free Trial <i className="fas fa-arrow-right" />
                  </a>
                  {/* </Link> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="hero-right-images  wow fadeInUp delay-0-2s">
                <div className="bg-white p-4 rounded shadow-sm">
                  <h5 className="mb-3 text-center " style={{ color: "black" }}>
                    Book Your First Lesson Now
                  </h5>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-2">
                      <label className="form-label mb-1">Full Name</label>
                      <input
                        type="text"
                        placeholder="Enter name"
                        style={{ height: 40, fontSize: "14px" }}
                        className="form-control form-control-sm"
                        {...register("name")}
                      />
                    </div>
                    <div className="mb-2">
                      <label className="form-label mb-1">Email</label>
                      <input
                        type="email"
                        placeholder="Enter email"
                        style={{ height: 40, fontSize: "14px" }}
                        className="form-control form-control-sm"
                        {...register("email")}
                      />
                    </div>
                    <div className="mb-2">
                      <label className="form-label mb-1">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="Enter phone number"
                        style={{ height: 40, fontSize: "14px" }}
                        className={`form-control form-control-sm ${
                          errors.phone ? "is-invalid" : ""
                        }`}
                        {...register("phone")}
                      />
                      {errors.phone && (
                        <div className="invalid-feedback">
                          {errors.phone.message}
                        </div>
                      )}
                    </div>
                    {/* <div className="mb-2">
                      <label className="form-label mb-1">Inquiry About</label>
                      <Controller
                        control={control}
                        name="inquiry"
                        render={({ field }) => (
                          <NoSSRSelect
                            {...field}
                            options={inquiryOptions}
                            placeholder="Select a topic"
                            styles={{
                              control: (base, state) => ({
                                ...base,

                                backgroundColor: state.isFocused
                                  ? "#ffffff"
                                  : "#f7f7f7",
                                border: state.isFocused
                                  ? "1px solid #0d6efd"
                                  : "1px solid #f7f7f7",
                                boxShadow: "none",
                                minHeight: 40,
                                fontSize: 13,
                                cursor: "pointer",
                                transition: "all 0.2s ease-in-out",
                              }),
                              singleValue: (base) => ({
                                ...base,
                                color: "#333",
                              }),
                              placeholder: (base) => ({
                                ...base,
                                color: "#262d3d",
                                fontSize: "14px",
                                marginLeft: 20,
                                fontWeight: 700,
                              }),
                              option: (base, state) => ({
                                ...base,
                                backgroundColor: state.isFocused
                                  ? "#ffffff"
                                  : "#f7f7f7",
                                color: "#0d6efd", // Bootstrap blue
                                cursor: "pointer",
                                fontSize: 13,
                              }),
                              menu: (base) => ({
                                ...base,
                                backgroundColor: "#f7f7f7",
                                border: "1px solid #ccc ",
                                zIndex: 10,
                              }),
                              valueContainer: (base) => ({
                                ...base,
                                paddingTop: 4,
                                paddingBottom: 4,
                                paddingLeft: 8,
                              }),
                              indicatorsContainer: (base) => ({
                                ...base,
                                paddingRight: 6,
                              }),
                            }}
                          />
                        )}
                      />
                    </div> */}
                    <div className="mb-3">
                      <label className="form-label mb-1">Message</label>
                      <textarea
                        rows={2}
                        style={{ fontSize: "14px" }}
                        placeholder="Enter message"
                        className="form-control form-control-sm"
                        {...register("message")}
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="btn  btn-md w-100"
                      style={{ backgroundColor: "#DF6B2F", color: "white" }}
                    >
                      Submit Request
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className="bg-text">Drive</span>
      </section>
      {/* Hero Section End */}
      {/* Features Section Start done */}
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
            {trainingPackages.map((pkg, i) => (
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
                  Enroll Now
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
      {/* Features Section End */}
      {/* About Section Start */}
      <section className="about-section pt-130 rpt-100">
        <div className="container">
          <div className="row">
            {/* 🔽 Image Column */}
            <div className="col-lg-5 align-self-stretch">
              <div className="h-full w-full">
                <img
                  src="/assets/images/about2.jpeg"
                  alt="Hero"
                  className=" w-full h-[100%] md:w-full md:h-[80%] object-cover rounded"
                />
              </div>
            </div>

            {/* 🔽 Content Column */}
            <div className="col-lg-7 mt-12 md:mt-0">
              <div className="about-content rel z-2 pb-115 rpb-85 wow fadeInRight delay-0-2s h-full">
                {/* Title */}
                <div className="section-title mb-10">
                  <span className="sub-title mb-25">About Us</span>
                  <h2>We Provide Life Coach From Expert Advisors</h2>
                </div>

                {/* Description */}
                <div className="mb-4">
                  <p className="mb-3">
                    Founded in January 2025, our PCDL School was created with a
                    clear purpose: to train and prepare professional drivers who
                    are ready to hit the road and help drive America’s economy
                    forward.
                  </p>
                  <p className="mb-3">
                    With over 25 years of experience in the trucking industry,
                    our founder brings deep industry knowledge, real-world
                    insight, and a passion for excellence to every aspect of our
                    training program. We believe that skilled, safety-conscious
                    drivers are the backbone of the transportation sector—and
                    we’re here to help shape the next generation.
                  </p>
                  <p>
                    At our school, we’re not just teaching people how to
                    drive—we’re building careers, strengthening communities, and
                    fueling progress across the nation.
                  </p>
                </div>

                {/* Mission & Vision */}
                <div className="about-features">
                  <div className="row">
                    {[
                      {
                        title: "Our Mission",
                        desc: `To empower aspiring drivers with the skills, confidence, and professionalism needed to succeed in the trucking industry—while upholding the highest standards of safety, integrity, and service.`,
                      },
                      {
                        title: "Our Vision",
                        desc: `To become a leading force in commercial driver education—shaping a future where every road is driven by skilled, responsible, and empowered professionals who keep America moving.`,
                      },
                    ].map((item, idx) => (
                      <div key={idx} className="col-12 mb-3">
                        <div className="feature-item w-full">
                          <div className="icon hidden md:block">
                            <i className="fas fa-check" />
                          </div>
                          <div className="content">
                            <h5>{item.title}</h5>
                            <p>{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Button */}
                <div className="about-btns mt-4">
                  <button className="theme-btn style-two my-15">
                    Learn more about us <i className="fas fa-arrow-right" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section Start */}
      <section className="events-section rel z-1 py-130 rpy-100 bg-blue text-white">
        <div className="container">
          <div className="row justify-center">
            <div className="col-xl-7 col-lg-8 col-md-9">
              <div className="section-title text-center mb-55">
                <span className="sub-title mb-25">Events & Programs</span>
                <h2>Driving Dreams, Building Community</h2>
              </div>
            </div>
          </div>

          <Slider {...index1EventWrap} className="event-wrap">
            <div className="event-item wow fadeInUp delay-0-2s">
              <div className="image">
                <img src="/assets/images/1319.jpg" alt="Graduation Ceremony" />
                <span className="date">June 22, 2025</span>
              </div>
              <div className="content">
                <h4>Graduation Day – Class A CDL Batch</h4>
                <span className="location">
                  <i className="fas fa-map-marker-alt" /> West Sacramento
                  Training Yard
                </span>
              </div>
            </div>

            <div className="event-item wow fadeInUp delay-0-4s">
              <div className="image">
                <img
                  src="/assets/images/2149426492.jpg"
                  alt="Safety Awareness Week"
                />
                <span className="date">May 5–9, 2025</span>
              </div>
              <div className="content">
                <h4>National Trucking Safety Week</h4>
                <span className="location">
                  <i className="fas fa-map-marker-alt" /> Main Campus, Classroom
                  A
                </span>
              </div>
            </div>

            <div className="event-item wow fadeInUp delay-0-6s">
              <div className="image">
                <img
                  src="/assets/images/comrades-achievement-employee-appreciation-photo_960396-53771.jpeg"
                  alt="CDL Job Fair"
                />
                <span className="date">August 18, 2025</span>
              </div>
              <div className="content">
                <h4>CDL Career Day & Employer Meet</h4>
                <span className="location">
                  <i className="fas fa-map-marker-alt" /> Sacramento Convention
                  Center
                </span>
              </div>
            </div>

            <div className="event-item wow fadeInUp delay-0-2s">
              <div className="image">
                <img src="/assets/images/46521.jpg" alt="Skills Challenge" />
                <span className="date">September 14, 2025</span>
              </div>
              <div className="content">
                <h4>Truck Handling & Skills Challenge</h4>
                <span className="location">
                  <i className="fas fa-map-marker-alt" /> Driving Practice Yard
                </span>
              </div>
            </div>
          </Slider>
        </div>

        <span className="bg-text">Drive</span>
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

      {/* Events Section End */}

      <section className="core-values-section py-130 rpy-100 wow fadeInUp delay-0-2s">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="core-values-image overlay">
                <img
                  src="/assets/images/2151846035.jpg"
                  alt="Core Values"
                  className="w-full h-full"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="core-values-content bg-lighter p-6">
                <div className="section-title mb-6">
                  <span className="sub-title ">Our Core Values</span>
                </div>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Truck className="h-6 w-6 text-[#4CAF50] flex-shrink-0" />{" "}
                      {/* Green color for truck */}
                      <h3 className="text-lg font-bold">
                        Excellence in Training
                      </h3>
                    </div>
                    <p>
                      We are committed to delivering top-quality education that
                      equips our students with the skills and confidence to
                      succeed on the road.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="h-6 w-6 text-[#F44336] flex-shrink-0" />{" "}
                      {/* Green color for truck */}
                      <h3 className="text-lg font-bold">Safety First</h3>
                    </div>
                    <p>
                      Safety is at the heart of everything we do—from our
                      curriculum to our driving practices—ensuring our graduates
                      are responsible and road-ready.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Handshake className="h-6 w-6 text-[#FFC107] flex-shrink-0" />{" "}
                      {/* Green color for truck */}
                      <h3 className="text-lg font-bold">
                        Integrity and Respect
                      </h3>
                    </div>
                    <p>
                      We foster a culture of honesty, respect, and
                      professionalism, both in the classroom and on the road.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Star className="h-6 w-6 text-[#FFEB3B] flex-shrink-0" />{" "}
                      {/* Green color for truck */}
                      <h3 className="text-lg font-bold">
                        Empowerment Through Opportunity
                      </h3>
                    </div>
                    <p>
                      We believe in opening doors to meaningful careers by
                      providing accessible, supportive, and career-focused
                      training.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Flag className="h-6 w-6 text-[#2196F3] flex-shrink-0" />{" "}
                      {/* Green color for truck */}
                      <h3 className="text-lg font-bold">
                        Driving America Forward
                      </h3>
                    </div>
                    <p>
                      Our mission goes beyond training drivers—we’re helping
                      power the economy by preparing the workforce that keeps
                      America moving.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section End */}

      {/* Testimonials Section Start */}

      <Testimonial />

      {/* Testimonials Section End */}
      {/* Blog Section Start */}

      <BlogSection />
    </Layout>
  );
};
export default Index;
