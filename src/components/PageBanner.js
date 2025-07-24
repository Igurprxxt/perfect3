import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const PageBanner = ({ pageTitle, pageName }) => {
  const location = usePathname();

  const getImages = () => {
    if (location === "/about") {
      return "/assets/images/imagehero.jpg";
    } else if (location === "/contact") {
      return "/assets/images/banner06.jpg";
    } else if (location === "/enrollment") {
      return "/assets/images/banner.jpeg";
    } else {
      return "/assets/images/banner04.jpeg";
    }
  };
  return (
    <section className="relative page-banner-area rel z-1 text-white text-center">
      <Image
        src={getImages()} // replace with your dynamic image if needed
        alt="Page banner"
        fill
        priority // makes it load immediately instead of lazy-loading
        className="object-cover z-[-1]"
      />
      <div className="container">
        <div className="banner-inner rpt-10">
          <h2 className="page-title wow fadeInUp delay-0-2s uppercase">
            {pageTitle ? pageTitle : pageName}
          </h2>
        </div>
      </div>
      <img
        className="circle-one"
        src="assets/images/shapes/circle-one.png"
        alt="Circle"
      />
      <img
        className="circle-two"
        src="assets/images/shapes/circle-two.png"
        alt="Circle"
      />
    </section>
  );
};
export default PageBanner;
