## This will eventually be the contributing guide, for now we want it up front

## Purpose

One source of truth for all of the information that a CNCF Contributor would find useful. Additionally it will act as a reference point to other open source communities - we want to represent our "style" of open source, in a way that is consumable by others. 

We hope that you visit this site often.

## The Golden Path

We want to focus on the golden path first:

- The individual - skills you need to be an effective contributor
- The project - skills needed to manage projects, a different skillset
- The community - the group of groups, the larger governance structures like the TOC and TABs

_A healthy ecosystem will encourage the development of all three of these skills_. 

The site is intended to be read in this order by a new contributor. It is also intended to support you through your entire cloud native journey, we expect mentors and experienced individuals to also share advanced things. 

## Setup locally

To set up the development environment for this Docusaurus site, you can choose between two methods: using a devcontainer or running the site locally with the `docusaurus dev` command. Follow the steps below:

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS version 20 or above recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Install Dependencies
Before starting the application, install the required packages by running:
```bash
npm install
```

### Run application
There are two different options you can adopt to run this website locally:

#### Option 1: Using Devcontainer
If you are using a devcontainer, start the application with the following command:

```bash
npm run docusaurus start -- --host 0.0.0.0 --port 3000 --poll 10000
```

This will start the development server and make it accessible on `http://localhost:3000`.

#### Option 2: Running Locally
To run the site locally, use the following command:

```bash
npm run docus:start
```

This will start the development server on the default port, typically `http://localhost:3000`.


## ChillOps

Feel free to start diving in with PRs, we want to remain opinionated on this golden path for now, and then add branches and side quests after we've shipped more meat. We want people to feel good when they read this site because they found something useful, so feel free to file issues with your ideas! 