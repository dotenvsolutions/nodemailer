import express from 'express';
import  params  from './params';
import utilities from './utilities'
//const express = express()

export default app => {
    app.set('port', process.env.PORT || params.port);
    app.use(express.json());
    utilities.mailTask();
    return app;
}