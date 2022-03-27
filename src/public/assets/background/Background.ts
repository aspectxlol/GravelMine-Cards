type Rarity = 'Mythic' | 'Legendary' | 'Epic' | 'Rare' | 'Fish' | 'unCommon' | 'Common' | 'Default'
const Rarity: Rarity[] = [
    'Mythic',
    'Legendary',
    'Epic',
    'Rare',
    'Fish',
    'unCommon',
    'Common'
] 

type Backgrounds = {
    Rarity: Rarity,
    PathToCardBackground: string
}

const background: Backgrounds[] = []

export function getBackgroundByRarity(Rarity: Rarity): Backgrounds | undefined {
    const foundBackground = background.find(x => x.Rarity == Rarity)
    return foundBackground;
}