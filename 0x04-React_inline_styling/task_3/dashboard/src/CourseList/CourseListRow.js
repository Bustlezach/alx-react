import React, { Fragment } from "react";
import PropTypes from 'prop-types';
import {StyleSheet, css} from 'aphrodite';

const styles = StyleSheet.create(
  {
    courseList: {
      width: '95%',
      margin: 'auto',
      marginTop: '5rem',
      border: '1px solid gray',
      borderCollapse: 'collapse',
    },
    
    courseListThSpan2: {
      textAlign: 'center',
    },
    
    courseListTh: {
      textAlign: 'left',
      borderTop: '1px solid gray',
      borderBottom: '1px solid gray',
    },
    
    courseListTd: {
      textAlign: 'left',
    },
  }
);


const rowStyles = { backgroundColor: "#f5f5f5ab" };
const headerRowStyles = { backgroundColor: "#deb5b545" };
function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  let tr = undefined;

  if(isHeader === true) {
    if(textSecondCell  === null) {
        tr = <th className={css(styles.courseListThSpan2)} colspan='2'>{textFirstCell}</th>;
  } else {
    tr = (
      <Fragment>
        <th className={css(styles.courseListTh)}>{textFirstCell}</th>
        <th className={css(styles.courseListTh)}>{textSecondCell}</th>
      </Fragment>
    );
  }
 }

 if (isHeader === false) {
  tr = (
    <Fragment>
      <td className={css(styles.courseListTd)}>{textFirstCell}</td>
      <td className={css(styles.courseListTd)}>{textSecondCell}</td>
    </Fragment>
  );
 }
 const bgStyle = isHeader === true ? headerRowStyles : rowStyles;
 return <tr style={bgStyle}>{tr}</tr>;
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;
