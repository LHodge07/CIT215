let champions = [
    {
        year: 2019,
        teamName: "New England Patriots",
        headCoach: "Bill Belichick",
        quarterback: "Tom Brady",
        defeated: "Los Angeles Rams",
    },
    {
        year: 2020,
        teamName: "Kansas City Chiefs",
        headCoach: "Andy Reid",
        quarterback: "Patrick Mahomes",
        defeated: "San Francisco 49ers",
    },
    {
        year: 2021,
        teamName: "Tampa Bay Buccaneers",
        headCoach: "Bruce Arians",
        quarterback: "Tom Brady",
        defeated: "Kansas City Chiefs",
    },
    {
        year: 2022,
        teamName: "Los Angeles Rams",
        headCoach: "Sean McVay",
        quarterback: "Matthew Stafford",
        defeated: "Cincinnati Bengals",
    },
    {
        year: 2023,
        teamName: "Kansas City Chiefs",
        headCoach: "Andy Reid",
        quarterback: "Patrick Mahomes",
        defeated: "Philadelphia Eagles",
    },
    {
        year: 2024,
        teamName: "Kansas City Chiefs",
        headCoach: "Andy Reid",
        quarterback: "Patrick Mahomes",
        defeated: "San Francisco 49ers",
    },
    {
        year: 2025,
        teamName: "Philadelphia Eagles",
        headCoach: "Nick Sirianni",
        quarterback: "Jalen Hurts",
        defeated: "Kansas City Chiefs",
    },
    {
        year: 2026,
        teamName: "Seattle Seahawks",
        headCoach: "Mike Macdonald",
        quarterback: "Sam Darnold",
        defeated: "New England Patriots",
    },
];

const maxChampions = 10;

const act = () => {
    let action = document.querySelector("#choice").value.toUpperCase();
    let championInQuestion;

    switch (action) {
        case "C":
            createAChampion();
            break;
        case "R":
            readAChampion();
            break;
        case "U":
            championInQuestion = findAChampion();
            if (championInQuestion) {
                updateAChampion(championInQuestion);
            }
            break;
        case "D":
            championInQuestion = findAChampion();
            if (championInQuestion) {
                deleteAChampion(championInQuestion);
            }
            break;
        default:
            setDetails("Please enter C, R, U or D.");
    }

    // Clear the input box for the next choice
    document.querySelector("#choice").value = "";
};


const listChampions = () => {
    let displayOfChampions = document.querySelector(".list-all");
    displayOfChampions.innerHTML = "";

    champions.forEach((champion) => {
        displayOfChampions.innerHTML +=
            "<li>" + champion.year + " - " + champion.teamName +
            " (Def " + champion.defeated + ")</li>";
    });
};

const setDetails = (message) => {
    document.querySelector(".details-info").innerHTML = message;
};

const describeChampion = (champion) => {
    return "In <b>" + champion.year + "</b>, the <b>" + champion.teamName +
        "</b> won the Super Bowl.<br>" +
        "Head Coach: " + champion.headCoach + "<br>" +
        "Quarterback: " + champion.quarterback + "<br>" +
        "Def " + champion.defeated;
};

const findAChampion = () => {
    let yearAsked = parseInt(prompt("Which year? (example: 2024)"));

    let champion = champions.find((item) => item.year === yearAsked);

    if (champion === undefined) {
        setDetails("No champion was found for that year.");
    }
    return champion;
};


const createAChampion = () => {
    if (champions.length >= maxChampions) {
        setDetails("The list is full (" + maxChampions + " champions). Delete one first.");
        return;
    }

    let year = parseInt(prompt("What year was the Super Bowl?"));
    if (isNaN(year)) {
        setDetails("The year must be a number. Nothing was added.");
        return;
    }

    let alreadyThere = champions.find((item) => item.year === year);
    if (alreadyThere) {
        setDetails("There is already a champion for " + year + ".");
        return;
    }

    let team = prompt("Winning team name?");
    let coach = prompt("Head coach name?");
    let qb = prompt("Quarterback name?");
    let loser = prompt("Which team did they defeat?");

    champions.push({
        year: year,
        teamName: team,
        headCoach: coach,
        quarterback: qb,
        defeated: loser,
    });

    listChampions();
    setDetails("Added:<br>" + describeChampion(champions[champions.length - 1]));
    console.log(champions);
};


const readAChampion = () => {
    let champion = findAChampion();
    if (champion) {
        setDetails(describeChampion(champion));
        console.log(champion);
    }
};

const updateAChampion = (champion) => {
    let field = prompt(
        "What do you want to change?\n" +
        "T - Team name\nC - Head coach\nQ - Quarterback\nD - Defeated team"
    );
    if (field === null) {
        return;
    }
    let newValue = prompt("Enter the new value:");
    if (newValue === null || newValue === "") {
        setDetails("No change was made.");
        return;
    }

    if (field.toUpperCase() === "T") {
        champion.teamName = newValue;
    } else if (field.toUpperCase() === "C") {
        champion.headCoach = newValue;
    } else if (field.toUpperCase() === "Q") {
        champion.quarterback = newValue;
    } else if (field.toUpperCase() === "D") {
        champion.defeated = newValue;
    } else {
        setDetails("Please choose T, C, Q or D. No change was made.");
        return;
    }

    listChampions();
    setDetails("Updated:<br>" + describeChampion(champion));
    console.log(champion);
};


const deleteAChampion = (champion) => {
    let indexToRemove = -1;

    for (let i = 0; i < champions.length; i++) {
        if (champions[i].year === champion.year) {
            indexToRemove = i;
        }
    }

    if (indexToRemove !== -1) {
        champions.splice(indexToRemove, 1);
        listChampions();
        setDetails("Deleted the " + champion.year + " " + champion.teamName + ".");
        console.log(champions);
    }
};


listChampions();
