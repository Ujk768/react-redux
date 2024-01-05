import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsersThunkFunction } from "../redux";

const UserContainer = () => {
    const userData = useSelector(state => state.usersData)
    console.log(userData)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsersThunkFunction())
    }, [])
    return (

        <div>
            <h2>User List 🙋‍♂️</h2>
            {userData.loading ? 'Loading......' : ''}
            {userData?.usersArray.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}

        </div>
    )
}

export default UserContainer