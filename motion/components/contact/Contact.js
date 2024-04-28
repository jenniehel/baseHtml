import { useRef, useState } from "react";
import style from"./contact.module.scss";
import { motion, useInView } from "framer-motion";
// npm install @emailjs/browser
import emailjs from '@emailjs/browser';
const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const isInView = useInView(ref, { margin: "-100px" });
  const variants = {
    initial: {
      y: 500,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };
  const sendEmail = (e) => {
    // https://www.emailjs.com/docs/examples/reactjs/
    e.preventDefault();
    emailjs
    .sendForm('service_y4lrt69', 'template_mblxoat', formRef.current, {
      publicKey: 'tkFGTrBd-6RDDqs_S',
    })
    .then(
      (result) => {
        setSuccess(true)
        console.log('SUCCESS!'+result);
      },
      (error) => {
        setError(true);
        console.log('FAILED...', error.text);
      },
    );
  };
  return (
    <motion.div
    ref={ref}
    className={style.contact}
    variants={variants}
    initial="initial"
    whileInView="animate"
  >
    <motion.div className={style.textContainer} variants={variants}>
      <motion.h1 variants={variants}>休息一下<br/>等等看個訊息</motion.h1>
 
      <motion.div className={style.item} variants={variants}>
        <h2>Mail</h2>
        <span>jenny41449@gmail.com</span>
      </motion.div>
      <motion.div className={style.item} variants={variants}>
        <h2>phone</h2>
        <span>0981461039</span>
      </motion.div>
      <motion.div className={style.item} variants={variants}>
        <h2>請鼓勵我</h2>
        <span>愛妳/你喔!</span>
      </motion.div>
      <motion.div className={style.item} variants={variants}>
      <h2>真的可以發喔~</h2>
      <span>讓我們互相了解~</span>
    </motion.div>
    </motion.div>
    <div className={style.formContainer}>
      <motion.div
        className={style.phoneSvg}
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 0 }}
        transition={{ delay: 3, duration: 1 }}
      >
        <svg width="450px" xmlns="http://www.w3.org/2000/svg" height="450px" viewBox="0 0 448 512">
          <motion.path
            strokeWidth={1}
            fill="none"
            initial={{ pathLength: 0 }}
            animate={isInView && { pathLength: 1 }}
            transition={{ duration: 3 }} 
             d="M32 0C49.7 0 64 14.3 64 32V48l69-17.2c38.1-9.5 78.3-5.1 113.5 12.5c46.3 23.2 100.8 23.2 147.1 0l9.6-4.8C423.8 28.1 448 43.1 448 66.1V345.8c0 13.3-8.3 25.3-20.8 30l-34.7 13c-46.2 17.3-97.6 14.6-141.7-7.4c-37.9-19-81.3-23.7-122.5-13.4L64 384v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V400 334 64 32C0 14.3 14.3 0 32 0zM64 187.1l64-13.9v65.5L64 252.6V318l48.8-12.2c5.1-1.3 10.1-2.4 15.2-3.3V238.7l38.9-8.4c8.3-1.8 16.7-2.5 25.1-2.1l0-64c13.6 .4 27.2 2.6 40.4 6.4l23.6 6.9v66.7l-41.7-12.3c-7.3-2.1-14.8-3.4-22.3-3.8v71.4c21.8 1.9 43.3 6.7 64 14.4V244.2l22.7 6.7c13.5 4 27.3 6.4 41.3 7.4V194c-7.8-.8-15.6-2.3-23.2-4.5l-40.8-12v-62c-13-3.8-25.8-8.8-38.2-15c-8.2-4.1-16.9-7-25.8-8.8v72.4c-13-.4-26 .8-38.7 3.6L128 173.2V98L64 114v73.1zM320 335.7c16.8 1.5 33.9-.7 50-6.8l14-5.2V251.9l-7.9 1.8c-18.4 4.3-37.3 5.7-56.1 4.5v77.4zm64-149.4V115.4c-20.9 6.1-42.4 9.1-64 9.1V194c13.9 1.4 28 .5 41.7-2.6l22.3-5.2z"/> 
        </svg>
      </motion.div>
      <motion.form
        ref={formRef}
        onSubmit={sendEmail}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
      >
        <input type="text" required placeholder="Name" name="name"/>
        <input type="email" required placeholder="Email" name="email"/>
        <textarea rows={8} placeholder="Message" name="message"/>
        <button>Submit</button>
        {error && "Error"}
        {success && "Success"}
      </motion.form>
    </div>
  </motion.div>
  )
}

export default Contact
