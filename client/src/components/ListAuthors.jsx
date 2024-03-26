import axios from "axios";
import React from 'react'
import DeleteData from "./DeleteData";
import { useNavigate} from "react-router-dom";

function ListAuthors({listaActualizada,useListaActualizada}) {
    const navigate = useNavigate();
    const baseURL = "http://localhost:8000/api/authors/";
    const [list, setList] = React.useState(null);
    React.useEffect(() => {
        axios.get(`${baseURL}`).then((response) => {
            setList(response.data.authors);
            useListaActualizada(false);
        });
    }, [listaActualizada]);
    if (!list) return null;
    const edit = (id) =>{
        navigate(`./${id}/edit`);
    }
    return (
        <tbody className="table-group-divider">
            {
                list.map((data,i) =>(
                    <tr key={i}>
                        <td>{data.author}</td>
                        <td>
                            <div className="">
                                <button className="btn btn-success px-3 " onClick={()=>edit(data._id)}>Edit</button>
                                <DeleteData useListaActualizada={useListaActualizada} id={data._id}/>
                            </div>
                        </td>
                        
                    </tr>
                ))
            }
        </tbody>
    )
}

export default ListAuthors
