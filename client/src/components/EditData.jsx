import React from 'react'
import axios from "axios";
import Swal from 'sweetalert2'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useParams } from "react-router";
import { useNavigate, Link} from "react-router-dom";



function EditData(props) {
    const navigate = useNavigate();
    const { id } = useParams(); 
    const baseURL = `http://localhost:8000/api/authors/`;
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        axios.get(`${baseURL}${id}`).then((response) => {
        setData(response.data.author);
        });
        
    }, []);
    if (!data) return null;
    function updatePost(pront) {
        axios
        .put(`${baseURL}update/${id}`, pront)
        .then((response) => {
            Swal.fire({
                icon: "success",
                title: `${data.author} fue editado correctamente`,
            });
            navigate("../");
        })
        .catch(err => {
            Swal.fire({
                icon: "error",
                title: `${err.response.data.error.errors.author.message}`,
            });
        })
    }
    const initialValues = {
        author: data.author,
    };
    const onSubmit = (values,  { resetForm }) => {
        updatePost(values);
    };
    // const validationSchema = Yup.object({
    //     author: Yup.string().required().min(3),
    // });

    return (
        <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        // validationSchema={validationSchema}
        >
            <Form className="">
                <Link to="../">Home</Link>
                <p>Edit this author</p>
                <div className='input-group mb-3'>
                    <label className='input-group-text' htmlFor="author">Name:</label>
                    <Field className="form-control" type="text" id="author" name="author" />
                </div>
                {/* <div className="error-message">
                    <ErrorMessage name="author" component="div" />
                </div> */}
                <div>
                    <button className="btn btn-primary mx-1" type="submit">Edit product</button>
                    <button className="btn btn-danger" type='button' onClick={()=>{navigate("../")}}>Cancel</button>
                </div>
            </Form>
        </Formik>
    )
}

export default EditData
