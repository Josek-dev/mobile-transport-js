const Station = require('./station.js').Station;
const Train = require('./train.js').Train;

class Line {
    constructor(){
        let numberOfStations = Math.floor(Math.random()*10)+5;
        this.stations = [];

        for(let i=0; i<numberOfStations;i++){
            this.stations.push(new Station(false));
        }

        this.stations.push(new Station(true));

        this.trains = [];

        console.log("Line created!", this.distance);
    }

    get distance(){
        let sum = 0;
        for(let i=0;i<this.stations.length;i++){
            sum += this.stations[i].nextDist;
        }
        return Math.round(sum*1000)/1000;
    }

    setTrains(){
        for(let i=0; i<Math.floor(this.distance); i++){
            this.trains.push(new Train(this, i));
        }
    }

    startTrains(seconds){
        let miliseconds = seconds * 1000;
        let sumOfMiliseconds = 0;
        for(let i=0; i<this.trains.length;i++){
            setTimeout(() => {
                this.trains[i].start();
            }, sumOfMiliseconds);
            sumOfMiliseconds += miliseconds;
        }
        
    }
}
module.exports = {
    Line
}