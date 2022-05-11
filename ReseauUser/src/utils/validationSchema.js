import * as Yup from "yup";

export default Yup.object().shape({
    name: Yup.string().required("Le nom est requis"),
    email: Yup.string().required('Le champ email est requis')
        .email('Veuillez entrer une adresse email correcte'),
    password: Yup.string().required("Le mot de passe est requis")
        .min(8, "Le mot de passe doit contenir au moins 8 caractères"),
    passwordConfirmation: Yup.string().required("Le champ de confirmation de mot de passe est requis")
                            .oneOf([Yup.ref('password')],"Les mots de passe ne correspondent pas")
})