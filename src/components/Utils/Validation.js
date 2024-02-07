export const Validation = (name, email, password) => {
    const nameValidation = /^[a-zA-Z]+ [a-zA-Z]+$/.test(name);
    const emailValidation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    const passwordValidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/.test(password);
  
    if (!emailValidation) return "Email is not valid";
    if (!passwordValidation) return null;
    if (!nameValidation) return "Given name is not valid";
  
    return null;
  };
  