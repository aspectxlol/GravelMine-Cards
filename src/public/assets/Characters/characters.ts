import path from 'path';

type username = 'EmirHantr3' | 'KingDooms' | 'WinLogon' | 'Aspectx' | 'BigGaben' | 'Was_Machin' | 'oCerial' | 'KingLucasThe1st' | 'Addiblue126' | 'iHassani' | 'Cjp' | 'Wtcnn' | 'Lax Majo / Lx MJO' | 'BotiestBot2' | 'KittyClip' | 'BubblesTheKitten' | 'EvilGaming_yt' | 'GRAVELMINE' | 'Pokduc' | 'JuliusE2010' | 'aTree' | 'pgc' | 'Alexisco_YT' | 'TiagoMasterGamer' | 'anim1311'
type character = {
    username: username,
    pathToSkin: string,
    pathToAvatar: string
}

const character: character[] = [] //On Skin Add, push Character to this Array

//Schema 
// {
//     username: 'TypeOf Username',
//     pathToSkin: path.join(__dirname + '/skins/username.png')    
// }

//Minotar Api to get Skins https://minotar.net/bust/username/100.png

export function getCharacterByUsername(username: username):character | undefined{
    const foundCharacter: character | undefined = character.find(characters => characters.username == username)
    return foundCharacter
}

