import React, { useRef } from 'react';
import './contact.scss';

import { motion, useInView } from 'framer-motion';


const variants = {
    initial: {
        y: 500,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.8,
        }
    }
}

const Contact = () => {

    const ref = useRef();
    const isInView = useInView(ref, { margin: "-100px" })
    return (
        <motion.div ref={ref} className='contact' variants={variants} initial="initial" whileInView={"animate"}>
            <div className="textContainer" variants={variants}>
                <motion.h1 variants={variants}>Let's work together</motion.h1>
                <motion.div className="item">
                    <h2>Mail</h2>
                    <span>hello@react.dev</span>
                </motion.div>
                <motion.div className="item">
                    <h2>Address</h2>
                    <span>No.239/A, Main Street, Mount Lavinia</span>
                </motion.div>
                <motion.div className="item">
                    <h2>Phone</h2>
                    <span>+1 234 5678</span>
                </motion.div>
            </div>
            <div className="formContainer" variants={variants}>
                <motion.form
                >
                    <input type="text" required placeholder='Name' />
                    <input type="email" required placeholder='E-mail' />
                    <textarea row={8} placeholder='Messeage' />
                    <button>Submit</button>
                </motion.form>
            </div>
        </motion.div>
    )
}

export default Contact;
