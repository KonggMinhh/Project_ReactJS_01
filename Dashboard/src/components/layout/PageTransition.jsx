import { motion as m } from 'framer-motion';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

export const PageTransition = ({ children }) => {
  const location = useLocation();

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
      key={location?.pathname}
    >
      {children}
    </m.div>
  );
};

// Validate props
PageTransition.propTypes = {
  children: PropTypes.node.isRequired,
};
