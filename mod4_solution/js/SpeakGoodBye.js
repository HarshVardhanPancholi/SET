//IIFE
(function(window){
   var byeSpeaker={};
   byeSpeaker.speak=function speak(name) {
       console.log(speakWord + " " + name);
      }
	window.byeSpeaker=byeSpeaker;
   var speakWord = "Good Bye";   //Global scope
   function speak(name) {
     console.log(speakWord + " " + name);
}})(window);
