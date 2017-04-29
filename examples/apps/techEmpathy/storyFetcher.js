'use strict';

function StoryFetcher() {}

// @TODO: Replace these strings with actual stories
StoryFetcher.prototype.stories = [
    'This is the first story about inclusion',
    'This is the first story about exclusion',
    'This is the second story about inclusion',
    'This is the second story about exclusion',
    'This is the third story about inclusion',
    'This is the third story about exclusion',
    'This is the fourth story about inclusion',
    'This is the fourth story about exclusion',
];

StoryFetcher.prototype.requestStory = function() {
  return this.getStory();
};

StoryFetcher.prototype.getStory = function() {
  var storyArray = this.stories;
  var storyIndex = Math.floor(Math.random() * storyArray.length);
  var randomStory = storyArray[storyIndex];
  return randomStory;
};

module.exports = StoryFetcher;
