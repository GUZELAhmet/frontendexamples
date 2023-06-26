import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Button, Card, Form, Spinner } from "react-bootstrap";
import {  useNavigate } from "react-router-dom";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate =useNavigate()
  const initialValues = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
    zipCode: "",
    email: "",
  };
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
        lastName: Yup.string().required("Last Name is required"),
        phoneNumber: Yup.string().required("Phone Number is required"),
        address: Yup.string().required("Address is required"),
        zipCode: Yup.string().required("Zip Code is required"),
  });
  const onSubmit = (value) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("thankyou  for content us");
      navigate("/");
    }, 2000);



  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  return (
    <Card>
    <Card.Body>
        <Form noValidate onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Your First Name"
                    {...formik.getFieldProps("firstName")}
                    isInvalid={formik.touched.firstName && formik.errors.firstName}
                    isValid={formik.touched.firstName && !formik.errors.firstName}
                />
                <Form.Control.Feedback>{formik.errors.firstName}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Your Last Name"
                    {...formik.getFieldProps("lastName")}
                    isInvalid={formik.touched.lastName && formik.errors.lastName}
                    isValid={formik.touched.lastName && !formik.errors.lastName}
                />
                <Form.Control.Feedback>{formik.errors.lastName}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Your Phone Number"
                    {...formik.getFieldProps("phoneNumber")}
                    isInvalid={formik.touched.phoneNumber && formik.errors.phoneNumber}
                    isValid={formik.touched.phoneNumber && !formik.errors.phoneNumber}
                />
                <Form.Control.Feedback>{formik.errors.phoneNumber}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Your Address"
                    {...formik.getFieldProps("address")}
                    isInvalid={formik.touched.address && formik.errors.address}
                    isValid={formik.touched.address && !formik.errors.address}
                />
                <Form.Control.Feedback>{formik.errors.address}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Your Zip Code"
                    {...formik.getFieldProps("zipCode")}
                    isInvalid={formik.touched.zipCode && formik.errors.zipCode}
                    isValid={formik.touched.zipCode && !formik.errors.zipCode}
                />
                <Form.Control.Feedback>{formik.errors.zipCode}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter Your Email"
                    {...formik.getFieldProps("email")}
                    isInvalid={formik.touched.email && formik.errors.email}
                    isValid={formik.touched.email && !formik.errors.email}
                />
                <Form.Control.Feedback>{formik.errors.email}</Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit"
            disabled={loading} > {loading&& <Spinner animation="border" variant="danger"/>}
                Submit
            </Button>
        </Form>
    </Card.Body>
</Card>
  );
};
export default Login;