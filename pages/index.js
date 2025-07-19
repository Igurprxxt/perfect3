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
    title: "Starter CDL Program",
    price: "$1,499",
    features: [
      { label: "3 Weeks Duration", icon: "Check" },
      { label: "Classroom + Range Training", icon: "Check" },
      { label: "CDL Permit Assistance", icon: "Check" },
      { label: "Basic Vehicle Inspection", icon: "Check" },
    ],
  },
  {
    title: "Professional CDL Program",
    price: "$2,799",
    features: [
      { label: "6 Weeks Duration", icon: "Check" },
      { label: "CDL-A License Training", icon: "Check" },
      { label: "Highway Driving Practice", icon: "Check" },
      { label: "Resume & Interview Coaching", icon: "Check" },
    ],
  },
  {
    title: "Elite Career Package",
    price: "$4,499",
    features: [
      { label: "8 Weeks Duration", icon: "Check" },
      { label: "Extra Road Hours + 1-on-1 Coaching", icon: "Check" },
      { label: "Guaranteed Job Placement", icon: "Check" },
      { label: "Housing Assistance Available", icon: "Check" },
    ],
  },
];

const pricing_data = [
  {
    id: 1,
    page: "home_1",
    plan: "Basic plan",
    price: 12,
    pricing_list: [
      { list: "30 Days Trial Features" },
      { list: "Synced To Cloud Database" },
      { list: "10 Hours Of Support" },
      { list: "Social Media Integration", class_name: "close" },
      { list: "Unlimited Features", class_name: "close" },
    ],
  },
  {
    id: 2,
    page: "home_1",
    plan: "Gold plan",
    price: 59,
    pricing_list: [
      { list: "30 Days Trial Features" },
      { list: "Synced To Cloud Database" },
      { list: "10 Hours Of Support" },
      { list: "Social Media Integration", class_name: "close" },
      { list: "Unlimited Features", class_name: "close" },
    ],
  },
  {
    id: 3,
    page: "home_1",
    plan: "Platinum plan",
    price: 59,
    pricing_list: [
      { list: "30 Days Trial Features" },
      { list: "Synced To Cloud Database" },
      { list: "10 Hours Of Support" },
      { list: "Social Media Integration", class_name: "close" },
      { list: "Unlimited Features", class_name: "close" },
    ],
  },

  // home_2

  {
    id: 1,
    page: "home_2",
    plan: "Basic plan",
    price: 12,
    pricing_list: [
      { icon: "fa fa-check", list: "30 Days Trial Features" },
      { icon: "fa fa-check", list: "Synced To Cloud Database" },
      { icon: "fa fa-check", list: "10 Hours Of Support" },
      {
        icon: "fa fa-times",
        list: "Social Media Integration",
        class_name: "close",
      },
      { icon: "fa fa-times", list: "Unlimited Features", class_name: "close" },
    ],
  },
  {
    id: 2,
    page: "home_2",
    plan: "Gold plan",
    price: 59,
    pricing_list: [
      { icon: "fa fa-check", list: "30 Days Trial Features" },
      { icon: "fa fa-check", list: "Synced To Cloud Database" },
      { icon: "fa fa-check", list: "10 Hours Of Support" },
      {
        icon: "fa fa-times",
        list: "Social Media Integration",
        class_name: "close",
      },
      { icon: "fa fa-times", list: "Unlimited Features", class_name: "close" },
    ],
  },
  {
    id: 3,
    page: "home_2",
    plan: "Platinum plan",
    price: 59,
    pricing_list: [
      { icon: "fa fa-check", list: "30 Days Trial Features" },
      { icon: "fa fa-check", list: "Synced To Cloud Database" },
      { icon: "fa fa-check", list: "10 Hours Of Support" },
      {
        icon: "fa fa-times",
        list: "Social Media Integration",
        class_name: "close",
      },
      { icon: "fa fa-times", list: "Unlimited Features", class_name: "close" },
    ],
  },

  // home_3

  {
    id: 1,
    page: "home_3",
    price_icon: "icomoon-save-money",
    plan: "Basic plan",
    price: 12,
    pricing_list: [
      { list: "30 Days Trial Features" },
      { list: "Synced To Cloud Database" },
      { list: "10 Hours Of Support" },
      { list: "Social Media Integration", class_name: "close" },
      { list: "Unlimited Features", class_name: "close" },
    ],
  },
  {
    id: 2,
    page: "home_3",
    price_icon: "icomoon-money",
    plan: "Gold plan",
    price: 59,
    pricing_list: [
      { list: "30 Days Trial Features" },
      { list: "Synced To Cloud Database" },
      { list: "10 Hours Of Support" },
      { list: "Social Media Integration", class_name: "close" },
      { list: "Unlimited Features", class_name: "close" },
    ],
  },
  {
    id: 3,
    page: "home_3",
    price_icon: "icomoon-solution",
    plan: "Platinum plan",
    price: 59,
    pricing_list: [
      { list: "30 Days Trial Features" },
      { list: "Synced To Cloud Database" },
      { list: "10 Hours Of Support" },
      { list: "Social Media Integration", class_name: "close" },
      { list: "Unlimited Features", class_name: "close" },
    ],
  },

  // home_5

  {
    id: 1,
    page: "home_5",
    price_icon_img: priceIcon_1,
    plan: "Basic Plan",
    price: 19,
    sub_price: ".50$",
    pricing_list: [
      { list: "30 Days Trial Features" },
      { list: "Synced To Cloud Database" },
      { list: "10 Hours Of Support" },
      { list: "Social Media Integration" },
      { list: "Unlimited Features" },
    ],
  },
  {
    id: 2,
    page: "home_5",
    price_icon_img: priceIcon_2,
    plan: "Standard Plan",
    price: 56,
    sub_price: ".00$",
    pricing_list: [
      { list: "30 Days Trial Features" },
      { list: "Synced To Cloud Database" },
      { list: "10 Hours Of Support" },
      { list: "Social Media Integration" },
      { list: "Unlimited Features" },
    ],
  },
  {
    id: 3,
    page: "home_5",
    price_icon_img: priceIcon_3,
    plan: "Premium Plan",
    price: 56,
    sub_price: ".50$",
    pricing_list: [
      { list: "30 Days Trial Features" },
      { list: "Synced To Cloud Database" },
      { list: "10 Hours Of Support" },
      { list: "Social Media Integration" },
      { list: "Unlimited Features" },
    ],
  },
];

