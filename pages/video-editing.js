import React from "react";
import Link from "next/link";
import Applayout from "../component/Layout/Layout";
import { FaCheckCircle } from "react-icons/fa";
import Brands from "../component/inner/Brands";
import Custiomize_Price from "../component/inner/Custiomize_Price";
import Mentioned from "../component/inner/Mentioned";
import HowItWork from "../component/inner/HowItWork";
import NewsLetter from "../component/inner/NewsLetter";
import Client from "../component/inner/Client";
import Registration from "../component/inner/Registration";
import Project from "../component/inner/project_contact";
import Faqshow from "../component/inner/Faqshow";
import Whyus from "../component/inner/Whyus";
import Solution from "../component/inner/Solution";
import Fashion from "../component/inner/Fashion";
import Section_Service from "../component/inner/Section_Service";
import Head from "next/head";
import Video_editing_service from "./Video_editing_service";
const VideoEditing = () => {
  return (
    <>
      <Head>
        <title>
          Vegas Web– Elevate Your Videos with Vegas Web's Video Editing Services
        </title>
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
          content="Vegas Web: Your one-stop video editing agency for films, weddings, commercials, music videos, and YouTube content."
        ></meta>
        <meta
          name="og:description"
          content="Vegas Web: Your one-stop video editing agency for films, weddings, commercials, music videos, and YouTube content."
        ></meta>
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content=" Vegas Web– Elevate Your Videos with Vegas Web's Video Editing Services"
        />
        <meta property="og:image" content="Images/meta-img/video-edting.jpg" />
        <meta property="image" content="Images/meta-img/video-edting.jpg" />
        <meta name="keywords" content=""></meta>
        <link rel="icon" type="image" href="../Images/favicon.png"></link>
      </Head>
      <section className="video_editing cpb-5">
        <div className="container video_editing-wrapper">
          <div className="video_editing_title">
            <h1 className="section_title1">Top Notch Video Editing Services</h1>
          </div>

          <div className="video_editing_box">
            <div className="video_editing_box_left">
              <img
                src="Images/video-editing/image-2.svg"
                alt=""
              />
            </div>
            <div className="video_editing_right">
              <div className="video_editing_right_title">
                <p>
                  {" "}
                  Find the best post-production and video editing services right
                  here. At our video editing studio, a talented group of motion
                  designers, artists, and animators collaborate to produce
                  stunning works of art which compliments your brand.
                </p>
              </div>
              <div className="video_editing_right_btn d-flex gap-3">
              <Link href='#service'> Get Started</Link>
                    {/* <Link href='#service'  className="learn-more-btn">Learn More</Link> */}
              </div>
              <div className="video_editing_icons hero_icon d-flex align-items-center text-center">
                <div className="hero_icons_item video_editing_icons_items d-flex  text-center gap-2">
                  <FaCheckCircle />
                  <h2 className="section_title2">Free Register</h2>
                </div>
                <div className="hero_icons_item video_editing_icons_items d-flex  text-center gap-2">
                  <FaCheckCircle />
                  <h2 className="section_title2">Great Service</h2>
                </div>
              </div>
            </div>
            <div className="video_editing_image2">
              <img
                src="https://res.cloudinary.com/dne6hxmao/image/upload/v1684402810/Vegas%20Web/Video-Animation-01_mfzj3j.gif"
                alt="vages Web"
                width="auto"
                height="auto"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Section_Service start */}
      <Section_Service />
      {/* Section_Service end */}
      <Whyus items={items} />
      {/* disc section end */}

      <Brands />
      <Custiomize_Price />

      {/* Brand_service section start */}
      <div id="service">
      <Solution title="Editing Services That Excite, Engage, and inspire your audience." />
      </div>
      {/* Brand_service section END */}
      {/* Mentioned section start*/}
      <Mentioned />
      <Fashion title="Get A-1 Video Editing & Post-Production Services." />
      {/* Mentioned section end*/}
      <NewsLetter />
      <Video_editing_service/>
      <HowItWork />
      <Client />
      <Project />
      <Faqshow />
      <Registration />
    </>
  );
};
VideoEditing.Layout = Applayout;
export default VideoEditing;

const items = [
  `Thanks to our in-house videography and post production resources, our creative team can produce phenomenal videos at a reasonable price for our clients.`,
   `In order to produce an intriguing visual story our creative team analyze each project from every perspective to pick out the most appealing and intriguing viewpoint.`, 
   `Our exceptional editorial strategy for our clients' video productions, which incorporates style and rhythm, grabs and holds the interest of your target audiences and generates sales.`,
   `Money-back guarantee if our work falls short of your expectations and you don't get the greatest possible result for your brand.`
  ];