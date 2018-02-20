export const toggleMenu = () => {
    return {
        type: "TOGGLE_MENU"
    };
};

export const updateAvatar = (payload) => {
    return {
        type: "CHANGE_AVATAR_SUCCESS",
        payload
    };
};

export const requestChange = (payload) => {
    return {
        type: "CHANGE_AVATAR_REQUEST",
        payload
    };
};

export const changeAvatar = (payload) => {
    return dispatch => {
        dispatch(requestChange(payload))
        setTimeout(() => {
            dispatch(updateAvatar(payload))
        }, 1000);
    };
};
