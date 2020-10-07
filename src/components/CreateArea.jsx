import React,{useState} from "react";
import Zoom from '@material-ui/core/Zoom';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

function CreateArea(props) {
     const [note,setNote]=useState({
         title:"",
         content:""
     });
     const [isExpanded ,setExpand]=useState(false);
     function Expand(){
         setExpand(true);
    }
     function handleChange(event){
         const {name,value}=event.target;
         setNote(prevNote=>{
             return{
                ...prevNote,
                [name]:value
             };
         });
     };
     function submitNote(event){
        props.onAdd(note);
        setNote({ 
            title:"",
         content:""
        })
         event.preventDefault();
         

     }
  return (
    <div>
      <form onSubmit={submitNote} onClick={Expand} className="create-note">
       {isExpanded? <input required onChange={handleChange} name="title" value={note.title }placeholder="Title"  autoComplete="off"/>:null}
        <textarea onChange={Expand} 
        required onChange={handleChange} name="content" value={note.content} placeholder="Take a note..." rows={isExpanded?3:1} />
        <Zoom in={isExpanded}>
        <Fab type="submit">
            <AddIcon/>
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
