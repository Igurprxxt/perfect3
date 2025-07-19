import Link from "next/link";
import Layout from "../src/layout/Layout";

const NoSSRSelect = dynamic(() => import("react-select"), { ssr: false });
import dynamic from "next/dynamic";
import Slider from "react-slick";
import Index1WorkStepSlider from "../src/components/slider/Index1WorkStepSlider";
import { index1EventWrap, index1Testimonial } from "../src/sliderProps";
import { Check } from "lucide-react";
import z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import priceIcon_1 from "../public/assets/images/icon/6.webp";
import priceIcon_2 from "../public/assets/images/icon/7.webp";
import priceIcon_3 from "../public/assets/images/icon/8.webp";
import Image from "next/image";
import PricingPlan from "./pricing";

const Index1Isotope = dynamic(
  () => import("../src/components/isotope/Index1Isotope"),
  {
    ssr: false,
  }
);

const trainingPackages = [
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

const reviews = [
  {
    name: "Bhupinder Singh",
    date: "2 months ago",
    content:
      "“The Best Training Experience You Can Get!” I’ve seen other CDL programs, but nothing compares to the training at Pacific Truck School. The staff is knowledgeable, professional, and dedicated to student success. Every lesson was clear, and the driving practice was solid. Highly recommend!",
    response:
      "Thank you so much for your kind words and support! We're thrilled to hear that you had a great experience with us here in West Sacramento. Our team works hard to provide excellent service, and it means a lot to know we’re hitting the mark. If there's anything else we can help you with, don’t hesitate to reach out. Looking forward to serving you again!",
  },
  {
    name: "Gurdeep Singh",
    date: "2 months ago",
    content:
      "A friend referred me to Pacific Truck School. The Perfect Plus CDL package they offer is very budget friendly compared to other truck schools in Sacramento. My instructor was very knowledgeable and flexible with my schedules. I got my class A CDL license in just 2 weeks!!",
    response:
      "Thank you so much for your kind words and support! We're thrilled to hear that you had a great experience with us here in West Sacramento. Our team works hard to provide excellent service, and it means a lot to know we’re hitting the mark. If there's anything else we can help you with, don’t hesitate to reach out. Looking forward to serving you again!",
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

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };
  return (
    <Layout header={1} footer={1}>
      <section
        className="position-relative text-white"
        style={{
          backgroundImage: `url('/assets/images/banner.jpeg')`,
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
            backgroundColor: "rgba(0, 0, 0, 0.2)",
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
                <span className="sub-title style-two mb-4 wow fadeInUp delay-0-2s">
                  Driving School
                </span>
                <h1 className="mb-4 leading-normal font-bold text-6xl wow fadeInUp delay-0-4s text-blue ">
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
                    Contact Us
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
            {" "}
            <div className="col-lg-8 text-center">
              <div className="section-title text-center mb-10">
                <span className="sub-title mb-25">
                  Perfect Plus Training Program
                </span>
                <h2>Best Value Program</h2>
              </div>
            </div>{" "}
          </div>{" "}
          <div className="flex  justify-center gap-6 w-full">
            {trainingPackages.map((pkg, i) => (
              <div
                key={i}
                className="w-full sm:w-[400px] border border-white text-blue p-4 rounded-lg shadow-md"
              >
                {pkg.tag && (
                  <span className="text-sm text-white bg-blue px-2 py-1 rounded-full inline-block mb-2">
                    {pkg.tag}
                  </span>
                )}
                <h4 className="text-lg font-semibold mb-3">{pkg.title}</h4>
                <ul className="space-y-2 mb-4">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span>{feature.label}</span>
                    </li>
                  ))}
                </ul>
                <button className="bg-blue text-white border border-white px-4 py-2 rounded">
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
            <div className="col-lg-5 align-self-start">
              <div className="  wow fadeInLeft delay-0-2s">
                <img
                  src="/assets/images/about2.jpeg"
                  alt="Hero"
                  height={550}
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="about-content rel z-2 pb-115 rpb-85 wow fadeInRight delay-0-2s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-25">about us</span>
                  <h2>We Provide Life Coach From Expert Advisors</h2>
                </div>
                <div className="about-features">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="feature-item">
                        <div className="icon">
                          <i className="fas fa-check" />
                        </div>
                        <div className="content">
                          <h5>Exclusive Coach</h5>
                          <p>Sit consectetur adipiscing eiuse tempor incides</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="feature-item">
                        <div className="icon">
                          <i className="fas fa-check" />
                        </div>
                        <div className="content">
                          <h5>Creative Minds</h5>
                          <p>Sit consectetur adipiscing eiuse tempor incides</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="feature-item">
                        <div className="icon">
                          <i className="fas fa-check" />
                        </div>
                        <div className="content">
                          <h5>Master Certified</h5>
                          <p>Sit consectetur adipiscing eiuse tempor incides</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="feature-item">
                        <div className="icon">
                          <i className="fas fa-check" />
                        </div>
                        <div className="content">
                          <h5>Video Tutorials</h5>
                          <p>Sit consectetur adipiscing eiuse tempor incides</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="about-btns">
                  {/* <Link legacyBehavior href="/about"> */}
                  <a className="theme-btn style-two my-15">
                    Learn more us <i className="fas fa-arrow-right" />
                  </a>
                  {/* </Link> */}
                  {/* <Link legacyBehavior href="/faqs"> */}
                  <a className="read-more">
                    How it works <i className="fas fa-arrow-right" />
                  </a>
                  {/* </Link> */}
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
                <img src="assets/images/video/video-bg.jpg" alt="Core Values" />
                <a
                  href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                  className="mfp-iframe video-play"
                >
                  <i className="fas fa-play" />
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="core-values-content bg-lighter p-6">
                <div className="section-title mb-6">
                  <span className="sub-title ">Our Core Values</span>
                </div>
                <ul className="space-y-4">
                  <li>
                    <strong>🚛 Excellence in Training</strong>
                    <br />
                    We are committed to delivering top-quality education that
                    equips our students with the skills and confidence to
                    succeed on the road.
                  </li>
                  <li>
                    <strong>🛡️ Safety First</strong>
                    <br />
                    Safety is at the heart of everything we do—from our
                    curriculum to our driving practices—ensuring our graduates
                    are responsible and road-ready.
                  </li>
                  <li>
                    <strong>🤝 Integrity and Respect</strong>
                    <br />
                    We foster a culture of honesty, respect, and
                    professionalism, both in the classroom and on the road.
                  </li>
                  <li>
                    <strong>🌟 Empowerment Through Opportunity</strong>
                    <br />
                    We believe in opening doors to meaningful careers by
                    providing accessible, supportive, and career-focused
                    training.
                  </li>
                  <li>
                    <strong>🇺🇸 Driving America Forward</strong>
                    <br />
                    Our mission goes beyond training drivers—we’re helping power
                    the economy by preparing the workforce that keeps America
                    moving.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section End */}

      {/* Testimonials Section Start */}

      <section className="features-section rel z-1 py-130 rpy-100  bg-blue text-white">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-5">
              <div className="testimonial-left-content rmb-65 wow fadeInLeft delay-0-2s">
                <div className="section-title">
                  <span className="sub-title mb-15">Testimonials</span>
                  <h2>What Our Students Say</h2>
                </div>
                <p>
                  We take pride in helping our students achieve their goals.
                  Hear from real graduates who trained with us and now thrive in
                  the trucking industry.
                </p>
                <h4 className="partner-title mt-25 mb-15">
                  We’ve Helped Over <span>1,000+</span> Students Get CDL
                  Certified
                </h4>
                <div className="partner-iamges-wrap">
                  <img
                    src="assets/images/testimonials/partner1.jpg"
                    alt="Partner"
                  />
                  <img
                    src="assets/images/testimonials/partner2.jpg"
                    alt="Partner"
                  />
                  <img
                    src="assets/images/testimonials/partner3.jpg"
                    alt="Partner"
                  />
                  <img
                    src="assets/images/testimonials/partner4.jpg"
                    alt="Partner"
                  />
                  <img
                    src="assets/images/testimonials/partner5.jpg"
                    alt="Partner"
                  />
                  <img
                    src="assets/images/testimonials/partner6.jpg"
                    alt="Partner"
                  />
                  <span className="plus">+</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <Slider
                {...index1Testimonial}
                className="testimonial-wrap wow fadeInRight delay-0-2s text-white"
              >
                {reviews?.map((t, idx) => (
                  <div className="testimonial-item" key={idx}>
                    <div className="testimonial-content">
                      <div className=" flex items-center justify-start! gap-9 mb-4">
                        {t.avatar ? (
                          <img src={t.avatar} alt={t.name} />
                        ) : (
                          <div className="w-16 h-16 rounded-full bg-gray-200 text-gray-800 font-semibold flex items-center justify-center text-sm">
                            {t.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                        )}
                        <h4>{t.name}</h4>
                        {/* <span>{t.content}</span> */}
                      </div>
                      <p>{t.content}</p>
                      <div className="ratting">
                        {[...Array(5)].map((_, i) => (
                          <i className="fas fa-star" key={i} />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
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
      <section className="testimonials-section bg-white rel z-1 py-130 rpy-100"></section>

      {/* Testimonials Section End */}
      {/* Blog Section Start */}
      <section className="blog-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-8">
              <div className="section-title text-center mb-55">
                <span className="sub-title mb-20">News &amp; Blog</span>
                <h2>Read Some Store About News &amp; Blog</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="blog-item big-item wow fadeInUp delay-0-2s">
                <div className="blog-image">
                  <img src="assets/images/blog/blog1.jpg" alt="Blog" />
                </div>
                <div className="blog-content">
                  <span className="date">
                    <span>25</span> March
                  </span>
                  <div className="content">
                    <h4>
                      <Link legacyBehavior href="/blog-details">
                        Building Web Layouts For Dual-Screen And Foldable
                        Devices Designing
                      </Link>
                    </h4>
                    <ul className="blog-meta">
                      <li>
                        <i className="far fa-user" />{" "}
                        <Link legacyBehavior href="/blog">
                          By Somalia
                        </Link>
                      </li>
                      <li>
                        <i className="far fa-comments" />{" "}
                        <Link legacyBehavior href="/blog">
                          Comments (5)
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-sm-6">
              <div className="blog-item wow fadeInUp delay-0-4s">
                <div className="blog-image">
                  <img src="assets/images/blog/blog2.jpg" alt="Blog" />
                </div>
                <div className="blog-content">
                  <span className="date">
                    <span>25</span> March
                  </span>
                  <div className="content">
                    <ul className="blog-meta">
                      <li>
                        <i className="far fa-user" />{" "}
                        <Link legacyBehavior href="/blog">
                          By Somalia
                        </Link>
                      </li>
                      <li>
                        <i className="far fa-comments" />{" "}
                        <Link legacyBehavior href="/blog">
                          Com (5)
                        </Link>
                      </li>
                    </ul>
                    <h5>
                      <Link legacyBehavior href="/blog-details">
                        Designing Better Linke Website And Email
                      </Link>
                    </h5>
                    <p>
                      Sit amet consectetur adiscins eiusmod tempor incididunt
                    </p>
                    <Link legacyBehavior href="/blog-details">
                      <a className="read-more">
                        Read more <i className="fas fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-sm-6">
              <div className="blog-item wow fadeInUp delay-0-6s">
                <div className="blog-image">
                  <img src="assets/images/blog/blog3.jpg" alt="Blog" />
                </div>
                <div className="blog-content">
                  <span className="date">
                    <span>03</span> April
                  </span>
                  <div className="content">
                    <ul className="blog-meta">
                      <li>
                        <i className="far fa-user" />{" "}
                        <Link legacyBehavior href="/blog">
                          By Somalia
                        </Link>
                      </li>
                      <li>
                        <i className="far fa-comments" />{" "}
                        <Link legacyBehavior href="/blog">
                          Com (5)
                        </Link>
                      </li>
                    </ul>
                    <h5>
                      <Link legacyBehavior href="/blog-details">
                        Useful VS Code Esions Front-End Develop
                      </Link>
                    </h5>
                    <p>
                      Sit amet consectetur adiscins eiusmod tempor incididunt
                    </p>
                    <Link legacyBehavior href="/blog-details">
                      <a className="read-more">
                        Read more <i className="fas fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-more-btn pt-30 pb-36 text-center">
            {/* <Link legacyBehavior href="/blog"> */}
            <a className="theme-btn style-three">
              view more news <i className="fas fa-arrow-right" />
            </a>
            {/* </Link> */}
          </div>
        </div>
      </section>

      <section className=" pt-130"></section>
      {/* Blog Section End */}
      {/* Logo Section Start */}
      {/* <div className="logo-section pt-130 rpt-100 pb-80 rpb-50">
        <div className="container">
          <div className="logo-inner">
            <div className="logo-item wow fadeInUp delay-0-1s">
              <Link legacyBehavior href="/contact">
                <img
                  src="assets/images/client-logos/client-logo1.png"
                  alt="Client Logo"
                />
              </Link>
            </div>
            <div className="logo-item wow fadeInUp delay-0-2s">
              <Link legacyBehavior href="/contact">
                <img
                  src="assets/images/client-logos/client-logo2.png"
                  alt="Client Logo"
                />
              </Link>
            </div>
            <div className="logo-item wow fadeInUp delay-0-3s">
              <Link legacyBehavior href="/contact">
                <img
                  src="assets/images/client-logos/client-logo3.png"
                  alt="Client Logo"
                />
              </Link>
            </div>
            <div className="logo-item wow fadeInUp delay-0-4s">
              <Link legacyBehavior href="/contact">
                <img
                  src="assets/images/client-logos/client-logo4.png"
                  alt="Client Logo"
                />
              </Link>
            </div>
            <div className="logo-item wow fadeInUp delay-0-5s">
              <Link legacyBehavior href="/contact">
                <img
                  src="assets/images/client-logos/client-logo5.png"
                  alt="Client Logo"
                />
              </Link>
            </div>
            <div className="logo-item wow fadeInUp delay-0-6s">
              <Link legacyBehavior href="/contact">
                <img
                  src="assets/images/client-logos/client-logo6.png"
                  alt="Client Logo"
                />
              </Link>
            </div>
          </div>
        </div>
      </div> */}
      {/* Logo Section End */}
      {/* Instagram Section Start */}
      {/* <div className="instagram-section pb-120 rpb-90">
        <div className="container-fluid">
          <div className="row small-gap justify-content-center">
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="instagram-item wow fadeInUp delay-0-1s">
                <img
                  src="assets/images/instagram/instagram1.jpg"
                  alt="Instagram"
                />
                <div className="instagram-hover">
                  <a href="assets/images/instagram/instagram1.jpg">
                    <i className="fab fa-instagram" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="instagram-item wow fadeInUp delay-0-2s">
                <img
                  src="assets/images/instagram/instagram2.jpg"
                  alt="Instagram"
                />
                <div className="instagram-hover">
                  <a href="assets/images/instagram/instagram2.jpg">
                    <i className="fab fa-instagram" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="instagram-item wow fadeInUp delay-0-3s">
                <img
                  src="assets/images/instagram/instagram3.jpg"
                  alt="Instagram"
                />
                <div className="instagram-hover">
                  <a href="assets/images/instagram/instagram3.jpg">
                    <i className="fab fa-instagram" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="instagram-item wow fadeInUp delay-0-4s">
                <img
                  src="assets/images/instagram/instagram4.jpg"
                  alt="Instagram"
                />
                <div className="instagram-hover">
                  <a href="assets/images/instagram/instagram4.jpg">
                    <i className="fab fa-instagram" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="instagram-item wow fadeInUp delay-0-5s">
                <img
                  src="assets/images/instagram/instagram5.jpg"
                  alt="Instagram"
                />
                <div className="instagram-hover">
                  <a href="assets/images/instagram/instagram5.jpg">
                    <i className="fab fa-instagram" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="instagram-item wow fadeInUp delay-0-6s">
                <img
                  src="assets/images/instagram/instagram6.jpg"
                  alt="Instagram"
                />
                <div className="instagram-hover">
                  <a href="assets/images/instagram/instagram6.jpg">
                    <i className="fab fa-instagram" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </Layout>
  );
};
export default Index;
