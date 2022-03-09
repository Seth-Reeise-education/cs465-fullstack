const async = require('hbs/lib/async');
const mongoose = require('mongoose');
// bring in data model of trips
const model = mongoose.model('trips');

// Get: /trips - list all the trips
const tripsList = async (req, res) => {
    model
        .find({})
        .exec((err, trips) => {
            if (!trips) {
                return res
                    .status(404)
                    .json({"message" : "trip not found"});
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(trips);
            }
        });
};

// Get: /trips/:tripcode - get one trip by code
const tripsFindCode = async (req, res) => {
    model
        .find({'code' : req.params.tripCode})
        .exec((err, trip) => {
            if (!trip) {
                return res
                    .status(404)
                    .json({"message" : "trip not found"});
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(trip);
            }
        });
};

module.exports = {
    tripsList,
    tripsFindCode
}