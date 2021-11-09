const mysql = require('mysql2');
const express = require('express');
const { Schema } = require('mongoose');
var router= express.Router();
//Configuring express server
router.use(express.json());

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Kollam123#',
    database: 'customer',
    multipleStatements: true
    });

    mysqlConnection.connect((err)=> {
        if(!err)
        console.log('Connection Established Successfully');
        else
        console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
        });
        router.use(express.json());

        router.get('/' , (req, res) => {
            mysqlConnection.query('select * from employers;', (err, rows, fields) => {
            if (!err)
            res.send(rows);
            //return res.console.log(rows);    
            else
            console.log(err);
            })
            } );

        //Router to GET specific item detail from the MySQL database
        router.get('/:id' , (req, res) => {
            mysqlConnection.query('SELECT * from employers WHERE empid = ?',[req.params.id], (err, rows, fields) => {
            if (!err)
            res.send(rows);
            else
            console.log(err);
            })
            } );
        
        module.exports=router;