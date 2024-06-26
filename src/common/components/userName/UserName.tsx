
import s from './userName.module.scss'

type PropsUserName = {
    name: string
}

export const UserName = ({name}: PropsUserName) => {
    return <h2 className={s.name}>{name}</h2>
}