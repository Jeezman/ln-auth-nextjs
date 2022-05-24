# ln-auth-nextjs
An LNURL-auth and NextJS app that demonstrates anonymous authentication with LNURL

## Intro
This codebase demonstrates anonymous authentication via LNURL-Auth. A specification built on the **Lightning Network**

Technologies used

* NextJS
* NodeJS
* LND
* LNURL
* Socket.io
* Postgres

## Installation
Fork (optional) and clone repo

```
git clone https://github.com/jeezman/ln-auth-nextjs.git && cd ln-auth-nextjs
```

## Client app setup 
Once you have downloaded or cloned this repository, run `yarn install` in the client directory

Create a `.env` file updated with values in `.env.sample` file

```
cd client
      
yarn install
```

To display the client application run

```
yarn run dev
```
   
## Server setup
Once you have downloaded or cloned this repository, run `npm install`in the server directory.

```
cd server
      
npm install
```

Create a `.env` file updated with values in `.env.sample` file

Run the web server with the following command

```
npm run start
```

You should see the following output on your command line
```
Server Running here 👉 https://localhost:5002
```

# Blog Post
The blog article for this repo can be found on Medium
