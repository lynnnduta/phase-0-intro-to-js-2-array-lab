// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat () {
 cats.length = 0;

  cats.push( "Ralph");
}
function destructivelyPrependCat () {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat () {
  cats.pop("Garfield");
}

function destructivelyRemoveFirstCat () {
  cats.shift("Milo");
}

function appendCat (Broom) {
  return [...cats, name];
}

function prependCat (Arnold) {
  return [name, ...cats];
}

function removeFirstCat () {
  return cats.slice(1);
}

function removeLastCat () {
  return cats.slice(0, cats.length - 1);
}