const schema = z.object({
  name: z.string().optional(),
  email: z.string().optional(),
  phone: z.string().min(10, "Enter a valid phone number"),
  inquiry: z.string().optional(),
  message: z.string().optional(),
});

const inquiryOptions = [
  { value: "cdl", label: "CDL Training" },
  { value: "pricing", label: "Pricing" },
  { value: "schedule", label: "Class Schedule" },
  { value: "other", label: "Other" },
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
            <div className="col-lg-7">
              <div className="hero-content rpt-25 rmb-75">
                <span className="sub-title style-two mb-20 wow fadeInUp delay-0-2s">
                  Driving School
                </span>
                <h1 className="mb-20 text-6xl wow fadeInUp delay-0-4s text-blue ">
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
            <div className="col-lg-5">
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
                    <div className="mb-2">
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
                    </div>
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
      <section className="pricing-section bg-lighter rel z-2 pt-120 rpt-90 pb-100 rpb-70">
        <div className="container">
          <div className="section-title text-center mb-50">
            <span className="sub-title-two">Pricing Package</span>
            <h2>Membership Plans</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div className="pricin-item wow fadeInUp delay-0-2s">
                <span className="popularity">popular</span>
                <div className="icon">
                  <img src="assets/images/pricing/icon1.png" alt="Icon" />
                </div>
                <h4>Free Membership</h4>
                <ul className="list-style-two">
                  <li>Free Course Include</li>
                  <li>Part Time Instructors</li>
                  <li>Free Videos Course</li>
                  <li>Free Access 1 Month (Videos)</li>
                </ul>
                <span className="price">0</span>
                {/* <Link legacyBehavior href="/pricing"> */}
                  <a className="theme-btn style-two">
                    Choose plan <i className="fas fa-arrow-right" />
                  </a>
                {/* </Link> */}
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="pricin-item wow fadeInUp delay-0-4s">
                <span className="popularity">popular</span>
                <div className="icon">
                  <img src="assets/images/pricing/icon2.png" alt="Icon" />
                </div>
                <h4>Basic Membership</h4>
                <ul className="list-style-two">
                  <li>Pro Course Include : 07</li>
                  <li>Full Time Experts Instructors</li>
                  <li>Premium Videos Course</li>
                  <li>Pro Access 6 Month (Videos)</li>
                </ul>
                <span className="price">39</span>
                {/* <Link legacyBehavior href="/pricing"> */}
                  <a className="theme-btn style-two">
                    Choose plan <i className="fas fa-arrow-right" />
                  </a>
                {/* </Link> */}
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="pricin-item wow fadeInUp delay-0-6s">
                <span className="popularity">popular</span>
                <div className="icon">
                  <img src="assets/images/pricing/icon3.png" alt="Icon" />
                </div>
                <h4>Advance Membership</h4>
                <ul className="list-style-two">
                  <li>Pro Course Include : 15</li>
                  <li>Full Time Experts Instructors</li>
                  <li>Premium Videos Course</li>
                  <li>Pro Access 12 Month (Videos)</li>
                </ul>
                <span className="price">98</span>
                {/* <Link legacyBehavior href="/pricing"> */}
                  <a className="theme-btn style-two">
                    Choose plan <i className="fas fa-arrow-right" />
                  </a>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
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
      {/* About Section End */}
      {/* Coach Section Start */}
      {/* <Index1Isotope /> */}
      {/* Coach Section End */}
      {/* Work Process Section Start */}
      {/* <section className="work-process-section bg-white rel z-1 pt-130 rpt-100 pb-100 rpb-70">
        <div className="container">
          <Index1WorkStepSlider />
        </div>
      </section> */}
      {/* Work Process Section End */}
      {/* Newsletter Section Start */}
      <section className="newsletter-section pb-130 rpb-100 wow fadeInUp delay-0-2s">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="newsletter-video overlay">
                <img src="assets/images/video/video-bg.jpg" alt="Video" />
                <a
                  href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                  className="mfp-iframe video-play"
                >
                  <i className="fas fa-play" />
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="newsletter-content bg-lighter">
                <div className="section-title mb-20">
                  <span className="sub-title mb-25">Newsletters</span>
                  <h2>Get Our Every Single Notifications</h2>
                </div>
                <p>
                  Sit amet consectetur adipiscinelit eiusmod tempor incididunt
                  ut labore et dolore magna aliqua suspendisse ultrices gravida.
                  commodo viverra maecenas accumsan facilisis.
                </p>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="newsletter-form mt-25"
                  action="#"
                >
                  <div className="newsletter-radios mb-25">
                    <div className="custom-control custom-radio">
                      <input
                        type="radio"
                        className="custom-control-input"
                        id="hero-wekly"
                        name="example1"
                        defaultChecked=""
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="hero-wekly"
                      >
                        Regular Updates
                      </label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input
                        type="radio"
                        className="custom-control-input"
                        id="hero-monthly"
                        name="example1"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="hero-monthly"
                      >
                        Weekly Updates
                      </label>
                    </div>
                  </div>
                  <div className="newsletter-email">
                    <label htmlFor="email">
                      <i className="far fa-envelope" />
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter Email Address"
                      required=""
                    />
                    <button type="submit" className="theme-btn">
                      Subscribe <i className="fas fa-arrow-right" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Newsletter Section End */}
      {/* Events Section Start */}
      <section className="events-section rel z-1 py-130 rpy-100 bg-blue text-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8 col-md-9">
              <div className="section-title text-center mb-55">
                <span className="sub-title mb-25">Events &amp; Program</span>
                <h2>We’reArranged Yearly Cultural Events &amp; Program</h2>
              </div>
            </div>
          </div>
          <Slider {...index1EventWrap} className="event-wrap">
            <div className="event-item wow fadeInUp delay-0-2s">
              <div className="image">
                <img src="assets/images/events/event1.jpg" alt="Event" />
                <span className="date">25 march 2022</span>
              </div>
              <div className="content">
                <h4>How Much Needs Life Coach For Human Beings</h4>
                <span className="location">
                  <i className="fas fa-map-marker-alt" /> 55 Main Street, New
                  York
                </span>
              </div>
            </div>
            <div className="event-item wow fadeInUp delay-0-4s">
              <div className="image">
                <img src="assets/images/events/event2.jpg" alt="Event" />
                <span className="date">25 march 2022</span>
              </div>
              <div className="content">
                <h4>How Much Needs Life Coach For Human Beings</h4>
                <span className="location">
                  <i className="fas fa-map-marker-alt" /> 55 Main Street, New
                  York
                </span>
              </div>
            </div>
            <div className="event-item wow fadeInUp delay-0-6s">
              <div className="image">
                <img src="assets/images/events/event3.jpg" alt="Event" />
                <span className="date">25 march 2022</span>
              </div>
              <div className="content">
                <h4>How Much Needs Life Coach For Human Beings</h4>
                <span className="location">
                  <i className="fas fa-map-marker-alt" /> 55 Main Street, New
                  York
                </span>
              </div>
            </div>
            <div className="event-item wow fadeInUp delay-0-2s">
              <div className="image">
                <img src="assets/images/events/event1.jpg" alt="Event" />
                <span className="date">25 march 2022</span>
              </div>
              <div className="content">
                <h4>How Much Needs Life Coach For Human Beings</h4>
                <span className="location">
                  <i className="fas fa-map-marker-alt" /> 55 Main Street, New
                  York
                </span>
              </div>
            </div>
            <div className="event-item wow fadeInUp delay-0-4s">
              <div className="image">
                <img src="assets/images/events/event2.jpg" alt="Event" />
                <span className="date">25 march 2022</span>
              </div>
              <div className="content">
                <h4>How Much Needs Life Coach For Human Beings</h4>
                <span className="location">
                  <i className="fas fa-map-marker-alt" /> 55 Main Street, New
                  York
                </span>
              </div>
            </div>
            <div className="event-item wow fadeInUp delay-0-6s">
              <div className="image">
                <img src="assets/images/events/event3.jpg" alt="Event" />
                <span className="date">25 march 2022</span>
              </div>
              <div className="content">
                <h4>How Much Needs Life Coach For Human Beings</h4>
                <span className="location">
                  <i className="fas fa-map-marker-alt" /> 55 Main Street, New
                  York
                </span>
              </div>
            </div>
          </Slider>
        </div>
        <span className="bg-text">coach</span>
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
      {/* Testimonials Section Start */}
      <section className="testimonials-section bg-white rel z-1 py-130 rpy-100">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-5">
              <div className="testimonial-left-content rmb-65 wow fadeInLeft delay-0-2s">
                <div className="section-title">
                  <span className="sub-title mb-15">Testimonials</span>
                  <h2>Happy Clients Say About Coach</h2>
                </div>
                <p>
                  Quis autem veleum iure reprehenderit voluptate velit esse quam
                  nihil molestiae consequatur vel illum dolore eum fugiat quo
                  voluptas nulla pariatur
                </p>
                <h4 className="partner-title mt-25 mb-15">
                  We Have <span>1356+</span> Global Partners
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
                className="testimonial-wrap wow fadeInRight delay-0-2s"
              >
                <div className="testimonial-item">
                  <div className="testimonial-author">
                    <img
                      src="assets/images/testimonials/author.jpg"
                      alt="Author"
                    />
                  </div>
                  <div className="testimonial-content">
                    <div className="designation">
                      <h4>Justin C. Swanson</h4>
                      <span>Business Manager</span>
                    </div>
                    <p>
                      Voluptatem accusantium doloremq udantium totam rem aperiam
                      eaque quae abillo inventore veritatis et quasi architecto
                      beatae Sed ut perspiciatis unde omnis iste natus error sit
                    </p>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                </div>
                <div className="testimonial-item">
                  <div className="testimonial-author">
                    <img
                      src="assets/images/testimonials/author.jpg"
                      alt="Author"
                    />
                  </div>
                  <div className="testimonial-content">
                    <div className="designation">
                      <h4>Gerardo M. Jordan</h4>
                      <span>Business Manager</span>
                    </div>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremq udantium totam rem aperiam
                      eaque quae abillo inventore veritatis et quasi architecto
                      beatae
                    </p>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                </div>
                <div className="testimonial-item">
                  <div className="testimonial-author">
                    <img
                      src="assets/images/testimonials/author.jpg"
                      alt="Author"
                    />
                  </div>
                  <div className="testimonial-content">
                    <div className="designation">
                      <h4>Justin C. Swanson</h4>
                      <span>Business Manager</span>
                    </div>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremq udantium totam rem aperiam
                      eaque quae abillo inventore veritatis et quasi architecto
                      beatae
                    </p>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                </div>
                <div className="testimonial-item">
                  <div className="testimonial-author">
                    <img
                      src="assets/images/testimonials/author.jpg"
                      alt="Author"
                    />
                  </div>
                  <div className="testimonial-content">
                    <div className="designation">
                      <h4>Gerardo M. Jordan</h4>
                      <span>Business Manager</span>
                    </div>
                    <p>
                      Voluptatem accusantium doloremq udantium totam rem aperiam
                      eaque quae abillo inventore veritatis et quasi architecto
                      beatae Sed ut perspiciatis unde omnis iste natus error sit
                    </p>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
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
