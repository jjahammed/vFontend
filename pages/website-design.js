import AppLayout from "../component/Layout/Layout";
import Link from "next/link";
import Brands from "../component/inner/Brands";
import Custiomize_Price from "../component/inner/Custiomize_Price";
import Mentioned from "../component/inner/Mentioned";
import Section_Service from "../component/inner/Section_Service";
import NewsLetter from "../component/inner/NewsLetter";
import HowItWork from "../component/inner/HowItWork";
import Client from "../component/inner/Client";
import Project from "../component/inner/project_contact";
import Registration from "../component/inner/Registration";
import { FaCheckCircle } from "react-icons/fa";
import Faqshow from "../component/inner/Faqshow";
import Whyus from "../component/inner/Whyus";
import Solution from "../component/inner/Solution";
import Fashion from "../component/inner/Fashion";
import Techologies from "../component/inner/Techologies";
import WebDesignService from "../component/inner/WebDesignService";
import Head from "next/head";
const website_design = () => {
  return (
    <>
      <Head>
        <title>Vegas Web – Top notch cost-effective web design services.</title>
        <meta property="og:site_name" content="VEGAS WEB"></meta>
        <meta
          name="google-site-verification"
          content="qLqpdaJEdfR47ipB9hZYNBRaViXucx7nOp3B5VCNLb0"
        />
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://vegasweb.com/" />
        <link rel="canonical" href="https://vegasweb.com/" />
        <meta
          name="description"
          content="Discover Vegas Web, a professional website design company. We create stunning and functional websites that elevate your online presence and attract your target audience."
        ></meta>
        <meta
          name="og:description"
          content="Discover Vegas Web, a professional website design company. We create stunning and functional websites that elevate your online presence and attract your target audience."
        ></meta>
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Vegas Web – Top notch cost-effective web design services."
        />
        <meta property="og:image" content="Images/meta-img/web-design.jpg" />
        <meta property="image" content="Images/meta-img/web-design.jpg" />
        <meta name="keywords" content=""></meta>
        <link rel="icon" type="image" href="../Images/favicon.png"></link>
      </Head>
      <section className="web_design cpt-6 cpb-6">
        <div className="container">
          <div className="web_design_box row">
            <div className=" web_design_left social_marketing_left col-xl-6 col-lg-6 col-md-12 ">
              <div className=" web_design_title">
                <h1 className="section_title1">
                  User-Centric & Profit-Oriented <span>Web Design</span>{" "}
                  Services
                </h1>
                <p>
                  Design a custom website for your business that showcase your
                  identity and your work.{" "}
                </p>
              </div>
              <div className="video_editing_right_btn d-flex gap-3">
                <Link href="#service"> Get Started</Link>
                {/* <Link href="#service" className="learn-more-btn">
                  Learn More
                </Link> */}
              </div>
              <div className="hero_icon  gap-5">
                <div className="d-flex align-items-center  text-center">
                  <div className="hero_icons_item d-flex  text-center gap-2">
                    <FaCheckCircle />
                    <h2 className="section_title2">Free Register</h2>
                  </div>
                  <div className="hero_icons_item d-flex  text-center gap-2">
                    <FaCheckCircle />
                    <h2 className="section_title2">Great Service</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="web_design_box_right text-center col-xl-6 col-lg-6 col-md-12  ">
              <img
                src="https://res.cloudinary.com/dne6hxmao/image/upload/v1684411753/Vegas%20Web/Website_puserc.gif"
                alt="vages Web"
                width="auto"
                height="auto"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <======Section_Service start========> */}
      <div className="serice-cards">
        <Section_Service />
      </div>
      {/* <======Section_Service end========> */}
      {/* <Disc/> section start */}
      <Whyus items={items} />

      {/* <Disc/> section end */}
      <Brands />
      <Custiomize_Price />
      {/* <Brand_service/> */}
      <div id="service">
        <Solution title="Create your digital experiences exciting and inspiring with these services. Make Your Online Presence Count" />
      </div>
      {/* <Brand_service/> */}
      <Mentioned />
      {/* <Less/>  section start*/}
      <Fashion title="Get the most creative and functional design for less" />

      {/* <Less/>  section end*/}
      <Techologies />
      <NewsLetter />
      <WebDesignService />
      <HowItWork />
      <Client />
      <Project />
      <Faqshow />
      <Registration />
    </>
  );
};

website_design.Layout = AppLayout;
export default website_design;

const items = [
  `A experienced and dynamic team of designers are always available to create the ideal website for your brand at a moderate costing.`,
  `You can request as many adjustments and changes as you like till you're pleased.`,
  `You get a completely optimizable, easy-to-use and all device friendly website.`,
  `You receive a fully scalable, holistic design which is entirely performance-based.`,
];
