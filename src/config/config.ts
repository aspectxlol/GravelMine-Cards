type Rarity = 'Mythic' | 'Legendary' | 'Epic' | 'Rare' | 'Fish' | 'unCommon' | 'Common' | 'Default'
type username = 'EmirHantr3' | 'KingDooms' | 'WinLogon' | 'Aspectx' | 'BigGaben' | 'Was_Machin' | 'oCerial' | 'KingLucasThe1st' | 'Addiblue126' | 'iHassani' | 'Cjp' | 'Wtcnn' | 'Lax Majo / Lx MJO' | 'BotiestBot2' | 'KittyClip' | 'BubblesTheKitten' | 'EvilGaming_yt' | 'GRAVELMINE' | 'Pokduc' | 'JuliusE2010' | 'aTree' | 'pgc' | 'Alexisco_YT' | 'TiagoMasterGamer' | 'anim1311' | 'Once' 
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
    'Once'
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

export {
    username,
    Rarity,
    Roles,
    Stats,
    Backgrounds,
    Badges,
    character,
    usernames,
    rarity,
    roles
}
