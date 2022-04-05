import mongoose, { Schema, model } from "mongoose";
import { logger } from "../index";
import {  Owner } from "src/config/config";
//import { Card } from "src/Cards";
import myTest from "src/Models/card";

const uri:any = process.env.MONGO_URI

mongoose.connect(`${uri}`, (err) => {
    if(err) throw err;
    logger.info('Connected to the database')
})

//const cardSchema: Schema = new Schema({
//owner: {
//        username: String,
//        userId: Number
//    },
//    Card: {
//        username: String,
//        stats: {
//            Health: Number,
//            Power: Number,
//            defense: Number,
//            Rarity: String,
//        },
//        Roles: String,
//        CardId: String
//    }
//})

//const CardModel = model('Card', cardSchema)

//export function postCard(card: Card, owner: Owner) {
//    const cardItem = new CardModel({
//        owner: {
//             username: owner.username,
//             userId: owner.userId,
//         },
//         Card: {
//             username: card.username,
//             stats: {
//                 Health: card.stats.Health,
//                 Power: card.stats.Power,
//                 defense: card.stats.defense,
//                 Rarity: card.stats.Rarity
//             },
//             Roles: card.roles,
//             CardId: card.CardId
//         }
//     })

//     cardItem.save()
// }

export function getCardsByCardId(CardId: string): any  {
    myTest.find({ "Card.CardId" : CardId}, (err, data) => {
         if(err) throw err
         if(!data) {
             return {
                 message: 'no data found',
                 code: 404
             }
         } else if(data.length) {
             return console.log(data)
         }
     })
}
//okay now try pushing it