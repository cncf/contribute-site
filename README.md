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
npm start -- --host 0.0.0.0 --port 3000 --poll 10000
```

This will start the development server and make it accessible on http://localhost:3000.

#### Option 2: Running Locally
To run the site locally, use the following command:

```bash
npm start
```

This will start the development server on the default port, typically
http://localhost:3000.


## ChillOps

Feel free to start diving in with PRs, we want to remain opinionated on this golden path for now, and then add branches and side quests after we've shipped more meat. We want people to feel good when they read this site because they found something useful, so feel free to file issues with your ideas!

## Automated Link Checking

This repository includes automated link checking using `htmltest`, aligned with the [@cncf/techdocs](https://github.com/cncf/techdocs) setup.

### Configuration

Link checking is configured in `.htmltest.yml`:
- **Tool**: htmltest from [@chalin's maintained fork](https://github.com/chalin/htmltest) with latest updates
- **Build orchestration**: Makefile (same as @cncf/techdocs)
- **Installation**: Built from source using Go for latest patches and improvements
- **Cache**: Maintains a reference cache to speed up subsequent checks
- **Skip patterns**: Social media sites to avoid rate limiting

### How it works

- **Schedule**: A GitHub Actions workflow runs every Monday at 9:00 UTC
- **Manual trigger**: You can also run it manually from the Actions tab
- **What it checks**: All links in the built site (build/ directory)
- **What it skips**: Social media links and localhost URLs

### When broken links are found

The workflow will:
1. Generate a detailed report with all broken links
2. Create or update a GitHub issue with the `broken-links` label
3. Upload detailed results as downloadable artifacts

### When all links are fixed

The workflow will automatically close any open broken-links issues.

### Running the check locally

You can check links locally with:
```bash
npm run check:links
```

This will build the site and run htmltest against it, just like the CI workflow.

**Note**: Running locally requires Go to be installed, as htmltest is built from source. If you don't have Go installed, you can install the htmltest binary directly from the [releases page](https://github.com/wjdp/htmltest/releases).
 