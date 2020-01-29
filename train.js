var speedForOneKilomiter = 0.1;

class Train {
    constructor(context, number){
        this.position = 0;
        this.context = context;
        this.number = number;
        this.isTrainComeBack = false;
    }

    start(){
        console.log("Train", this.number, 'started!');
        this.next();
    }

    next(){
        if(this.context.stations[this.position].nextDist == null){
            console.log("Terminous for train", this.number);
            this.isTrainComeBack = true;
        }
        if(this.position == 0 && this.isTrainComeBack == true){
            console.log("Train", this.number, "came back");
            this.isTrainComeBack = false;
        }

        console.log("Train", this.number, 'leave station', this.context.stations[this.position].name);

        
        let milisecondsToNextStation = this.context.stations[
            this.isTrainComeBack ? this.position - 1 : this.position
        ].nextDist * speedForOneKilomiter * 60 * 1000;


        setTimeout(() => {
            if(this.isTrainComeBack){
                this.position--;
            } else{
                this.position++;
            }
            this.next();
        }, milisecondsToNextStation);
    }

}
module.exports = {
    Train
}