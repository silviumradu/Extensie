function analyzing (text) {
    var natural = require('natural');
    var tokenizer = new natural.WordTokenizer();
    var Analyzer = natural.SentimentAnalyzer;
    var stemmer = natural.PorterStemmer;
    var analyzer = new Analyzer("English", stemmer, "afinn");
    var a = tokenizer.tokenize(text);
    console.log(a);
    console.log(analyzer.getSentiment(a));
}

module.exports = analyzing;