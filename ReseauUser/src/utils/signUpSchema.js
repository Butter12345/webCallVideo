import * as Yup from "yup";

export default Yup.object().shape({
    email: Yup.string().required('Le champ email est requis')
        .email('Veuillez entrer une adresse email correcte'),
    password: Yup.string().required("Le mot de passe est requis")
        .min(8, "Le mot de passe doit contenir au moins 8 caractères")
})