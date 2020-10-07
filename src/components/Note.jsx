import React from 'react';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
function Note(props){
    function handleClick(){
        props.onDelete(props.id);
    }
    return <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <Zoom in={true}>
        <Fab onClick={handleClick}><DeleteIcon/></Fab>
        </Zoom>
    </div>
}
export default Note;