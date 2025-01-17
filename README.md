<div align="center"> 
  
![image](https://user-images.githubusercontent.com/32544586/163651496-2589c0b0-4151-4941-9d90-4275eea5fd83.png)

A simple starter template for a **Vue3** + **Electron** TypeScript based application, including **ViteJS** and **Electron Builder**.

This fork adds ESLint, Prettier, and Tailwind3.

_Tabs are used this fork. That can easily be changed via config files and fixed by running `npm run format`_

</div>

## About

This template utilizes [ViteJS](https://vitejs.dev) for building and serving your (Vue powered) front-end process, it provides Hot Reloads (HMR) to make development fast and easy ⚡

Building the Electron (main) process is done with [Electron Builder](https://www.electron.build/), which makes your application easily distributable and supports cross-platform compilation 😎

## Getting started

Click the green **Use this template** button on top of the repository, and clone your own newly created repository.

**Or..**

Clone this repository: `git clone git@github.com:Deluze/electron-vue-template.git`

### Install dependencies ⏬

```bash
npm install
```

### Start developing ⚒️

```bash
npm run dev
```

## Getting Started

Change the window title in `src/renderer/index.html` file.

## Formatting

Use the following commands to run ESLint or Prettier.

The included VSCode `settings.json` file will format the source file on save.

```bash
npm run lint 		# Dry run of the Linter.
npm run lint:fix 	# Runs the Linter and fixes errors where able.
npm run prettier 	# Dry run of Prettier.
npm run prettier:fix	# Runs Prettier and fixes files in place.
npm run format 		# Runs both Linter and Prettier fixing issues where able.
```

## Additional Commands

```bash
npm run dev # starts application with hot reload
npm run build # builds application

# OR

npm run build:win # uses windows as build target
npm run build:mac # uses mac as build target
npm run build:linux # uses linux as build target
```

Optional configuration options can be found in the [Electron Builder CLI docs](https://www.electron.build/cli.html).

## Project Structure

```bash
- root
  - config/
    - vite.js # ViteJS configuration
    - electron-builder.json # Electron Builder configuration
  - scripts/ # all the scripts used to build or serve your application, change as you like.
  - src/
    - main/ # Main thread (Electron application source)
    - renderer/ # Renderer thread (VueJS application source)
```

## Using static files

If you have any files that you want to copy over to the app directory after installation, you will need to add those files in your `src/main/static` directory.

#### Referencing static files from your main process

```js
/* Assumes src/main/static/yourFile.txt exists */

const { app } = require('electron')
const FileSystem = require('fs')
const Path = require('path')

const path = Path.join(app.getAppPath(), 'static', 'yourFile.txt')
const contents = FileSystem.readFileSync(path)
```
