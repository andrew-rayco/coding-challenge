import React, {Component} from 'react';
import {connect} from 'react-redux';
import AvatarList from './AvatarList';

class AvatarPopup extends Component {
  render() {
    return (
      <div className="avatar__popup">
        <h3>Choose your avatar</h3>
        <div className="avatar__popup-choices">
          <AvatarList />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(AvatarPopup);
