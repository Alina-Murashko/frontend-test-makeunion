import s from './avatar.module.scss'
import {ComponentPropsWithoutRef} from "react";


type PropsType = {
    src: string
} & ComponentPropsWithoutRef<'div'>


export const Avatar = ({src, className, ...props}: PropsType) => {
    return(
        <div className={`${s.container} ${className}`} {...props}>
            <img src={src} alt={'Avatar user'} className={s.img}/>
        </div>
    )}