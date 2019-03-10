(function () {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
//Array of names
for (var i = 0; i < names.length; i++) {
//looping of array
  var firstLetter = names[i].charAt(0).toLowerCase();
//function to be performed in loop
  if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}

})();
