
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const sequelize = require('./config/db');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes); //  Auth endpoints

app.get('/', (req, res) => {
  res.send('EduTrack API Running...');
});

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(` Server started on http://localhost:${PORT}`);
  });
});

const courseRoutes = require('./routes/courseRoutes');
app.use('/api/courses', courseRoutes);

const enrollmentRoutes = require('./routes/enrollmentRoutes');
app.use('/api/enrollments', enrollmentRoutes);

const attendanceRoutes = require('./routes/attendanceRoutes');
app.use('/api/attendance', attendanceRoutes);

const gradeRoutes = require('./routes/gradeRoutes');
app.use('/api/grades', gradeRoutes);
