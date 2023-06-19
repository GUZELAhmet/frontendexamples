import React from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

const FormikYup2 = () => {

    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        id: ""
    };

    const validationSchema = yup.object({
        firstName: yup.string()
            .min(2, "Isim en az 2 karakter olmalidir!")
            .required("Isim kismini bos birakamazsiniz!"),
        lastName: yup.string()
            .min(2, "Soyisim en az 2 karakter olmalidir!")
            .required("Soyisim kismini bos birakamazsiniz!"),
        email: yup.string()
            .email("Gecerli bir email adresi giriniz!")
            .required("Email kismini bos birakamazsiniz!"),
        password: yup.string()
            .min(6, "Sifre en az 6 karakter olmalidir!")
            .max(15, "Sifre en fazla 15 karakter olmalidir!")
            .required("Sifre kismini bos birakamazsiniz!"),
    });

    const onSubmit = async (values) => {

        const dto = {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password
        }


        try {
            const resp = await axios.put(`https://648a1ac75fa58521cab0d225.mockapi.io/api/v1/login/${values.id}`, values);
            console.log(resp)

        } catch (error) {
            console.log(error.message)
        }
    };

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: onSubmit
    })

    return (
        <Container>
            <h2>Formik & Yup — 2</h2>
            <p>*Doldurulmasi zorunlu alanlar.</p>
            <Form noValidate onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>ID</Form.Label>
                    <Form.Control
                        type="number"
                        name="id"
                        placeholder="Lutfen id giriniz..."
                        {...formik.getFieldProps("id")}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>First Name*</Form.Label>
                    <Form.Control
                        type='text'
                        name='firstName'
                        placeholder="Lutfen isminizi giriniz..."
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isValid={formik.touched.firstName && !formik.errors.firstName}
                        isInvalid={formik.touched.firstName && formik.errors.firstName}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {formik.errors.firstName}
                    </Form.Control.Feedback>
                </Form.Group>
                {/* ------------------------ */}
                <Form.Group className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type='text'
                        name='lastName'
                        placeholder="Lutfen soyisminizi giriniz..."
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isValid={formik.touched.lastName && !formik.errors.lastName}
                        isInvalid={formik.touched.lastName && formik.errors.lastName}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {formik.errors.lastName}
                    </Form.Control.Feedback>
                </Form.Group>
                {/* ------------------------ */}
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type='email'
                        name='email'
                        placeholder="Lutfen soyisminizi giriniz..."
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isValid={formik.touched.email && !formik.errors.email}
                        isInvalid={formik.touched.email && formik.errors.email}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {formik.errors.email}
                    </Form.Control.Feedback>
                </Form.Group>
                {/* ------------------------ */}
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='text'
                        name='password'
                        placeholder="Lutfen soyisminizi giriniz..."
                        {...formik.getFieldProps("password")}
                        isValid={formik.touched.password && !formik.errors.password}
                        isInvalid={formik.touched.password && formik.errors.password}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {formik.errors.password}
                    </Form.Control.Feedback>
                </Form.Group>
                <Button type='submit'>
                    FORMU GONDER
                </Button>
            </Form>
        </Container>
    )
}

export default FormikYup2