const  http = require('http');

const server = http.createServer((req, res) => {
    if (req.url=== 'home.html/') {
        res.write('Welcome!');
    }
    res.end();
});

server.listen(8080);
console.log('The http server is running on port 8080');


app.get('/home', function(req, res) {
    res.render('home.html')
});