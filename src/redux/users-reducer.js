const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
    users: [
        { id: 1, followed: false, fullName: 'Dima Matviyko', status: 'Veterinarian', location: {city: Alborg, country: 'Denmark'} },
        { id: 2, followed: true, fullName: 'Liybomur Dzhus', status: 'Dentist', location: {city: Ivano-Frankivsk, country: 'Ukraine'} },
        { id: 3, followed: false, fullName: 'Yulia Chabarenko', status: 'Stydent', location: {city: Nurnberg, country: 'Germany'} },
    ],
    newPostText: 'print text here'
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            
        case: UNFOLLOW:

        default:
            return state;
    }
}

export const followAC = () => ({ type: FOLLOW, userID })
export const unfollowAC = () =>
    ({ type: UNFOLLOW, userID })

export default usersReducer;