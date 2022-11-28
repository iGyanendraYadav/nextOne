import React from "react";
import Image from "next/image";
import Head from "next/head";
import styles from "../styles/Services.module.css";

const Services = () => {
  return (
    <>
      <Head>
        <title>BetterlinQ : Our Services</title>
        <meta name="description" content="Content created by Gyanendra Yadav" />
        <link rel="icon" href="/favicon.ico" />
      
      </Head>
      <div className={styles.image1}>
        <Image src="/services.jfif" alt="services" width={250} height={250} />
      </div>

      <div className={styles.offer}>What we offer</div>

      <div className={styles.services}>
        <div className={styles.imgBox}>
          <Image
            src="/program.jpg"
            alt="services"
            width={300}
            height={400}
            className={styles.sImage}
          />
        </div>

        <div className={styles.sDetails}>
          <h1>Web Design</h1>
          <p>
            Tell your visitor how your service can improve their life. Connect
            with the problem that they’re trying to solve and address any
            objections you think they might have.
          </p>

          <p>
          What is the biggest benefit your customer will get from this? Keep your target audience in mind.
          </p>

          <h2>From ₹9999</h2>

          <button type="submit" className={styles.btn} >Start A Project</button>
        </div>
      </div>

      <div className={styles.services}>
        <div className={styles.imgBox}>
          <Image
            src="/graphics.png"
            alt="services"
            width={300}
            height={400}
            className={styles.sImage}
          />
        </div>

        <div className={styles.sDetails}>
          <h1>Graphics Design</h1>
          <p>
            Tell your visitor how your service can improve their life. Connect
            with the problem that they’re trying to solve and address any
            objections you think they might have.
          </p>

          <p>
          What is the biggest benefit your customer will get from this? Keep your target audience in mind.
          </p>

          <h2>From ₹100999</h2>

          <button type="submit" className={styles.btn} >Start A Project</button>
        </div>
      </div>

      <div className={styles.services}>
        <div className={styles.imgBox}>
          <Image
            src="/content.jpg"
            alt="services"
            width={300}
            height={400}
            className={styles.sImage}
          />
        </div>

        <div className={styles.sDetails}>
          <h1>Content Creation</h1>
          <p>
            Tell your visitor how your service can improve their life. Connect
            with the problem that they’re trying to solve and address any
            objections you think they might have.
          </p>

          <p>
          What is the biggest benefit your customer will get from this? Keep your target audience in mind.
          </p>

          <h2>From ₹90099</h2>

          <button type="submit" className={styles.btn} >Start A Project</button>
        </div>
      </div>

      <div className={styles.services}>
        <div className={styles.imgBox}>
          <Image
            src="/seo.png"
            alt="services"
            width={300}
            height={350}
            className={styles.sImage}
          />
        </div>

        <div className={styles.sDetails}>
          <h1>Search Engine Optimization</h1>
          <p>
            Tell your visitor how your service can improve their life. Connect
            with the problem that they’re trying to solve and address any
            objections you think they might have.
          </p>

          <p>
          What is the biggest benefit your customer will get from this? Keep your target audience in mind.
          </p>

          <h2>From ₹9,99,999</h2>

          <button type="submit" className={styles.btn} >Start A Project</button>
        </div>
      </div>

      {/* Why to choose us  */}

      <div className={styles.offer}>why to choose us</div>
      <div className={styles.whyUs}>
        <div>
          <Image
            src="/star.jpg"
            alt="rating"
            width={200}
            height={200}
            className={styles.whyUsImg}
          />
        </div>

        <div>
          <Image
            src="/hq.jpg"
            alt="rating"
            width={200}
            height={200}
            className={styles.whyUsImg}
          />
        </div>

        <div>
          <Image
            src="/mbg.jpg"
            alt="rating"
            width={200}
            height={200}
            className={styles.whyUsImg}
          />
        </div>

        <div>
          <Image
            src="/safe.png"
            alt="rating"
            width={200}
            height={200}
            className={styles.whyUsImg}
          />
        </div>


      </div>

      <div className={styles.whyUs}>
        <div>
          <Image
            src="/star.jpg"
            alt="rating"
            width={200}
            height={200}
            className={styles.whyUsImg}
          />
        </div>

        <div>
          <Image
            src="/hq.jpg"
            alt="rating"
            width={200}
            height={200}
            className={styles.whyUsImg}
          />
        </div>

        <div>
          <Image
            src="/mbg.jpg"
            alt="rating"
            width={200}
            height={200}
            className={styles.whyUsImg}
          />
        </div>

        <div>
          <Image
            src="/safe.png"
            alt="rating"
            width={200}
            height={200}
            className={styles.whyUsImg}
          />
        </div>


      </div>


    </>
  );
};

export default Services;
