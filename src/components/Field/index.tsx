import React, {ChangeEvent, FocusEvent, InputHTMLAttributes, ReactNode, useState} from 'react'
import cx from "classnames";
import { Icon } from "components";

import styles from "./Field.module.scss";

interface FieldProps extends InputHTMLAttributes<HTMLInputElement>{
    className?: string;
    inputClassName?: string;
    placeholder?: string;
    label?: string;
    error?: string;
    icon?: ReactNode;
}

export type Ref = HTMLInputElement;

export const Field = React.forwardRef<Ref, FieldProps>(({
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
    icon,
    ...rest
}, ref) => {
    const [isFocused, setIsFocused] = useState(false)

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

    return (
    <div
        className={cx(
            styles.field,
            className
        )}
    >
        <div className={styles.wrap}>
            {icon && <div className={styles.icon}>{icon}</div>}
            {label && <label className={cx(styles.label, { [styles.focused]: isFocused || !!value },            { [styles.labelError]: error },)}>{label}</label>}
            <input
                ref={ref}
                name={name}
                className={cx(styles.input, inputClassName, { [styles.showPlaceholder]: !value }, { [styles.inputError]: error })}
                type={type || "text"}
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
