import React from 'react';
import { motion } from 'framer-motion';

const animation = {
    initial: {opacity: .5},
    animate: {opacity: 1},
    exit: {opacity: .5},
}
const AnimatedPage = ( {children} ) => {
    return (
        <motion.div variants={animation} initial="initial" animate="animate" exit="exit" transition={{duration: 1}}>
            { children }
        </motion.div>
    );
}

export default AnimatedPage;
