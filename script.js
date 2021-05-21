const age = 28;
const isFemale = false;
const driverStatus = "bob";
const namePerson = "Sarah";
const totalAmount = 26;
if (age > 17) {
    console.log("Jij mag naar binnen");
}
else if(age < 18) {
    console.log("Helaas, jij moet nog even wachten");
}
if (isFemale) {
    console.log("Jij mag naar binnen");
}
else {
    console.log("Helaas, vandaag is het alleen voor dames");
}
if (driverStatus ==='bob') {
    console.log("Bedankt voor uw komst en wel thuis. Rij voorzichtig");
}
else 
    console.log("Bedankt voor uw komst. Ik zal een taxi voor u bellen, u mag zelf niet meer rijden.");

if (age >= 18 && age <= 25){
    console.log("Jij krijgt 50% korting op je biertje!");
}
else{ 
    console.log("Helaas krijg jij geen korting. Maar neem gerust nog een pinda");
}
if (namePerson == "Sarah" || namePerson == "Bram"){
    console.log("Aljeblieft, jij krijgt een gratis biertje!");
}
else{
    console.log("Jij krijgt geen gratis bier. Maar die pinda is wel gratis");
}
if (totalAmount > 25 && totalAmount <= 50){
    console.log("Je krijgt een gratis portie (Vega)bitterballen");
}
if (totalAmount > 25 && totalAmount > 50 && totalAmount < 100){
    console.log("Je krijgt een gratis portie nacho's")
}
if (totalAmount > 25 && totalAmount > 50 && totalAmount >= 100){
    console.log("Je krijgt een gratis fles champagne")
}
