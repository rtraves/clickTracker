# clickTracker
Simple click/impression tracker MVP obviously a WIP

Accepts the following over HTTP:<br>
  POST /analytics?timestamp={millis_since_epoch}&user={user_id}&event={click|impression}<br>
  GET /analytics?timestamp={millis_since_epoch}

and returns a 204 <br>

GET returns the following information for the hour (GMT):<br>

unique_users,{number_of_unique_usernames}<br>
clicks,{number_of_clicks}<br>
impressions,{number_of_impressions}<br>

TODO: 
Figure out GET path
