import React from 'react';
import './_AddField.scss'
import { useSelector } from 'react-redux';


const AddField = () => {
    const [ comment,setComment ] = React.useState('')
    const { user } = useSelector( state => state)

  return (
      <div className='add-comment'>
          <img 
            src="https://yt3.ggpht.com/a/default-user=s88-c-k-c0x00ffffff-no-rj" 
            alt="user-avatar" 
            className='add-comment__userAvatar'/>
        <form className='add-comment__form'> 
            <input 
                type="text" 
                className='add-comment__field'
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder='Оставьте комментарий....'/>

            <div className="add-comment__btn-list">
                <button className="add-comment__btn btn-cancel">Отмена</button>
                <button className={comment ? 'add-comment__btn btn-send active' : 'add-comment__btn btn-send'}>Оставить комментарий</button>
            </div>
        </form>
      </div>
  );
};

export default AddField;
