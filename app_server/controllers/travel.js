// Get travel page 
const travel = (req, res) => {
    // redner the travel page and add title
    pageTitle = process.env.npm_package_description + ' - Travel';
    res.render('travel', {title: pageTitle});
};

module.exports = {
    travel
};