const express = require('express');
const app = express();
const http = require('http');
const port = process.env.PORT || 3100;
const server = http.createServer(app);

var eventArr = [];



app.get("/analytics", function(req, res) {
    var date = new Date(req.query.timestamp * 1000);
    var hour = date.getHours();
    var newDate = (date.getUTCDate() + '/' + (date.getUTCMonth() + 1) + '/' + date.getUTCFullYear());

    

    
    res.json(["Test1","Test2","Test3"]);
});

app.post("/analytics", function(req, res) {
    var date = new Date(req.query.timestamp * 1000);
    var newDate = (date.getUTCDate() + '/' + (date.getUTCMonth() + 1) + '/' + date.getUTCFullYear())
    eventObj = {
        timestamp: newDate,
        hour: date.getUTCHours(),
        user: req.query.user,
        event: req.query.event

    };

    eventArr.push(eventObj);

    console.log(eventArr);

    res.send("OK");
});

server.listen(port, () => {
    console.log("Server is running...")
});



//example curl -X POST "http://localhost:3100/analytics?timestamp=1488433206&user=alice&event=click"

/* GET should return the below for the current hour
{
  "clicks": x,
  "impressions": y 
  "unique_users": z
}
*/ 