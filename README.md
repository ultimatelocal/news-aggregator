# news-aggregator

An Ember Application (es6) simple news aggregator that pulls data from (https://newsapi.org/) Rest API and serializes and stored to ember-data backend store.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd news-aggregator`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4020).

## Quick Tour:

### Technologies used:
* Ember.js
* REST API (https://newsapi.org/)
* Es6
* ember-cli-sass
* Bootstrap 4
* HTML and css programming

### Database Layer:
* All models are under `news-aggregator/app/models/`
* See serialization of (https://newsapi.org/) REST API to be a JSON specs compliant data on : `news-aggregator/app/serializers`

### Application Layer:
* Routings under `news-aggregator/app/router.js`
* Using pods MVC structure for hierarchical file structure
* View, Controller,Components and Helpers are under `news-aggregator/app/pods/..`

### SCSS FILES:
* All scss files colors and variables are under `news-aggregator/app/styles/..`
