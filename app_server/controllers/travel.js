// fs stands for file system
// this allows you to access the files on the web server
// const fs = require('fs');

// read file sync returns a string
// using json parse method to return an object instead
// const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
}

// render travel list
const renderTravelList = (req, res, responseBody) => {
    let message = null;
    let pageTitle = process.env.npm_package_description + ' - Travel';

    if (!(responseBody instanceof Array)) {
        message = 'API lookup error';
        responseBody = [];
    } else {
        if (!responseBody.length) {
            message = "No trips exist in our database!";
        }
    }
    res.render('travel',
    {
        title: pageTitle,
        trips: responseBody,
        message
    });
}

// Get travel list view
const travelList = (req, res) => {
    const path = '/api/trips';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {},
    };

    console.info('>> travelController.travelList calling ' + requestOptions.url);

    request(
        requestOptions,
        (err, {statusCode}, body) => {
            if (err) {
                console.error(err);
            }
            renderTravelList(req, res, body);
        }
    );
};

// render trip details
const renderTripDetails = (req, res, responseBody) => {
    let message = null;
    let pageTitle = 'Trip Details';


    console.info("render method entered")
    console.info(responseBody)

    if (!(responseBody instanceof Array)) {
        message = 'API lookup error';
        responseBody = [];
    } else {
        if (!responseBody.length) {
            message = "No trips exist in our database!";
        }
    }
    res.render('trip',
    {
        title: pageTitle,
        details: responseBody,
        message
    });
}

// Get trip details
const tripDetails = (req, res) => {
    let code = req.params.code;
    // let code = codeArray[codeArray.length - 1];

    const path = '/api/trips/' + code

    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {}
    };

    console.info('>> travelController.tripDetails calling ' + requestOptions.url);

    request(
        requestOptions,
        (err, {statusCode}, body) => {
            if (err) {
                console.error(err);
            }
            renderTripDetails(req, res, body);
        }
    );
};


module.exports = {
    travelList,
    renderTravelList,
    tripDetails,
    renderTripDetails
};