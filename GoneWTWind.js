const movie = {
    title: "Gone With Wind",
    year: 1939,
    actressLead: "Vivien Leigh",
    actorLead: "Clark Gable",
    genre: "Epic",
    academyAwards: 8,

    leadingRole: function(actor) {
        return this[actor];
    },

    formatInfo: function() {
        return `${this.title} was released in ${this.year}.
        It tells the story of the civil war in the US`;
    },

    quote: "Frankly My Dear, I don't give a damn"
};

movie.profits = {
    yearOfRelease: 10,
    subsequentToDate: 40
};

let output = document.querySelector(".output");

output.textContent =
    "Movie: " + movie.title +
    "\nYear: " + movie.year +
    "\nActress: " + movie.actressLead +
    "\nActor: " + movie.actorLead +
    "\nGenre: " + movie.genre +
    "\nAcademy Awards: " + movie.academyAwards +
    "\nMost famous quote: " + movie.quote +
    "\nLeading actor: " + movie.leadingRole("actorLead") +
    "\nLeading actress: " + movie.leadingRole("actressLead") +
    "\n" + movie.formatInfo() +
    "\nProfits the year of release: " + movie.profits.yearOfRelease;