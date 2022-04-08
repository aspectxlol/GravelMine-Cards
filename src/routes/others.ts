import express from 'express'
import { Domain } from '../config/config'

const Router = express.Router()

Router.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send({
        title: 'Gravelmine Cards',
        subTitle: 'A Collectible NFT Trading Battling Card Game Made for gravelmine',
        message: 'Welcome this is Gravelmine Cards, an api made by a small team of young developers',
        Routes: {
            Api: `https://${Domain}/Cards`,
            Ship: `https://${Domain}/ship`,
            credits: `https://${Domain}/credits`,
            JoinAspectxDev: `https://${Domain}/join/AspectxDevTeam`
        }
    })
})

Router.get('/credits', async (req: express.Request, res: express.Response) => {
    res.status(200).send([
        {
            name: 'oCerial@AspectxDev',
            contribution: 'Card Background'
        },
        {
            name: 'Mojang',
            contribution: 'Skins'
        },
        {
            name: 'Aspectx@AspectxDev',
            contribution: 'Coding and backend dev'
        },
        {
            name: 'Julius@AspectxDev',
            contribution: 'Fetching the Pfps'
        },
        {
            name: 'Aspectx Developer Team',
            contribution: 'Help developing!'
        }
    ])
})

Router.get('/join/AspectxDevTeam', async (req: express.Request, res:express.Response) => {
    res.status(200).send({
        message: 'We are Currently Looking for staff team',
        StaffTeamDomain: '@AspectxDev',
        status: true,
        DiscordLink: 'https://discord.gg/8XQbUF5twR'
    })
})

Router.get('/RickRoll', async (req: express.Request, res: express.Response) => {
    res.redirect('https://youtu.be/dQw4w9WgXcQ')
})

export default Router