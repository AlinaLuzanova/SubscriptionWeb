const router = require('express').Router();
const RegisterPage = require('../../components/pages/RegisterPage');

router.routes('/')
    .get((req,res)=>{
        res.send(res.renderComponent(RegisterPage,{user:req.session.userId}))
    })
