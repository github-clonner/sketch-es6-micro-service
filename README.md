# sketch-es6-basic

[![Build Status](https://travis-ci.org/zzswang/sketch-es6-basic.svg?branch=master)](https://travis-ci.org/zzswang/sketch-es6-basic)

A simple boilerplate for es6 project, only with npm scripts, babel, mocha test and watch. You can start your npm module from this.


## Quick Start

```
git clone -o sketch -b master --single-branch \
      https://github.com/zzswang/sketch-es6-basic.git MyApp
cd MyApp
npm install

// connect to your own repository
git remote add origin your-app-repository
git push -u origin master
```

## scripts

```
npm start
```

Start development and watch file changing.


```
npm test
```

Run the test


```
npm run release
```

Bump version based on semetic version and with git tag. Get more infomation on how to write the commit messages from [standard-version](https://github.com/conventional-changelog/standard-version).


```
npm publish
```

Publish to npmjs.org after running complie automatically.

```
npm compile
```

Compile es6 code to es5.


## Directory Layout

Before you start, take a moment to see how the project structure looks like:

```
├── README.md                   # Quick start document
├── dist/                       # The folder for compiled output
├── package.json                # package definition
├── src                         # all source code written for this app
└── .travis.yml                 # travis-ci
```
