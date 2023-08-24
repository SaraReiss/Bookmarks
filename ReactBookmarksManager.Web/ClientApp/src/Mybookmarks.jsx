import React,{useState, useEffect} from 'react';
import { useAuth } from './AuthContext';
import BookmarkRow from './BookmarkRow';
import axios from 'axios';

const MyBookmarks = () => {

  const { user } = useAuth();
  const {id, firstName, lastName} = user;
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    getBookmarks();
  }, []);

  const getBookmarks = async () => {
    const { data } = await axios.get('/api/bookmark/getbookmarksforcurrentuser')
    setBookmarks(data)
  }

  // const getBookmarks = async () => {
  //         const { data } = await axios.get(`/api/bookmark/getbookmarksforuser`);
  //         setBookmarks(bookmarks);
  //         console.log(data)
  //     }

  const onDelete = async id => {
    await axios.post('/api/bookmark/delete', { id })
    getBookmarks();
  }

  const onUpdateClick = async (id, title) => {
    await axios.post('/api/bookmark/update', { id, title });
    getBookmarks();
  }

  return (
    <div className="container" style={{ marginTop: 80 }}>
      <main role="main" className="pb-3">
        <div style={{ marginTop: 20 }}>
          <div className="row">
            <div className="col-md-12">
              <h1>Welcome back {firstName} {lastName}</h1>
              <a className="btn btn-primary btn-block" href="/addbookmark">
                Add Bookmark
              </a>
            </div>
          </div>
          <div className="row" style={{ marginTop: 20 }}>
            <table className="table table-hover table-striped table-bordered">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Url</th>
                  <th>Edit/Delete</th>
                </tr>
              </thead>
              <tbody>
                {bookmarks.map(b => <BookmarkRow
                  key={b.id}
                  bookmark={b}
                  onDelete={() => { onDelete(b.id) }}
                  onUpdateClick={onUpdateClick}
                />)}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>

  )
}
export default MyBookmarks;