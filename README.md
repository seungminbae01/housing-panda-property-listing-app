# Housing Panda

A backend prototype for a HousingPanda type application

## What it does

- Submit listings with title, description, rent, address, rooms, and contact info
- Browse all listings on a simple display page
- Store everything in an SQL database

## Setup

1. Clone this repo
git clone https://github.com/seungminbae01/housing-panda-property-listing-app.git
cd housing-panda-property-listing-app

2. Install dependencies
npm install

3. Set up MySQL
- Create a database called `property_listings`
- Update username/password in `config/database.js` 

4. Start the app
npm start

5. Open in browser
- Add listings: http://localhost:3000/
- View listings: http://localhost:3000/listings.html

## Built with

- Node.js & Express
- MySQL with Sequelize
- Plain HTML, CSS, JavaScript

## Structure

- `app.js` - Main server file
- `config/database.js` - Database connection
- `models/listing.js` - Database model
- `routes/listings.js` - API endpoints
- `public/` - HTML pages and frontend styling