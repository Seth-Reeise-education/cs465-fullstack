// fs stands for file system
// this allows you to access the files on the web server
const fs = require('fs');

// read file sync returns a string
// using json parse method to return an object instead
const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

// Get travel page 
const travel = (req, res) => {
    // redner the travel page and add title
    pageTitle = process.env.npm_package_description + ' - Travel';
    // pageTitle = process.env.description + ' - Travel';
    // pass title and trips to hbs page
    res.render('travel', {title: pageTitle, trips});
};

module.exports = {
    travel
};