import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring } from 'framer-motion';


const items = [
    {
        id: 1,
        title: "React Commerce",
        img: "https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=1600",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Tenetur, error! Animi voluptas corporis voluptateme."

    },
    {
        id: 2,
        title: "Nextjs Commerce",
        img: "https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=1600",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Tenetur, error! Animi voluptas corporis voluptateme."

    },
    {
        id: 3,
        title: "Woo Commerce",
        img: "https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=1600",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Tenetur, error! Animi voluptas corporis voluptateme."

    },
    {
        id: 4,
        title: "Nuxtjs Commerce",
        img: "https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=1600",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Tenetur, error! Animi voluptas corporis voluptateme."

    },
];

const Single = ({ item }) => {
    return (
        <section>
            {item.title}
        </section>
    )
}

const Portfolio = () => {

    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    });

    return (
        <div className='portfolio' ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX: scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Portfolio
