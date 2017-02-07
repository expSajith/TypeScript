
interface Cricket{
	name:string;
	matches: number;
	runs: number;
	hs:number;
}

var getVal =()=>{
	var cricket ={name:(<HTMLInputElement>document.getElementById('name')).value,
	matches:parseInt((<HTMLInputElement>document.getElementById('match')).value),
	runs:parseInt((<HTMLInputElement>document.getElementById('runs')).value),
	hs:parseInt((<HTMLInputElement>document.getElementById('hs')).value)
	};
	getInfo(cricket);
}

var getInfo = (json:Cricket)=>{
	console.log("Name :"+ json.name);
	console.log("Matches :"+ json.matches);
	console.log("Runs :"+ json.runs);
	console.log("HS :"+ json.hs);
};
