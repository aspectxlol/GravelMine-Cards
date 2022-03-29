import { Rarity, Backgrounds } from "src/config/config"

const background: Backgrounds[] = []

export function getBackgroundByRarity(Rarity: Rarity): Backgrounds | undefined {
    const foundBackground = background.find(x => x.Rarity == Rarity)
    return foundBackground;
}