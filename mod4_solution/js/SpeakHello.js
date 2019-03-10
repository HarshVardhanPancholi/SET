//IIFE
(function(window){
	var helloSpeaker={};
    helloSpeaker.speak=function speak(name) {
       console.log(speakWord + " " + name);
      }
	window.helloSpeaker=helloSpeaker;    //Global scope
	var speakWord = "Hello";

  
})(window);
