import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { PageTransition } from './PageTransition';

export const PageLayout = ({ title, children }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <PageTransition>{children}</PageTransition>
    </>
  );
};

// Validate props
PageLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
