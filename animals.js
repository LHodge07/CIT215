
const petsData = [
    {
        petName: "Stella",
        age: 7,
        weightInKilos: 24,
        breed: "Dalmation"
    },
    {
        petName: "Cody",
        age: 8,
        weightInKilos: 22,
        breed: "Corgi"
    },
    {
        petName: "Mango",
        age: 2,
        weightInKilos: 11,
        breed: "Persian"
    },
    {
        petName: "Lucy",
        age: 4,
        weightInKilos: 35,
        breed: "Ball Python"
    },
    {
        petName: "Buhmie",
        age: 1,
        weightInKilos: 28,
        breed: "Bull-dog"
    }
];


const showInfo = () => {

    let petNumEntry = document.querySelector("#petNum");
    let petNumber = Number(petNumEntry.value);
    console.log("Pet number entered: " + petNumber);

    let infoSpace = document.querySelector(".selectedPetInfo");

    if (petNumber < 1) {
        alert("Please, only #'s between 1 " + petsData.length);
        infoSpace.textContent = "";
    } else if (petNumber > petsData.length) {
        alert("Please, only #'s between 1 " + petsData.length);
        infoSpace.textContent = "";
    } else {
        let index = petNumber - 1;
        let pet = petsData[index];
        console.log(pet);
        infoSpace.textContent = `${pet.petName} is ${pet.age} years old. ${pet.petName} weighs ${pet.weightInKilos} kilos and is a ${pet.breed} breed.`;
    }
};
