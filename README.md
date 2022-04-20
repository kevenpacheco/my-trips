# MY TRIPS

![Badge](https://img.shields.io/github/issues/kevenpacheco/my-trips)
![Badge](https://img.shields.io/github/forks/kevenpacheco/my-trips)
![Badge](	https://img.shields.io/github/stars/kevenpacheco/my-trips)

<p align="center">:rocket: Introducing and describing the cities of the world I visited! :rocket:</p>

<h4 align="center"> 
	:construction: Under construction... :construction:
</h4>

## Summary
* [Title](#my-trips)
* [Features](#features)
* [Demo](#demo)
* [Prerequisites](#prerequisites)
* [Start the project](#start-the-project)
* [Technologies](#technologies)
* [Services used](#services-used)

## Features
- [x] Get cities from GraphCMS and display on map
- [x] Generate static pages dynamically
- [x] Configure google analytics
- [x] Dynamically generate sitemap

## Demo
![Demo](/public/github/gif/my-trips.gif)

## Prerequisites
Before starting, you will need to have the following tools installed on your machine:
- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/). 
- [VSCode](https://code.visualstudio.com/) - Or other preferably

## Start the project
Clone this repository
```bash
git clone https://github.com/kevenpacheco/my-trips.git
```
Create the `.env` file and add the following variables:
```bash
GRAPHQL_HOST
GRAPHQL_TOKEN
NEXT_PUBLIC_MAPBOX_API_KEY
NEXT_PUBLIC_MAPBOX_USERID
NEXT_PUBLIC_MAPBOX_STYLEID
NEXT_PUBLIC_GA_TRACKING
```
Install the dependencies
```bash
npm install
```
Run the application in development mode
```bash
npm run start
```

## Technologies
- [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [Typescript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [GraphQL](https://graphql.org/)
 
## Services used
- GraphCMS (To store the data)
- GraphQL Code Generator (To type the data coming from GraphCMS)
- Leaflet (To generate the map)
- MapBox (To style the map)
