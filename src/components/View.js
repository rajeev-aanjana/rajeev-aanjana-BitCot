import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'


export const View = ({books,deleteBook,UpdateSubmit}) => {



    return books.map(contactList=>(
        
        <tr key={contactList.fname}>
            <td>{contactList.fname}</td>
            <td>{contactList.contact}</td>
            <td className='delete-btn' onClick={()=>deleteBook(contactList.fname)}>
                <Icon icon={trash}/>
            </td>   
            <td className='edit-btn' onClick={()=>UpdateSubmit(contactList.fname)}>
                <button style={{backgroundColor:" rgb(30, 130, 216)",color:"white",padding:"5px 10px"}}>Edit</button>
                </td>        
        </tr>          
    
))
}

export default View;