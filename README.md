# SvelteKit skeleteon

A simple SvelteKit skeleton with Tailwind CSS and daisyUI.

## Requirements

- [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)

## Instructions

### Step 1: Create a new project folder

Create the new site folder where ever you want on your computer and `cd` into it.

### Step 2: Initialize a new Git repository

Instead of cloning this repository, create an empty one locally.

```
git init
```

Then pull this repository into your newly created one.

```
git pull git@github.com:perragnar/sveltekit-skeleton.git
```

### Step 3: Install the Node packages

All the required packages needs to be installed.

```
npm install
```

### Step 4: ENV

Rename the `.envexample` file to `.env`.

### Step 5: Build and serve

In the package.json file there are two scripts defined. One for running a dev server with browser sync, and the other is to build the site for deployment.

To run the develop server:

```
npm run dev
```

To run the develop server and host it on the local network:

```
npm run host
```

To build the site for deployment:

```
npm run build
```

**Happy hacking!**
