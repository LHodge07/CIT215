const eternals = [
    {
        name: "Ajak",
        title: "Prime Eternal",
        description: "the wise leader of the Eternals, who heals others and speaks with the Celestials.",
        skills: ["healing", "leadership", "cosmic communication"],
        image: "ajak.png"
    },
    {
        name: "Druig",
        title: "Mind Controller",
        description: "able to control the minds of others, and leads his own village in the Amazon.",
        skills: ["mind control", "leadership", "persuasion"],
        image: "druig.png"
    },
    {
        name: "Gilgamesh",
        title: "Strongest Eternal",
        description: "the strongest of the Eternals, who fights with energy-powered fists and loves to cook.",
        skills: ["super strength", "combat", "cooking"],
        image: "gilgamesh.png"
    },
    {
        name: "Sprite",
        title: "Illusionist",
        description: "an ancient Eternal in a child's form, who creates lifelike illusions and tells stories.",
        skills: ["illusions", "storytelling", "acting"],
        image: "sprite.png"
    },
    {
        name: "Phastos",
        title: "Inventor",
        description: "a brilliant inventor who builds technology far ahead of its time.",
        skills: ["invention", "technology", "combat"],
        image: "phastos.png"
    }
];
 

const heading = document.createElement("h1");
heading.textContent = "The Eternals";
document.body.append(heading);
 

const characterList = document.createElement("ul");
 
eternals.forEach(function (eternal) {
    const item = document.createElement("li");
    item.textContent = eternal.name + " - " + eternal.title;
    characterList.append(item);
});
 
document.body.append(characterList);
 
const powersHeading = document.createElement("h2");
powersHeading.textContent = "Powers";
document.body.append(powersHeading);
 

const allSkills = [];
 
eternals.forEach(function (eternal) {
    eternal.skills.forEach(function (skill) {
        let alreadyListed = false;
 
        allSkills.forEach(function (listedSkill) {
            if (listedSkill === skill) {
                alreadyListed = true;
            }
        });
 
        if (alreadyListed === false) {
            allSkills.push(skill);
        }
    });
});
 
const powersList = document.createElement("ul");
powersList.classList.add("powers");
 
allSkills.forEach(function (skill) {
    const item = document.createElement("li");
    item.textContent = skill;
    powersList.append(item);
});
 
document.body.append(powersList);
 

const searchArea = document.createElement("div");
 
const label = document.createElement("label");
label.textContent = "What attribute skill are you looking for? ";
 
const input = document.createElement("input");
input.type = "text";
input.placeholder = "leadership";
 
const button = document.createElement("button");
button.textContent = "Search";
 
searchArea.append(label);
searchArea.append(input);
searchArea.append(button);
document.body.append(searchArea);
 



const results = document.createElement("div");
document.body.append(results);
 

function showMatches() {
    const searchSkill = input.value.trim().toLowerCase();
 
    results.textContent = "";
 
    if (searchSkill === "") {
        return;
    }
 
    let matchCount = 0;
 
    eternals.forEach(function (eternal) {
        const foundSkill = eternal.skills.find(function (skill) {
            return skill === searchSkill;
        });
 
        if (foundSkill !== undefined) {
            matchCount = matchCount + 1;
 
            const card = document.createElement("div");
            card.classList.add("card");
 
            const info = document.createElement("p");
            info.textContent = eternal.name + " is " + eternal.description;
 
            const pic = document.createElement("img");
            pic.src = eternal.image;
            pic.alt = eternal.name;
 
            card.append(info);
            card.append(pic);
            results.append(card);
        }
    });
 
    if (matchCount === 0) {
        const message = document.createElement("p");
        message.textContent = "No Eternal has the skill \"" + searchSkill + "\".";
        results.append(message);
    }
}
 
button.addEventListener("click", showMatches);