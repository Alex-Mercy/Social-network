import React from "react";
import { Field, reduxForm } from "redux-form";
import { PostType } from "../../../types/types";
import { Textarea } from "../../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../validators/validator";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const maxLength10 = maxLengthCreator(10);

type PropsType = {
    posts: Array<PostType>
    addPost?: (values: string) => void
}

type NewPostFormValuesType = {
    newPostText: string
}

const Myposts: React.FC<PropsType> = (props => {
    let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id} />);


    let addNewPost = (values: NewPostFormValuesType) => {
        if (props.addPost != undefined) {
            props.addPost(values.newPostText);
        }
        
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


const AddNewPost = (props: any) => {
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

const AddNewPostReduxForm = reduxForm<NewPostFormValuesType>({ form: 'AddNewPostForm' })(AddNewPost);

const MyPostsMemorized = React.memo(Myposts);

export default MyPostsMemorized