//Types

type Rarity = 'Mythic' | 'Legendary' | 'Epic' | 'Rare' | 'Fish' | 'unCommon' | 'Common' | 'Default'
type username = 'EmirHantr3' | 'KingDooms' | 'WinLogon' | 'Aspectx' | 'BigGaben' | 'Was_Machin' | 'oCerial' | 'KingLucasThe1st' | 'Addiblue126' | 'iHassani' | 'Cjp' | 'Wtcnn' | 'Lax Majo / Lx MJO' | 'BotiestBot2' | 'KittyClip' | 'BubblesTheKitten' | 'EvilGaming_yt' | 'GRAVELMINE' | 'Pokduc' | 'JuliusE2010' | 'aTree' | 'pgc' | 'Alexisco_YT' | 'TiagoMasterGamer' | 'anim1311' | 'Once' | 'Beats' | 'Cube' | 'Bridget'
type Roles = 'Owner' | 'Admin' | 'Head Mod' | 'Sr. Mod' | 'Mod' | 'Jr. Mod' | 'Helper' | 'Gren Gang' | 'Mayor' | 'Mvp+' | 'Mvp' | 'Vip+' | 'Default' | 'Muted'

type Stats = {
    Power: Number,
    Health: Number,
    defense: Number
    Rarity: Rarity
}

type Backgrounds = {
    Rarity: Rarity,
    PathToCardBackground: string
}

type Badges = {
    Role: Roles,
    PathToBadge: string
}

type character = {
    username: username,
    pathToSkin: string,
    pathToAvatar: string
}

type Card = {
    username: username,
    stats: Stats,
    roles: Roles,
    CardId: String
}

type Owner = {
    username: string,
    userId: Number
}

type User = {
    username: String,
    userId: Number,
    avatar: String
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
    'anim1311',
    'Once',
    'Beats',
    'Cube',
    'Bridget'
]

const boys: username[] = [
    'EmirHantr3',
    'KingDooms',
    'Aspectx',
    'BigGaben',
    'Was_Machin',
    'oCerial',
    'KingLucasThe1st',
    'iHassani',
    'Cjp',
    'Wtcnn',
    'Lax Majo / Lx MJO',
    'BotiestBot2',
    'EvilGaming_yt',
    'GRAVELMINE',
    'Pokduc',
    'JuliusE2010',
    'aTree',
    'pgc',
    'Alexisco_YT',
    'TiagoMasterGamer',
    'Once',
    'Cube'
]

const girls: username[] = [
    'WinLogon',
    'Addiblue126',
    'KittyClip',
    'BubblesTheKitten',
    'anim1311',
    'Beats',
    'Bridget'
]

const rarity: Rarity[] = [
    'Mythic',
    'Legendary',
    'Epic',
    'Rare',
    'Fish',
    'unCommon',
    'Common'
] 

const roles: Roles[] = [
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

type doc = {
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
}

//Server Config
const Domain = "dry-shore-25439.herokuapp.com"

export {
    username,
    Rarity,
    Roles,
    Stats,
    Backgrounds,
    Badges,
    character,
    Card,
    Owner,
    User,
    usernames,
    rarity,
    roles,
    Domain,
    boys,
    girls
}
