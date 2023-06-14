import React from 'react';
import {Button, Table} from 'react-bootstrap';
import "react-bootstrap";
import Contacts from './components/Contacts';

function Home(){
    return(
        <>
        <div style={{margin:"10rem"}}>
            <table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Contact
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Contacts && Contacts.length>0
                        ?
                        Contacts.map((item) => {
                            <tr>
                                <td>
                                    {item.Name}
                                </td>
                                <td>
                                    {item.Contact}
                                </td>
                            </tr>
                        })
                        :
                        "No data Available"
                    }
                </tbody>
            </table>
        </div>
        </>
    );
}

export default Home;