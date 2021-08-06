import MyDefault from "hello.js";

var natural = require('natural');
var tokenizer = new natural.WordTokenizer();
var a = tokenizer.tokenize("I'm so proud of you!");
console.log(a);
var Analyzer = natural.SentimentAnalyzer;
var stemmer = natural.PorterStemmer;
var analyzer = new Analyzer("English", stemmer, "afinn");

// getSentiment expects an array of strings
console.log(analyzer.getSentiment(a));
//node nlp.js
