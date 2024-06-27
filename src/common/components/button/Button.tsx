import {ComponentPropsWithoutRef, memo} from "react";
import s from './button.module.scss'
export const Button = memo(({onClick,children,className,...props}
                                : ComponentPropsWithoutRef<'button'>) => {

    return <button className={`${s.button} ${className}`} onClick={onClick} {...props}>{children}</button>
})