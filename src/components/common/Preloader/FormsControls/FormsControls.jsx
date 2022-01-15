import React from "react";
import styles from "./FormsControls.module.css";

const FormControl = ({ input, meta, Formtype, ...props }) => {
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

export const Textarea = (props) => {
    return <FormControl {...props} Formtype="textarea"></FormControl>
}

export const Input = (props) => {
    return <FormControl {...props} Formtype="input"></FormControl>
}



