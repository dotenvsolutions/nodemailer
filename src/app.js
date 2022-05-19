import express from 'express';
import morgan from 'morgan';
import config from '../libs/config'
const app = config(express())

//app.use(morgan('dev'))

export default app;