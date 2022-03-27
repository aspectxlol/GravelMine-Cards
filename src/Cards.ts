import { v4 } from 'uuid'

type Rarity = 'Mythic' | 'Legendary' | 'Epic' | 'Rare' | 'Fish' | 'unCommon' | 'Common' | 'Default'
type username = 'EmirHantr3' | 'KingDooms' | 'WinLogon' | 'Aspectx' | 'BigGaben' | 'Was_Machin' | 'oCerial' | 'KingLucasThe1st' | 'Addiblue126' | 'iHassani' | 'Cjp' | 'Wtcnn' | 'Lax Majo / Lx MJO' | 'BotiestBot2' | 'KittyClip' | 'BubblesTheKitten' | 'EvilGaming_yt' | 'GRAVELMINE' | 'Pokduc' | 'JuliusE2010' | 'aTree' | 'pgc' | 'Alexisco_YT' | 'TiagoMasterGamer' | 'anim1311'
type Roles = 'Owner' | 'Admin' | 'Head Mod' | 'Sr. Mod' | 'Mod' | 'Jr. Mod' | 'Helper' | 'Gren Gang' | 'Mayor' | 'Mvp+' | 'Mvp' | 'Vip+' | 'Default' | 'Muted'

type Stats = {
    Power: Number,
    Health: Number,
    defense: Number
    Rarity: Rarity
}

const usernames: username[] = [
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
    'anim1311'
]

const Rarity: Rarity[] = [
    'Mythic',
    'Legendary',
    'Epic',
    'Rare',
    'Fish',
    'unCommon',
    'Common'
] 

const Roles: Roles[] = [
    'Owner',
    'Admin',
    'Head Mod',
    'Sr. Mod',
    'Mod',
    'Jr. Mod',
    'Helper',
    'Gren Gang',
    'Mayor',
    'Mvp+',
    'Mvp',
    'Vip+',
    'Default',
    'Muted'
]


export class Card {
    username: username
    stats: Stats
    CardId: any
    roles: Roles

    constructor() {
        this.username = usernames[Math.floor(Math.random() * usernames.length)]
        this.stats = {
            Health: Math.floor(Math.random() * 100) / 100,
            Power: Math.floor(Math.random() * 1000) / 100,
            defense: Math.floor(Math.random() * 100) / 100,
            Rarity: Rarity[Math.floor(Math.random() * Rarity.length)],
        }
        this.roles = Roles[Math.floor(Math.random() * Roles.length)]
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
        return usernames.length * 100 * 100 * 100 * Rarity.length * Roles.length
    }
}