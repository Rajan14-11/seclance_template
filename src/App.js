import React, { useState } from "react";
import "./App.css";
import "./index.css";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaUserLock,
  FaAsterisk,
  FaLaptop,
  FaExclamationCircle,
  FaMobile,
  FaChessQueen,
  FaFacebook,
  FaTwitter,
  FaGoogle,
  FaStreetView,
  FaEnvelope,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, EffectFade, Autoplay } from "swiper";

const App = () => {

  const [isactive,setIsactive] = useState({
    home:false,
    whyUs:false,
    about:false,
    services:false,
    certifications:false,
    contact:false
  })
  const[mobileView,setMobileView] = useState(false)

// const highlightmenu = ()=>{
//     const elem =document.querySelector('.highlight')
//     let scrollpos = window.scrollY;
//     // console.log(scrollpos)
//     if(window.innerWidth > 960 && scrollpos < 600){
//         setIsactive({
//           home: true,
//           whyUs: false,
//           about: false,
//           services: false,
//           certifications: false,
//           contact: false,
//         });
//     }
//     else if(window.innerWidth > 960 && scrollpos < 1400){
//         setIsactive({
//           home: false,
//           whyUs: true,
//           about: false,
//           services: false,
//           certifications: false,
//           contact: false,
//         });
//     }
//     else if(window.innerWidth > 960 && scrollpos < 2050){
//         setIsactive({
//           home: false,
//           whyUs: false,
//           about: true,
//           services: false,
//           certifications: false,
//           contact: false,
//         });
//     }
//     else if(window.innerWidth > 960 && scrollpos < 2700){
//         setIsactive({
//           home: false,
//           whyUs: false,
//           about: false,
//           services: false,
//           certifications: true,
//           contact: false,
//         });
//     }
//     else if(window.innerWidth > 960 && scrollpos < 2820){
//         setIsactive({
//           home: false,
//           whyUs: false,
//           about: false,
//           services: true,
//           certifications: false,
//           contact: false,
//         });
//     }
//     else if(window.innerWidth > 960 && scrollpos < 4500){
//         setIsactive({
//           home: false,
//           whyUs: false,
//           about: false,
//           services: false,
//           certifications: false,
//           contact: true,
//         });
//     }
//     else if(elem && window.innerWidth <960 && scrollpos < 600 || elem){
//         elem.classList.remove('highlight')
//     }

// }
// window.addEventListener('scroll',highlightmenu)
// window.addEventListener('click',highlightmenu)



// const menubars = document.querySelector('.is-active')
// if(window.innerWidth <=760 && menubars){
//        setMobileView(!mobileView)
//   }

  const specialCategories = [
    {
      categoryName: "Offensive Security",
      Image: "/certificate1.jpg",
      desc: "OSCP, OSWP, OSCE, OSEE",
    },
    {
      categoryName: "CREST",
      Image: "/certificate2.jpg",
      desc: "CRT, CPSA",
    },
    {
      categoryName: "SANS",
      Image: "/certificate3.jpg",
      desc: "GCIA, GCIH, GWAPT",
    },
    {
      categoryName: "EC-COUNCIL",
      Image: "/certificate4.jpg",
      desc: "CEH, LPT, ECSA",
    },
    {
      categoryName: "ISC2",
      Image: "/certificate5.jpg",
      desc: "CISSP",
    },
    {
      categoryName: "ISACA",
      Image: "/certificate6.jpg",
      desc: "CISM, CISA",
    },
  ];

  const data = [
    {
      id: "01",
      Reason: "Team",
      description:
        " A team of Passionate and dynamic cyber security professionals committed to helping your business thrive in a world filled with information technology intrusions, malware and other security risks.",
    },
    {
      id: "02",
      Reason: "Approach",
      description:
        "We provide in-depth statistics and analysis by leveraging various sources of real-time Threat Intelligence using a proactive multi-layered cyber security protection service approach to transform your business with cyber security threat intelligence, cybersecurity consulting, cloud, and managed security services.",
    },
    {
      id: "03",
      Reason: "Infrastructure",
      description:
        "We assist you to strengthen your organization's IT infrastructure by focusing on improving cyber security hygiene for Critical Infrastructure, including streamlining Incident Response and Risk Mitigation to Strengthen Security Awareness and Communications",
    },
  ];
  return (
    <>
      <nav className="navbar">
        <div className="navbar__container">
          <a href="#home" id="logo" className="nav_logo">
            <img src="/seclancelogo.png" />
          </a>
          <div
            className={`navbar__toggle ${mobileView ? "is-active" : ""}`}
            id="mobile-menu"
            onClick={() => setMobileView(!mobileView)}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className={`menu ${mobileView ? "active" : ""}`}>
            <li className="items">
              <a
                href="#home"
                className={`links ${isactive.home ? "highlight" : ""}`}
                id="home-page"
              >
                Home
              </a>
            </li>
            <li className="items">
              <a
                href="#whyUs"
                className={`links ${isactive.whyUs ? "highlight" : ""}`}
                id="whyUs-page"
              >
                Why us
              </a>
            </li>
            <li className="items">
              <a
                href="#about"
                className={`links ${isactive.about ? "highlight" : ""}`}
                id="about-page"
              >
                About
              </a>
            </li>
            <li className="items">
              <a
                href="#certifications"
                className={`links ${
                  isactive.certifications ? "highlight" : ""
                }`}
                id="certifications-page"
              >
                Certifications
              </a>
            </li>
            <li className="items">
              <a
                href="#services"
                className={`links ${isactive.services ? "highlight" : ""}`}
                id="services-page"
              >
                Services
              </a>
            </li>
            <li className="items">
              <a
                href="#contact"
                className={`links ${isactive.contact ? "highlight" : ""}`}
                id="contact-page"
              >
                Contact
              </a>
            </li>

            <li className=" navbar__btn">
              <a href="#" className="button" id="signup">
                Book a Demo
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="hero" id="home">
        <div className="hero_section">
          <div className="hero_right_section">
            <img src="/services.gif" />
          </div>
          <div className="hero__container">
            <h1 className="hero__heading">
              {/* Choose your */}
              <span>
                Worried about hackers getting into your information assets?
              </span>
            </h1>
            <p className="hero__description">
              Our Cyber Security team helps your business stay safe. SecLance
              offers a wide range of Information/Cyber Security services that
              helps your organization to reach desired maturity level.
              statistics and analysis. We assist you to strengthen your
              organization's IT infrastructure and provide in-depth statistics
              and analysis
            </p>
            <button className="main__btn">
              <a href="#">Explore</a>
            </button>
          </div>
        </div>
      </div>

      <div className="whyUs" id="whyUs">
        <div className="heading">
          <h1>
            Why Only Us? <span></span>
          </h1>
        </div>
        <p className="whyUs_desc">
          Cyber Security Services customized as per your unique requirements
        </p>

        <div className="whyUs_section">
          <div className="whyUs_image_Section">
            <img src="/aboutUs.jpg" />
          </div>
          <div className="whyUs_slider">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              navigation={false}
              modules={[Autoplay, Navigation, EffectFade]}
              className="mySwiper swiperWhy"
            >
              {data.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="slider">
                      <p
                        className="font-bold text-4xl text-white"
                        style={{
                          fontWeight: 500,
                          fontSize: "1.5rem",
                          margin: 0,
                        }}
                      >
                        {item.id}
                      </p>
                      <p
                        className="text-5xl text-yellow"
                        style={{
                          fontSize: "2rem",
                          fontWeight: 700,
                          margin: 0,
                        }}
                      >
                        {item.Reason}
                      </p>
                      <p
                        className="text-lg font-semibold"
                        style={{
                          fontSize: "1.5rem",
                          margin: 0,
                          padding: "0.5rem",
                          width: "100%",
                        }}
                      >
                        {item.description}
                      </p>
                      <div className="pb-10"></div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>

      <div className="about" id="about">
        <div className="aboutSection">
          <div className="left_section">
            <div className="heading">
              <h1>
                About Us <span></span>
              </h1>
            </div>
            <div className="desc">
              <h3>
                SecLance offers a wide range of Information/Cyber Security
                services that helps your organization to reach desired maturity
                level
              </h3>
              <p>
                SecLance was founded by a group of like-minded Cyber Security
                enthusiasts in the year 2019. We are currently serving clients
                across 3 continents (Asia, Africa, and Europe) and have
                successfully completed over 200 projects to since the inception.
                Our goal is to improve security resilience by reducing the
                occurrence of attacks, and threats so you may adjust, innovate,
                and grow at your own pace.
              </p>
            </div>
          </div>
          <div className="right_section">
            <img src="/aboutUs.jpg" />
          </div>
        </div>
      </div>

      <div className="certifications" id="certifications">
        <div className="heading">
          <h1>
            Our Certifications <span></span>
          </h1>
        </div>
        <div className="certification_section">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            // loop={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              980: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              500: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
            navigation={false}
            modules={[Autoplay, Navigation, EffectFade]}
            className="mySwiper swiperWhy"
          >
            {specialCategories.map((category, index) => (
              // <SwiperSlide key={index}>
              <SwiperSlide
                style={{
                  background: "none",
                }}
                key={index}
                className="slider_container"
              >
                <div className="slider_image_container">
                  <img
                    className="slider_image"
                    src={category.Image}
                    alt={category.categoryName}
                  />
                  <div className="certificate_desc">
                    <h1 className="">{category.categoryName}</h1>
                    <p>{category.desc}</p>
                  </div>
                </div>
              </SwiperSlide>
              // </SwiperSlide>
            ))}
            {/* {data.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="slider">
                    <p
                      className="font-bold text-4xl text-white"
                      style={{
                        fontWeight: 500,
                        fontSize: "2rem",
                        margin: 0,
                      }}
                    >
                      {item.id}
                    </p>
                    <p
                      className="text-5xl text-yellow"
                      style={{
                        fontSize: "2.3rem",
                        fontWeight: 700,
                      }}
                    >
                      {item.Reason}
                    </p>
                    <p
                      className="text-lg font-semibold"
                      style={{
                        fontSize: "1.5rem",
                      }}
                    >
                      {item.description}
                    </p>
                    <div className="pb-10"></div>
                  </div>
                </SwiperSlide>
              );
            })} */}
          </Swiper>
        </div>
      </div>

      <div className="services" id="services">
        <div className="services_section">
          <div className="heading">
            <h1>
              Our Services<span></span>
            </h1>
          </div>
          <div className="services_cards">
            <div class="card">
              <div className="icon_container">
                <FaUserLock className="card_icon" />
              </div>
              <div className="card_detail">
                <h4 data-aos="fade-up">Security Testing</h4>
                <p>
                  Web Application/API/Mobile/ Infrastructure Penetration Testing
                </p>
                <button className="main__btn">Learn More</button>
              </div>
              <div class="card__inner">
                <p data-aos="fade-up" class="description">
                  <ul style={{ listStyleTtype: "circle", fontSize: "1.1rem" }}>
                    <li class="list-description" data-aos="fade-up">
                      Penetration Testing (Internal & External)
                    </li>
                    <li class="list-description" data-aos="fade-up">
                      Web Application/API/Mobile/ Infrastructure Penetration
                      Testing
                    </li>
                    <li class="list-description" data-aos="fade-up">
                      Cloud Penetration Testing{" "}
                    </li>
                    <li class="list-description" data-aos="fade-up">
                      Adversary Attack Simulation/Intelligence Led Penetration
                      Testing
                    </li>
                    <li class="list-description" data-aos="fade-up">
                      IOT Penetration Testing
                    </li>
                    <li class="list-description" data-aos="fade-up">
                      Configuration Reviews
                    </li>
                    <li class="list-description" data-aos="fade-up">
                      Secure Code Review{" "}
                    </li>
                    <li class="list-description" data-aos="fade-up">
                      SSDLC Review
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            <div class="card">
              <div className="icon_container">
                <FaAsterisk className="card_icon" />
              </div>
              <div className="card_detail">
                <h4 data-aos="fade-up">Risk Assessments</h4>
                <p>
                  Web Application/API/Mobile/ Infrastructure Penetration Testing
                </p>
                <button className="main__btn">Learn More</button>
              </div>
              <div class="card__inner">
                <p class="description">
                  <ul style={{ listStyleTtype: "circle" }}>
                    <li class="list-description" data-aos="fade-up">
                      Information Security Audit Reviews (ISO 27001, NIST, PCI
                      Compliance)
                    </li>
                    <li class="list-description" data-aos="fade-up">
                      Third Party Security Assessment/Review (Vendor Risk
                      Management)
                    </li>
                    <li class="list-description" data-aos="fade-up">
                      Cyber Security Posture Assessment
                    </li>
                    <li class="list-description" data-aos="fade-up">
                      {" "}
                      Business Continuity Management and Disaster Recovery
                      Assessment
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            <div class="card">
              <div className="icon_container">
                <FaExclamationCircle className="card_icon" />
              </div>
              <div className="card_detail">
                <h4 data-aos="fade-up">Training and Awareness</h4>
                <p>
                  Web Application/API/Mobile/ Infrastructure Penetration Testing
                </p>
                <button className="main__btn">Learn More</button>
              </div>
              <div class="card__inner">
                <p class="description">
                  <ul style={{ listStyleTtype: "circle" }}>
                    <li class="list-description" data-aos="fade-up">
                      Penetration Testing Training{" "}
                    </li>
                    <li class="list-description" data-aos="fade-up">
                      DevSecOps Training
                    </li>
                    <li class="list-description" data-aos="fade-up">
                      Information Security Awareness Training
                    </li>
                    <li class="list-description" data-aos="fade-up">
                      SOC Training
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            <div class="card">
              <div className="icon_container">
                <FaChessQueen className="card_icon" />
              </div>
              <div className="card_detail">
                <h4 data-aos="fade-up">DevSecOps Strategy</h4>
                <p>
                  Web Application/API/Mobile/ Infrastructure Penetration Testing
                </p>
                <button className="main__btn">Learn More</button>
              </div>
              <div class="card__inner">
                <p class="description">
                  <ul style={{ listStyleTtype: "circle" }}>
                    <li class="list-description" data-aos="fade-up">
                      Integrating Security in CI-CD Pipeline
                    </li>
                    <li class="list-description" data-aos="fade-up">
                      End-to-End implementation of DevSecOps strategy
                    </li>
                    <li class="list-description" data-aos="fade-up">
                      Enhance existing application security to matured state{" "}
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            <div class="card">
              <div className="icon_container">
                <FaLaptop className="card_icon" />
              </div>
              <div className="card_detail">
                <h4 data-aos="fade-up">Web Application Development</h4>
                <p>
                  Web Application/API/Mobile/ Infrastructure Penetration Testing
                </p>
                <button className="main__btn">Learn More</button>
              </div>
              <div class="card__inner">
                <p class="description">
                  <ul style={{ listStyleTtype: "circle" }}>
                    <li class="list-description" data-aos="fade-up">
                      Experts in microservices{" "}
                    </li>
                    <li class="list-description" data-aos="fade-up">
                      Innovative in modularising existing architectures
                    </li>
                    <li class="list-description" data-aos="fade-up">
                      Tech-savvy in integrating the cloud power and web
                      solutions
                    </li>
                    <li class="list-description" data-aos="fade-up">
                      {" "}
                      Consistent delivery by following CI/CD approaches
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            <div class="card">
              <div className="icon_container">
                <FaMobile className="card_icon" />
              </div>
              <div className="card_detail">
                <h4 data-aos="fade-up">Mobile Application Development</h4>
                <p>
                  Web Application/API/Mobile/ Infrastructure Penetration Testing
                </p>
                <button className="main__btn">Learn More</button>
              </div>
              <div class="card__inner">
                <p class="description">
                  <ul style={{ listStyleTtype: "circle" }}>
                    <li class="list-description" data-aos="fade-up">
                      {" "}
                      Custom iOS and Android apps development{" "}
                    </li>
                    <li class="list-description" data-aos="fade-up">
                      {" "}
                      Native and cross-platform solutions{" "}
                    </li>
                    <li class="list-description" data-aos="fade-up">
                      Second platform app development
                    </li>
                    <li class="list-description" data-aos="fade-up">
                      UI/UX design{" "}
                    </li>
                    <li class="list-description" data-aos="fade-up">
                      Consulting and prototyping
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="partners" id="partners">
        <div className="partners_section">
          <div className="heading">
            <h1>
              Our Partners<span></span>
            </h1>
          </div>
          <div className="partners_cards">
            <div className="partner">
              <img src="/logo.png" />
            </div>
          </div>
        </div>
      </div>

      <div className="contact" id="contact">
        <div className="contact_section">
          <div className="contactUs">
            <div className="footer_combi">
              <div className="left_part">
                <div className="contact_logo">
                  <img src="/seclancelogo.png" />
                </div>
                <div className="social_icons">
                  <div className="contact_heading">
                    <h1>
                      Follow Us<span></span>
                    </h1>
                  </div>
                  <div className="icons">
                    <FaFacebook className="icon" />
                    <FaTwitter className="icon" />
                    <FaGoogle className="icon" />
                  </div>
                </div>
              </div>
              <div className="middle_part">
                <div className="contact_links">
                  <div className="contact_heading">
                    <h1>
                      Links<span></span>
                    </h1>
                  </div>
                  <ul>
                    <li className="contact_link">Home</li>
                    <li className="contact_link">Why Us</li>
                    <li className="contact_link">About Us</li>
                    <li className="contact_link">Our Services</li>
                    <li className="contact_link">Contact Us</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="right_part">
              <div className="contact_heading">
                <h1>
                  Contact Us<span></span>
                </h1>
              </div>
              <div className="contact_details">
                <div className="address">
                  <FaStreetView className="icon" />
                  <span>
                    SecLance, No 262, JHBCS Layout, JP Nagar Post Bangalore,
                    Karnataka, India- 560078 ​
                  </span>
                </div>
                <div className="mail">
                  <FaEnvelope className="icon" />
                  <span>sales@seclance.com​</span>
                </div>
              </div>
            </div>
          </div>
          <div className="footer"></div>
        </div>

        <div class="copyright-area">
          <div class="copy_container">
            {/* <div class="row"> */}
            <div class="">
              <div class="copyright-text">
                <p>
                  Copyright &copy; 2021, All Right Reserved{" "}
                  <a href="">Seclance</a>
                </p>
              </div>
            </div>
            <div class="">
              <div class="footer-menu">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="">Terms</a>
                  </li>
                  <li>
                    <a href="">Privacy</a>
                  </li>
                  <li>
                    <a href="">Policy</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
