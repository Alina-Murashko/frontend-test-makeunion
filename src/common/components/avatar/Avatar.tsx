import s from './avatar.module.scss'


type PropsType = {
    src: string
}


export const Avatar = ({src}: PropsType) => {
    return(
        <div className={s.container}>
            <img src={src} alt={'Avatar user'} className={s.img}/>
        </div>
    )}