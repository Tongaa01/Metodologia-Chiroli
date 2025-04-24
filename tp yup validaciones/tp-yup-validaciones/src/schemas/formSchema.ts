import { object, string } from "yup";

export let validations = object({
    nombre: 
        string()
        .required("El nombre es obligatorio")
        .min(3, "El nombre debe tener al menos 3 caracteres"),

    email: 
        string()
        .email()
        .required("El correo es obligatorio"),

    contraseña: 
        string()
        .required("La contraseña es obligatoria")
        .min(6, "La contraseña debe tener al menos 6 caracteres"),

    repetirContraseña: 
        string()
        .required("Repetir la contraseña es obligatoria")
        .min(6, "La contraseña debe tener al menos 6 caracteres")
})