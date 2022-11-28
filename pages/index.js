import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";


export default function Home() {
  return (
    <div >
      <Head>
        <title>BetterlinQ : Perfect Place For Bloggers</title>
        <meta name="description" content="Content created by Gyanendra Yadav" />
        <link rel="icon" href="/favicon.ico" />
        {/* <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link> */}
      </Head>

    <div className={styles.hero}>
      <div className={styles.leftOne}>
        Welcome <br/>To The<br/>BLOG
      </div>
      <div >
        <img src="error.jpg"  alt="heroImage" className={styles.rightOne} />
      </div>
    </div>

    <div className={styles.row2}>
      I have been Featured On
      <div className={styles.row2items}>
        <img src="bbc.webp" alt="bbc" className={styles.r2Images} />
        <img src="fortune.webp" alt="fortune" className={styles.r2Images}  />
        <img src="mint.webp" alt="mint" className={styles.r2Images}  />
        <img src="ndtv.webp" alt="ndtv" className={styles.r2Images} />
      </div>
    </div>


    <div className={styles.copy}>
      Read my awesome blogposts

      <div className={styles.flexBox}>
        <img src="startup.webp" alt="startup" className={styles.flexItems} />
        <img src="blog.webp" alt="blog" className={styles.flexItems} />
        <img src="mmo.jpg" alt="mmo" className={styles.flexItems}  />
        <img src="yt.png" alt="yt" className={styles.flexItems}  />
        <img src="bt.png" alt="bt" className={styles.flexItems}  />
        <img src="program.jpg" alt="programming" className={styles.flexItems}  />
      </div>
    </div>


    <div className={styles.podBox}>
      Listen popular podcast
      <div className={styles.podcast} >
      <a href="#"><i className='bx bx-podcast'></i></a><a href=""><h2>Stop Procastination Just now</h2></a>
      </div>
      <div className={styles.podcast} >
      <a href="#"><i className='bx bx-podcast'></i></a><a href=""><h2>All you need to know about youtube</h2></a>
      </div>
      <div className={styles.podcast} >
      <a href="#"><i className='bx bx-podcast'></i></a><a href=""><h2>invest at right time in right way</h2></a>
      </div>
      <div className={styles.podcast} >
      <a href="#"><i className='bx bx-podcast'></i></a><a href=""><h2>is blogging dead in 2022 ?</h2></a>
      </div>
      <div className={styles.podcast} >
      <a href="#"><i className='bx bx-podcast'></i></a><a href=""><h2>no SEO, no place on SERPs</h2></a>
      </div>
      <div className={styles.podcast} >
      <a href="#"><i className='bx bx-podcast'></i></a> <a href=""><h2>digital marketing : a box of benefits</h2></a>
      </div>
    </div>


    <div className={styles.copy}>
      Join Me

      <div className={styles.flexIcons}>
      <a href="https://github.com/iGyanendraYadav" target="_blank"><i className='bx bxl-github bx-lg'></i></a>
      <a href="https://www.linkedin.com/in/igyanendrayadav/" target="_blank"><i className='bx bxl-linkedin-square bx-lg'></i></a>
      <a href="https://www.facebook.com/iGyanendraYadav/" target="_blank"><i className='bx bxl-facebook-square bx-lg'></i></a>
      <a href="https://www.instagram.com/iGyanendraYadav/" target="_blank"><i className='bx bxl-instagram bx-lg'></i></a>
      <a href="https://twitter.com/iGyanendraYadav/" target="_blank"><i className='bx bxl-twitter bx-lg'></i></a>
      </div>
    </div>



    </div>
  );
}
