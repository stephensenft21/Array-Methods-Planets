var el = document.getElementById("planets"); 
var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];





planets.forEach(element => {
    console.log(element)


});

const planetMap = planets.map(planets => planets.charAt(0).toUpperCase() + planets.substr(1))
console.log(planetMap)

const planetFilter = planets.filter(planet => planet.includes("e"))
console.log(planetFilter)






var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];



let total = words.reduce(function(sum, item){
    return sum + item;

  });
  total = total.replace(" ", "  ");

console.log(total)

//solution found on stack --

// const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
// days.map(day => day.charAt(0).toUpperCase() + day.substr(1));
// console.log(day);