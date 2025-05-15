import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

// Animation variants for page transitions
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1.0], // cubic-bezier easing
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1.0], // cubic-bezier easing
      when: "afterChildren",
      staggerChildren: 0.05,
    },
  },
};

// Animation for child elements to create a staggered effect
const childVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1.0],
    },
  },
  exit: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1.0],
    },
  },
};

const PageTransition: React.FC<PageTransitionProps> = ({ 
  children, 
  className = "" 
}) => {
  const [location] = useLocation();
  
  return (
    <motion.div
      key={location}
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageVariants}
      className={`w-full overflow-hidden ${className}`}
    >
      <motion.div 
        variants={childVariants}
        className="w-full"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default PageTransition;