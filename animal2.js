
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

const petImages = [
    "dalmation.jpg",
    "corgi.jpg",
    "persian.jpg",
    "python.jpg",
    "bulldog.jpg",
];

const showInfo = () => {
   
    let petNumEntry = document.querySelector("#petNum");
    let petNumber = Number(petNumEntry.value);
    console.log("Pet number entered: " + petNumber);

    let infoSpace = document.querySelector(".selectedPetInfo");
    let pictureSpace = document.querySelector(".petPicture");


    pictureSpace.innerHTML = "";
    if (petNumber < 1) {
        alert("Please enter a number between 1 and " + petsData.length);
        infoSpace.textContent = "";
    } else if (petNumber > petsData.length) {
        alert("Please enter a number between 1 and " + petsData.length);
        infoSpace.textContent = "";
    } else {

        let index = petNumber - 1;
        let pet = petsData[index];
        console.log(pet);

   
        infoSpace.textContent = `${pet.petName} is a ${pet.breed} and is ${pet.age} years old.`;

        let petImg = document.createElement("img");
        petImg.src = petImages[index];
        console.log("Image file: " + petImages[index]);
        // add the new image to the picture area on the web page
        pictureSpace.appendChild(petImg);
    }
};