<p align="center">
<img alt="Ecoleta" src="./web/src/assets/logo.svg" />
</p>

<h1 align="center">A technological and effective method for waste collection</h1>

<blockquote align="center">
♻️ A full stack application developed at Next Level Week promoted by <a href="http://github.com/rocketseat">Rocketseat</a>
</blockquote>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/LeuAlmeida/ecoleta?color=%2304D361">

  <a href="https://leunardo.dev">
    <img alt="Made by Léu Almeida" src="https://img.shields.io/badge/made%20by-Léu%20Almeida-%2304D361">
  </a>
</p>

<p align="center">
  <img src="./presentation.jpg" alt="Ecoleta Presentation">
</p>

## Introduction

[Ecoleta](https://github.com/LeuAlmeida/ecoleta) is a fictitious company and this repository belong to the business logic and is the basis of a general structure.

<p align="center">
  <a href="https://www.linkedin.com/posts/leonardoalmeida99_frontend-backend-javascript-activity-6676495350372556800-3v9q">
    <img src="./presentation-video.jpg" alt="Ecoleta Presentation">
  </a>
</p>

## :electric_plug: Prerequisites

- [Node.js LTS (>= 12.x)](https://nodejs.org/)
- [Yarn (>= 1.21)](https://yarnpkg.com/) or [NPM (>= 6.9)](https://www.npmjs.com/)

## :closed_lock_with_key: API Instructions

First get all the requirements installed on your system.

### Getting started the API Restful backend

Make a clone from the repo and install the dependencies

```shell

# After clone this repo, enter in the API folder
$ cd backend

# Install all dependencies using Yarn
$ yarn

# Run the migrations and seeds
$ yarn knex:migrate && yarn knex:seed

# Run the development server
$ yarn dev

# Case the output appears like this, is all ok
yarn run v1.21.1
$ ts-node-dev src/server.ts

# The backend will run on port 3333
# https://localhost:3333
```

## :computer: Frontend Instructions

### Getting started the web application

```shell
# After clone this repo, enter in the Web folder
$ cd web

# Install all dependencies using Yarn
$ yarn

# Run the project
$ yarn start

# IMPORTANT!!!
# Certify yourself that the backend is running on http://localhost:3333
```

## :iphone: Mobile Instructions

### Getting started the mobile application (app)

```shell
# After clone this repo, enter in the folder
$ cd mobile

# Install all dependencies using Yarn
$ yarn

# Run using Expo
$ yarn start

# Scan using your device and certify that you are using
# the correct Base URL in the src/services/api.ts file
```

## :copyright: License

MIT License.

See [LICENSE](LICENSE) for details.

<hr/>

<h3 align="center">
<a href="http://linkedin.com/in/leonardoalmeida99">Connect me in LinkedIn</a> | <a href="http://behance.net/almeida99">See my Behance</a> | <a href="https://leunardo.dev">Click here to go to my CV</a>
</h3>

<hr />

<p align="center">
<img alt="Your contribution are welcome :)" width="100%" src="./footer.png" />
</p>
