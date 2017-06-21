import {Meteor} from 'meteor/meteor'
import {Players} from './../imports/api/players'

Meteor.startup(function () {

    class Person {
        
        constructor(name = '(unknown)', age = 0) {
            this.name = name;
            this.age = age;
        }

        sayHello() {
           return `Hi, I am ${this.name}.`; 
        }

        sayAge() {
            return `I am ${this.age} years old`;
        }

    };

    class Employee extends Person {

        constructor(name, age, title) {
            super(name, age);
            this.title = title;
        }

        sayHello() {
            if (this.title) {
                return `Hi, I am ${this.name} and my job title is ${this.title}`
            } else {
                return super.sayHello();
            }
        }
        sayJob() {
            return this.title;
        }

    }

    class Programmer extends Person {
        constructor(name, age, pref = 'python') {
            super(name, age);
            this.pref = pref;
        }

        sayHello() {
            if (this.pref) {
                return `Hi, I am ${this.name} and my preferred language is ${this.pref}`;
            } else {
                super.sayHello();
            }
        }
    }

    let me = new Programmer('Alex', 22, 'Swift');
    console.log(me.sayHello());
});