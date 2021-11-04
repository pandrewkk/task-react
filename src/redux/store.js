import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, text: 'Продам гараж', likesCount: 69},
                {id: 2, text: 'Куплю гараж', likesCount: 73},
                {id: 3, text: 'Продам перекупленный гараж', likesCount: 64},
                {id: 4, text: 'Всем привет, я - гараж', likesCount: 19}
            ],
            newPostText: ''
        },
        dialogsPage: {

            dialogs: [
                {id: 1, name: 'Николай'},
                {id: 2, name: 'Фёдор'},
                {id: 3, name: 'Татьяна'},
                {id: 4, name: 'Валентина'}
            ],
            messages: [
                {id: 1, message: 'Приветсвую'},
                {id: 2, message: 'Добрый день'},
                {id: 3, message: 'Алоха'},
                {id: 4, message: 'Здравствуйте'}
            ],
            newMessageBody: ''
        }
    },
    getState() {
        return this._state
    },
    _rerenderEntireTree() {
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._rerenderEntireTree(this._state)
    }
}

export default store