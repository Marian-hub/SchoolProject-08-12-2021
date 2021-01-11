
const
    express = require('express'),
    routes = require('./src/routes/index'),
    app = express();

app.use(express.json())
require('./src/db/connection').connectDB
app.use(routes)
app.listen(3000||process.env.PORT,(err)=>{err})
