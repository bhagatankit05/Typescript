function calculate(a:number , b:number, type:"sum"|"sub"|"mul"|"div"): number{
    if(type === "sum"){
        return a + b;
    }
    if(type === "sub"){
        return a - b;
    }
    if(type === "mul"){
        return a * b;
    }
    if(type === "div"){
        return a / b;
    }
    return -1;
}
var result = calculate(10,20,"mul");
console.log("The result is: " + result);

