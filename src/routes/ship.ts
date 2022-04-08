import express from 'express'
import { boys, girls } from '../config/config'

const Router = express.Router()

Router.get('/', async (req: express.Request, res: express.Response) => {
    const boy = boys[Math.floor(Math.random() * boys.length)]
    const girl = girls[Math.floor(Math.random() * girls.length)]
    res.send({
        boy: boy,
        girl: girl,
        message: `${boy} loved ${girl} so much, They Had sex!`
    })
})

export default Router;