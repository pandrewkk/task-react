const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState =  {
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

const dialogsReducer = (state = initialState,action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 5, message: body});
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })
export default dialogsReducer;