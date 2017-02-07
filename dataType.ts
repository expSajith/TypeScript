let color: string = "blue";
color = 'red';
console.log(color);

let list: number[] = [1, 2, 3];
console.log(list);

let list1:Array<number> = [1,2,3];
console.log(list1);

let x:[string,number];
x=["helloo world",123];
console.log(x);


enum Color{red,green,blue};
let c:Color=Color.green;
console.log("enum value of "+Color[c],c);

let value:any;
value="value is now a string";
console.log(value);
value=100;
console.log("value =",value);


var messages = (): void => {
console.log("This is from a function");

};

messages();

var sayHello = (): string => {

  let msg:string = "this from function";
  return msg;
};

var Print:string = sayHello();
