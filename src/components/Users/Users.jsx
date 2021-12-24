import React from "react";
import styles from "./Users.module.css";

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1, photoUrl: 'https://vraki.net/sites/default/files/inline/images/10_342.jpg',
                followed: true, fullName: "Dmitry T.", status: "I am not working!", location: { city: "Ludinovo", country: "Russia" }
            },
            {
                id: 2, photoUrl: 'https://vraki.net/sites/default/files/inline/images/10_342.jpg',
                followed: false, fullName: "Vladimir L.", status: "I am it-specialist.", location: { city: "Moscow", country: "Russia" }
            },
            {
                id: 3, photoUrl: 'https://vraki.net/sites/default/files/inline/images/10_342.jpg',
                followed: true, fullName: "Alex M.", status: "I am programmer", location: { city: "Los Angeles", country: "USA" }
            }
        ])
    }

    return (
        <div className={styles.usersPage}>
            {props.users.map(u => <div key={u.id}>
                <div>
                    <img src={u.photoUrl} className={styles.photo} />
                </div>
                <div>
                    {u.followed ? <button onClick={() => { props.unfollow(u.id) }} >Unfollow</button>
                        : <button onClick={() => { props.follow(u.id) }} >Follow</button>}
                </div>
                <div>
                    {u.fullname}
                </div>
                <div>
                    {u.status}
                </div>
                <div>
                    {u.location.country}
                </div>
                <div>
                    {u.location.city}
                </div>
                <div></div>
            </div>)}
        </div>

    )
}

export default Users;