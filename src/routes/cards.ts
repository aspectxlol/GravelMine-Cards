import express from 'express'
import { Owner } from '../config/config'
import { Card, CardbyUsername } from '../Cards'
import { postCard } from '../utils/database'

const Router = express.Router()

Router.get('/', async (req:express.Request, res:express.Response) => {
    const character: Card = new Card()
    const owner: Owner = {
        username: 'Not Registered',
        userId: 0
    }
    res.status(200).send(character)
    postCard(character, owner)
})

Router.post('/', async (req:express.Request, res:express.Response) => {
    const character: Card = new Card()
    const owner: Owner = {
        username: req.body.username,
        userId: req.body.userId
    }
    res.status(200).send(character)
    postCard(character, owner)
})

Router.get('/:username', async (req:express.Request, res:express.Response) => {
    const allowedUsernames: string[] = [
        'EmirHantr3',
        'KingDooms',
        'WinLogon',
        'Aspectx',
        'BigGaben',
        'Was_Machin',
        'oCerial',
        'KingLucasThe1st',
        'Addiblue126',
        'iHassani',
        'Cjp',
        'Wtcnn',
        'Lax Majo / Lx MJO',
        'BotiestBot2',
        'KittyClip',
        'BubblesTheKitten',
        'EvilGaming_yt',
        'GRAVELMINE',
        'Pokduc',
        'JuliusE2010',
        'aTree',
        'pgc',
        'Alexisco_YT',
        'TiagoMasterGamer',
        'anim1311',
        'Once',
        'Beats',
        'Cube',
        'Bridget',
        'Alexisco_YT'
    ]

    if(allowedUsernames.includes(req.params.username)) {
        const owner: Owner = {
            username: 'Not Registered',
            userId: 0
        }
        const card: any = new CardbyUsername(req.params.username)
        res.status(200).send(card)
        postCard(card, owner)
    } else(
        res.status(200).send({
            message: 'Cannot Create a Card with the username' + req.params.username,
            allowedUsernames: allowedUsernames,
            ErrCode: 404
        })
    )
})

Router.post('/:username', async (req:express.Request, res:express.Response) => {
    const allowedUsernames: string[] = [
        'EmirHantr3',
        'KingDooms',
        'WinLogon',
        'Aspectx',
        'BigGaben',
        'Was_Machin',
        'oCerial',
        'KingLucasThe1st',
        'Addiblue126',
        'iHassani',
        'Cjp',
        'Wtcnn',
        'Lax Majo / Lx MJO',
        'BotiestBot2',
        'KittyClip',
        'BubblesTheKitten',
        'EvilGaming_yt',
        'GRAVELMINE',
        'Pokduc',
        'JuliusE2010',
        'aTree',
        'pgc',
        'Alexisco_YT',
        'TiagoMasterGamer',
        'anim1311',
        'Once',
        'Beats',
        'Cube',
        'Bridget'
    ]
    if(allowedUsernames.includes(req.params.username)) {
        const owner: Owner = {
            username: req.body.username,
            userId: req.body.userId
        }
        const card:any = new CardbyUsername(req.params.username)
        res.status(200).send(card)
        postCard(card, owner)
    } else(
        res.status(200).send({
            message: 'Cannot Create a Card with the username' + req.params.username,
            allowedUsernames: allowedUsernames,
            ErrCode: 404
        })
    )
})

export default Router;