export const checkRequired = (str) => {
    if (str.length !== 0) return true
    else return false
}
export const checkLength = (str, length) => {
    if (str.length > length) return true
    else return false
}
export const checkEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}