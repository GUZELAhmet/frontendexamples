import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormikYup1 = () => {
    const [fName, setFName] = useState("");
    
    const initialValues = {
        firstName: "HELLO WORLD",
    };
    
    const validationSchema = Yup.object({
        firstName: Yup.string().min(5, "5 karakterden az olamaz").required("Doldurulmasi zorunlu alan"),
    });
        const onSubmit = (values) => {
        console.log(values);
    }


    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    });
    
    console.log(formik.touched.firstName);
        console.log(formik.errors.firstName)
    
    return (
        <Container>
            <h2>Formik & Yup — 1</h2>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="firstName">Adiniz</label>
                <br />
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder='Lutfen adinizi giriniz...'
                    // value={formik.values.firstName}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    {...formik.getFieldProps("firstName")}
                />
                <br />
                {
                    formik.touched.firstName && formik.errors.firstName ? <div style={{ color: "red" }}>{formik.errors.firstName}</div> : null
                }
                <br />
                <button type='submit'>FORMU GONDER</button>
            </form>
        </Container>
    )
};

export default FormikYup1;