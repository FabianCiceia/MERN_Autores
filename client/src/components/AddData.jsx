import React from 'react'
import axios from "axios";
import Swal from 'sweetalert2'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate, Link} from "react-router-dom";



function AddData() {
    const navigate = useNavigate(); 
    const baseURL = `http://localhost:8000/api/authors`;
    function updatePost(pront) {
        axios
        .post(`${baseURL}/new`, pront)
        .then((response) => {
            Swal.fire({
                icon: "success",
                title: `fue cargado correctamente`,
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
        author: "",
    };
    const onSubmit = (values,  { resetForm }) => {
        updatePost(values);
    };


    return (
        <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        >
            <Form >
                <Link to="../">Home</Link>
                <p>Add a new author:</p>
                <div className='input-group mb-3'>
                    <label className='input-group-text' htmlFor="author">Name:</label>
                    <Field className="form-control" type="text" id="author" name="author" />
                </div>
                <div className="error-message">
                    <ErrorMessage name="author" component="div" />
                </div>
                <div>
                    <button className="btn btn-primary mx-1" type="submit">Submit</button>
                    <button className="btn btn-danger" type='button' onClick={()=>{navigate("../")}}>Cancel</button>
                </div>
            </Form>
        </Formik>
    )
}

export default AddData
