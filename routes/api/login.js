const router = require('express').Router();
const {User} = require('../../db/models')
const bcrypt = require('bycript')
router.routes('/')
.post(async(req,res)=>{
    try{
        const {email,password} = req.body;
        const user = await User.findOne({where:{email:email}});
        const isSamePassword = await bcrypt.compare(password,user.password);
        if(user&&isSamePassword){
            req.session.userId = user.id;
            res.sendStatus(200).end()
        }else{
            res.status(404).json({message:'Incorrect email or password'})
        }
    } catch(e){
        console.log(e)
        res.status(500).end()
    }
})
