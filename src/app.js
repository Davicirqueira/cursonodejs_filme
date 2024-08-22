import './utils/global.js'

import 'dotenv/config.js';
import express from 'express';
import cors from 'cors';

import filmeController from './controller/filmeController.js'

const servidor = express();
servidor.use(express.json());
servidor.use(cors());        

servidor.use(filmeController);


const PORTA = process.env.PORTA;
servidor.listen(PORTA, () => console.log(`--> Api subiu na porta ${PORTA}`))