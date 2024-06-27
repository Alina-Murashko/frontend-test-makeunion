import {ChangeEvent, ComponentPropsWithoutRef, memo, useState} from "react";
import s from './editableTitle.module.scss'

type Props = {
    value: string
    status: boolean
    onChange: (newValue: string) => void
}

type EditableProps = Omit<ComponentPropsWithoutRef<'input'>, keyof Props> & Props
export const EditableSpan = memo(function (props: EditableProps) {
    const {onChange,value,status, className, ...rest} = props
    const [editMode, setEditMode] = useState(false);
    const [title, setTitle] = useState(value);

    const activateEditMode =() => {
        setEditMode(true)
        setTitle(value)
    }
    const activateViewMode = () => {
        setEditMode(false)
        onChange(title)
    }
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    }
    const titleStyle = status ? `${s.title} ${s.done}` : s.title

    return editMode ? (
        <input className={`${s.inputEditable} ${className}`} value={title} onChange={changeTitle}
               autoFocus onBlur={activateViewMode} {...rest}/>
    ) : (
        <span onDoubleClick={activateEditMode} className={titleStyle}>{value}</span>
    );
});