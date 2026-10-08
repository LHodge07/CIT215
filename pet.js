const allDogs = [
    {
        dogName: "Andy",
        breed: "American Pit Bull Terrier",
        age: 6
    },
    {
        dogName: "Apollo",
        breed: "Pit Bull Terrier",
        age: 4
    },
    {
        dogName: "Apollo James",
        breed: "Dalmatian",
        age: 9
    },
    {
        dogName: "Archie",
        breed: "Labrador Retriever",
        age: 1
    },
    {
        dogName: "Barley",
        breed: "Bull Terrier",
        age: 4
    },
    {
        dogName: "Basil",
        breed: "Staffordshire Bull Terrier",
        age: 3
    },
    {
        dogName: "Bear",
        breed: "Pit Bull Terrier",
        age: 1
    },
    {
        dogName: "Bella",
        breed: "Siberian Husky",
        age: 8
    },
    {
        dogName: "Blastoise",
        breed: "Pit Bull Terrier",
        age: 6
    },
    {
        dogName: "Brooklyn",
        breed: "American Staffordshire Terrier",
        age: 7
    }
];
 

const findDogs = () => {

    let ageEntry = document.querySelector(".minAge");
  
    let minAge = Number(ageEntry.value);
    const selectedDogs = [];
 
    allDogs.forEach((item) => {
        if (item.age > minAge) {
            selectedDogs.push(item);
        }
    });
 
  
    console.log(selectedDogs);
    let area = document.querySelector(".dogList");
  
    area.innerHTML = "That is a great age! Here are the dogs that meet your requirements:";

    selectedDogs.forEach((item) => {
        area.innerHTML += `<br>${item.dogName} - ${item.breed} - ${item.age} years old<br>`;
    });
};