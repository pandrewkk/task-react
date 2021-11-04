const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    posts: [
        {id: 1, text: 'Продам гараж', likesCount: 69},
        {id: 2, text: 'Куплю гараж', likesCount: 73},
        {id: 3, text: 'Продам перекупленный гараж', likesCount: 64},
        {id: 4, text: 'Всем привет, я - гараж', likesCount: 19}
    ],
        newPostText: ''
}

const profileReducer = (state = initialState,action) => {
    switch(action.type) {
        case ADD_POST:
            let post = {id: 0, text: state.newPostText, likesCount: 0};
            state.posts.push(post);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.text;
            return state;
        default:
            return state;
    }
}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text})
export default profileReducer;
