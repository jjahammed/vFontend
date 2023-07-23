import axios from 'axios'
import React from 'react'
import Link from 'next/link';

const Blogpages = (props) => {
    console.log(props);
  return (
    <div>
        <h1>Blog List</h1>
        <hr></hr>
        {
            props.blog.map(res => {
                return (
                    <li key={res.id}><Link href={`joney/${res.slug}`}>{res.title}</Link></li>
                )
            })
        }
    </div>
  )
}

export const getServerSideProps = async () => {

        const response = await axios.get('api/blog');
        const blogData = await response.data;
    return {
        props : {
            blog : blogData
        }
    }
}


export default Blogpages