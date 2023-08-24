// import React, {useState} from 'react';

// const BookmarkRow = ({ bookmark, onDeleteClick, onUpdateClick }) => {

//     const [editMode, setEditMode] = useState(false);
//     const [title, setTitle] = useState(bookmark.title)

//     const onTextChange = e => {
//         setTitle(e.target.value)
//     }
//     const onUpdate = async () => {
//         await onUpdateClick(bookmark.id, title);
//         setEditMode(false)
//     }
//     const onCancel = () => {
//         setTitle(bookmark.title);
//         setEditMode(false);
//     }
    
//     const { url } = bookmark;
//     return (
//         <>
//             <tr>
//                 <td>
//                     {!editMode ?
//                         bookmark.title :
//                         <input
//                             type="text"
//                             className="form-control"
//                             placeholder="Title"
//                             value={title}
//                             onChange={onTextChange}
//                         />
//                     }
//                 </td>
//                 <td>
//                     <a href={`https://${url}`} target="_blank">
//                         {url}
//                     </a>
//                 </td>
//                 <td>
//                     {!editMode ?
//                         <button onClick={() => setEditMode(true)} className="btn btn-success">Edit Title</button> :
//                         <>
//                             <button onClick={onUpdate} className="btn btn-warning">Update</button>
//                             <button onClick={onCancel} className="btn btn-info">Cancel</button>
//                         </>
//                     }
//                     <button onClick={onDeleteClick} className="btn btn-danger" style={{ marginLeft: 10 }}> Delete </button>
//                 </td>
//             </tr>







//         </>

//     )
// }



// export default BookmarkRow;



import React, { useState } from 'react';

const BookmarkRow = ({ bookmark, onDelete, onUpdateClick }) => {
    const [editMode, setEditMode] = useState(false);
    const [title, setTitle] = useState(bookmark.title)

    const onTextChange = e => {
        setTitle(e.target.value)
    }
    const onUpdate = async () => {
        await onUpdateClick(bookmark.id, title);
        setEditMode(false)
    }
    const onCancel = () => {
        setTitle(bookmark.title);
        setEditMode(false);
    }
    
    return (
        <>
            <tr>
                <td>
                    {!editMode ?
                        bookmark.title :
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            value={title}
                            onChange={onTextChange}
                        />
                    }
                </td>
                <td>
                <a href={bookmark.url} target="_blank">
                    {bookmark.url}
                </a>
            </td>
                <td>
                    {!editMode ?
                        <button onClick={() => setEditMode(true)} className="btn btn-success">Edit Title</button> :
                        <>
                            <button onClick={onUpdate} className="btn btn-warning">Update</button>
                            <button onClick={onCancel} className="btn btn-info">Cancel</button>
                        </>
                    }
                    <button onClick={onDelete} className="btn btn-danger" style={{ marginLeft: 10 }}> Delete </button>
                </td>
            </tr>







        </>

    )
}

export default BookmarkRow;


