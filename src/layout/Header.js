import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { sidebarOnclick, stickyNav } from "../utils";
import { Blog, Courses, Home, Pages } from "./Menu";
import MobileHeader from "./MobileHeader";
import { usePathname } from "next/navigation";

const Header = ({ header }) => {
  const location = usePathname();
  useEffect(() => {
    stickyNav();
  }, []);
  const [navToggle, setNavToggle] = useState(false);
  switch (header) {
    case 1:
      return <Header1 navToggle={navToggle} setNavToggle={setNavToggle} />;
    case 3:
      return <Header3 navToggle={navToggle} setNavToggle={setNavToggle} />;
    case 4:
      return <Header4 navToggle={navToggle} setNavToggle={setNavToggle} />;

    default:
      return (
        <DefaultHeader navToggle={navToggle} setNavToggle={setNavToggle} />
      );
  }
};
export default Header;
const Header1 = ({ navToggle, setNavToggle }) => (
    <Fragment>
      {console.log("navToggle", navToggle)}
      <header className="main-header">
        <HeaderTop />
        <div className="header-upper">
          <div className="container-fluid clearfix  ">
            <div className="header-inner   d-flex align-items-center justify-content-between">
              <div className="logo-outer d-lg-flex align-items-center">
                <div className="logo">
                  <Link legacyBehavior href="/">
                    <img
                      src="assets/images/logos/logo.png"
                      alt="Logo"
                      title="Logo"
                      className="py-2"
                      style={{
                        maxWidth: 120,
                      }}
                    />
                  </Link>
                </div>
              </div>
              <div className="nav-outer clearfix">
                <nav className="main-menu navbar-expand-lg">
                  <div className="navbar-header">
                    <div className="mobile-logo  br-10 p-15">
                      <Link legacyBehavior href="/">
                        <img
                          src="assets/images/logos/logo.png"
                          alt="Logo"
                          title="Logo"
                        />
                      </Link>
                    </div>
                    {/* Toggle Button */}
                    <button
                      type="button"
                      className="navbar-toggle"
                      data-toggle="collapse"
                      data-target=".navbar-collapse"
                      onClick={() => setNavToggle((prev) => !prev)}
                    >
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                  </div>
                  <div
                    className={`navbar-collapse  clearfix ${
                      navToggle ? "visible" : "hidden"
                    }`}
                  >
                    <Menus />
                    <MobileHeader />
                  </div>
                </nav>
                {/* Main Menu End*/}
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  ),
  Header3 = ({ navToggle, setNavToggle }) => (
    <Fragment>
      <header className="main-header header-three">
        {/* Header-Top */}
        <HeaderTop />
        {/* Header-Upper */}
        <div className="header-upper">
          <div className="container clearfix">
            <div className="header-inner d-flex align-items-center justify-content-between">
              <div className="logo-outer d-lg-flex align-items-center">
                <div className="logo">
                  <Link legacyBehavior href="/">
                    <a>
                      <img
                        src="assets/images/logos/logo-two.png"
                        alt="Logo"
                        title="Logo"
                      />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="nav-outer clearfix">
                {/* Main Menu */}
                <nav className="main-menu navbar-expand-lg">
                  <div className="navbar-header">
                    <div className="mobile-logo">
                      <Link legacyBehavior href="/">
                        <a>
                          <img
                            src="assets/images/logos/logo-two.png"
                            alt="Logo"
                            title="Logo"
                          />
                        </a>
                      </Link>
                    </div>
                    {/* Toggle Button */}
                    {/* <button
                      type="button"
                      className="navbar-toggle"
                      data-toggle="collapse"
                      data-target=".navbar-collapse"
                    >
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button> */}
                  </div>
                  <div
                    className={`navbar-collapse collapse clearfix ${
                      navToggle ? "show" : ""
                    }`}
                  >
                    <Menus />
                    <MobileHeader />
                  </div>
                </nav>
                {/* Main Menu End*/}
              </div>

              <div className="menu-btn-sidebar d-flex align-items-center">
                <div
                  className="menu-sidebar"
                  onClick={() => sidebarOnclick()}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  ),
  Header4 = ({ navToggle, setNavToggle }) => (
    <header className="main-header header-four">
      {/* Header-Top */}
      <div className="header-top bg-light-blue text-white">
        <div className="container-fluid">
          <div className="top-inner">
            <div className="top-left">
              <p>
                <i className="far fa-clock" /> <b>Working Hours</b> : Manday -
                Friday, 08am - 05pm
              </p>
              <p>
                <i className="fas fa-phone" /> <b>Hotline</b> :{" "}
                <a href="callto:+012(345)6789">+012 (345) 67 89</a>
              </p>
            </div>
            <div className="top-right d-flex align-items-center">
              <div className="social-style-two">
                <Link href="/contact">
                  <i className="fab fa-twitter" />
                </Link>
                <Link href="/contact">
                  <i className="fab fa-facebook-f" />
                </Link>
                <Link href="/contact">
                  <i className="fab fa-instagram" />
                </Link>
                <Link href="/contact">
                  <i className="fab fa-pinterest-p" />
                </Link>
              </div>
              <ul className="top-menu">
                <li>
                  <Link href="/about">Setting &amp; Privacy</Link>
                </li>
                <li>
                  <Link href="/faqs">Faqs</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Header-Upper */}
      <div className="header-upper">
        <div className="container-fluid clearfix">
          <div className="header-inner d-flex align-items-center justify-content-between">
            <div className="logo-outer">
              <div className="logo">
                <Link legacyBehavior href="/">
                  <a>
                    <img
                      src="assets/images/logos/logo-three.png"
                      alt="Logo"
                      title="Logo"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="nav-outer clearfix">
              {/* Main Menu */}
              <nav className="main-menu navbar-expand-lg">
                <div className="navbar-header">
                  <div className="mobile-logo">
                    <Link legacyBehavior href="/">
                      <a>
                        <img
                          src="assets/images/logos/logo-three.png"
                          alt="Logo"
                          title="Logo"
                        />
                      </a>
                    </Link>
                  </div>
                  {/* Toggle Button */}
                  {/* <button
                    type="button"
                    className="navbar-toggle"
                    data-toggle="collapse"
                    data-target=".navbar-collapse"
                    onClick={() => setNavToggle(!navToggle)}
                  >
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button> */}
                </div>
                <div
                  className={`navbar-collapse collapse clearfix ${
                    navToggle ? "show" : ""
                  }`}
                >
                  <Menus />
                  <MobileHeader />
                </div>
              </nav>
              {/* Main Menu End*/}
            </div>
            {/* Menu Button */}
            {/* <div className="menu-btns d-lg-flex d-none align-items-center">
              <div className="nice-select">
                <span className="">English</span>
                <ul className="list">
                  <li data-value="English" className="option selected focus">
                    English
                  </li>
                  <li data-value="Chinese" className="option">
                    Bangla
                  </li>
                  <li data-value="Arabic" className="option">
                    Arabic
                  </li>
                </ul>
              </div>

              <Link legacyBehavior href="/contact">
                <a className="theme-btn">
                  Register <i className="fas fa-arrow-right" />
                </a>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  ),
  DefaultHeader = ({ navToggle, setNavToggle }) => (
    <Fragment>
      <header className="main-header header-two ">
        {/* Header-Top */}
        <HeaderTop />

        <div className="header-upper">
          <div className="container-fluid clearfix">
            <div className="header-inner d-flex align-items-center justify-content-between">
              <div className="logo-outer d-lg-flex align-items-center">
                <div className="logo">
                  <Link legacyBehavior href="/">
                    <a>
                      <img
                        src="assets/images/logos/logo.png"
                        alt="Logo"
                        title="Logo"
                      />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="nav-outer clearfix ">
                {/* Main Menu */}
                <nav className="main-menu navbar-expand-lg ">
                  <div className="navbar-header">
                    <div className="mobile-logo bg-green br-10 p-15">
                      <Link legacyBehavior href="/">
                        <a>
                          <img
                            src="assets/images/logos/logo.png"
                            alt="Logo"
                            title="Logo"
                          />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div
                    className={`navbar-collapse collapse clearfix ${
                      navToggle ? "show" : ""
                    }`}
                  >
                    <Menus />
                    <MobileHeader />
                  </div>
                </nav>
              </div>

              <div className="menu-btn-sidebar d-flex align-items-center"></div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  ),
  Menus = () => (
    <ul className="navigation clearfix d-none d-lg-flex">
      <li className="dropdown">
        <Link legacyBehavior href="/">
          <a>home</a>
        </Link>
      </li>
      <li className="dropdown">
        <Link legacyBehavior href="/program">
          <a>Our Packages</a>
        </Link>
      </li>
      <li className="dropdown">
        <Link legacyBehavior href="/contact">
          <a>Contact Us</a>
        </Link>
      </li>
      <li className="dropdown">
        <Link legacyBehavior href="/enrollment">
          <a>Enrollment</a>
        </Link>
      </li>
      <li>
        <Link legacyBehavior href="/about">
          <a>About Us</a>
        </Link>
      </li>
      <li className="dropdown">
        <a>Blog</a>
      </li>
    </ul>
  ),
  HeaderTop = () => (
    <div className="header-top bg-light-blue text-white">
      <div className="container-fluid">
        <div className="top-inner">
          <div className="top-left">
            <p>
              <i className="far fa-clock" /> <b>Working Hours</b> : Monday -
              Friday, 08am - 05pm
            </p>
          </div>
          <div
            className="top-center d-flex align-items-center"
            style={{ marginRight: 120 }}
          >
            <div className="social-style-two">
              <Link legacyBehavior target="_blank" href="">
                <a
                  href="https://www.instagram.com/perfect_plus_cdl_school?igsh=ZXd0dGVjNHlrcmFh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram" />
                </a>
              </Link>
              <Link href={""} target="_blank" legacyBehavior>
                <a
                  href="https://www.facebook.com/share/18fv6icuto/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f" />
                </a>
              </Link>
              <Link target="_blank" legacyBehavior href="">
                <a
                  href="https://g.co/kgs/ecLPxQ1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-google" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
