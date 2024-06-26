import {NavLink} from "react-router-dom";
import s from './header.module.scss'

export const Header = () => {
    return (
        <header>
            <ul>
                <li >
                    <NavLink className={({ isActive }) => (isActive ? `${s.link} ${s.active}`: s.link)} to={'/users'}> List Users </NavLink>
                </li>
                <li>
                    <NavLink  className={({ isActive }) => (isActive ? `${s.link} ${s.active}`: s.link)} to={'/todolist'}>Todolist</NavLink>
                </li>
                <li>
                    <NavLink  className={({ isActive }) => (isActive ? `${s.link} ${s.active}`: s.link)} to={'/profile'}> Profile User </NavLink>
                </li>
            </ul>
        </header>
    )
}