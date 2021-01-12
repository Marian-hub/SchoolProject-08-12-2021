# SchoolProject-08-12-2021
Exercise for final year exam.<br/>
# Technologies Used 
For this project I'm using.<br/>
-nodejs for the backend<br/>
-React for the frontend <br/>
-since it's not specified the type of database I choose mongodb for the semplicity and reliability of the database </br>
<br/>
( 
    I would have liked to use Deno.js  but I didn't have eough time to implement it :( 

) </br>

# Project Requests 
---------------------------------------------------------

# Api Routes
---------------------------------------------------------
TICKET<br/>
GET  "/getTicket" get the ticked with the specified title</br>
GET  "/getAllTickets" get all the tickets of the user </br>
POST "/createTicket" create a ticket if the role of the user is technician<br/>
POST "/updateTicket" update ticketState and convalidatedByClient<br/>
POST "/addComment" given the title of the ticket push comments <br/>
    
AUTHENTIFICATION<br/>
POST "/login" login with a name and adds the jwt token as cookies<br/> 
POST "/register" create a user with a name and a role<br/>

