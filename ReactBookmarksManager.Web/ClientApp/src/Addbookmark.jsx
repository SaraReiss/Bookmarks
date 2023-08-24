import React, { useState } from 'react';
import {produce} from 'immer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const  AddBookmark = () =>  {

    const { user} = useAuth();
    const {id} = user;
    const [bookmark, setBookmark] = useState({
        title: '',
        url: '',
    });

   

    const navigate = useNavigate();

    const onTextChange = e => {
        const nextState = produce(bookmark, draft => {
            draft[e.target.name] = e.target.value;
        });
        setBookmark(nextState);
    }

    const onFormSubmit = async e => {
        e.preventDefault();
        await axios.post('/api/bookmark/add', {...bookmark, UserId :id});
        navigate('/mybookmarks');
    }



  return (
    <div>
      <div className="container" style={{ marginTop: '80px' }}>
        <main role="main" className="pb-3">
          <div className="row" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
            <div className="col-md-6 offset-md-3 bg-light p-4 rounded shadow">
              <h3>Add Bookmark</h3>
              <form onSubmit={onFormSubmit}>
                <input type="text" name="title" onChange={onTextChange} placeholder="Title" className="form-control" value={bookmark.title} /><br />
                <input type="text" name="url" onChange={onTextChange} placeholder="Url" className="form-control" value={bookmark.url} /><br />
                <button disabled= {!bookmark.title || !bookmark.url}className="btn btn-primary">Add</button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AddBookmark;
