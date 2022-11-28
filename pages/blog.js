import Link from "next/link";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import styles2 from "../styles/Blog.module.css";
import * as fs from "fs";
import InfiniteScroll from "react-infinite-scroll-component";

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);
  const [count, setCount] = useState(2);

  const fetchData = async () => {
    let d = await fetch(`http://localhost:3000/api/blogs/?count=${count+2}`)
    setCount(count + 2)
    let data = await d.json()
    setBlogs(data)
  };


  return (
    <>
      <Head>
        <title>BetterlinQ : Blog</title>
        <meta name="description" content="Content created by Gyanendra Yadav" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <div className={styles2.container}>

        <main className={styles2.main}>
          <InfiniteScroll
            dataLength={blogs.length} //This is important field to render the next data
            next={fetchData}
            hasMore={props.allCount !== blogs.length}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Wow ! You have seen it all</b>
              </p>
            }
             >

{blogs.map((blogitem2) => {
            return (
              
              <div key={blogitem2.slug}>
                <Link href={`/blogpost/${blogitem2.slug}`}>
                  <h3 className={styles2.blogitem}>{blogitem2.title}</h3>
                </Link>
                <p>{blogitem2.metadesc.substr(0, 140)}...</p>
              </div>
            
            );
          })}

           
          </InfiniteScroll>


        </main>
      </div>
    </>
  );
};

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata");
  let allCount = data.length;
  let myfile;
  let allBlogs = [];

  for (let index = 0; index < 2; index++) {
    const item = data[index];
    myfile = await fs.promises.readFile("blogdata/" + item, "utf-8");
    allBlogs.push(JSON.parse(myfile));
  }

  return {
    props: { allBlogs, allCount }, // will be passed to the page component as props
  };
}

export default Blog;
