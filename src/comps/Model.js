import React from 'react';
import { motion } from 'framer-motion';

const Model = ({ selectedImg, setSelectedImg }) => {

    const handleClick = (e) => {
        if( e.target.classList.contains('backdrop-btn'))
        setSelectedImg(null);

    }


    return (
        <motion.div className = 'backdrop'
        initial= {{ opacity: 0}}
        animate= {{ opacity: 1}}
        >
            <motion.button className= 'backdrop-btn' onClick= {handleClick}
            initial= {{ scale: 0 }}
            animate= {{ scale: 1 }}
            transition={{ delay: 0.5}}
            >x</motion.button>
            <motion.img src={ selectedImg } alt='Enlarged Image'
            initial= {{ scale: 0 }}
            animate= {{ scale: 1 }}
            />
        </motion.div>
    )
} 

export default Model;