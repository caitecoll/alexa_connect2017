# Building Alexa Skills with Glitch

The code in this project is meant to serve as a starting point for learning the Alexa developer platform, and we encourage you to build off of it to make something uniquely yours. We've included additional tutorials and resources at the bottom of this file, so be sure to check those out to learn more.

This example is a slimmed-down version of an existing Alexa skill called TechEmpathy. We've removed all API/database calls and simplified the file structure in order to use it as a teaching tool. If you're interested in seeing the TechEmpathy Alexa skill in action, you can add it through the Alexa mobile app beginning in mid-May. Additionally, the TechEmpathy skill also has a companion iOS app, and you can download it now to add your own voice to our efforts!

Before getting started, be sure you have an [Amazon Developer Account](https://developer.amazon.com)

## What is Alexa and how does it work?

Alexa is the voice command system developed by Amazon that runs on the Echo, Echo Dot and Tap devices. In short, it's a collection of front-end services that interface with another Amazon service, Lex. Lex accepts a speech recording, turns it into text and interprets it, then sends a response back to Alexa, which delivers it to the speaker.

Much of this interaction relies on Lex identifying which skill the speaker is trying to invoke and what they want that skill to do.

## What's a Skill?

The Alexa platform used within Echo devices is based around the concept of skills, which are essentially a collection of capabilities a user can interact with. Some skills are built-in, and others can be added by users through the Alexa companion web and mobile apps.

For instance, a new skill can give Alexa the ability to order a pizza, start a vacuum, request laundry service or tell you a joke. The possibilities are extensive, giving developers an open platform to think of new skill ideas.

## How do users interact with Skills?

When a user makes a request through Alexa, Lex needs to be able to identify two primary things: what skill the user is trying to invoke and what action they want that skill to take.

### Wake Word
In order to activate Alexa, a user must first wake the device using their chosen wake word of "Alexa," "Echo," or "Amazon."

### Invocation Name

The most basic way of invoking a skill is simply using its invocation name. In this tutorial, our skill's invocation name is TechEmpathy. Simply stating the invocation name without specifying any action is known as a ```Launch Request``` and can be called by saying things such as, ```Alexa, launch TechEmpathy.```

The skill will then respond, prompting the user to request a specific action, known as an intent.

We can also combine  invocation name for our skill is ```TechEmpathy```

### Intents

Each skill can have multiple intents, and we must specify them when creating our skill. For instance in this tutorial, our skill supports only one intent: the ability to request a random story. With that in mind, our intent schema would look like this:

```json
{
  "intents": [
    {
      "intent": "GetRandomStory",
      "slots": []
    }
  ]
}
```

In the example above, our "slots" array is empty, meaning that this intent does not need or expect additional information from the user in order to complete the request. However, maybe the next version of our app could support a second request that allows users to hear stories from their city. In that case, our intent schema might look something like this:

```json
{
  "intents": [
    {
      "intent": "GetRandomStory",
      "slots": []
    },
    {
      "intent": "GetCityStory",
      "slots": [
        {
          "name": "City",
          "type": "AMAZON.US_CITY"
        }
      ]
    }
  ]
}
```

### Utterances

There are multiple phrases, known as ```utterances```, that be used to invoke a specific intent. For instance "Tell me a story" or "Play a story" are both intended to invoke the same action, but are phrased slightly differently. While Lex will attempt to handle some variance in speech and interpret a user's meaning, it benefits us to plan for as many phrases as possible.

When entering our example utterances in the Alexa developer portal, we'll need to specify bpth the utterance and the intent it is meant invoke:

``` text
GetRandomStory tell me a story
GetRandomStory play a story
GetRandomStory get a story

GetCityStory tell me a story from {City}
GetCityStory play a story from {City}
GetCityStory get a story from {City}
```

## Open-Source Modules

This project relies upon a couple of noteworthy, open source Node modules that are worth mentioning:

 * #### [Alexa-App](https://github.com/matt-kruse/alexa-app)

    Alexa-App parses the JSON requests we receive from Amazon and then builds our JSON responses. It also auto-generates the intent schema and sample utterances we'll use in our skill. In short, it takes care of some of the more mundane tasks and lets us focus on the fun part.

 * #### [Alexa-App-Server](https://github.com/matt-kruse/alexa-app-server/)
    Part of the same project as Alexa-App, the Alexa-App-Server provides a web-server that we can use to host our files. You can host multiple skills on one Alexa-App-Server project, simply creating a new folder for each skill inside 'examples/apps.' One very helpful feature of this module is its built-in Alexa simulator. This allows us test our skills with a browser before linking to the Alexa Skills platform, which is very useful for debugging.

## Get Started

* #### 1) Remix the project

* #### 2) Click 'Show'

* #### 3) Make your changes

## Link your Skill

To make your skill accessible to an Alexa device, you'll need to link it using the Amazon Developer platform.

* #### 1) Remix the project

* #### 2) Click 'Show'

* #### 3) Make your changes

## Your Skill in Action

Here are some ways to test it out
* #### Echosim
    Blurb about Echosim
* #### Your Alexa Device
    Blurb about testing on your device

## Other Tutorials Worth Exploring

* [Gomix Alexa Airport Skill](https://gomix.com/#!/project/alexa-skill)

* [Gomix Star Wars Wiki Skill](https://gomix.com/#!/project/chewy)

* [Amazon Space Geek Fact Skill using Alexa SDK and AWS Lambda](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/content/fact-skill-1)

* [Alexa Trivia Skill using AWS Lambda](https://developer.amazon.com/blogs/post/TxDJWS16KUPVKO/new-alexa-skills-kit-template-build-a-trivia-skill-in-under-an-hour)