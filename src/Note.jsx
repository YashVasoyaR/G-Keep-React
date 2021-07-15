import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import './index.css';

export const Note = (props) => {

    
    return (
        <>
        
        <div className='d-flex flex-column  position-relative border my-4  main'>
           <h1 className='text-danger'>{props.title1}</h1> 
           <p>{props.component1}</p>
           <Button className='btnDelete' onClick={()=>{
               props.Ditem(props.id);
           }} style={{
                        position: 'absolute',
                        bottom: '5px',
                        right: '2px',
                        height: '24px',
                        width: '36px',
                        color: '#fbbc05',
                        
                    }}><DeleteOutlineIcon /></Button>
         </div> 
         
        </>
    )
}

export default Note;
