import React from 'react'
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <>
    <div className={styles.out}>
      <div className={styles.in}>
        <a href="#">Services</a>
        <a href="#">Blogging</a>
        <a href="#">Writing</a>
        <a href="#">Investing</a>
        <span>© 2022</span>
      </div>
      <div className={styles.in}>
        <a href="#">Start A Blog</a>
        <a href="#">Start Up</a>
        <a href="#">SEO</a>
        <a href="#">Digital Marketing</a>
        <span>Developed by <a href="https://www.linkedin.com/in/igyanendrayadav/" target="_blank" rel="noreferrer">Gyan</a></span>
      </div>
      <div className={styles.in}>
        <a href="#">Privacy</a>
        <a href="#">Disclaimers</a>
        <a href="#">Terms</a>
        <a href="#">Return Policy</a>
        <span>All Rights Reserved </span>
      </div>
 
    </div>

    
    </>

    
  )
}

export default Footer
