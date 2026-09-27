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
    "\n | Year: " + movie.year +
    "\n | Actress: " + movie.actressLead +
    "\n | Actor: " + movie.actorLead +
    "\n | Genre: " + movie.genre +
    "\n | Academy Awards: " + movie.academyAwards +
    "\n | Most famous quote: " + movie.quote +
    "\n | Leading actor: " + movie.leadingRole("actorLead") +
    "\n | Leading actress: " + movie.leadingRole("actressLead") +
    "\n" + movie.formatInfo() +
    "\n | Profits the year of release: " + movie.profits.yearOfRelease;
