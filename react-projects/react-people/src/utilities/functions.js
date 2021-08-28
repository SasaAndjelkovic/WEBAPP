export const hideMail = email => email.slice(0, 3) + '...@' + email.split('@')[1];

export const formatDate = dob => {
    let day = new Date (dob).getDate();
    let month = new Date (dob).getMonth() +1;
    let year = new Date (dob).getFullYear();
    return `${day}-${month}-${year}`;
}