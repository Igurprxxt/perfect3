import Link from "next/link";
import Slider from "react-slick";
import Advertise from "../src/components/Advertise";
import Counter from "../src/components/Counter";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
import { testimonialtwoSlider } from "../src/sliderProps";
import Image from "next/image";

import {
  Truck,
  ClipboardList,
  Eye,
  ShieldCheck,
  Handshake,
  Star,
  Flag,
} from "lucide-react";
import TrainingPackage from "../src/components/trainingPackage";
import BlogSection from "../src/components/blogSection";
import Testimonial from "../src/components/testimonials";
const About = () => {
  return (
    <Layout header={1} footer={1}>
      <PageBanner pageName={"About us"} />
      {/* Page Banner End */}
      {/* About Section Start */}
      <div className="flex flex-col min-h-[100dvh] bg-white">
        <main className="flex-1">
          {/* About Us Section */}
          <section className="w-full pt-130 rpt-100">
            <div className="container px-4 md:px-6">
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12  items-center">
                <div className="space-y-4">
                  <div className="section-title mb-10">
                    <span className="sub-title mb-25">About Us</span>
                    <h2>We Provide Life Coach From Expert Advisors</h2>
                  </div>
                  <p>
                    Founded in January 2025, our PCDL School was created with a
                    clear purpose: to train and prepare professional drivers who
                    are ready to hit the road and help drive America&apos;s
                    economy forward.
                  </p>
                  <p>
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
                <div className="flex justify-center">
                  <div className="h-full w-full">
                    <img
                      src="/assets/images/about2.jpeg"
                      alt="Hero"
                      className=" w-full h-[100%] md:w-full md:h-[80%] object-cover rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mission, Vision, and Core Values Section */}
          <section className="w-full pt-130 rpt-100 bg-white">
            <div className="container px-4 md:px-6">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                {/* Mission and Vision (Left Column) */}
                <div className="space-y-10">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 rounded-md bg-[#df6b2f] px-4 py-2 text-sm font-semibold uppercase text-white mb-4">
                      <ClipboardList className="h-5 w-5" />
                      Our Mission
                    </div>
                    <p>
                      To empower aspiring drivers with the skills, confidence,
                      and professionalism needed to succeed in the trucking
                      industry—while upholding the highest standards of safety,
                      integrity, and service.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 rounded-md bg-[#df6b2f] px-4 py-2 text-sm font-semibold uppercase text-white mb-4">
                      <Eye className="h-5 w-5" />
                      Our Vision
                    </div>
                    <p>
                      To become a leading force in commercial driver
                      education—shaping a future where every road is driven by
                      skilled, responsible, and empowered professionals who keep
                      America moving.
                    </p>
                  </div>
                </div>

                {/* Core Values (Right Column) */}
                <div className="space-y-6">
                  <div className="inline-block rounded-md bg-[#df6b2f] px-4 py-2 text-sm font-semibold uppercase text-white mb-4">
                    Our Core Values
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
                        We are committed to delivering top-quality education
                        that equips our students with the skills and confidence
                        to succeed on the road.
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
                        curriculum to our driving practices—ensuring our
                        graduates are responsible and road-ready.
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
          </section>
        </main>
      </div>
      {/* About Section End */}
      {/* Features Section Start */}
      {/* <section className="features-section-three rel z-1 pt-110 rpt-85 pb-100 rpb-70">
        <div className="container">
          <div className="section-title text-center mb-55">
            <span className="sub-title-two">How About Learn Us</span>
            <h2>Opportunity for Online Learning</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div className="feature-three-item wow fadeInUp delay-0-2s">
                <div className="icon">
                  <i className="flaticon-reading-book" />
                </div>
                <h4>Experts Minds</h4>
                <p>
                  Sed ut persiciatis omnis natus voluptate accsantie doloreue
                  laudantium
                </p>
                <Link legacyBehavior href="/about">
                  <a className="details-btn">
                    <i className="fas fa-long-arrow-alt-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="feature-three-item wow fadeInUp delay-0-4s">
                <div className="icon">
                  <img src="assets/images/features/icon7.png" alt="Icon" />
                </div>
                <h4>Multiple Courses</h4>
                <p>
                  Sed ut persiciatis omnis natus voluptate accsantie doloreue
                  laudantium
                </p>
                <Link legacyBehavior href="/about">
                  <a className="details-btn">
                    <i className="fas fa-long-arrow-alt-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="feature-three-item wow fadeInUp delay-0-6s">
                <div className="icon">
                  <img src="assets/images/features/icon8.png" alt="Icon" />
                </div>
                <h4>Hire Quickly</h4>
                <p>
                  Sed ut persiciatis omnis natus voluptate accsantie doloreue
                  laudantium
                </p>
                <Link legacyBehavior href="/about">
                  <a className="details-btn">
                    <i className="fas fa-long-arrow-alt-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="feature-three-item wow fadeInUp delay-0-8s">
                <div className="icon">
                  <img src="assets/images/features/icon9.png" alt="Icon" />
                </div>
                <h4>Video Tutorials</h4>
                <p>
                  Sed ut persiciatis omnis natus voluptate accsantie doloreue
                  laudantium
                </p>
                <Link legacyBehavior href="/about">
                  <a className="details-btn">
                    <i className="fas fa-long-arrow-alt-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Features Section End */}
      {/* Team Section Start */}

      <section className="features-section-three rel z-1 pt-110 rpt-85 pb-100 rpb-70">
        <TrainingPackage />
      </section>
      <section className="why-learn-area pb-120 rpb-100">
        <div className="container">
          <div className="row align-items-center large-gap wow fadeInLeft delay-0-2s">
            <div className="col-lg-6">
              <div className="why-learn-content rmb-35">
                <div className="section-title mb-30">
                  <span className="sub-title-two">Why Learn With Us</span>
                  <h2>Practical, Career-Focused CDL Training Programs</h2>
                </div>
                <p>
                  At Perfect Plus Pacific Truck School, we go beyond theory. Our
                  goal is to prepare you for real-world trucking with hands-on
                  training, expert guidance, and flexible learning options
                  designed for your success.
                </p>
                <div className="why-learn-feature pt-30">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="feature-three-item">
                        <div className="icon">
                          <img
                            src="assets/images/features/icon10.png"
                            alt="Icon"
                          />
                        </div>
                        <h4>Expert Advisors</h4>
                        <p>
                          Our certified instructors bring real-world experience
                          to the classroom, helping you build the confidence and
                          skills needed for the road ahead.
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="feature-three-item">
                        <div className="icon">
                          <img
                            src="assets/images/features/icon11.png"
                            alt="Icon"
                          />
                        </div>
                        <h4>Popular CDL Programs</h4>
                        <p>
                          From Class A to Fast Track and Refresher Courses, our
                          programs are designed to fit different goals,
                          schedules, and experience levels.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="why-learn-image wow fadeInRight delay-0-2s">
                <img src="assets/images/about/why-learn.jpg" alt="Why Learn" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonial />

      <BlogSection />
    </Layout>
  );
};
export default About;
