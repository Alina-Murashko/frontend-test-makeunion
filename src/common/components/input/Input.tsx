import {ComponentPropsWithoutRef} from "react";
import s from './input.module.scss'

type Props = {
    error: string | null ,
}

type InputProps = Omit<ComponentPropsWithoutRef<'input'>, keyof Props> & Props
export const Input = ({className,error, ...props}: InputProps) => {

    const inputStyle = error ? `${s.input} ${s.error} ${className}`: `${s.input} ${className}`

    return (
        <div className={s.container}>
            <input className={inputStyle} {...props}/>
            {error && <span className={s.error}>{error}</span>}
        </div>
    )
}