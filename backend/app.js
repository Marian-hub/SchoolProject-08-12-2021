const
    express = require('express'),
    routes = require('./src/routes/index'),
    cookieParser  = require('cookie-parser'),
    app = express();

require('./src/db/connection').connectDB
app.use(express.json())
app.use(cookieParser())
app.use(routes)
app.listen(4000||process.env.PORT,(err)=>{err})
