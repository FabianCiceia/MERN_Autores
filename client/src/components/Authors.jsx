import React, { useState } from 'react'
import {  Link  } from "react-router-dom";
import ListAuthors from './ListAuthors';
function Authors() {
    const[listaActualizada,useListaActualizada]= useState(false);
    return (
        <div>
            <Link to="/new">Add an author</Link>
            <p>We have quotes by:</p>
            <table className='table table-striped '>
                <thead>
                    <tr >
                        <td>author</td>
                        <td>Action available</td>
                    </tr>
                </thead>
                <ListAuthors listaActualizada={listaActualizada} useListaActualizada={useListaActualizada} />
            </table>
        </div>
    )
}

export default Authors
