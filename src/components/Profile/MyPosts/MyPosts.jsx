import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';



const PostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field name={'Post'} type={'text'} cols={50} rows={10} placeholder={'Введите текст'} component={Textarea} validate={[required, maxLengthCreator(10)]}/>
      <div>
        <button>Отправить</button>
        <button onClick={props.addPost}>Удалить</button>
      </div>
    </form>
  )
}
const PostReduxForm = reduxForm({ form: 'post'})(PostForm);




const MyPosts = React.memo(props => {

  let newPost = props.postData.map(p => <Post message={p.message} likesCount={p.likesCount} />);
  let addNewPost = (values) => {
    props.addPost(values.Post)
  }
  console.log('render')
  return <div>

    <div>
      My Posts
      <PostReduxForm onSubmit={addNewPost} />
      <div className={s.posts}>
        {newPost}
      </div>
    </div>
  </div>

});

export default MyPosts;