import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { useId } from "react";
import css from './ContactForm.module.css';

const ContactForm = ({ onAdd }) => {
    const initialValues = {
        name:'',
        number:'',
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, 'Name must be at least 3 characters')
            .max(50, 'Name must be less than 50 characters')
            .required('Name is required'),
        number: Yup.string()
            .min(3, 'Number must be at least 3 characters')
            .max(50, 'Number must be less than 50 characters')
            .required('Number is required'),
    });

    const nameId = useId();
    const numberId = useId();

    const handleSubmit = (values, actions) => {
        onAdd({
            id: nanoid(),
            name: values.name,
            number: values.number,
        });
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form className={css.form}>
                <label className={css.formTitle} htmlFor={nameId}>Name:</label>
                <Field className={css.formInput} id={nameId} name="name" type="text" />
                <ErrorMessage name="name" component="div" className={css.errorMassage} />

                <label className={css.formTitle} htmlFor={numberId}>Number:</label>
                <Field className={css.formInput} id={numberId} name="number" type="text" />
                <ErrorMessage name="number" component="div" className={css.errorMassage} />

                <button className={css.formBtn} type="submit">Add contact</button>
            </Form>
        </Formik>
    );
};

export default ContactForm;