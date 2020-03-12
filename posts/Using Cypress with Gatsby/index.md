---
date: '2020-03-12T00:00:00.000Z'
tags: testing, gatsby, cypress, beerjs
title: Testing Gatsby
type: tutorial
---

## Part 3 E2E with Cypress
Yes you read that right: Part 3.  I ironically started with E2E because I am giving a lightning talk about it.  In my experience, E2E tests are the last type of test you should incorporate into a finished feature or whatevs.  E2E tests are the types of tests that I use to make sure that a feature I have built keeps working as intended.  Test are use tests, work flow tests,  all encompassing (if you want them to be) flows through the app.  You would not do these  They can be as detailed or high level as desired.  I have written E2E tests that make sure the correct components load when a certain route is hit and I have written ones that “populate” my database.  I truly do not think there is a right or wrong way here.   If you have super complex tests you now have to maintain super complex tests.  Maintain means fix them when someone else breaks them.

> ProTip: Testing in general is more important than getting some lofty percentage of coverage… barf!

I have always **HATED** e2e testing.  It was such a pain to write; thanks protractor!  They always broke.  They just always were more effort than they were worth.  So for me to endorse a technology must mean either I have been replaced by an alien clone, been brainwashed, or found something super user friendly.  Psssst… its number 3 but don’t tell anyone.

### [Cypress.io](https://www.cypress.io/)

**What makes Cypress cool**

* Cypress does not use Selenium… enough said
* Cypress focuses on doing end-to-end testing REALLY well
* Cypress works on any front-end framework or website
* Cypress tests are only written in JavaScript
* Cypress is all in one
* Cypress is pretty quick
* Cypress can create screen shots and videos of the entire experience
* Its Open Source

**My favorite part**

The optional GUI mode that Cypress provides is ridiculous.  It allows you to actually travel through each step of your tests.  Each step is an actual browser that you can use your console to do… (dramatic pause) whatever you want.

**My second favorite part**

Cypress supports A11y testing.  Cypress has a plugin to integrate the `axe-core` checks into your project.  Imagine a world where A11y failures tank your CI…  Not sure where I land on that but as a responsible engineer we need to be aware of where our applications are failing our fellow human beings.

#### Setup

```bash
npm install cypress
```

That was easy.

You may to make a single config file at your project root where you set a base URL.  You can also change the folder used to hold tests your.   This `integration` folder shows up in the next step. This is a great option as  you can hold on to a ton of examples while not impacting what the test suite runs.

```javascript
// cypress.json
{
  “baseUrl”: “http://localhost:8000/“,
  “integrationFolder”: “cypress/e2e”
}
```

#### Running tests

```bash
cypress open
```

That was easy too.  Super cool thing happens here.  When you first run this command your application is scaffolded out with all the folders and files you need and a ton of example tests that they provide running against their own website.

#### Writing Tests

Test writing feels like hanging out with an old friend.  It is very jQuery or D3 like: get, do,  check, do, whatevs.  I’ll show example tests in my presentation.  A great thing about the testing is its ALL JavaScript.  Which means when you find yourself being a little too wet (opposite of DRY) you can write a function to encapsulate actions needed or common validations.  For example I had a

### Browser Support

* [Canary](https://www.google.com/chrome/browser/canary.html)
* [Chrome](https://www.google.com/chrome/browser/desktop/index.html)
* [Chromium](https://www.chromium.org/Home)
* [Edge](https://www.microsoft.com/edge)
* [Edge Beta](https://www.microsoftedgeinsider.com/download)
* [Edge Canary](https://www.microsoftedgeinsider.com/download)
* [Edge Dev](https://www.microsoftedgeinsider.com/download)
* [Electron](https://electron.atom.io/)
* [Firefox](https://www.mozilla.org/firefox/)  (Beta support)
* [Firefox Developer Edition](https://www.mozilla.org/firefox/developer/)  (Beta support)
* [Firefox Nightly](https://www.mozilla.org/firefox/nightly/)  (Beta support)

Of course the only browser not listed is the only one I have support… meh.  But its on the way at some random point in the future [Proposal: macOS Safari Support · Issue #6422 · cypress-io/cypress · GitHub](https://github.com/cypress-io/cypress/issues/6422).




## Part 1 Storybook and Snapshots
TODO

## Part 2 Unit with Jest
TODO
