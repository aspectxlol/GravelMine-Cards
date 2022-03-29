import { username, character } from 'src/config/config'

const character: character[] = [
    {
        username: 'Aspectx',
        pathToAvatar: 'Not Defined',
        pathToSkin: '@Skin/Aspectx.png'
    }
] //On Skin Add, push Character to this Array

export function getCharacterByUsername(username: username):character | undefined{
    const foundCharacter: character | undefined = character.find(characters => characters.username == username)
    return foundCharacter
}

