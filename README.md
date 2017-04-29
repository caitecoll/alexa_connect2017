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
In order to activate Alexa, a user must first wake the device using their chosen wake word of "Alexa," "Echo," "Amazon," or, in a nod to Star Trek, "Computer."

### Invocation Name

The most basic way of invoking a skill is simply using its invocation name. In this tutorial, our skill's invocation name is TechStories. Simply stating the invocation name without specifying any action is known as a ```Launch Request``` and can be called by saying things such as, ```Alexa, launch TechStories.```

The skill will then respond, prompting the user to request a specific action, known as an intent.

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

In the example above, our "slots" array is empty, meaning that this intent does not need or expect additional information from the user in order to complete the request. However, maybe the next version of our app could support a second intent that allows users to hear stories from their city. In that case, our intent schema might look something like this:

```json
{
  "intents": [
    {
      "intent": "randomstory",
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

When entering our example utterances in the Alexa developer portal, we'll need to specify both the utterance and the intent it is meant invoke:

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
    To begin, click this project's name in the top left corner and slect 'Remix This' from the dropdown menu. This opens a new project with a unique url that you can customize to your liking.

* #### 2) Click 'Show Live'
    Confirm that your app server is running correctly by clicking 'Show Live' in the top left corner. If alexa-app-server is running correctly, you should see an html page that looks something like this:

* #### 3) Check out the code
    There are two major files that define our skill's functionality:
    * ```examples/apps/techstories/index.js```
    Here we use the alexa-app module to define our launch request and intent request and specify how Alexa should respond to each. You'll note that the utterances we've defined here look different than the examples above, and that's because we're taking advantage of alexa-app's utterance builder. Writing our utterances in this way helps account for all of the many combinations of words our users can say, and we'll see the output of that code in just a minute.

    * ```examples/apps/techstories/storyFetcher.js```
    Because this tutorial doesn't interface with an api or database, all of our stories are stored in one array inside storyFetcher.js. This module is called to provide a response to our RandomStory intent, selecting an index at random from the array and sending that string in the response to Alexa.

* #### 4) Check the output
    Now, let's check how things look. Click the "Show Live" button again and add ```/techstories``` to the end of your url. This interface (provided to us by alexa-app), does a few useful things:
    * **Schema**: You can see that the app has produced a JSON object representing our intent schema. We'll need to copy/paste that into the Alexa portal in just a moment.
    * **Utterances**: Alexa-app has also produced a list of several sample utterances from the one line of code we wrote in index.js. We'll also need this information for the Alexa portal
    * **Request/Response Simulator**: Test out your skill by selecting 'Intent Request' from the 'Type' dropdown menu and 'randomstory' from the 'Intent' dropdown. This shows the request our skill will receive from Alexa, and by clicking "Send Request" you'll get back a response from our skill, giving you a random story.

## Link your Skill

To make your skill accessible to an Alexa device, you'll need to link it using the [Amazon Developer Console](https://developer.amazon.com). Once you're logged in, select 'Alexa' from the top menu, then click 'Get Started' on the Alexa Skills Kit option. From there you'll see a list of you existing skills; click on 'Add a New Skill' in the top right corner.

* #### 1) Skill Information
    Select the 'Custom Interaction Model' option for 'Skill Type'. Give your app a name, say 'Tech Stories' and choose an invocation name - this is the name you say to Alexa to activate your skill, so 'Alexa ask InvocationName…'. Under Global Fields the Audio Player option should be set to 'No.' Click Save, then Next.

* #### 2) Interaction Model
    You need to specify your Intent Schema and Sample Utterances. You can either copy/paste these from the screen we saw when testing our request a moment ago, or you can get the information directly by visiting ```/techstories?schema``` and ```/techstories?utterances``` Because we do not have slots in our randomStory intent, skip this section. After entering the intent schema and utterances, click Save and Next.

* #### 3) Configuration
    Under Endpoint, select 'HTTPS', then 'North America' and add your project's publish URL with '/techstories' appended to it. This is the URL you get when clicking 'Show', and it'll have the format 'https://project-name.glitch.me'. So for this tutorial, it's 'https://alexa-connect2017.glitch.me/techstories'. Select 'no' for account linking and ignore the Device Permissions section.

* #### 4) SSL Certificate
    Select the option 'My development endpoint is a subdomain of a domain that has a wildcard certificate from a certificate authority' as Glitch handles this for us.

* #### 5-7) Test, Publishing Information and Privacy
    Make sure your skill has testing enabled under 'Test' and enter metadata about your app under 'Publishing Information'. For now, you can just enter basic info and come back and change it later when you're ready to properly publish your app. Say 'no' to the privacy questions and check your agreement to their terms. Then you can click 'Save' and your app should be ready to test (you don't want to submit it for certification at this stage - that's just for when your app is ready to go).

## Your Skill in Action

* #### Echosim
    You don't need an Echo device to test your skill! To get the impression of using an Amazon Echo, you can use [Echosim](https://echosim.io/welcome?next=%2F). Log in with your Amazon developer account, and the simulator will automatically have your skill enabled. Click and hold the mic button and give Alexa a test command. Say 'Ask {InvocationName} to tell me a story', and Alexa should respond with a random story.
* #### Your Echo
    If you have an Echo device already, ensure that it was set up using the same email account you used for your amazon developer account. If so, your skill is already available on your device. Test it out!

## Other Tutorials Worth Exploring

* [Glitch Alexa Airport Skill](https://gomix.com/#!/project/alexa-skill):
    This project also uses alexa-app and alexa-app-server and was the tool that introduced me to these two awesome modules. It interfaces with an API and has a similar file structure to this tutorial.

* [Gomix Star Wars Wiki Skill](https://gomix.com/#!/project/chewy)

* [Amazon Space Geek Fact Skill using Alexa SDK and AWS Lambda](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/content/fact-skill-1)

* [Alexa Trivia Skill using AWS Lambda](https://developer.amazon.com/blogs/post/TxDJWS16KUPVKO/new-alexa-skills-kit-template-build-a-trivia-skill-in-under-an-hour)
