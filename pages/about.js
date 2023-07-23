import React from "react";
import AppLayout from "../component/Layout/Layout";
import Section_Service from "../component/inner/Section_Service";
import Brands from "../component/inner/Brands";
import Faqshow from "../component/inner/Faqshow";
import Head from "next/head";
import Facts from "../component/inner/Facts";
import Traditional from "../component/inner/Traditional";
// import Avengers from "../component/inner/Avengers";
import Works from "../component/inner/works/Works";
import EveryPlan from "../component/inner/everyPlan/EveryPlan";
import Companies from "../component/inner/companies/Companies";
import Ready from "../component/inner/Ready";
import Mentioned from "../component/inner/Mentioned";
import Image from "next/image";



const about = () => {
  return (
    <>
      <Head>
        <title>Unleash Your Online Potential with Vegas Web</title>
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
          content="Elevate your digital presence with Vegas Web, the ultimate digital marketing partner. Watch your business thrive in the online world with our e xpert strategies and dedicated team. "
        ></meta>
        <meta
          name="og:description"
          content="Elevate your digital presence with Vegas Web, the ultimate digital marketing partner. Watch your business thrive in the online world with our e xpert strategies and dedicated team. "
        ></meta>
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Unleash Your Online Potential with Vegas Web "
        />
        <meta property="og:image" content="Images/meta-img/about.jpg" />
        <meta property="image" content="Images/meta-img/about.jpg" />
        <meta name="keywords" content=""></meta>
        <link rel="icon" type="image" href="../Images/favicon.png"></link>
      </Head>
      <div className="graphic">
        <div className="container">
          <div className="row ">
            <div className=" col-lg-12 col-md-12 ">
              <div className="about-content d-flex flex-column align-items-center justify-content-center mb-5">
                <h1 className="section_title1">
                We Win When you do, too! Our <span className="about-fucas">Business expands</span>  alongside yours
                </h1>
                <p className="mt-3">
                At VEGAS WEB, we create enduring  and strong connections with our clients by providing SEO, paid search marketing, Google Ads management, website design, eCommerce branding & development services. We offer integrated services and a data-driven strategy for web marketing that multiplies the effects of each channel. We are a team of more than 100+web developers, designers and digital marketing experts that was founded in 2005.
                </p>
                <div className="hero-img-4">
                <img src="/Images/about/hero-4.svg" alt="" />
                </div>
                <div className="hero-img-5">
                <img src="/Images/about/hero-5.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex align-items-center justify-conent-center">
            <div className="col-lg-12">
              <div className="about-img-wrapper">
               <div className="about-hero-img">
                <img src="/Images/about/hero-img.svg" alt="" />
               </div>
                <div className="about-item-2">
                <img src="/Images/about/hero-img-2.svg" alt="" />
                </div>
                <div className="about-item-3">
                <img src="/Images/about/hero-img-3.svg" alt="" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Section_Service />
      <Brands />
      <Facts/>
      <Traditional/>
      {/* <Avengers title='Vegas Web Avengers'/> */}
      <Mentioned/>
      <Works/>
      <EveryPlan/>
      <Companies/>
      <Faqshow />
      <Ready/>
    </>
  );
};
about.Layout = AppLayout;
export default about;

// const items = [
//   `Our design services include solutions to fit any budget starting at a moderate cost. Projects typically begin getting designs within a few hours.`,
//    `A experienced and dynamic team of designers is always available to create the ideal logo for your brand.`, 
//    `You can request as many adjustments and changes as you like till you're pleased.`
//   ];