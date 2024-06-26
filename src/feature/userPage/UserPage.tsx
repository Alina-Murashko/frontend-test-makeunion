import {Avatar} from "../../common/components/avatar/Avatar.tsx";
import {UserName} from "../../common/components/userName/UserName.tsx";
import {InformationBlock} from "../../common/components/informationBlock/InformationBlock.tsx";
import s from './userPage.module.scss'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store.ts";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useAppDispatch} from "../../common/hooks/useAppDispatch.ts";
import {usersThunks} from "../../app/users/users.reducer.ts";
import {Card} from "../../common/components/card/Card.tsx";
import {capitalizeFirstLetter, getUser} from "../../common/utils/utils.ts";
import {Loader} from "../../common/components/loader/Loader.tsx";
import { v4 } from 'uuid'
export const UserPage = () => {
    const dispatch = useAppDispatch()
    const status = useSelector((state: AppRootStateType) => state.app.status)
    const isLoader = status === 'loading'
    const { id } = useParams();

    const user = useSelector((state: AppRootStateType) => state.users.user)

    useEffect( () => {
        if (id) {
            dispatch(usersThunks.userComment(id))
        }

    },[dispatch,id])

    if (isLoader ) {
        return <Loader/>
    }

    const UserInformation = getUser(user)

        return (
        <section className={s.container}>
            <Card className={s.user}>
                <div className={s.content}>
                    <Avatar src={user.src}/>
                    <UserName name={user.name}/>
                </div>
                <InformationBlock information={user?.comment ?? ''} email={user.email} phone={user.phone}/>
            </Card>
            <Card className={s.userUl}>
                <table>
                    <tbody>
                    {Object.keys(UserInformation).map((key) => {
                        return (
                            <tr key={v4()}>
                                <th>{capitalizeFirstLetter(key)}</th>
                                <td>{UserInformation[key]}</td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </Card>
        </section>
        )
}