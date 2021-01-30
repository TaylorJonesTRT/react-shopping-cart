import React from 'react';
import { motion } from 'framer-motion';
import Header from './Header';

const Shop = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
    <Header />
  </motion.div>
);

export default Shop;
