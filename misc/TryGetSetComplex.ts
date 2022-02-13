class MainEntry {
    private _person: Person = new Person("Hello", 100);

    public get person() {
        return this._person;
    }

    public set person(thePerson: Person) {
        this._person = thePerson;
    }

    public constructor() {}
    public test(): void {
        console.log("hello from here");
        console.log("name = " + this.person.name);
        console.log("age = " + this.person.age);
    }
}

class Person {
    private _name: string = "";
    private _age: number = 0;

    public constructor(theName: string, theAge: number) {
        this._name = theName;
        this._age = theAge;
    }

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

//var person = new Person();
//person.age = 100;
//person.name = "hello";

//console.log("name = " + person.name + " age = " + person.age);
var mainEntry = new MainEntry();
mainEntry.test();
