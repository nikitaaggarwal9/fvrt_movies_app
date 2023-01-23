import React from "react";
import {connect} from 'react-redux'

class Navbar extends React.Component {
  render() {
    console.log(this.props, 'line 6 nav');
    return <div className="nav">
        <div className="search-container">
            <input type="text" />
            <button id="search-btn">Search</button>
        </div>
    </div>;
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, {})(Navbar);