// import { SectionElement } from './Section.styled';
import PropTypes from 'prop-types';

export const Section = ({ children, title }) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
