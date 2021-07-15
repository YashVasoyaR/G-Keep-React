import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';


const MainNote = (props) => {

    const [title, Utitle] = useState({
        Title: '',
        content: ''

    });



    const Input = (event) => {
        const val = event.target.value;
        const name = event.target.name;

        Utitle((preVal) => {
            return {
                ...preVal,
                [name]: val,
            }

            //         if (name === 'Title') {
            //             return {
            //                 Title: val,
            //                 content:preVal.content
            //         }
            //     }else if (name === 'content') {
            //         return {
            //             Title: preVal.Title,
            //             content: val
            //     }
            // }
        })
    }

    const Add = () => {
        props.passNote(title);
    }

    return (
        <>
            <div className='d-flex flex-column justify-content-center align-items-center note '>
                <form action="" className='position-relative d-flex flex-column border pt-1 mt-3'>
                    <input onChange={Input}
                        name='Title'
                        value={title.Title}
                        className=' w-100 border-0 p-2  ' type="text" placeholder='Title' autoComplete='off' />
                    <textarea onChange={Input}
                        name='content'
                        value={title.content}
                        className=' w-100  border-0 p-2 ' placeholder='Add Note'></textarea>
                    <Button onClick={Add} style={{
                        position: 'absolute',
                        borderRadius: '50px',
                        bottom: '-13px',
                        right: '2px',
                        height: '24px',
                        width: '36px',
                        color: '#fbbc05',
                        boxShadow: '1px 1px 5px -1px rgba(0, 0, 0, 0.5)',
                    }}><AddIcon /></Button>
                </form>


            </div>
        </>
    )
}

export default MainNote;