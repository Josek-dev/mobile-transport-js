var staticRandomStationNames = [
    "Broad Street",
    "Park Place",
    "Route 70",
    "4th Street West",
    "Jefferson Street",
    "Surrey Lane",
    "Central Avenue",
    "York Road",
    "Orchard Lane",
    "Main Street",
    "Brook Lane",
    "Cypress Court",
    "Cobblestone Court",
    "Adams Street",
    "Fairview Avenue",
    "Main Street South",
    "Elm Avenue",
    "Lexington Drive",
    "Eagle Road",
    "Church Street",
    "Jones Street",
    "Lexington Drive",
    "Oxford Road",
    "Efferson Street",
    "Washington Avenue",
    "William Street",
    "Sunset Drive",
    "Spruce Street",
    "5th Street South",
    "West Street",
    "Summer Street",
    "Devon Road",
    "Berkshire Drive",
    "Jackson Street",
    "Railroad Avenue",
    "Primrose Lane",
    "Lincoln Street",
    "White Street",
    "Route 9",
    "Myrtle Avenue",
    "Front Street North",
    "Aspen Drive",
];
class Station {
    constructor(isLastStation){
        let randomNumber = Math.floor(Math.random()*staticRandomStationNames.length);
        this.name = staticRandomStationNames[randomNumber];

        if(isLastStation){
            this.nextDist = null;
        } else {
            this.nextDist = Math.round((Math.random()*2)*1000)/1000;
        }
        console.log("Station created! Name: ", this.name, "| Distance to next station: ", this.nextDist);
    }
}

module.exports = {
    Station
}