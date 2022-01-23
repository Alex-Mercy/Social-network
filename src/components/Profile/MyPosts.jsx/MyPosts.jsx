import React from "react";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../validators/validator";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const maxLength10 = maxLengthCreator(10);

const Myposts = React.memo(props => {
    console.log("render");

    let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id} />);


    let addNewPost = (values) => {
        props.addPost(values.newPostText);
    }


    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <AddNewPostReduxForm onSubmit={addNewPost} />
            </div>
            <div>
                {postElements}


            </div>
        </div>
    )
});


const AddNewPost = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component={Textarea}
                    validate={[required, maxLength10]}
                />
            </div>
            <button className={styles.addPostButton}>Add post</button>
        </form>
    )
}

const AddNewPostReduxForm = reduxForm({ form: 'AddNewPostForm' })(AddNewPost);

export default Myposts;