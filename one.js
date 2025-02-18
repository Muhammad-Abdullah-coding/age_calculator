function calculateAge(birthdate) {
    
    const today = new Date();

    
    const birthDate = new Date(birthdate);

    
    let age = today.getFullYear() - birthDate.getFullYear();

    
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

const birthdate = "2007-05-10";
const age = calculateAge(birthdate);
console.log(`You are ${age} years old.`);