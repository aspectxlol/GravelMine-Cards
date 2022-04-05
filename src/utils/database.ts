import mongoose, { Schema, model } from "mongoose";
import { logger } from "src/index";
import { Card, Owner } from "src/config/config";

const uri:any = process.env.MONGO_URI

mongoose.connect(uri, (err) => {
    if(err) throw err;
    logger.info('Connected to the database')
})

const cardSchema: Schema = new Schema({
    owner: {
        username: String,
        userId: Number
    },
    Card: {
        username: String,
        stats: {
            Health: Number,
            Power: Number,
            defense: Number,
            Rarity: String,
        },
        Roles: String,
        CardId: String
    }
})

const CardModel = model('Card', cardSchema)

export function postCard(card: Card, owner: Owner) {
    const cardItem = new CardModel({
        owner: {
            username: owner.username,
            userId: owner.userId,
        },
        Card: {
            username: card.username,
            stats: {
                Health: card.stats.Health,
                Power: card.stats.Power,
                defense: card.stats.defense,
                Rarity: card.stats.Rarity
            },
            Roles: card.roles,
            CardId: card.CardId
        }
    })

    cardItem.save()
}
