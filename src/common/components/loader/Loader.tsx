import s from './loader.module.scss'
import {ComponentPropsWithoutRef} from "react";


export const Loader = ({ className, ...props}: ComponentPropsWithoutRef<'div'>) => {
    return <div className={`${s.container} ${className}`} {...props}>
                <span className={s.loader}></span>
            </div>
}