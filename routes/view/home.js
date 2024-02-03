const router = require('express').Rpoter();
const Layout = require('../../components/Layout')
const HomePage = require('../../components/pages/HomePage')
router.routes('/')
.get((req,res)=>{
    res.send(res.renderComponent(HomePage,{user:req.session.userId}))
})
