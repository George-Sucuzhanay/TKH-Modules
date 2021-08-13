"use strict";

var _paint, _car, _mutatorMap, _tennis, _team, _mutatorMap2, _penguin, _animal, _mutatorMap3;

function _defineEnumerableProperties(obj, descs) { for (var key in descs) { var desc = descs[key]; desc.configurable = desc.enumerable = true; if ("value" in desc) desc.writable = true; Object.defineProperty(obj, key, desc); } if (Object.getOwnPropertySymbols) { var objectSymbols = Object.getOwnPropertySymbols(descs); for (var i = 0; i < objectSymbols.length; i++) { var sym = objectSymbols[i]; var desc = descs[sym]; desc.configurable = desc.enumerable = true; if ("value" in desc) desc.writable = true; Object.defineProperty(obj, sym, desc); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Create 3 objects: Car, Team(sports) and animal
// All three should have a min of 4 attributes, a getter function, a setter function, and an action function.
var car = (_car = {
  model: "Tesla",
  year: 2021,

  set yr(yr) {
    this.year = yr;
  },

  version: "dual motor all-wheel drive",
  paint: "solid black"
}, _paint = "paint", _mutatorMap = {}, _mutatorMap[_paint] = _mutatorMap[_paint] || {}, _mutatorMap[_paint].get = function () {
  return this.paint;
}, _defineProperty(_car, "price", function price() {
  alert("Wow, at least 100k!");
}), _defineEnumerableProperties(_car, _mutatorMap), _car);
car.paint;
car.yr;
var team = (_team = {
  soccer: "Manchester United F.C.",
  baseball: "New York Yankees",

  set bl(bl) {
    this.baseball = bl;
  },

  basketball: "Los Angeles Lakers",
  tennis: "Springfield Lasers"
}, _tennis = "tennis", _mutatorMap2 = {}, _mutatorMap2[_tennis] = _mutatorMap2[_tennis] || {}, _mutatorMap2[_tennis].get = function () {
  return this.tennis;
}, _defineProperty(_team, "volleyball", function volleyball() {
  alert("Volleyball teams are based on country origin.");
}), _defineEnumerableProperties(_team, _mutatorMap2), _team);
team.bl;
team.tennis;
var animal = (_animal = {
  alligator: "Found in slow-moving river and lakes.",
  chicken: "Found in farms and backyards due to domesticiation.",

  set ck(ck) {
    this.chicken = ck;
  },

  duck: "Found in wetlands, marshes, ponds and rivers.",
  penguin: "Found in oceans and coasts"
}, _penguin = "penguin", _mutatorMap3 = {}, _mutatorMap3[_penguin] = _mutatorMap3[_penguin] || {}, _mutatorMap3[_penguin].get = function () {
  return this.penguin;
}, _defineProperty(_animal, "jaguar", function jaguar() {
  alert("ROOOAAAAAAARRRRRRRRRR!!!!!!");
}), _defineEnumerableProperties(_animal, _mutatorMap3), _animal);
animal.ck;
animal.penguin;