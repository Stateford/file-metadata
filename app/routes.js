// app/rouites.js

// function for importing routes
module.exports = function(app) {

    app.get('/', function(req, res) {

    });

    app.post('/upload', upload.single('avatar'), function(req, res, next) {
        
    });
};
