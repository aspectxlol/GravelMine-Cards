import { connect } from "mongoose";
import { logger } from "../index";
import {  Card, Owner, User } from "src/config/config";
import cardModel from "./Models/card";
import userModel from "./Models/user";
import { v4 } from "uuid";

// const uri:any = process.env.MONGO_URI
const uri:any = 'mongodb+srv://aspectx:Louie271108@cluster0.yabco.mongodb.net/GMC?retryWrites=true&w=majority'

connect(`${uri}`, (err) => {
    if(err) throw err;
    logger.info('Connected to the database')
})

export async function postCard(card: Card, owner: Owner) {
   const cardItem = new cardModel({
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

    await cardItem.save()
}

export async function getCardsByCardId(CardId: string) {
    const founditems = await cardModel.findOne({ "Card.CardId" : CardId})
    if (!founditems){
        return {
            msg: 'found nothing',
            code: 404
        }
    }else {
        return founditems
    }
}

export async function getCardsByOwnerUsername(username: string) {
    const founditems = await cardModel.find({ "owner.username" : username})
    if (!founditems.length){
        return {
            msg: 'found nothing',
            code: 404
        }
    }else {
        return founditems
    }
}

export async function getCardsByOwnerId(id: string) {
    const founditems = await cardModel.find({ "owner.userId" : id})
    if (!founditems.length){
        return {
            msg: 'found nothing',
            code: 404
        }
    }else {
        return founditems
    }
}

export async function postUser(user: User) {
    const userItem = new userModel({
        user: {
            username: user.username,
            userId: user.userId,
            GMCId: v4(),
            avatar: user.avatar
        }
    })

    await userItem.save()
}