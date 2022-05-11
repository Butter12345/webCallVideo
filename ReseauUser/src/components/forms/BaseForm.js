import React from "react";
import { useFormik } from "formik";
import validationSchema from "../../utils/validationSchema";
import { register } from "../../utils/fakeApi";
import { Link } from "react-router-dom";

function BaseForm() {
    const initialValues = {
        name: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    }

    const { handleSubmit, values, touched, isValid, handleChange,
    handleBlur, resetForm, errors, isSubmitting, setFieldError } = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    })

    async function onSubmit(formValues) {
        try {
            await register(formValues);
            resetForm();
            alert("L'inscription a été bien prise en compte");
            console.log(formValues);
        } catch ({errors}) {
            for (let key in errors) {
                setFieldError(key, errors[key]);
            }
        }
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-10">
                    <h1 className="text-5xl font-bold">Inscrivez-vous</h1>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, hic?</p>
                </div>
                <div className="my-4">
                    <input type="text"
                        className="input"
                        placeholder="Votre nom" 
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {
                        touched.name && errors.name ?
                        <small className="error">{ errors.name }</small> : ""
                    }
                </div>
                <div className="my-4">
                    <input type="email"
                        className="input"
                        placeholder="Votre email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {
                        touched.email && errors.email ?
                        <small className="error">{ errors.email }</small> : ""
                    }
                </div>
                <div className="my-4">
                    <input type="password"
                        className="input"
                        placeholder="Votre mot de passe"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {
                        touched.password && errors.password ?
                        <small className="error">{ errors.password }</small> : ""
                    }
                </div>
                <div className="my-4">
                    <input type="password"
                        className="input"
                        placeholder="La confirmation de votre mot de passe"
                        name="passwordConfirmation"
                        value={values.passwordConfirmation}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {
                        touched.passwordConfirmation && errors.passwordConfirmation ?
                        <small className="error">{ errors.passwordConfirmation }</small> : ""
                    }
                </div>
                <div className="my-4">
                    <button className="btn" type="submit" disabled={!isValid || isSubmitting }>S'inscrire</button>
                </div>
            </form>
            <Link to="sign-up">
                <div className="my-4">
                    <button className="outline">Se connecter</button>
                </div>
            </Link>
            
        </>
    )
}

export default BaseForm;