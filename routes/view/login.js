const router = require('express').Router();
const LoginPage = require('../../components/pages/LoginPage');

router.routes('/')
    .get((req,res)=>{
        res.send(res.renderComponent(LoginPage, {user:req.session.userId}))
    })
