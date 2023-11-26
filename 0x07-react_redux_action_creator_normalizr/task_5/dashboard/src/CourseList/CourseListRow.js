import React, { Fragment, useState } from "react";
import PropTypes from 'prop-types';
import {StyleSheet, css} from 'aphrodite';



const rowStyles = { backgroundColor: "#f5f5f5ab" };
const headerRowStyles = { backgroundColor: "#deb5b545" };
function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckbox = () => setIsChecked(!isChecked);
  const tableItemStyle = css(isHeader ?
      styles.courseListTh : styles.courseListTd, isChecked && styles.rowChecked
    ) 
  let tr;

  if(isHeader === true) {
    if(textSecondCell  === null) {
        tr = <th className={css(styles.courseListThSpan2)} colspan='2'>{textFirstCell}</th>;
  } else {
    tr = (
      <Fragment>
        <th className={tableItemStyle}>{textFirstCell}</th>
        <th className={tableItemStyle}>{textSecondCell}</th>
      </Fragment>
    );
  }
 }

 if (isHeader === false) {
  tr = (
    <Fragment>
      <td className={tableItemStyle}>
        <input type="checkbox" onClick={handleCheckbox}></input>
        {textFirstCell}
      </td>
      <td className={tableItemStyle}>{textSecondCell}</td>
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

const styles = StyleSheet.create(
  {
    // courseList: {
    //   width: '95%',
    //   margin: 'auto',
    //   marginTop: '5rem',
    //   border: '1px solid gray',
    //   borderCollapse: 'collapse',
    // },
    
    courseListThSpan2: {
      textAlign: 'center',
    },
    
    courseListTh: {
      textAlign: 'left',
      borderTop: '1px solid gray',
      borderBottom: '1px solid gray',
      fontSize: "18px",
    },
    
    courseListTd: {
      textAlign: 'left',
    },

    rowChecked: {
      backgroundColor: "#e6e4e4",
    },
  }
);

export default CourseListRow;
