// Get homepage 
const index = (req, res) => {
    // redner the index page and add title
    res.render('index', {title: "Travlr Getaways"});
};

module.exports= {
    index
};

