type Roles = 'Owner' | 'Admin' | 'Head Mod' | 'Sr. Mod' | 'Mod' | 'Jr. Mod' | 'Helper' | 'Gren Gang' | 'Mayor' | 'Mvp+' | 'Mvp' | 'Vip+' | 'Default' | 'Muted'
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

type Badges = {
    Role: Roles,
    Badge: string
}

const badges: Badges[] = []

export function getBadgeByRole(Role: Roles):Badges | undefined{
    const foundCharacter: Badges | undefined = badges.find(badge => badge.Role = Role )
    return foundCharacter
}