import React, {Component} from 'react';
import {connect} from 'react-redux';
import {toggleMenu} from './actions';
import AvatarPopup from './AvatarPopup';

class AvatarPicker extends Component {
  render() {
    let props = this.props
    return (
      <div>
        <div className={props.menuOpen
          ? 'avatar__main active'
          : 'avatar__main'} onClick={props.toggleMenu}><img src={props.current.src} alt={props.current.label}/></div>
        {props.menuOpen
          ? <AvatarPopup/>
          : null}
      </div>
    );
  };
};

const mapStateToProps = state => state;

const mapActionsToProps = (dispatch) => {
  return {
    toggleMenu: () => {
      dispatch(toggleMenu());
    }
  };
};

export default connect(mapStateToProps, mapActionsToProps)(AvatarPicker);
