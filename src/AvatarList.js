import React, {Component} from 'react';
import {connect} from 'react-redux';
import {changeAvatar} from './actions';

class AvatarList extends Component {

  loadingSpinner(avatar) {
    return this.props.loading && this.props.newCurrent.id === avatar.id
  };

  defineAvatarClasses(avatar) {
    if (this.props.loading && this.props.newCurrent && (avatar.id === this.props.newCurrent.id)) {
      return 'avatar__single avatar__single--loading current'
    } else if (avatar.id === this.props.current.id) {
      return 'avatar__single current'
    } else {
      return 'avatar__single'
    }
  };

  render() {
    let props = this.props
    return props.choices.map(avatar => {
      return (
        <div key={avatar.id} onClick={() => props.selectAvatar(avatar)} className={this.defineAvatarClasses(avatar)}>
          <img src={avatar.src} alt={avatar.label}/>
          <div className="overlay"></div>
          {this.loadingSpinner(avatar) ? <div className="spinner"></div> : null}
        </div>
      )
    })
  };
};

const mapStateToProps = state => state;

const mapActionsToProps = (dispatch) => {
  return {
    selectAvatar: (avatar) => {
      dispatch(changeAvatar(avatar));
    }
  };
};

export default connect(mapStateToProps, mapActionsToProps)(AvatarList);
