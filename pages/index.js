import Layout from "../src/layout/Layout";
import dynamic from "next/dynamic";
import Slider from "react-slick";
import { index1EventWrap } from "../src/sliderProps";
import { Check, Flag, Handshake, ShieldCheck, Star, Truck } from "lucide-react";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import BlogSection from "../src/components/blogSection";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { Input } from "../src/components/ui/input";
import Testimonial from "../src/components/testimonials";
import Link from "next/link";
import TrainingPackage from "../src/components/trainingPackage";
import Image from "next/image";

const SERVICE_ID = "service_uimxucn";
const TEMPLATE_ID = "template_touimv4";
const PUBLIC_KEY = "cj9evgivVEUn1Qkb3";

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
  name: z.string().min(1, "Enter your name"), // ✅ Required
  email: z.string().min(1, "Enter your email"), // ✅ Required
  phone: z.string().min(1, "Enter your phone"), // ✅ Required
  message: z.string().optional(), // ✅ Optional
});

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
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    const formattedData = {
      fullName: data.name || "--",
      email: data.email || "--",
      phone: data.phone || "--",
      message: data.message || "--",
    };
    setLoading(true);
    try {
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        formattedData,
        PUBLIC_KEY
      );
      console.log("response", response);
      toast("Details submitted successfully!", { type: "success" });
      reset();
    } catch (error) {
      console.error("Failed to send email:", error);
      setLoading(false);
      toast("Failed to send message.", { type: "error" });
    }
  };
  return (
    <Layout header={1} footer={1}>
      <div className="relative min-h-screen text-white">
        {/* Background Image */}
        <Image
          src="/assets/images/image3.jpeg"
          alt="Hero Background"
          fill
          priority
          className="object-cover object-center -z-10"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-0" />

        {/* Content */}
        <div className="relative z-10 container py-[10px] pb-[25px]">
          <div className="row align-items-center">
            <div
              className="container position-relative"
              style={{ zIndex: 2, paddingTop: 150, paddingBottom: 75 }}
            >
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <div className="hero-content rpt-25 rmb-75">
                    <h1 className="mb-4 leading-tight font-bold text-6xl wow fadeInUp delay-0-4s text-blue ">
                      Looking for a driving school?
                    </h1>
                    <h3 className="wow fadeInUp text-4xl  delay-0-6s">
                      You’re in the perfect spot.
                    </h3>
                    <div className="hero-btn mt-30 wow fadeInUp delay-0-8s">
                      <Link className="theme-btn" href="/enrollment">
                        Apply Now <i className="fas fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="hero-right-images  wow fadeInUp delay-0-2s">
                    <div className="bg-white p-4 rounded shadow-sm">
                      <h5
                        className="mb-3 text-center "
                        style={{ color: "black" }}
                      >
                        Book Your First Lesson Now!
                      </h5>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-2">
                          <label className="form-label mb-1 text-gray-800 text-sm">
                            Full Name
                          </label>
                          <Input
                            placeholder="Enter your full name"
                            {...register("name", {
                              required: "Name is required",
                            })}
                          />
                          {errors.name && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.name.message}
                            </p>
                          )}
                        </div>

                        <div className="mb-2">
                          <label className="form-label mb-1 text-gray-800 text-sm">
                            Email Address
                          </label>
                          <Input
                            placeholder="Enter your email address"
                            type="email"
                            {...register("email", {
                              required: "Email is required",
                            })}
                          />
                          {errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.email.message}
                            </p>
                          )}
                        </div>

                        <div className="mb-2">
                          <label className="form-label mb-1 text-gray-800 text-sm">
                            Phone Number
                          </label>
                          <Input
                            placeholder="Enter your phone number"
                            {...register("phone", {
                              required: "Phone Number is required",
                            })}
                          />
                          {errors.phone && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.phone.message}
                            </p>
                          )}
                        </div>

                        <div className="mb-3">
                          <label className="form-label mb-1 text-gray-800 text-sm">
                            Message
                          </label>
                          <textarea
                            placeholder="Write Message"
                            className="flex w-full rounded-md p-2 text-black placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                            rows={5}
                            {...register("message")} // No 'required' here
                          />
                          {/* No error message for message */}
                        </div>

                        <button
                          type="submit"
                          className="btn btn-md w-100"
                          style={{ backgroundColor: "#DF6B2F", color: "white" }}
                        >
                          {loading ? (
                            <>
                              <span
                                className="spinner-border spinner-border-sm me-2"
                                role="status"
                              />
                              Submitting...
                            </>
                          ) : (
                            "Submit Request"
                          )}
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TrainingPackage />

      {/* <section className="features-section rel z-1 py-130 rpy-100  bg-blue text-white">
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
                <Link href="/enrollment">
                  <button className="bg-blue text-white border border-white px-4 py-2 rounded transition-all duration-300 ">
                    Enroll Now
                  </button>
                </Link>
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
      </section> */}
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
                    <Link
                      href="/about"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Learn more about us <i className="fas fa-arrow-right" />
                    </Link>
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
                  src="/assets/images/imp.jpeg"
                  alt="Core Values"
                  className="w-full h-full"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="core-values-content p-6">
                <div className="section-title mb-6">
                  <span className="sub-title ">Our Core Values</span>
                </div>
                <div className="space-y-6">
                  {[
                    {
                      icon: <Truck className="h-6 w-6 text-[#4CAF50]" />,
                      title: "Excellence in Training",
                      desc: "We are committed to delivering top-quality education that equips our students with the skills and confidence to succeed on the road.",
                    },
                    {
                      icon: <ShieldCheck className="h-6 w-6 text-[#F44336]" />,
                      title: "Safety First",
                      desc: "Safety is at the heart of everything we do—from our curriculum to our driving practices—ensuring our graduates are responsible and road-ready.",
                    },
                    {
                      icon: <Handshake className="h-6 w-6 text-[#FFC107]" />,
                      title: "Integrity and Respect",
                      desc: "We foster a culture of honesty, respect, and professionalism, both in the classroom and on the road.",
                    },
                    {
                      icon: <Star className="h-6 w-6 text-[#FFEB3B]" />,
                      title: "Empowerment Through Opportunity",
                      desc: "We believe in opening doors to meaningful careers by providing accessible, supportive, and career-focused training.",
                    },
                    {
                      icon: <Flag className="h-6 w-6 text-[#2196F3]" />,
                      title: "Driving America Forward",
                      desc: "Our mission goes beyond training drivers—we’re helping power the economy by preparing the workforce that keeps America moving.",
                    },
                  ].map((value, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 bg-white rounded-xl p-3 hover:shadow-md transition-shadow"
                    >
                      <div className="flex-shrink-0">{value.icon}</div>
                      <div>
                        <h3 className="text-lg font-bold text-[#0F256E]">
                          {value.title}
                        </h3>
                        <p className="text-gray-700 mt-1">{value.desc}</p>
                      </div>
                    </div>
                  ))}
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
