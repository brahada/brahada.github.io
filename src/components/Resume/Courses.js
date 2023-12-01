import React from 'react';
import PropTypes from 'prop-types';

import Course from './Courses/Course';

const getRows = (courses) => courses.sort((a, b) => {
  let ret = 0;
  if (a.number < b.number) ret = 1;
  else if (a.number > b.number) ret = -1;
  return ret;
}).map((course) => (
  <Course
    data={course}
    key={course.title}
  />
));

const Courses = ({ data }) => (
  <div className="courses">
    <div className="link-to" id="certifications" />
    <div className="title">
      <h3>Selected Certifications</h3>
    </div>
    <ul className="course-list">
      {getRows(data)}
    </ul>
  </div>
);

Courses.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    number: PropTypes.string,
    link: PropTypes.string,
    university: PropTypes.string,
  })),
};

Courses.defaultProps = {
  data: [],
};

export default Courses;
