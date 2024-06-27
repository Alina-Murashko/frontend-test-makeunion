import {ComponentPropsWithoutRef} from "react";
import s from './card.module.scss'

type PropsCard = ComponentPropsWithoutRef<'div'>
export const Card = ({className,children, ...props}: PropsCard) => {
    return <div className={`${s.container} ${className}`} {...props}>{children}</div>
}