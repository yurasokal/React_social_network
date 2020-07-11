import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hey, how are you?', likesCount: 12 },
                { id: 2, message: "It's my first post!", likesCount: 11 },
                { id: 3, message: 'Bla bla', likesCount: 12 },
                { id: 4, message: "It's my not a first post!", likesCount: 11 }
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Olga Geirangerfjord', image: `href='https://norwayexclusive.com/wp-content/uploads/2018/11/Geiranger-Skagefl%C3%A5-med-akreditering.jpg' alt='geirangerfjord avatar norway'` },
                { id: 2, name: 'Nazar Trolltunga', image: `href='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSCZdfGMFyPoRZ2cy5RHWs-iVkpxM009mvi8g&usqp=CAU' alt='trolltunga avatar'` },
                { id: 3, name: 'Serhiy Kjerag', image: `href='https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzQyNDE4NTkxMl9mMjI4YTMxZDA2X29fMS5qcGciXSxbInAiLCJ0aHVtYiIsIngzOTA-Il0sWyJwIiwiY29udmVydCIsIi1xdWFsaXR5IDgxIC1hdXRvLW9yaWVudCJdXQ/424185912_f228a31d06_o_1.jpg' alt='kjerag avatar norway'` },
                { id: 4, name: 'Yuriy Preikestolen', image: `href='https://uploads-ssl.webflow.com/5ad94b4524e99ad327725997/5ad94b4524e99aef90725a12_Photo%2029-10-2017%2C%2019%2014%2010.jpg' alt='preikestolen avatar norway'` },
                { id: 5, name: 'Roman Trollstigen', image: `href='https://i2.wp.com/evenoneday.com/wp-content/uploads/2019/09/IMG_8003.jpg?resize=1140%2C855&ssl=1' alt='trollstigen avatar'` },
                { id: 6, name: 'Ihor Lofoten', image: `href='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbfAPlv8aA51ej3TS1qBZFMhz58aRSlThtTg&usqp=CAU' alt='lofoten avatar norway'` }
            ],
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How is your learning, buddy ?' },
                { id: 3, message: 'Not bat ! It\'s really interesting !' },
                { id: 4, message: 'Yo, dude !' },
                { id: 5, message: 'Yo, yo, yo!' },
                { id: 6, message: 'Yo' }
            ],
            newMessageBody: ''
        },
        sideBar: {

        },
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) { // {type: 'ADD-POST'}
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
    }
}

window.store = store;

export default store;