## Tools

In this project we are using mono repo using [TURBO REPO](https://turbo.build/) in order to have Nest and React running in the same server.

## Dependencies Installation

Install packages: Go to root folder and install packages.

```bash
$ npm install
```


## Install new packages
Installing new packages for React
```bash
$ npm install —workspace client {your package}
```

Installing new packages for Nest
```bash
$ npm install —workspace api {your package}
```

## Run the app

```bash
$ npm run dev
```

When the app is running should be using these URL:

Client: <http://localhost:5173/>

API: <http://localhost:3000/>

## Running Tests
Running Test for the Nest API
```bash
$ npm run test —workspace api
```

Running Test for React
```bash
$ npm run test —workspace client
```
