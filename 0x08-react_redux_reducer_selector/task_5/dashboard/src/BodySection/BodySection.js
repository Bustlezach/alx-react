import React, {Component, Fragment} from "react";
import PropTypes from 'prop-types';
import './BodySection.css';


class BodySection extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const {title, children} = this.props;
    return(
      <Fragment>
        <div className="bodySection">
          <h2>{title}</h2>
          {children}
        </div>
    </Fragment>
    );
  };
}


BodySection.defaultProps = {
  title: '',
};

BodySection.propTypes = {
  title: PropTypes.string,
}

export default BodySection;