import { Schema, model } from "mongoose"
import { Card } from 'src/Cards';

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

export default model('card', cardSchema)