export const setSelectedObjectId = (id) => ({
    type: 'SET_SELECTED_OBJECT_ID',
    payload: {
        id,
    }
});

export const fetchUserData = (id, names, imageUrl) => {
    return {
        type: 'FETCH_USER_DATA',
        payload: {
            id,
            names,
            imageUrl,
        },
    };
};

