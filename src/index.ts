import express from 'express';
import bodyParser from 'body-parser';
import 'ejs';
import { Signale } from 'signale';

import cardsRoute from './routes/cards'
import getCardRoute from './routes/getCards'
import shipRoute from './routes/ship'
import otherRoutes from './routes/others'

const app:express.Application = express()
export const logger: Signale = new Signale({ scope: 'GM Cards' })

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', './src/views')
app.use('/public', express.static(__dirname + '/public'));

app.use('/cards', cardsRoute)
app.use('/getCard', getCardRoute)
app.use('/ship', shipRoute)
app.use('/', otherRoutes)

app.use((req: express.Request, res: express.Response) => {
    res.status(404).send({
        messsage: 'Not Found',
        StatusCode: 404
    })
})


const port = process.env.PORT || 3000
app.listen(port, () => {
    console.clear()
    logger.start(`Server Started!`, port)    
})

