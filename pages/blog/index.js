import React, { useEffect, useState } from "react";
import AppLayout from "../../component/Layout/Layout";
import Head from "next/head";
import Link from "next/link";
import { Blocks } from 'react-loader-spinner'
import axios from "axios";
import { fontSize } from "@mui/system";
import parse from 'html-react-parser';
import dynamic from 'next/dynamic';

const DynamicRawHTMLRenderer = dynamic(
  () => import('../../component/blog/RawHTMLRenderer'),
  { ssr: false } // This ensures that the component is not rendered on the server side
);


export const getServerSideProps = async () => {
  const response = await axios.get('api/blog');
  const posts = await response.data;
  return {
    props : {
      posts,
    }
  }
}

function Blog(props) {
  const {posts} = props

  return (
    <>
      <Head>
        <title>Explore more about nft defi and blockchain fundamentals- NFT Constructer</title>
        <meta property="og:site_name" content="NFT CONSTRUCTER"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://nftconstructer.com/blog" />
        <meta
          name="google-site-verification"
          content="qLqpdaJEdfR47ipB9hZYNBRaViXucx7nOp3B5VCNLb0"
        />
        <link rel="canonical" href="https://nftconstructer.com/blog" />

        <meta
          name="description"
          content="Blockchain development is increasing day by day and business of nft development, metaverse development, DeFi development getting important…"
        ></meta>
        <meta
          name="og:description"
          content="Blockchain development is increasing day by day and business of nft development, metaverse development, DeFi development getting important…"
        ></meta>
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Explore more about nft defi and blockchain fundamentals- NFT Constructer" />
        <meta property="og:image" content="assets/img/meta/blog.jpg" />
        <meta property="image" content="assets/img/meta/blog.jpg" />
        <meta
          name="keywords"
          content="nft, full stack, web development, website, website design , website development,development, nft constructer, minting website"
        ></meta>
        <link rel="icon" type="image" href="/favicon.png"></link>
      </Head>

      {/* <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MLNPCQK"
          className="tag-man"
        ></iframe>
      </noscript> */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MLNPCQK"
          className="tag-man"
        ></iframe>
      </noscript>

      

      {/* <OfferA /> */}
      <div id="blog" className="cpy-6">
        <section>
          <div className="container">
            <div className="section-title">
              <p className="sm-title">My Blog</p>
              <h2 className="sec-title">Latest News</h2>
              <p className="sec-des">
              Stay updated with the treasure trove of stellar content that inspires, informs, and entertains.
              </p>
            </div>

            <div className="blog-container">
              {posts.length == 0 ? 
              <Blocks
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{ }}
              wrapperClass="blocks-wrapper"
              />
              : posts.map((post, index) => (
                <div className="blog-post " key={index}>
                  <div className="blog-img">
                    <img
                      height="auto"
                      width="auto"
                      src={post.main_image}
                      alt={post.seo_title}
                    />
                  </div>
                  <div className="about-blog">
                    <Link href={`/blog/${post.slug}`} className="urbanist-black-18">
                     {post.title}
                    </Link>
                    <p className="raleway-grey-16">
                      <span className="author-name-post">{post.author}</span>{" "}
                      <span className="space">|</span>
                      <span className="post-date">{post.created_date}</span>
                    </p>
                    <DynamicRawHTMLRenderer html={post.description.substring(0,100)} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

Blog.layout = AppLayout;

export default Blog;
