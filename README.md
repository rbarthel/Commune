# Commune

## What it is

Commune is a fully featured web app, enabling people to host dinner parties and popup restaurants, while connecting them with food aficionados in search of a unique experience. Think AirBnB for your dinner table.

Guests can search available events by name, menu contents or location. They can see details about the event including location on a map. They can book a seat and pay using our Stripe integration. They can read reviews and post their own.

Hosts can create events and upload photos.

## Screenshots

![Main Page](https://github.com/rbarthel/Commune/blob/master/public/github-images/Screen%20Shot%202017-11-03%20at%2011.04.48%20AM.png?raw=true)
![Search](https://raw.githubusercontent.com/rbarthel/Commune/master/public/github-images/search.jpeg)
![Event Details](https://github.com/rbarthel/Commune/blob/master/public/github-images/event_details.jpeg?raw=true)
![Menu & Guestlist](https://github.com/rbarthel/Commune/blob/master/public/github-images/Screen%20Shot%202017-11-03%20at%2011.06.33%20AM.png?raw=true)
![Reviews](https://github.com/rbarthel/Commune/blob/master/public/github-images/Screen%20Shot%202017-11-03%20at%2011.11.25%20AM.png?raw=true)
![Profile](https://github.com/rbarthel/Commune/blob/master/public/github-images/profile.jpeg?raw=true)

## Getting Started

1. Create your own empty repo on GitHub
2. Clone this repository (do not fork)
  - Suggestion: When cloning, specify a different folder name that is relevant to your project
3. Remove the git remote: `git remote rm origin`
4. Add a remote for your origin: `git remote add origin <your github repo URL>`
5. Push to the new origin: `git push -u origin master`
6. Verify that the skeleton code now shows up in your repo on GitHub

7. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
8. Update the .env file with your correct local information
9. Install dependencies: `npm i`
10. Fix to binaries for sass: `npm rebuild node-sass`
11. Run migrations: `npm run knex migrate:latest`
  - Check the migrations folder to see what gets created in the DB
12. Run the seed: `npm run knex seed:run`
  - Check the seeds file to see what gets seeded in the DB
13. Run the server: `npm run local`
14. Visit `http://localhost:3000/`

## Environments

- Both development servers are required to run Commune
- `npm run dev:server` to run on localhost:3000
- In a separate terminal tab, `npm run dev:server` to run on localhost:3001

## Dependencies

- node 5.10.x or above
- npm 3.8.x or above
- @google/maps 0.4.5
- babel 6.x
- bcrypt 1.0.3
- bootstrap 4.x
- cookie-session 2.0.0-beta.3
- dotenv 4.0.0
- express 4.16.2
- google-map-react 0.25.0
- jquery 3.2.1
- knex 0.13.0
- react 15.6.1
- react-dom 15.6.1
- react-router-dom 4.2.2
- stripe 5.2.0
- webpack 3.5.5
