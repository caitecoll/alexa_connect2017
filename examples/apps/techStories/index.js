'use strict';

var Alexa = require('alexa-app');
var app = new Alexa.app('techstories');
var StoryFetcher = require('./story_fetcher');

app.launch(function(request, response) {
    var prompt = 'Welcome to Tech Empathy. To hear a story, say, tell me a story.';
    response.say(prompt).reprompt(prompt).shouldEndSession(false);
});

app.intent('randomstory', {
    'utterances': [
        '{|tell|give|play} {|me} {|a|some} story',
        '{|tell|give|play} {|me} {|a|some} story about {-|StoryType}'
    ]},
    function(request, response) {
        var storyFetcher = new StoryFetcher();
        response.say(storyFetcher.requestStory());
    }
);

//modifcation to support custom utterances in utterance expansion string
console.log(app.utterances().replace(/\{\-\|/g, '{'));

module.exports = app;
