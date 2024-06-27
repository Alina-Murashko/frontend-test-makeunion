
import s from './userName.module.scss'
import {ComponentPropsWithoutRef} from "react";

type PropsUserName = {
    name: string
} & ComponentPropsWithoutRef<'h2'>

export const UserName = ({name, className, ...props}: PropsUserName) => {

    return <h2 className={`${s.name} ${className}`} {...props}>{name}</h2>
}