export default function validation(inputs){
    const regexOnlyCh=/^[A-Za-z]+$/;
    const regexDob = /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
    const errors={}

    if(!regexOnlyCh.test(inputs.name))
        errors.name='Nombre equivocado'
    
    if(!regexOnlyCh.test(inputs.surname))
        errors.surname='Apellido equivocado'

    if(!regexDob.test(inputs.dob))
        errors.dob='Fecha de nacimiento incorrecta'

    return errors;
}