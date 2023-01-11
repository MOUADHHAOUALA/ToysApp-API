const {json} = require('express');
const Toy = require('./../models/toyModel')

exports.getAllToys = async (req,res) => {
    try {
        const toys = await Toy.find();

        res.status(200).json({
            status:'success',
            results: toys.length,
            data:{
                tours
            }
        })  
}