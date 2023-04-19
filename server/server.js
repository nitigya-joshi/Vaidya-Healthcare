const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const contactRoutes = require('./routes/apiRoutes');
const cookieParser = require('cookie-parser');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const cors = require('cors')
const port = 3000;
const app = express();
const path = require('path');
const morgan = require('morgan')
var fs = require('fs')

connectDB();
app.use(cors({ credentials: true, origin: 'http://localhost:3001' }))
app.use(cookieParser());
app.use(express.json({ limit: '8mb' }))

// let accessLogStream = fs.createWriteStream(path.join(__dirname, 'logs/access.log'), { time: '1h' }, { flags: 'a' })
app.use(morgan('tiny'))

app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Vaidya Healthcare API endpoints",
            version: "1.0.0",
        },
        servers: [
            {
                url: "http://localhost:3000/api",
            },
        ],
    },
    apis: ["./routes/*.js"],
    url: "http://localhost:3000/",
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.use('/api/users', userRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api', contactRoutes);

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

