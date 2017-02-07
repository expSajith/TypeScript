interface cricket{
	name:string;
	matches:number;
	runs:number;
	lastScores:number[];
	wickets?:number;
}


class Cricket{
	
	name:string;
	matches:number;
	runs:number;
	private lastScores:number[];

	constructor(data:cricket){
		this.name = data.name;
		this.matches = data.matches;
		this.runs = data.runs;
		this.lastScores = data.lastScores;
	}
	display(){
		console.log("Name :",this.name);
		console.log("Matches :",this.matches);
		console.log("runs :",this.runs);
		console.log("lastScores :",this.lastScores);
	}

}
class bowler extends Cricket{
	 wickets:number;
	 constructor(data:cricket){
	 	super(data);
	 	this.name = data.name;
		this.matches = data.matches;
		this.runs = data.runs;
	 	this.wickets = data.wickets;
	 }
	 displayBowler(){
	 	console.log("Wickets :",this.wickets);
	 }
}



var obj = {name:"sachin",matches:464,runs:16888,lastScores:[168,24,71]};
var c = new Cricket(obj);
var ob = {name:"Lee",matches:212,runs:1888,lastScores:[8,24,11],wickets:330};
var d = new bowler(ob);
c.display();
d.display();
d.displayBowler();

