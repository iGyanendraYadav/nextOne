import React, {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import styles2 from '../../styles/Blog.module.css'
import * as fs from 'fs';


const Slug = (props) => {
  function createMarkup(c) {
    return {__html: c};
  }
   const [blog, setBlog] = useState(props.myBlog);
   
  return (
    <div className={styles2.container}>
    <main className={styles2.main}>
      <h1>{blog && blog.title}</h1>
      <hr/>
      
     {blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}
      
    </main>
    </div>
  )
};


export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'how-to-join-error-dot-com' } },
    { params: { slug: 'how-to-manage-seo' } },
    { params: { slug: 'how-to-rank-on-serps' } },
    { params: { slug: 'how-to-start-a-blog' } }
  ],
    fallback: false, // can also be true or 'blocking'
  }
}




export async function getStaticProps(context) {

  const {slug} = context.params;
  let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8')
  return {
    props: {myBlog : JSON.parse(myBlog)}, // will be passed to the page component as props
  }
}

export default Slug;
