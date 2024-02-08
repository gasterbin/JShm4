"use strict";

function Country(title, capital, population, area) {
  this.title = title;
  this.capital = capital;
  this.population = population;
  this.area = area;
  this.showCountry = function () {
    return `Назва країни: ${this.title}, Столиця: ${this.capital}, Населення: ${this.population}, Площа: ${this.area} км2`;
  };
}

let france = new Country("France", "Paris", 67081000, 551695);
console.log(france.showCountry());

let spain = new Country("Spain", "Madrid", 46733038, 505990);
console.log(spain.showCountry());

function showAllProperties(Country) {
  for (let key in Country) {
    if (typeof Country[key] !== 'function') {
      console.log(`key ${key} = ${Country[key]}`);
    }
  }
}

console.log('============================================');
showAllProperties(france);
console.log('============================================');
showAllProperties(spain);
