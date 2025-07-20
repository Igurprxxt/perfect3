import { toast } from "react-toastify";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { Input } from "../src/components/ui/input";
import { TextArea } from "@radix-ui/themes";

const SERVICE_ID = "service_uimxucn";
const TEMPLATE_ID = "template_touimv4";
const PUBLIC_KEY = "cj9evgivVEUn1Qkb3";

const ContactUs = () => {
    const {
    register,
    handleSubmit,
    reset,
    formState: { errors ,isSubmitting},
  } = useForm();

   const onSubmit = async (data) => {
    const formattedData = {
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      message: data.message,
    };

    try {
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        formattedData,
        PUBLIC_KEY
      );
      toast("Details submitted successfully!", { type: "success" });
      reset();
    } catch (error) {
      console.error("Failed to send email:", error);
      toast("Failed to send message.", { type: "error" });
    }
  };

  return (
    <Layout footer={1} header={1}>
      <PageBanner pageName={"Contact Us"} />
      {/* <section className="contact-info-area rel z-1 py-130 rpt-90 rpb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="contact-info-wrap rmb-75 wow fadeInUp delay-0-2s">
                <div className="section-title mb-25">
                  <span className="sub-title-two">Need Any Helps ?</span>
                  <h2>Contact For Information</h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam rem aperiam eaque ipsa
                  quae abillo inventore veritatis et quasi architecto
                </p>
                <div className="row no-gap mt-50">
                  <div className="col-md-4 col-sm-6">
                    <div className="contact-info-box">
                      <i className="fas fa-map-marker-alt" />
                      <h4>Locations</h4>
                      <span>55 Main Street, 2nd Block, New York</span>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="contact-info-box">
                      <i className="far fa-envelope" />
                      <h4>Email Us</h4>
                      <span>
                        <a href="mailto:support@gmail.com">support@gmail.com</a>
                        <br />
                        <a href="mailto:infocoach.net">infocoach.net</a>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="contact-info-box">
                      <i className="fas fa-phone-volume" />
                      <h4>Hotlines</h4>
                      <span>
                        <a href="callto:+896(321)4600">+896 (321) 46 00</a>
                        <br />
                        <a href="callto:+012(345)678">+012 (345) 678</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-page-image wow fadeInUp delay-0-4s">
                <img
                  src="assets/images/contact/contact-page.png"
                  alt="Contact Page"
                />
              </div>
            </div>
          </div>
        </div>
        <span className="bg-text">coach</span>
      </section> */}
      {/* Contact Info End */}
      {/* Contact Form Start */}
 <section className="py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-10 shadow-lg rounded-lg"
        >
          <div className="text-center mb-10">
            <p className="text-blue-800 font-medium uppercase">Need Assistance? Get in Touch</p>
            <h2 className="text-2xl md:text-3xl font-bold">Reach Out Anytime</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <Input
              placeholder="Full Name"
              {...register('fullName', { required: 'Full Name is required' })}
            />
            <Input
              placeholder="Email Address"
              type="email"
              {...register('email', { required: 'Email is required' })}
            />
            <Input
              placeholder="Phone Number"
              {...register('phone', { required: 'Phone Number is required' })}
            />
          </div>

          <div className="mb-6">
            <TextArea
              placeholder="Write Message"
               className={
                     "flex w-full rounded-md  text-base  file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                   }
              rows={5}
              {...register('message', { required: 'Message is required' })}
            />
          </div>

           <div className="col-md-12">
                <div className="form-group text-center mb-0">
                  <button type="submit" className="theme-btn cursor-pointer">
                    send Message <i className="fas fa-arrow-right" />
                  </button>
                </div>
              </div>
        </form>
      </div>
    </section>
      {/* Contact Form End */}
      {/* Location Map Area Start */}
      <div className="features-section rel z-1  pt-[200px] ">
        <div className="our-location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d136834.1519573059!2d-74.0154445224086!3d40.7260256534837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1639991650837!5m2!1sen!2sbd"
            height={600}
            style={{ border: 0, width: "100%" }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </div>
    </Layout>
  );
};
export default ContactUs;
