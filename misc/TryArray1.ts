var arrayVar: Array<string>  = new Array<string>();
arrayVar[0] = "one";
arrayVar[1] = "two";
arrayVar[2] = "three";

if (arrayVar.includes("two")) {
    console.log("array contains two");
} else {
    console.log("array does not contains two");
}
