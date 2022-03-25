import express from 'express';
import bodyParser from 'body-parser';
import 'ejs';
import { Signale } from 'signale';

const app:express.Application = express()
const logger: Signale = new Signale({ scope: 'Cards' })

type Rarity = 'Mythic' | 'Legendary' | 'Epic' | 'Rare' | 'Fish' | 'unCommon' | 'Common' | 'Default'
type username = 'EmirHantr3' | 'KingDooms' | 'WinLogon' | 'Aspectx' | 'BigGaben' | 'Was_Machin' | 'oCerial' | 'KingLucasThe1st' | 'Addiblue126' | 'iHassani' | 'Cjp' | 'Wtcnn' | 'Lax Majo / Lx MJO' | 'BotiestBot2' | 'KittyClip' | 'BubblesTheKitten' | 'EvilGaming_yt' | 'GRAVELMINE' | 'Pokduc' | 'JuliusE2010' | 'aTree' | 'pgc' | 'Alexisco_YT' | 'TiagoMasterGamer' | 'anim1311'
type Roles = 'Owner' | 'Admin' | 'Head Mod' | 'Sr. Mod' | 'Mod' | 'Jr. Mod' | 'Helper' | 'Gren Gang' | 'Mayor' | 'Mvp+' | 'Mvp' | 'Vip+' | 'Default' | 'Muted'
type Power = 10 | 20 | 50 | 100 | 150 | 200 | 250 | 300 | 350 | 400 | 450 | 500 | 550 | 600 | 650 | 700 | 750 | 800 | 850 | 900 | 950 | 999 | 1000
type Health = 10 | 20 | 50 | 100 | 150 | 200 | 250 | 300 | 350 | 400 | 450 | 500 | 550 | 600 | 650 | 700 | 750 | 800 | 850 | 900 | 950 | 999 | 1000
type defense = 10 | 20 | 50 | 100 | 150 | 200 | 250 | 300 | 350 | 400 | 450 | 500 | 550 | 600 | 650 | 700 | 750 | 800 | 850 | 900 | 950 | 999 | 1000

type Stats = {
    Power: Power,
    Health: Health,
    defense: defense
    Rarity: Rarity
}

type character = {
    username: username,
    stats: Stats,
    Roles: Roles
}

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', './src/views')
app.use('/public', express.static('./src/public'))

app.get('/Cards', (req:express.Request, res:express.Response) => {
    function createCharacter():character {
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
    
        const Power: Power[] = [ 
            10,
            20,
            50,
            100,
            150,
            200,
            250,
            300,
            350,
            400,
            450,
            500,
            550,
            600,
            650,
            700,
            750,
            800,
            850,
            900,
            950,
            999,
            1000 
        ]
    
        const Health: Health[] = [ 
            10,
            20,
            50,
            100,
            150,
            200,
            250,
            300,
            350,
            400,
            450,
            500,
            550,
            600,
            650,
            700,
            750,
            800,
            850,
            900,
            950,
            999,
            1000 
        ]

        const defense: defense[] = [ 
            10,
            20,
            50,
            100,
            150,
            200,
            250,
            300,
            350,
            400,
            450,
            500,
            550,
            600,
            650,
            700,
            750,
            800,
            850,
            900,
            950,
            999,
            1000 
        ]
    
        let char: character = {
            username: usernames[Math.floor(Math.random() * usernames.length)],
            stats: {
                Power: Power[Math.floor(Math.random() * Power.length)],
                Health: Health[Math.floor(Math.random() * Health.length)],
                defense: defense[Math.floor(Math.random() * defense.length)],
                Rarity: Rarity[Math.floor(Math.random() * Rarity.length)]
            },
            Roles: Roles[Math.floor(Math.random() * Roles.length)]
        }
        return char;
    }

    function getColorRarity(R: Rarity):string {
        if (R === 'Mythic') {
            return 'pink';
        } else if( R === 'Legendary') {
            return 'gold'
        } else if(R === 'Epic') {
            return 'purple';
        } else if(R === 'Rare') {
            return 'blue'
        } else if(R === 'Fish') {
            return 'darkGreen'
        } else if(R === 'unCommon') {
            return 'green'
        } else if(R === 'Common') {
            return 'grey'
        } else if(R === 'Default') {
            return 'grey'
        } else {
            return 'white';
        }
    }    

    res.status(200).send(createCharacter())
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    logger.start(`Server Started!`, port)    
})
