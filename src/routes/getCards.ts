import express from 'express'
import { getCardsByCardId, getCardsByOwnerUsername, getCardsByOwnerId } from '../utils/database'


const Router = express.Router()

Router.get('/cardId/:CardId', async (req:express.Request, res:express.Response) => {
    let data = await getCardsByCardId(req.params.CardId);
    res.status(200).json(data)
})

Router.get('/Owner/username/:username', async (req:express.Request, res:express.Response) => {
    let data = await getCardsByOwnerUsername(req.params.username);
    res.status(200).json(data)
})

Router.get('/Owner/id/:id', async (req:express.Request, res:express.Response) => {
    let data = await getCardsByOwnerId(req.params.id);
    res.status(200).json(data)
})

export default Router;