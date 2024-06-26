import { v4 } from 'uuid'
import s from './listOfUsers.module.scss'
import { NavLink } from "react-router-dom";
import { User } from "../../../app/users/users.reducer.ts";


type PropsListOfUsers = {
    users: Omit<User, 'comment' | 'src'>[]
}

export const ListOfUsers = ({users}: PropsListOfUsers ) => {
    return (
        <div>
            <h2>List of debtors</h2>
            <ul className={s.list}>
                {users?.map(user => {
                    return (
                        <li key={v4()}>
                            <NavLink to={`${user.id}`}>{user.name}</NavLink>
                        </li>
                    )
                })}
            </ul>
        </div>

    )
}