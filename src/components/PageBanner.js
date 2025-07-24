import Link from "next/link";
import { usePathname } from "next/navigation";

const PageBanner = ({ pageTitle, pageName }) => {
  const location = usePathname();

  const getImages = () => {
    if (location === "/about") {
      return "url(/assets/images/imagehero.jpg)";
    } else if (location === "/contact") {
      return "url(/assets/images/banner06.jpg)";
    } else if (location === "/enrollment") {
      return "url(/assets/images/banner.jpeg)";
    } else {
      return "url(/assets/images/banner04.jpeg)";
    }
  };
  return (
    <section
      className="page-banner-area rel z-1 text-white text-center"
      style={{
        backgroundImage: getImages(),
      }}
    >
      <div className="container">
        <div className="banner-inner rpt-10">
          <h2 className="page-title wow fadeInUp delay-0-2s uppercase">
            {pageTitle ? pageTitle : pageName}
          </h2>
          {/* <nav aria-label="breadcrumb">
            <ol className="breadcrumb wow fadeInUp delay-0-4s">
              <li className="breadcrumb-item">
                <Link href="/">home</Link>
              </li>
              <li className="breadcrumb-item active">{pageName}</li>
            </ol>
          </nav> */}
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
