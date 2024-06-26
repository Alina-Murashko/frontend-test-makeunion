import {ComponentPropsWithoutRef} from "react";
import s from './button.module.scss'
export const Button = ({onClick,children,className,...props}: ComponentPropsWithoutRef<'button'>) => {

    return <button className={`${s.button} ${className}`} onClick={onClick} {...props}>{children}</button>
}