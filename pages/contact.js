import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [desc, setdesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
   
    const data = { name, email, phone, desc };

    fetch("http://localhost:3000/api/postcontact/", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
       
        alert("Thanks For Contacting !!!");
        setname('');
        setemail('');
        setphone('');
        setdesc('');
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleChange = (e) => {
    if (e.target.name == "phone") {
      setphone(e.target.value);
    } else if (e.target.name == "name") {
      setname(e.target.value);
    } else if (e.target.name == "email") {
      setemail(e.target.value);
    } else if (e.target.name == "desc") {
      setdesc(e.target.value);
    }
  };

  return (
    <>
      <Head>
        <title>BetterlinQ : Contact Us</title>
        <meta name="description" content="Content created by Gyanendra Yadav" />
        <link rel="icon" href="/favicon.ico" />
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      </Head>
    <div className={styles.container}>

      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label htmlFor="name" className={styles.formlabel}>
            Your Name
          </label>
          
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            className={styles.input}
            onChange={handleChange}
            aria-describedby="emailHelp"
            required
          />
        </div>

        <div className={styles.mb3}>
          <label htmlFor="email" className={styles.formlabel}>
            Email Address
          </label>
          
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            className={styles.input}
            onChange={handleChange}
            aria-describedby="emailHelp"
            required
          />
        </div>

        <div className={styles.mb3}>
          <label htmlFor="phone" className={styles.formlabel}>
            Phone
          </label>
          
          <input
            type="phone"
            id="phone"
            name="phone"
            value={phone}
            className={styles.input}
            onChange={handleChange}
          />
        </div>

        <div className={styles.mb3}>
          <label htmlFor="desc" className={styles.formlabel}>
            Concern
          </label>
          
          <textarea
            
            id="desc"
            name="desc"
            value={desc}
            className={styles.input}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className={styles.btn}>
          Submit
        </button>
      </form>


      <div className={styles.copy}>
      Join Me

      <div className={styles.flexIcons}>
      <a href="https://github.com/iGyanendraYadav" target="_blank"><i class='bx bxl-github bx-lg'></i></a>
      <a href="https://www.linkedin.com/in/igyanendrayadav/" target="_blank"><i class='bx bxl-linkedin-square bx-lg'></i></a>
      <a href="https://www.facebook.com/iGyanendraYadav/" target="_blank"><i class='bx bxl-facebook-square bx-lg'></i></a>
      <a href="https://www.instagram.com/iGyanendraYadav/" target="_blank"><i class='bx bxl-instagram bx-lg'></i></a>
      <a href="https://twitter.com/iGyanendraYadav/" target="_blank"><i class='bx bxl-twitter bx-lg'></i></a>
      </div>
    </div>
    </div>

    </> 
  );
};

export default Contact;
