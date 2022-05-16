import React, { useState } from "react";
import Preloader from "../../common/Preloader/Preloader";
import styles from "./ProfileInfo.module.css";
import userPhoto from '../../../assets/images/user.jpg'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { Input, Textarea } from "../../common/FormsControls/FormsControls";
import { ProfileType } from "../../../types/types";


type PropsType = {
    profile: ProfileType
}

const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, PropsType> & PropsType>  = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
            { error && <div className={styles.formSummaryError} >{error}</div>}
                <button>Save</button>
                <div>
                <b>Full name</b>
                <Field name="fullName" placeholder="Full name" component={Input} ></Field>
                </div>
                <div>
                <b>Looking for a job</b> 
                <Field component={Input} name="lookingForAJob" type="checkbox" />
                 </div>
                 <b>My professioanl slills</b>
                 <Field name="lookingForAJobDescription" placeholder="My professioanl slills" 
                 component={Textarea} ></Field>
                <b>About me</b>: 
                <Field name="aboutMe" placeholder="About me"  component={Textarea} ></Field>

                <div >
                    <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                        return <div key={key} className={styles.contacts}>
                        <b>{key}</b> <Field name= {"contacts." + key} placeholder={ key}  component={Input} ></Field>
                        </div>
                    })}
                </div>

            </div>
        </form>
    )


}

const ProfileDataFormReduxForm = reduxForm<ProfileType, PropsType>({ form: 'ProfileDataForm' })(ProfileDataForm);

export default ProfileDataFormReduxForm;