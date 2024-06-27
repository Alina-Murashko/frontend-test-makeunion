import { v4 } from 'uuid'
import s from './listOfUsers.module.scss'
import { NavLink } from "react-router-dom";
import { User } from "../../../app/users/users.reducer.ts";
import {ComponentPropsWithoutRef} from "react";


type PropsListOfUsers = {
    users: Omit<User, 'comment' | 'src'>[]
} & ComponentPropsWithoutRef<'div'>

export const ListOfUsers = ({users, className, ...props}: PropsListOfUsers ) => {
    return (
        <div className={className} {...props}>
            <h2 className={s.title}>List of debtors</h2>
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