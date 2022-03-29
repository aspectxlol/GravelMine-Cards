import { Roles, Badges } from "src/config/config"

const badges: Badges[] = []

export function getBadgeByRole(Role: Roles):Badges | undefined{
    const foundCharacter: Badges | undefined = badges.find(badge => badge.Role = Role )
    return foundCharacter
}
