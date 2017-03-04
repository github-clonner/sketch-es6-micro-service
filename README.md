# sketch-es6-basic

[![Build Status](https://travis-ci.org/zzswang/sketch-es6-basic.svg?branch=master)](https://travis-ci.org/zzswang/sketch-es6-basic)

A simple boilerplate for es6 project, you can start your npm module from this.

Only with neccessary key features:
- eslint
- npm scripts
- babel
- mocha test and watch.


## Quick Start

Two ways to get start.

1. The simplest way, just kick start.
```
git clone git@github.com:zzswang/sketch-es6-basic.git MyApp
cd MyApp
rm -rf .git
```

2. Keep the ability of updating from this sketch repo.
```
git clone -o sketch -b master --single-branch \
      https://github.com/zzswang/sketch-es6-basic.git MyApp
cd MyApp
npm install
// connect to your own repository
git remote add origin your-app-repository
git push -u origin master
// update from sketch repository later
// do following steps on your develop branch
git fetch sketch master
git merge sketch/master
```


## scripts


Start development and watch file changing.
```
npm start
```

Run the test
```
npm test
```

Bump version based on semetic version and with git tag. Get more infomation on how to write the commit messages from [standard-version](https://github.com/conventional-changelog/standard-version).
```
npm run release
```

Publish to npmjs.org after running complie automatically.
```
npm publish
```

Compile es6 code to es5.
```
npm compile
```



## Directory Layout

Before you start, take a moment to see how the project structure looks like:

```
├── README.md                   # Quick start document
├── dist/                       # The folder for compiled output
├── package.json                # package definition
├── src                         # all source code written for this app
└── .travis.yml                 # travis-ci
```
