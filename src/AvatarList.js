import React, {Component} from 'react';
import {connect} from 'react-redux';
import {changeAvatar} from './actions';

class AvatarList extends Component {

  render() {
    let props = this.props
    return props.choices.map(avatar => {
      return (
        <div key={avatar.id} onClick={props.selectAvatar(avatar.id)} className={avatar.id === props.current.id
          ? 'avatar__single current'
          : 'avatar__single'}>
          <img src={avatar.src} alt={avatar.label}/>
          <div className="overlay"></div>
          {props.isLoading
            ? '<div className="spinner"></div>'
            : null}
        </div>
      )
    })
  }
}

const mapStateToProps = state => state;

const mapActionsToProps = (dispatch) => {
  return {
    selectAvatar: (avatar) => {
      dispatch(changeAvatar(avatar));
    }
  };
};

export default connect(mapStateToProps, mapActionsToProps)(AvatarList);
