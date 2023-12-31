<h1 align="center">Discord-Bot-Chuck-Norris-Jokes</h1>
<table align="center">
  <tr>
    <td align="center" height="108" width="108">
        <img     src="https://freepngimg.com/thumb/chuck_norris/97549-chuck-norris-free-hd-image.png"
        width="60"
        height="60"
        />
        <br /><strong>Discord.js</strong>
    </td>
    <td align="center" height="108">
      <p align="center">A simple vanilla javascript Discord bot that generates random Chuck Norris jokes when called on using the rest API from https://github.com/chucknorris-io Responds to chat whenever someone types "chuck"
      </p>
     </td>
   </tr>
 </table>

# Installation and deployment instructions

## !!This bot does NOT respond to DMs, it must be in a server with you!!

### Get the bot 'shell' from Discord. It's free, and it takes 5 minutes
```sh
https://discord.com/developers/applications
```
### Install node.js
```sh
https://nodejs.org/en/
```
### Install git
```sh
https://git-scm.com/downloads
```
### Create a new folder and navigate to it in the terminal to set up git
```sh
git init
```
### Navigate to the new git folder in the terminal and clone this repository
```sh
https://github.com/Lane-G-Smith/Discord-Bot-Chuck-Norris-Jokes.git
```
### Navigate to the Discord-Bot-Chuck-Norris-Jokes folder and install dependencies
```sh
npm install
```
### Rename example.env to .env
### Place your secret Discord bot token from the first step into the .env file
```sh
TOKEN=your_unique_Discord_bot_token_here
```
### To host the bot locally, open the project in the terminal and run node
```sh
node chuck.js
```
### To host the bot locally and keep it running in the background indefinitely, install PM2
```sh
npm install pm2 -g
```
### Run your bot locally using pm2 https://pm2.keymetrics.io/
```sh
pm2 start chuck.js
```
### Congratulations, your bot should now be live & confirmation should be logged in the terminal. Use your personal link from the Discord developer portal to invite your bot to a Discord server
```sh
https://discord.com/developers/applications
```
