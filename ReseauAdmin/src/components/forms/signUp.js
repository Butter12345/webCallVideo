import { useFormik } from "formik";
import signUpSchema from "../../utils/signUpSchema";
import { register } from "../../utils/fakeApi";
import React from "react";

function SignUp() {
    const initialValues = {
        email: '',
        password: '',
    }

    const { handleSubmit, values, touched, isValid, handleChange,
        handleBlur, resetForm, errors, isSubmitting, setFieldError } = useFormik({
            initialValues,
            signUpSchema,
            onSubmit
        })
    
    async function onSubmit(formValues) {
        try {
            await register(formValues);
            resetForm();
            alert("Vous pouvez vous connectez!!!");
            //console.log(formValues);
        } catch ({errors}) {
            for (let key in errors) {
                //console.log(setFieldError(key, errors[key]));
                setFieldError(key, errors[key]);
            }       
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-10">
                <h1 className="text-5xl font-bold">Connectez-vous</h1>
                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, hic?</p>
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
                <button className="btn" type="submit" disabled={!isValid || isSubmitting }>Se connecter</button>
            </div>
        </form>
    )
}

export default SignUp;