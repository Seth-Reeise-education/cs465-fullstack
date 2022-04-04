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

const tripsAddTrip = async (req, res) => {
    model
        .create({
            code:req.body.code,
            name:req.body.name,
            length:req.body.length,
            start:req.body.start,
            resort:req.body.resort,
            perPersonCost:req.body.perPersonCost,
            image:req.body.image,
            description:req.body.description
        },
        (err, trip) => {
            if (err) {
                // console.log(err);
                return res
                    .status(400) // bad request, invalid content
                    .json(err)
            } else {
                return res
                    .status(201) // created
                    .json(trip);
            }
        });
}

const tripsUpdateTrip = async (req, res) => {
    console.log(req.body);
    model
        .findOneAndUpdate({ 'code': req.params.tripCode }, {
            code:req.body.code,
            name:req.body.name,
            length:req.body.length,
            start:req.body.start,
            resort:req.body.resort,
            perPersonCost:req.body.perPersonCost,
            image:req.body.image,
            description:req.body.description
        }, { new: true })
        .then(trip => {
            if (!trip) {
                return res
                    .status(404)
                    .send({
                        message: "Trip not found with code " + req.params.tripCode
                    });
            }
            res.send(trip);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res
                    .status(404)
                    .send({
                        message: "Trip not found with code " + req.params.tripCode
                    });
            }
            return res
                .status(500) // server error
                .json(err);
        });
}

module.exports = {
    tripsList,
    tripsFindCode,
    tripsAddTrip,
    tripsUpdateTrip
}