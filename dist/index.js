"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
require("ejs");
var signale_1 = require("signale");
var app = (0, express_1["default"])();
var logger = new signale_1.Signale({ scope: 'Cards' });
app.use(body_parser_1["default"].urlencoded({ extended: true }));
app.use(body_parser_1["default"].json());
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use('/public', express_1["default"].static('./src/public'));
app.get('/Cards', function (req, res) {
    function createCharacter() {
        var usernames = [
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
            'Vxnesity',
            'BubblesTheKitten',
            'EvilGaming_yt',
            'GRAVELMINE',
            'Pokduc',
            'JuliusE2010',
            'aTree',
            'pgc'
        ];
        var Rarity = [
            'Mythic',
            'Legendary',
            'Epic',
            'Rare',
            'Fish',
            'unCommon',
            'Common'
        ];
        var Roles = [
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
        ];
        var Power = [
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
        ];
        var Health = [
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
        ];
        var char = {
            username: usernames[Math.floor(Math.random() * usernames.length)],
            stats: {
                Power: Power[Math.floor(Math.random() * Power.length)],
                Health: Health[Math.floor(Math.random() * Health.length)],
                Rarity: Rarity[Math.floor(Math.random() * Rarity.length)]
            },
            Roles: Roles[Math.floor(Math.random() * Roles.length)]
        };
        return char;
    }
    var user = createCharacter();
    function getColorRarity(R) {
        if (R === 'Mythic') {
            return 'pink';
        }
        else if (R === 'Legendary') {
            return 'gold';
        }
        else if (R === 'Epic') {
            return 'purple';
        }
        else if (R === 'Rare') {
            return 'blue';
        }
        else if (R === 'Fish') {
            return 'darkGreen';
        }
        else if (R === 'unCommon') {
            return 'green';
        }
        else if (R === 'Common') {
            return 'grey';
        }
        else if (R === 'Default') {
            return 'grey';
        }
        else {
            return 'white';
        }
    }
    res.render('index.ejs', { user: user });
});
var port = process.env.PORT || 3000;
app.listen(port, function () {
    logger.start("Server Started!", port);
});
