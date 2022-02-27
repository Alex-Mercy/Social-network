import { TextField } from "@material-ui/core";
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

export const InputMui = ({ input, meta, Formtype, id, name, label, type, ...props }) => {
    const isError = meta.touched && meta.error;
    return (
        <TextField
            variant="outlined"
            margin="normal"
            required
            type={type}
            error={isError}
            helperText={isError}
            fullWidth
            id={id}
            label={label}
            name={name}
            autoFocus
            {...input}
            {...props}
          />
    )
}






