var f1 = (token:boolean) :number => {
	if(token){
		var x = 10;
		return x;
	}
	else{
       return x;
	}

}

console.log("value of x is ",f1(true));
console.log("value of x is ",f1(false));

// for (var i = 0; i < 10; i++) {
//     setTimeout(function() { console.log(i); }, 5000 * i);
// }

var fib = () => {

var a:number = 0;
var b:number = 1;
var c:number = 0;
for(var i = 0;i<10;i++){
	console.log(c);
	c=a+b;
	b=a;
	a=c;
}
}

fib();
