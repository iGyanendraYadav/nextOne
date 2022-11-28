import React from "react";
import Image from "next/image";
import Head from "next/head";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <>
      <Head>
        <title>BetterlinQ : About Us</title>
        <meta name="description" content="Content created by Gyanendra Yadav" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <div className={styles.quote}>
        We’re a highly collaborative and supportive team, coming together on
        every project to ensure our clients get the very best result.
      </div>
      <div className={styles.imgBox}>
        <Image
          src="/content.jpg"
          alt="services"
          width={750}
          height={500}
          className={styles.img1}
        />
      </div>

      {/* OUR AIMs */}

      <div className={styles.aim}>
        <div className={styles.mission}>
          <h1>Our Mission</h1>

          <p>
            Build the best product that creates the most value for our
            customers, use business to inspire and implement environmentally
            friendly solutions.
          </p>
        </div>
        <div className={styles.values}>
          <h1>Our Values</h1>

          <p>We strive to go above and beyond for our clients no matter the challenge. We aim to deliver our very best work every single day across our services.</p>
        </div>
      </div>

      {/* Final Quotes */}
      <div className={styles.finalQ}>
        <span>“betterlinQ has an amazing team of hard working professionals. It has been a pleasure to meet them.”</span>
        <div className={styles.spaceY}>
        <Image
          src="/p7.jpg"
          alt="services"
          width={100}
          height={100}
          className={styles.finalImg}
        />
        </div>
        <span className={styles.name}><a href="https://www.linkedin.com/in/igyanendrayadav/" target="_blank" rel="noopener noreferrer"></a>Gyanindra Yadav</span>
      </div>
    </>
  );
};

export default About;
