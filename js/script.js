let userName = prompt('What is your name?', '').trim();
userName = userName[0].toUpperCase() + userName.slice(1).toLowerCase();

let lastName = prompt('What is your last name?', '').trim();
lastName = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();

console.log(userName, lastName);
let userEmail = prompt('Enter your Email', "").replaceAll().toLowerCase();
userEmail = (!userEmail.includes('@')) ? `not valid email <b>${userEmail}</b> (symbol @ not exist)`:
            (userEmail.startsWith('@')) ? `not valid email <b>${userEmail}</b> (symbol @ find in first place)`:
            (userEmail.endsWith('@')) ? `not valid email <b>${userEmail}</b> (symbol @ find in last place)`:
            `</b>${userEmail}</b>`;


