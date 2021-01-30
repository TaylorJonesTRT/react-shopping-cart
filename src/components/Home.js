import React from 'react';
import '../styles/Home.css';
import { motion, AnimatePresence } from 'framer-motion';
import Fridge from '../images/fridge.webp';

const imgVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    y: 15,
    transition: {
      delay: 2,
      duration: 3,
    },
  },
};

const Home = () => (
  <AnimatePresence>
    <div className="wrapper">
      <motion.h1
        key="alert"
        className="home-h1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: 15 }}
        transition={{ duration: 3 }}
      >
        Buy the Fanciest Fridge of Them All
      </motion.h1>
      <motion.img
        key="image"
        src={Fridge}
        className="fridge"
        alt="Fancy Fridge"
        variants={imgVariants}
        initial="hidden"
        animate="visible"
      />
      <motion.h2
        key="purchase-link"
        className="purchase-link"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 5 }}
      >
        <a href="/shop">Purchase it Now</a>
      </motion.h2>
    </div>
  </AnimatePresence>
);
export default Home;
