import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
import { reviews, trainingPackages } from ".";
import { useState } from "react";
import { Check, Flag, Handshake, ShieldCheck, Star, Truck } from "lucide-react";
import Link from "next/link";
import Slider from "react-slick";
import { index1Testimonial } from "../src/sliderProps";
import TrainingPackage from "../src/components/trainingPackage";
const Program = () => {
  const [hoverId, setHoverId] = useState();

  return (
    <Layout header={1} footer={1}>
      <PageBanner pageName={"Training Program"} />

      <TrainingPackage />

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
                  We’ve Helped Over <span className="text-white">1,000+</span>{" "}
                  Students Get CDL Certified
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

      <section className="blog-section py-130 rpy-100 ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-8">
              <div className="section-title text-center mb-55">
                <span className="sub-title mb-25">News &amp; Blog</span>
                <h2>Read Latest Insights From the Trucking World</h2>
              </div>
            </div>
          </div>

          <div className="row">
            {/* Blog 1 */}
            <div className="col-lg-6">
              <div className="blog-item big-item wow fadeInUp delay-0-2s">
                <div className="blog-image">
                  <img
                    src="/assets/images/male-worker-with-bulldozer-sand-quarry_1303-28112.jpeg"
                    alt="Blog"
                  />
                </div>
                <div className="blog-content">
                  <span className="date">
                    <span>10</span> July
                  </span>
                  <div className="content">
                    <h4>
                      <Link legacyBehavior href="/blog-details">
                        How to Pass Your CDL Test the First Time: Top Tips from
                        Instructors
                      </Link>
                    </h4>
                    <ul className="blog-meta">
                      <li>
                        <i className="far fa-user" />
                        <Link legacyBehavior href="/blog">
                          By Admin
                        </Link>
                      </li>
                      <li>
                        <i className="far fa-comments" />
                        <Link legacyBehavior href="/blog">
                          Comments (12)
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog 2 */}
            <div className="col-xl-3 col-lg-6 col-sm-6">
              <div className="blog-item wow fadeInUp delay-0-4s">
                <div className="blog-image">
                  <img src="/assets/images/1308.jpg" alt="Blog" />
                </div>
                <div className="blog-content">
                  <span className="date">
                    <span>28</span> June
                  </span>
                  <div className="content">
                    <ul className="blog-meta">
                      <li>
                        <i className="far fa-user" />
                        <Link legacyBehavior href="/blog">
                          By PCDL Team
                        </Link>
                      </li>
                      <li>
                        <i className="far fa-comments" />
                        <Link legacyBehavior href="/blog">
                          Comments (8)
                        </Link>
                      </li>
                    </ul>
                    <h5>
                      <Link legacyBehavior href="/blog-details">
                        What To Expect During Your First Week of CDL Training
                      </Link>
                    </h5>
                    <p>
                      Learn the daily routine, truck simulator, and safety
                      training timeline.
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

            {/* Blog 3 */}
            <div className="col-xl-3 col-lg-6 col-sm-6">
              <div className="blog-item wow fadeInUp delay-0-6s">
                <div className="blog-image">
                  <img src="/assets/images/1286.jpg" alt="Blog" />
                </div>
                <div className="blog-content">
                  <span className="date">
                    <span>15</span> July
                  </span>
                  <div className="content">
                    <ul className="blog-meta">
                      <li>
                        <i className="far fa-user" />
                        <Link legacyBehavior href="/blog">
                          By Perfect Plus
                        </Link>
                      </li>
                      <li>
                        <i className="far fa-comments" />
                        <Link legacyBehavior href="/blog">
                          Comments (3)
                        </Link>
                      </li>
                    </ul>
                    <h5>
                      <Link legacyBehavior href="/blog-details">
                        Top 5 Safety Tips Every New Truck Driver Should Know
                      </Link>
                    </h5>
                    <p>
                      Stay compliant and confident on the road with these
                      essential habits.
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
            <Link legacyBehavior href="/blog">
              <a className="theme-btn style-three">
                View More News <i className="fas fa-arrow-right" />
              </a>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Program;
