/* 
Module One Exercise: Object Syntax & Notation
Start with exercise-1.md if you haven't read it! 
*/

// YOUR WORK GOES HERE //

const laBellaVita = {
    name: "La Bella Vita",
    cuisines: ["Italian", "American", "Alcohol"], 
    numberOfStars: 4,
    favorited: true,
}

laBellaVita.address = "123 Northpark Ave";
laBellaVita.zipcode = 80915;
laBellaVita.acceptsReservations = true;

laBellaVita.numberOfStars += 5;
laBellaVita.favorited = !laBellaVita.favorited;
laBellaVita.cuisines.push("French");

function retrieveProperty(obj, key) {
    if (Object.hasOwnProperty.call(obj, key)) {
        return obj[key];
    }
    return "The information you requested does not exist.";
}

// Test invocations requested by the exercise:
console.log('cuisines ->', retrieveProperty(laBellaVita, 'cuisines'));
console.log('favorited ->', retrieveProperty(laBellaVita, 'favorited'));
console.log('name ->', retrieveProperty(laBellaVita, 'name'));
console.log("nickName ->", retrieveProperty(laBellaVita, 'nickName'));
console.log('state ->', retrieveProperty(laBellaVita, 'state'));


