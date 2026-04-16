## This will eventually be the contributing guide, for now we want it up front
# Contribute Site

## Project Overview

Contribute Site is a documentation hub for cloud native contributors. It
provides practical guidance for individuals, project maintainers, and community
leaders so they can collaborate effectively and grow sustainable open source
ecosystems.

## Purpose

One source of truth for all of the information that a CNCF Contributor would find useful. Additionally it will act as a reference point to other open source communities - we want to represent our "style" of open source, in a way that is consumable by others. 
The purpose of this repository is to maintain one source of truth for
contributor knowledge, project operations, and community governance practices
across the cloud native landscape.

## Key Concepts

We hope that you visit this site often.
### Individual

## The Golden Path
Develop the skills needed to become an effective contributor, including
communication, collaboration, and continuous learning.

We want to focus on the golden path first:
### Project

- The individual - skills you need to be an effective contributor
- The project - skills needed to manage projects, a different skillset
- The community - the group of groups, the larger governance structures like the TOC and TABs
Support maintainers and project teams with guidance on project lifecycle,
governance, and healthy contributor workflows.

_A healthy ecosystem will encourage the development of all three of these skills_. 
### Community

The site is intended to be read in this order by a new contributor. It is also intended to support you through your entire cloud native journey, we expect mentors and experienced individuals to also share advanced things. 
Strengthen the wider ecosystem by documenting shared standards, leadership
structures, and cross-project collaboration models.

## Setup locally
## Tech Stack

To set up the development environment for this Docusaurus site, you can choose between two methods: using a devcontainer or running the site locally with the `docusaurus dev` command. Follow the steps below:
- [Docusaurus](https://docusaurus.io/) for static site generation
- [Node.js](https://nodejs.org/) (LTS 20+ recommended)
- [npm](https://www.npmjs.com/) for dependency and script management

## Setup Locally

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version 20 or above recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Install Dependencies

Before starting the application, install the required packages by running:
- Node.js (LTS 20 or above recommended)
- npm

### Install dependencies

```bash
npm install
```

### Run application

There are two different options you can adopt to run this website locally:
### Run development server

> Note: `npm start` and `npm run build` automatically sync TechDocs content into
> `docs/techdocs/` if it does not exist yet. The first run may take longer
> because it clones `https://github.com/cncf/techdocs.git`.
>
> Source of truth: [@cncf/techdocs](https://github.com/cncf/techdocs). Treat
> local `docs/techdocs/` content in this repository as synced/generated.

#### Option 1: Using Devcontainer
If you are using a devcontainer, start the application with the following command:
#### Option 1: Devcontainer

```bash
npm start -- --host 0.0.0.0 --port 3000 --poll 10000
```

This will start the development server and make it accessible on
http://localhost:3000.

#### Option 2: Running Locally

To run the site locally, use the following command:
#### Option 2: Local environment

```bash
npm start
```

This will start the development server on the default port, typically `http://localhost:3000`.
The site is typically available at `http://localhost:3000`.

## Contributing

1. Create a branch from `main`.
2. Make your documentation or site updates.
3. Run formatting checks for README changes:

   ```bash
   npx prettier --write README.md
   npx prettier --check README.md
   ```

4. Commit your changes with a clear message.
5. Open a pull request summarizing what changed and how it was validated.

## ChillOps
## Author

Feel free to start diving in with PRs, we want to remain opinionated on this golden path for now, and then add branches and side quests after we've shipped more meat. We want people to feel good when they read this site because they found something useful, so feel free to file issues with your ideas! 
Maintained by the CNCF contributor community.
