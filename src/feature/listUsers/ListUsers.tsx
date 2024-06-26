import {ListOfUsers} from "../../common/components/listOfUsers/ListOfUsers.tsx";
import {useEffect} from "react";
import { useAppDispatch } from "../../common/hooks/useAppDispatch.ts";
import { usersThunks } from "../../app/users/users.reducer.ts";
import { useSelector } from "react-redux";
import { AppRootStateType } from "../../app/store.ts";
import {Loader} from "../../common/components/loader/Loader.tsx";
import s from './lisrUsers.module.scss'
export const ListUsers = () => {
    const dispatch = useAppDispatch()
    const users = useSelector((state: AppRootStateType) => state.users.users)
    const status = useSelector((state: AppRootStateType) => state.app.status)
    const isLoader = status === 'loading'

    useEffect(() => {
        dispatch(usersThunks.usersGet())
    },[dispatch])

    if (isLoader) {
        return <Loader/>
    }

    return (
        <section className={s.container}>
           <ListOfUsers users={users}/>
        </section>
    )
}