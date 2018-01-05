function dwarfRollCall(dwarves) {
  var dwarfArray = []
  for (var i = 0; i < (dwarves.length / 2); i++) {
    dwarfArray.push(i+1 + ". " + dwarves[i] + " ")
  }
  return dwarfArray.join('')
}

function summonCaptainPlanet(planeteerCalls){
  var planeteerCaps = []
  for (var i = 0; i < planeteerCalls.length; i++) {
    planeteerCaps.push(planeteerCalls[i].toUpperCase + "!")
  }
  return planeteerCaps
}

function longPlaneteerCalls(words) {
  var i = 0
  while (i < words.length) {
    if (words[i].length > 4) {
      return true
}
    i++
  }
  return false
}

function findTheCheese (foods) {
  var i = 0
  do {
    if (foods[i] == 'cheddar' || foods[i] == 'gouda' || foods[i] == 'camembert' || foods[i] == 'swiss') {
      return foods[i];
}
      i++;
  }
  while (i < foods.length);
  return "no cheese!"
}

function wordsWithB(words) {{
  var i = 0
  var bNames = []
  do {
    if (words[i].startsWith("b") {
      bNames.push(words[i])
    }
    i++
  }
  while (i < words.length);
  return bNames
}
