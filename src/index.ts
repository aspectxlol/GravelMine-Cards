import express from 'express';
import bodyParser from 'body-parser';
import 'ejs';
import { Signale } from 'signale';
import { Card } from './Cards'
import { usernames } from './config/config'

const app:express.Application = express()
const logger: Signale = new Signale({ scope: 'Cards' })

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', './src/views')
app.use('/public', express.static('./src/public'))


app.get('/Cards', (req:express.Request, res:express.Response) => {
    const character: Card = new Card()
    res.status(200).send(character)
})

app.get('/credits', (req: express.Request, res: express.Response) => {
    res.status(200).send([
        {
            name: 'Vxnesity / KittyClip',
            contribution: 'art'
        },
        {
            name: 'oCerial',
            contribution: 'Card Background'
        },
        {
            name: 'Mojang',
            contribution: 'Skins'
        },
        {
            name: 'Louie@Aspectx',
            contribution: 'Coding and backend dev'
        },
        {
            name: 'Julius',
            contribution: 'Fetching the Pfps'
        }
    ])
})

app.get('/ship', (req: express.Request, res: express.Response) => {
    res.status(200).send(`${usernames[Math.floor(Math.random() * usernames.length)]} loved ${usernames[Math.floor(Math.random() * usernames.length)]} so much!`)
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    logger.start(`Server Started!`, port)    
})
