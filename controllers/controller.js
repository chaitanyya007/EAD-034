const express = require('express')
const router = express.Router()
const Alien = require('../models/model')

router.get('/', async(req,res) => 
{
    try
    {
           const aliens = await Alien.find()
           res.json(aliens)
    }
    catch(err)
    {
        res.send('Error ' + err)
    }
})
router.get('/:id', async(req,res) => 
{
    try
    {
           const alien = await Alien.findById(req.params.id)
           res.json(alien)
    }
catch(err)
{
        res.send('Error ' + err)
    }
})
router.post('/', async(req,res) => 
{
    const alien = new Alien
   ({
        name: req.body.name,
        rollno: req.body.rollno,
        dept: req.body.dept,
        exam_status: req.body.exam_status,
        cgpa: req.body.cgpa
    })
    try
   {
        const a1 =  await alien.save() 
        res.json(a1)
    }
catch(err)
   {
        res.send('Error')
    }
})
router.patch('/:id',async(req,res)=> 
{
    try
   {
        const alien = await Alien.findById(req.params.id) ;
        alien.dept = req.body.dept;
        alien.name = req.body.name;
        const a1 = await alien.save()
        res.json(a1)   
    }
catch(err)
   {
        res.send('Error')
    }
})
module.exports = router;

