import React,{useState, useEffect} from 'react'
import { View } from './components/View';

// getting the values of local storage
const getDatafromLS=()=>{
  const data = localStorage.getItem('books');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

export const App = () => {

  // main array of objects state || books state || books array of objects
  const [books, setbooks]=useState(getDatafromLS());

  // input field states
  const [fname, setfName]=useState('');
  const [contact, setContact]=useState('');

  // form submit event
  const handleAddBookSubmit=(e)=>{
    e.preventDefault();
    // creating an object
    let contactList={
      fname,
      contact,
    }
    setbooks([...books,contactList]);
    setfName('');
    setContact('');
    
  }

  const deleteBook=(fname)=>{
    const filteredBooks=books.filter((element,index)=>{
      return element.fname !== fname
    })
    setbooks(filteredBooks);
  }


  const [updatedfName, setNewfName]=useState('');
  const [updatedContact, setNewContact]=useState('');

  
  const UpdateSubmit=(e)=>{
    e.preventDefault();
    // creating an object
    let updatedContactList={
        updatedfName,
        updatedContact,
    }
    setNewfName('');
    setNewContact('');
    
  }




  // saving data to local storage
  useEffect(()=>{
    localStorage.setItem('books',JSON.stringify(books));
  },[books])

  return (
    <div className='wrapper'>
      <h1>Contact List</h1>
      <p>Add and view and edit your Contact using local storage</p>
      <div className='main'>

        <div className='form-container'>
          <form autoComplete="off" className='form-group'
          onSubmit={handleAddBookSubmit}>
            
            <label>Name</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setfName(e.target.value)} value={fname}></input>
            <br></br>

            <label>Contact Number</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setContact(e.target.value)} value={contact} maxLength="10" />
            <br></br>
            
            <button type="submit" className='btn btn-success btn-md'>
              ADD
            </button>
          </form>
        </div>

        <div className='view-container'>
          {books.length>0&&<>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Contact Number</th>
                    <th>Delete</th>
                    <th>Edit</th>
                  </tr>
                </thead>
                <tbody>
                  <View books={books} deleteBook={deleteBook} UpdateSubmit={UpdateSubmit}/>
                </tbody>
              </table>
            </div>
            <button className='btn btn-danger btn-md'
            onClick={()=>setbooks([])}>Remove All</button>
          </>}
          {books.length < 1 && <div>No contacts are added yet</div>}
        </div>
      </div>
    </div>
  )
}

export default App;