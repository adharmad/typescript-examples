class Person {
    private _name: string = "";
    private _age: number = 0;

    public get name() {
        return this._name;
    }

    public get age() {
        return this._age;
    }

    public set name(name1: string) {
        this._name = name1;
    }

    public set age(age1: number) {
        this._age = age1;
    }
}

var person = new Person();
person.age = 100;
person.name = "hello";

console.log("name = " + person.name + " age = " + person.age);
