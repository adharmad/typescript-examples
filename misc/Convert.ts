class Convert {

    static function_map: Map<string, string> = new Map([
        ["number->string", "val.toString()"],
        ["boolean->string", "val.toString()"],
        ["Date->string", "val.toString()"],
        ["string->string", "val"],
        ["string->number", "Number(val)"],
        ["number->number", "val"],
        ["boolean->number", "Number(val)"],
        ["Date->number", "Number(val)"],
        ["string->boolean", "val == 'true'"],
        ["number->boolean", "val != 0"]
    ]);

    static convert(fromTo, val) {
        let code = Convert.function_map.get(fromTo);
        if (code == undefined) {
            code = val.toString();
        }

        let res :any = eval(code);
        return res;
    }

    static toString(val) {
        let fromTo = typeof val + "->string";
        return Convert.convert(fromTo, val);
    }


    static toNumber(val) {
        let fromTo = typeof val + "->number";
        return Convert.convert(fromTo, val);
    }

    static toDate(val) {
        let fromTo = typeof val + "->Date";
        return Convert.convert(fromTo, val);
    }

    static toBoolean(val) {
        let fromTo = typeof val + "->boolean";
        return Convert.convert(fromTo, val);
    }
}

let val1 = Convert.toString(100)
let val2 = Convert.toString(222.33)
let val3 = Convert.toString(false)

console.log(val1)
console.log(val2)
console.log(val3)

let val4 = Convert.toNumber('123')
let val5 = Convert.toNumber(456)
let val6 = Convert.toNumber(true)

console.log(val4)
console.log(val5)
console.log(val6)
