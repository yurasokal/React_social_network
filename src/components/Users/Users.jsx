import React from 'react';
import styles from './users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png';

let Users = (props) => {
    if (props.users.length === 0) {
        
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => {
            props.setUsers(response.data.items);
        });

        // props.setUsers([
        //     {
        //         id: 1, photoUrl: 'https://vignette.wikia.nocookie.net/jamesbond/images/d/dc/James_Bond_%28Pierce_Brosnan%29_-_Profile.jpg/revision/latest?cb=20130506224906',
        //         followed: false,
        //         fullName: 'Dima Matviyko',
        //         status: 'Veterinarian',
        //         location:
        //             { city: 'Alborg', country: 'Denmark' }
        //     },
        //     {
        //         id: 2, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTW7di2Ws8CNdXfLa-IpsJPnUp8g9cfGQkmxA&usqp=CAU',
        //         followed: true,
        //         fullName: 'Liybomur Dzhus',
        //         status: 'Dentist',
        //         location:
        //             { city: 'Ivano - Frankivsk', country: 'Ukraine' }
        //     },
        //     {
        //         id: 3, photoUrl: 'https://www.telegraph.co.uk/content/dam/beauty/Oct/Oct%2019/Halle-Berry-Die-Another-Day.jpg?imwidth=450',
        //         followed: false,
        //         fullName: 'Yulia Chabarenko',
        //         status: 'Stydent',
        //         location:
        //             { city: 'Nurnberg', country: 'Germany' }
        //     },
        // ]
        // )
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { 
                                props.unfollow(u.id) 
                            }}>Unfollow</button>
                            : <button onClick={() => { 
                                props.follow(u.id) 
                                }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div></span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div></span>
                </span>
            </div>)
        }
    </div>
}

export default Users;