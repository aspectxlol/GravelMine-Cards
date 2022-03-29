import { v4 } from 'uuid'
import { username, Rarity, Roles, Stats, usernames, rarity, roles } from './config/config'

export class Card {
    username: username
    stats: Stats
    CardId: any
    roles: Roles

    constructor() {
        this.username = usernames[Math.floor(Math.random() * usernames.length)]
        this.stats = {
            Health: Math.floor(Math.random() * 100) / 100,
            Power: Math.floor(Math.random() * 100) / 100,
            defense: Math.floor(Math.random() * 100) / 100,
            Rarity: rarity[Math.floor(Math.random() * rarity.length)],
        }
        this.roles = roles[Math.floor(Math.random() * roles.length)]
        this.CardId = v4()
    }

    getColorRarity():string {
        if (this.stats.Rarity === 'Mythic') {
            return 'pink';
        } else if( this.stats.Rarity === 'Legendary') {
            return 'gold'
        } else if(this.stats.Rarity === 'Epic') {
            return 'purple';
        } else if(this.stats.Rarity === 'Rare') {
            return 'blue'
        } else if(this.stats.Rarity === 'Fish') {
            return 'darkGreen'
        } else if(this.stats.Rarity === 'unCommon') {
            return 'green'
        } else if(this.stats.Rarity === 'Common') {
            return 'grey'
        } else if(this.stats.Rarity === 'Default') {
            return 'grey'
        } else {
            return 'white';
        }
    }   

    calculateChanceOfGettingPerfectCard() {
        return usernames.length * 100 * 100 * 100 * rarity.length * roles.length
    }
}

export class CardbyUsername {
    username: string
    stats: Stats
    CardId: any
    roles: Roles

    constructor(username: string) {
        this.username = username,
        this.stats = {
            Health: Math.floor(Math.random() * 100) / 100,
            Power: Math.floor(Math.random() * 100) / 100,
            defense: Math.floor(Math.random() * 100) / 100,
            Rarity: rarity[Math.floor(Math.random() * rarity.length)],
        }
        this.roles = roles[Math.floor(Math.random() * roles.length)]
        this.CardId = v4()
    }

    getColorRarity():string {
        if (this.stats.Rarity === 'Mythic') {
            return 'pink';
        } else if( this.stats.Rarity === 'Legendary') {
            return 'gold'
        } else if(this.stats.Rarity === 'Epic') {
            return 'purple';
        } else if(this.stats.Rarity === 'Rare') {
            return 'blue'
        } else if(this.stats.Rarity === 'Fish') {
            return 'darkGreen'
        } else if(this.stats.Rarity === 'unCommon') {
            return 'green'
        } else if(this.stats.Rarity === 'Common') {
            return 'grey'
        } else if(this.stats.Rarity === 'Default') {
            return 'grey'
        } else {
            return 'white';
        }
    }   

    calculateChanceOfGettingPerfectCard() {
        return  100 * 100 * 100 * rarity.length * roles.length
    }
}