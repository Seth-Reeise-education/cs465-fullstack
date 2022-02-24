// Get travel page 
const travel = (req, res) => {
    // redner the travel page and add title
    res.render('travel', {title: "Travlr Getaways"});
};

module.exports = {
    travel
};