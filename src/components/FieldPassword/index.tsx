import React, {ChangeEvent,FocusEvent,MouseEvent, InputHTMLAttributes, useState} from 'react'
import cx from "classnames";
import { Icon } from "components";

import styles from "./FieldPassword.module.scss";

interface FieldProps extends InputHTMLAttributes<HTMLInputElement>{
    className?: string;
    inputClassName?: string;
    placeholder?: string;
    label?: string;
    error?: string;
}

export type Ref = HTMLInputElement;

export const FieldPassword = React.forwardRef<Ref, FieldProps>(({
    className,
    inputClassName,
    type,
    value,
    onChange,
    onBlur,
    onFocus,
    placeholder,
    label,
    error,
    name,
    inputMode,
    ...rest
}, ref) => {
    const [isFocused, setIsFocused] = useState(false)
    const [isShow, setIsShow] = useState(false)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
    }

    const handleBlur = (e: FocusEvent<HTMLInputElement, Element>) => {
        setIsFocused(false)
        onBlur && onBlur(e)
    }

    const handleFocus = (e: FocusEvent<HTMLInputElement, Element>) => {
        setIsFocused(true)
        onFocus && onFocus(e)
    }

    const handleChangeVisible = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault()
        setIsShow(prev => !prev)
    }

    return (
    <div
        className={cx(
            styles.field,
            className
        )}
    >
        <div className={styles.wrap}>
            {label && <label className={cx(styles.label, { [styles.focused]: isFocused || !!value },            { [styles.labelError]: error },)}>{label}</label>}
            <div className={styles.icon}><button onClick={handleChangeVisible}>{isShow ? <Icon.EyeOpen /> : <Icon.EyeClose />}</button></div>
            <input
                ref={ref}
                name={name}
                className={cx(styles.input, inputClassName, { [styles.showPlaceholder]: !value }, { [styles.inputError]: error })}
                type={isShow ? 'text' : 'password'}
                inputMode={inputMode}
                tabIndex={1}
                autoComplete='off'
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                placeholder={placeholder}
                {...rest}
            />
            {error && (
              <div className={styles.error}>
                  {error}
              </div>
            )}
        </div>
    </div>
)});
