import React from 'react';
import styles from "./FormsControls.module.css";

type FormControlPropsType = {
    input: string
    meta: {
        touched: boolean
        error: string
    }
    Formtype: any
}


const FormControl = ({ input, meta, Formtype, ...props }:FormControlPropsType)  => {
    const hasError = meta.touched && meta.error;
    return (
        <div>
            <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
                <Formtype {...input} {...props} />
                <div>
                    {hasError && <span>{meta.error}</span>}
                </div>
            </div>
        </div>
    )
}

export const Textarea = (props: FormControlPropsType) => {
    return <FormControl {...props} Formtype="textarea"></FormControl>
}

export const Input = (props: FormControlPropsType) => {
    return <FormControl {...props} Formtype="input"></FormControl>
}



