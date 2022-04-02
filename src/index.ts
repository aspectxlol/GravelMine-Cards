import express from 'express';
import bodyParser from 'body-parser';
import 'ejs';
import { Signale } from 'signale';
import { Card, CardbyUsername } from './Cards'
import { usernames, Domain, boys, girls } from './config/config'

const app:express.Application = express()
const logger: Signale = new Signale({ scope: 'Cards' })

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', './src/views')
app.use('/public', express.static(__dirname + '/public'));



app.get('/', (req: express.Request, res: express.Response) => {
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

app.get('/Cards', (req:express.Request, res:express.Response) => {
    const character: Card = new Card()
    res.status(200).send(character)
})

app.get('/Cards/:username', (req:express.Request, res:express.Response) => {
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
        const card = new CardbyUsername(req.params.username)
        res.status(200).send(card)
    } else(
        res.status(200).send({
            message: 'Cannot Create a Card with the username' + req.params.username,
            allowedUsernames: allowedUsernames,
            ErrCode: 404
        })
    )
})

app.get('/credits', (req: express.Request, res: express.Response) => {
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

app.get('/ship', (req: express.Request, res: express.Response) => {
    const boy = boys[Math.floor(Math.random() * boys.length)]
    const girl = girls[Math.floor(Math.random() * girls.length)]
    res.send({
        boy: boy,
        girl: girl,
        message: `${boy} loved ${girl} so much, They Had sex!`
    })
})

app.get('/join/AspectxDevTeam', (req: express.Request, res:express.Response) => {
    res.status(200).send({
        message: 'We are Currently Looking for staff team',
        StaffTeamDomain: '@AspectxDev',
        status: true,
        DiscordLink: 'https://discord.gg/8XQbUF5twR'
    })
})

app.use((req, res, next) => {
    res.status(404).send({
        messsage: 'Not Found',
        StatusCode: 404
    })
})


const port = process.env.PORT || 3000
app.listen(port, () => {
    logger.start(`Server Started!`, port)    
})
