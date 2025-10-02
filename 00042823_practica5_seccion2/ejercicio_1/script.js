// this is a js object
const myFirstObject = {
    keyAsString: "value",
    keyAsNumber: 3000,
    keyAsBoolean: true,
    keyAsObject: { }
}

// aparentemente, "name" es una palabra reservada
const _name = 'John McGee';
const school = 'School "John McGee"';

const profesor = { _name, school } 

// an object, its content, can be changed; even when declared as a constant
const _object = {
    property: "value of the property"
}

_object.newProperty = "I added a new property";
_object.property = "I updated the old property";

// btw, "." is the access operator


// I can mutate the object, but not redefine it. the following is illegal:

// const veryCreativeName = {
//     key: "value"
// }

// veryCreativeName = {
//     key1: "another value"
// }

// example of destructuring

const heroes = {
    dc: ['batman', 'superman'],
    marvel: ['spiderman', 'iron man']
}

const { dc: heroesDC } = heroes
// the end result is the same as:
// const heroesDC = heroes.dc

const dc = {
    heroes: {
        batman: { nombre: "Bruce Wayne" },
        superman: { nombre: "Clark Kent"}
    }
}

const { heroes: {batman} } = dc
// extremely convoluted way to do:
// const batman = dc.heroes.batman

