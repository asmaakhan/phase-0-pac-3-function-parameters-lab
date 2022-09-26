function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
  }

  function introductionWithLanguage(name, language) {
    let name = "Aki";
    let language = "Ember.js";
    console.log ('Hi, my name is ${name} and I am learning to program in ${language}.');
  }

function introductionWithLanguage([name], [language] = "Javascript") {
    console.log('Hi, my name is ${[name]} and I am learning to program in ${[language]}.');
   
}