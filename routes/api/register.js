const router = require('express').Router();
const {User} = require('../../db/models')
const bcrypt = require('bycript')
router.routes('/')
    .post(async(req,res)=>{
            try{
                    const {email,password,password2} = req.body;
                    const user = await User.findOne({where:{email:email}});
                    if(!user && password === password2){
                            const hashedPassword = await bcrypt.hash(password,10)
                            const dbRes = await User.create({email,hashedPassword});
                            req.session.userId = dbRes.id;
                            res.status(200).end()
                    } else{
                            res.status(404).json({message:'error while register'})
                    }
            } catch(e){
                    console.log(e)
                    res.status(500).end()
            }
    })
