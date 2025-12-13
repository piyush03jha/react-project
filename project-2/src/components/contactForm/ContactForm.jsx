import { BiSolidMessageDetail } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import styles from "./ContactForm.module.css";
import Button from "../button/button";
import { useState } from "react";
const ContactForm = () => {
    const [name, setName] = useState("Piyush");
    const [email, setEmail] = useState("support@contact.com");
    const [text, setText] = useState("Please descripe your problem");

    const onSubmit = (event) => {
      event.preventDefault();

      setName(event.target[0].value);
      setEmail(event.target[1].value);
      setText(event.target[2].value);

    };



  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
            <div className={styles.top_btn}>
                <Button text="VIA SUPPORT CHAT" icon={<BiSolidMessageDetail fontSize="24px"/>}></Button>
                <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px"/>}></Button>
            </div>
                
                <Button isOutline={true} text="VIA EMAIL FORM" icon={<MdOutlineMailOutline fontSize="24px"/>}></Button>
            
            <form onSubmit={onSubmit}>

              <div className={styles.form_control}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" />
              </div>

              <div className={styles.form_control}>
                <label htmlFor= "email">Email</label>
                <input type="email" name="email" />
              </div>

              <div className={styles.form_control}>
                <label htmlFor="text">Text</label>
                <textarea name="name" rows="8"  />
              </div>

              <div 
                style={{
                  display: "flex",
                  justifyContent: "end"
                }}>
                <Button text="SUBMIT BUTTON"/>
              </div>

                <div>{name+ " " + email + " " + text}</div>

            </form>
        </div>
        <div className={styles.contact_img}>
          <img src="images/contact_img.jpg" alt="contact_image" />
        </div>
    </section>
  )
}

export default ContactForm;