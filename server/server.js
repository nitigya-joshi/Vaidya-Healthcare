const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const contactRoutes = require('./routes/apiRoutes');
const cookieParser = require('cookie-parser');
const cors = require('cors')
const port = 3000;
const app = express();
connectDB();
app.use(cors({ credentials: true, origin: 'http://localhost:3001' }))
app.use(express.json());
app.use(cookieParser());

app.use('/api/users', userRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api', contactRoutes);

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

