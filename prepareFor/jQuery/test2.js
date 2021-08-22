const hideMail = email => email.slice(0 ,3) +"...@"+email.split("@")[1];

console.log(hideMail('s.andjelkovic@gmail.com'))