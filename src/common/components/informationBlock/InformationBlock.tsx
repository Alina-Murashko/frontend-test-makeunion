import s from './informationBlock.module.scss'
import Phone2 from "../../../assets/Phone.tsx";
import Email from "../../../assets/Email.tsx";
import {ComponentPropsWithoutRef} from "react";

type InformationBlock = {
    information: string,
    email: string
    phone: string
} &ComponentPropsWithoutRef<'div'>

export const InformationBlock = ({information,email,phone, className, ...props}: InformationBlock ) => {

    return (
        <div className={`${s.information} ${className}`} {...props}>
            <p>{information}</p>
            <div className={s.linkContainer}>
                <div className={s.link}>
                    <Phone2/>
                    <a href={`tel:${phone}`}>{email}</a>
                </div>
                <div className={s.link}>
                    <Email />
                    <a href={`mailto:${email}`}>{phone}</a>
                </div>
            </div>
        </div>
    )
}