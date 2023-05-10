import React, {useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';


const backdropVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
}

const Modal = ({showModal, setShowModal}) => {

    return ( 
        <AnimatePresence exitBeforeEnter>
            {showModal && (
                <motion.div className = "backdrop"
                    variants = {backdropVariant}
                    initial = "hidden"
                    animate = "visible"
                >
                </motion.div>
            )}
        </AnimatePresence>

    );
}
 
export default Modal;