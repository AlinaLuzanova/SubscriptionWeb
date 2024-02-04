require('@babel/register')
require('dotenv').config()
const express = require('express')
const serverConfig = require('./config/serverConfig')

const PORT = process.env.PORT || 3000

const app = express()

serverConfig(app)

const HomeView = require('./routes/view/home')
const RegisterView = require('./routes/view/register')
const LoginView = require('./routes/view/login')
const ProfileView = require('./routes/view/profile')

const LoginApi = require('./routes/api/login')
const RegisterApi = require('./routes/api/register')
const LogoutApi = require('./routes/api/logout')

app.use('/', HomeView)
app.use('/register', RegisterView)
app.use('/login', LoginView)
app.use('/profile', ProfileView)

app.use('/api/login', LoginApi)
app.use('/api/register', RegisterApi)
app.use('/api/auth/logout', LogoutApi)

app.listen(PORT, console.log(`Server is up on ${PORT} port`))
