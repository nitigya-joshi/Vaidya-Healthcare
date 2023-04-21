require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const contactRoutes = require('./routes/apiRoutes');
const cookieParser = require('cookie-parser');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const cors = require('cors')
const port = process.env.PORT || 3000;
const app = express();
const path = require('path');
const morgan = require('morgan')
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);
var fs = require('fs')

require('dotenv').config()

connectDB();
const clientUrl = process.env.CLIENT_URL
const serverUrl = process.env.SERVER_URL
app.use(cors({ credentials: true, origin: clientUrl }))
app.use(cookieParser());
app.use(express.json({ limit: '8mb' }))

// let accessLogStream = fs.createWriteStream(path.join(__dirname, 'logs/access.log'), { time: '1h' }, { flags: 'a' })
app.use(morgan('tiny'))

app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

const storeItems = new Map([
    [1, { item: 'MacBook Pro', price: 5999 }],
]);

app.post('/create-checkout-session', async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode : 'payment',
            line_items: req.body.items.map(item => {
                return {
                    price_data: {
                        currency: 'inr',
                        product_data: {
                            name: item.name,
                        },
                        unit_amount: item.price * 100,
                    },
                    quantity: item.quantity,
                };
            }),
            success_url: 'http://localhost:3001',
            cancel_url: 'http://localhost:3001',
        });
        res.json({ url: session.url });
    } catch (e){
        res.status(500).json({ error: e.message })
    }
});

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Vaidya Healthcare API endpoints",
            version: "1.0.0",
        },
        servers: [
            {
                url: `${serverUrl}/api`,
            },
        ],
    },
    apis: ["./routes/*.js"],
    url: serverUrl,
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

