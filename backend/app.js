const
    express = require('express'),
    routes = require('./src/routes/index'),
    cookieParser  = require('cookie-parser'),
    cors = require('cors'),
    app = express();

require('./src/db/connection').connectDB
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:4000",
    optionsSuccessStatus:200
}))
app.use(routes)
app.listen(4000||process.env.PORT,(err)=>{err})
