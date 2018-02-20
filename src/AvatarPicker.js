import React, {Component} from 'react';
import {connect} from 'react-redux';
import {changeAvatar, toggleMenu} from './actions';
import AvatarPopup from './AvatarPopup';

class AvatarPicker extends Component {
  render() {
    let props = this.props
    console.log(this.props)
    return (
      <div>
        <div className={props.menuOpen ? 'avatar__main active' : 'avatar__main'} onClick={props.toggleMenu}><img src={props.current.src} alt={props.current.label}/></div>
        {props.menuOpen ? <AvatarPopup /> : null}
      </div>
    );
  }
}

const mapStateToProps = state => state;

const mapActionsToProps = (dispatch) => {
  return {
    selectAvatar: (avatar) => {
      dispatch(changeAvatar(avatar));
    },
    toggleMenu: () => {
      dispatch(toggleMenu());
    }
  };
};

export default connect(mapStateToProps, mapActionsToProps)(AvatarPicker);
