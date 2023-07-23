import axios from 'axios'
import React from 'react'

const Blogdetails = (props) => {
  return (
    <div>
    <div>Blogdetails</div>
    <hr></hr>
    {props.blog.title}
    </div>
  )
}

export const getStaticPaths = async () =>  {
    const response = await axios.get('api/blog');
    const slugs = response.data.map(res => res.slug)
    console.log(slugs);
    return {
        paths : slugs.map(item => (
            {
                params : {
                    slug : item
                }
            }
        )),
        fallback:false,
    }
}

export const getStaticProps = async (context) => {

    const slug = context.params.slug;
    const response = await axios.get(`api/blog/${slug}`)
    const detailData = await response.data;

    return {
        props : {
            blog : detailData
        }
    }
}

export default Blogdetails