var lvlZeroRooms = [
    {
        id: '0', name: 'The Outer Bailey', roomLevel: '0', set: 'Base', extraInfo: null, suppresses: [], monsters: {
            LevelOne: [{name: "Centaur", id: 1, amount: 2},
                {name: "Orc", id: 0, amount: 1},
                {name: "Mercenary", id: 100, amount: 2}], LevelTwo: [], LevelThree: [], LevelFour: [],
        }
    },
    {
        id: '1', name: "Zotha's Gatehouse", roomLevel: '0', set: 'Base', extraInfo: null, suppresses: [], monsters: {
            LevelOne: [{name: "Skeleton Warrior", id: 2, amount: 1},
                {name: "Zombie", id: 6, amount: 2},
                {name: "Mercenary", id: 100, amount: 1},
                {name: "Fire Spirit", id: 4, amount: 1}], LevelTwo: [], LevelThree: [], LevelFour: [],
        }
    },
    {
        id: '2', name: 'Bholoth Cemetery', roomLevel: '0', set: 'Base', extraInfo: null, suppresses: [], monsters: {
            LevelOne: [{name: "Orc", id: 0, amount: 2},
                {name: "Skeleton Warrior", id: 2, amount: 3}], LevelTwo: [], LevelThree: [], LevelFour: [],
        }
    },
    {
        id: '3',
        name: 'Oakheart Hall',
        roomLevel: '0',
        set: 'Base',
        extraInfo: null,
        suppresses: [{type: "Rush", modifier: "Poison"},
            {type: "Melee", modifier: "Poison"},
            {type: "Missile", modifier: "Poison"}],
        monsters: {
            LevelOne: [{name: "Level 1 Monster Group", id: 201, amount: 1}],
            LevelTwo: [{name: "Level 2 Monster Group", id: 202, amount: 1}],
            LevelThree: [],
            LevelFour: [],
        }
    },
    {
        id: '4',
        name: 'Abbos Lookout',
        roomLevel: '0',
        set: 'Base',
        extraInfo: null,
        suppresses: [{type: "Rush", modifier: "Poison"},
            {type: "Melee", modifier: "Poison"},
            {type: "Missile", modifier: "Poison"}],
        monsters: {
            LevelOne: [{name: "Mercenary", id: 100, amount: 3}],
            LevelTwo: [{name: "Level 2 Monster Group", id: 202, amount: 1}],
            LevelThree: [],
            LevelFour: [],
        }
    },
    {
        id: '5', name: 'The Scarewyrm Pit', roomLevel: '0', set: 'Soloth', extraInfo: null, suppresses: [], monsters: {
            LevelOne: [{name: "Orc", id: 0, amount: 1},
                {name: "Mercenary", id: 100, amount: 2},
                {name: "Armoured Beetle", id: 3, amount: 2}], LevelTwo: [], LevelThree: [], LevelFour: [],
        }
    },
    {
        id: '6',
        name: 'The Battlements',
        roomLevel: '0',
        set: 'Soloth',
        extraInfo: null,
        suppresses: [{type: "Rush", modifier: "Poison"},
            {type: "Melee", modifier: "Poison"},
            {type: "Missile", modifier: "Poison"}],
        monsters: {
            LevelOne: [{name: "Flame Salamander", id: 8, amount: 1},
                {name: "Mercenary", id: 100, amount: 1}],
            LevelTwo: [{name: "Level 2 Monster Group", id: 202, amount: 1}],
            LevelThree: [],
            LevelFour: [],
        }
    },
    {
        id: '7',
        name: 'Sarhlat Antechamber',
        roomLevel: '0',
        set: 'Soloth',
        extraInfo: null,
        suppresses: [],
        monsters: {
            LevelOne: [{name: "Sewer Rat", id: 5, amount: 3},
                {name: "Flame Salamander", id: 8, amount: 1},
                {name: "Mercenary", id: 100, amount: 1}], LevelTwo: [], LevelThree: [], LevelFour: [],
        }
    },
    {
        id: '8', name: 'Hidden Passageways', roomLevel: '0', set: 'Soloth', extraInfo: null, suppresses: [], monsters: {
            LevelOne: [{name: "Centaur", id: 1, amount: 2},
                {name: "Fire Spirit", id: 4, amount: 1},
                {name: "Mercenary", id: 100, amount: 2}], LevelTwo: [], LevelThree: [], LevelFour: [],
        }
    },
    {
        id: '9',
        name: 'The Secret Staircase',
        roomLevel: '0',
        set: 'Soloth',
        extraInfo: null,
        suppresses: [],
        monsters: {
            LevelOne: [{name: "Mercenary", id: 100, amount: 3}], LevelTwo: [{name: "Gargoyle", id: 17, amount: 1},
                {name: "Blood Skull", id: 15, amount: 1}], LevelThree: [], LevelFour: [],
        }
    },
    {
        id: '10', name: 'Moghath', roomLevel: '1', set: 'Base', extraInfo: null, suppresses: [], monsters: {
            LevelOne: [{name: "Zombie", id: 6, amount: 2},
                {name: "Mercenary", id: 100, amount: 2}],
            LevelTwo: [{name: "Skeleton Archer", id: 14, amount: 2}],
            LevelThree: [{name: "Giant Scorpion", id: 21, amount: 1}],
            LevelFour: [],
        }
    },
    {
        id: '11',
        name: 'The Vermin Hovel',
        roomLevel: '1',
        set: 'Base',
        extraInfo: null,
        suppresses: [{type: "Rush", modifier: "Stun"},
            {type: "Melee", modifier: "Stun"},
            {type: "Missile", modifier: "Stun"},
            {type: "Roll", modifier: null}],
        monsters: {
            LevelOne: [{name: "Mercenary", id: 100, amount: 1}],
            LevelTwo: [{name: "Level 2 Monster Group", id: 202, amount: 3}],
            LevelThree: [],
            LevelFour: [],
        }
    },
    {
        id: '12',
        name: 'The Mitholaq Hive',
        roomLevel: '1',
        set: 'Base',
        extraInfo: null,
        suppresses: [],
        monsters: {
            LevelOne: [{name: "Level 1 Monster Group", id: 201, amount: 2}],
            LevelTwo: [],
            LevelThree: [],
            LevelFour: [],
        }
    },
    {
        id: '13',
        name: 'The Lava Pools',
        roomLevel: '1',
        set: 'Base',
        extraInfo: null,
        suppresses: [{type: "Ice", modifier: null}],
        monsters: {
            LevelOne: [],
            LevelTwo: [{name: "Level 2 Monster Group", id: 202, amount: 2}],
            LevelThree: [{name: "Level 3 Monster Group", id: 203, amount: 1}],
            LevelFour: [],
        }
    },
    {
        id: '14',
        name: "Chagnar's Lair",
        roomLevel: '1',
        set: 'Base',
        extraInfo: null,
        suppresses: [],
        monsters: {
            LevelOne: [{name: "Sewer Rat", id: 5, amount: 4}],
            LevelTwo: [{name: "Minotaur", id: 11, amount: 1}],
            LevelThree: [],
            LevelFour: [{name: "Crypt Spider", id: 32, amount: 1}],
        }
    },
    {
        id: '15', name: 'Stormtryne Hall', roomLevel: '1', set: 'Base', extraInfo: null, suppresses: [], monsters: {
            LevelOne: [{name: "Mercenary", id: 100, amount: 2},
                {name: "Fire Spirit", id: 4, amount: 1}],
            LevelTwo: [{name: "Blood Skull", id: 15, amount: 2}],
            LevelThree: [{name: "Cerberus", id: 23, amount: 1}],
            LevelFour: [],
        }
    },
    {
        id: '16', name: 'Forbidden Ossuary', roomLevel: '1', set: 'Base', extraInfo: null, suppresses: [], monsters: {
            LevelOne: [{name: "Zombie", id: 6, amount: 2},
                {name: "Skeleton Warrior", id: 2, amount: 2}],
            LevelTwo: [],
            LevelThree: [{name: "Cerberus", id: 23, amount: 1}],
            LevelFour: [{name: "Swordmaster Ghoul", id: 30, amount: 1}],
        }
    },
    {
        id: '17', name: 'Forthstron River', roomLevel: '1', set: 'Base', extraInfo: null, suppresses: [], monsters: {
            LevelOne: [{name: "Mercenary", id: 100, amount: 1},
                {name: "Fire Spirit", id: 4, amount: 2}],
            LevelTwo: [{name: "Level 2 Monster Group", id: 202, amount: 1}],
            LevelThree: [{name: "Level 3 Monster Group", id: 203, amount: 1}],
            LevelFour: [],
        }
    },
    {
        id: '18',
        name: 'Wychward Burrow',
        roomLevel: '1',
        set: 'Base',
        extraInfo: null,
        suppresses: [],
        monsters: {
            LevelOne: [{name: "Level 1 Monster Group", id: 201, amount: 1}],
            LevelTwo: [{name: "Level 2 Monster Group", id: 202, amount: 2}],
            LevelThree: [],
            LevelFour: [],
        }
    },
    {
        id: '19',
        name: 'Bloodsworn Crypt',
        roomLevel: '1',
        set: 'Base',
        extraInfo: null,
        suppresses: [{type: "Roll", modifier: null}],
        monsters: {
            LevelOne: [{name: "Mercenary", id: 100, amount: 3}],
            LevelTwo: [{name: "Level 2 Monster Group", id: 202, amount: 1}],
            LevelThree: [],
            LevelFour: [{name: "Level 4 Monster Group", id: 204, amount: 1}],
        }
    },
    {
        id: '20',
        name: 'Larkwrayth Prison',
        roomLevel: '1',
        set: 'Base',
        extraInfo: null,
        suppresses: [],
        monsters: {
            LevelOne: [{name: "Skeleton Warrior", id: 2, amount: 3}],
            LevelTwo: [{name: "Phantom", id: 13, amount: 2}],
            LevelThree: [{name: "Fire Demon", id: 22, amount: 1}],
            LevelFour: [],
        }
    },
    {
        id: '21',
        name: 'Ruined Sanctuary',
        roomLevel: '1',
        set: 'Base',
        extraInfo: null,
        suppresses: [{type: "Rush", modifier: "Poison"},
            {type: "Melee", modifier: "Poison"},
            {type: "Missile", modifier: "Poison"}],
        monsters: {
            LevelOne: [{name: "Level 1 Monster Group", id: 201, amount: 1}],
            LevelTwo: [],
            LevelThree: [],
            LevelFour: [{name: "Level 4 Monster Group", id: 204, amount: 1}],
        }
    },
    {
        id: '22',
        name: 'The Cavern of Torhak',
        roomLevel: '1',
        set: 'Base',
        extraInfo: null,
        suppresses: [],
        monsters: {
            LevelOne: [{name: "Mercenary", id: 100, amount: 2}],
            LevelTwo: [{name: "Minotaur", id: 11, amount: 1},
                {name: "Troll", id: 12, amount: 1}],
            LevelThree: [{name: "Level 3 Monster Group", id: 203, amount: 1}],
            LevelFour: [],
        }
    },
    {
        id: '23', name: 'The Barracks', roomLevel: '1', set: 'Base', extraInfo: null, suppresses: [], monsters: {
            LevelOne: [{name: "Orc", id: 0, amount: 4}], LevelTwo: [{name: "Pit Viper", id: 16, amount: 1},
                {name: "Troll", id: 12, amount: 1}], LevelThree: [], LevelFour: [],
        }
    },
    {
        id: '24', name: 'Malvarn Grotto', roomLevel: '1', set: 'Soloth', extraInfo: null, suppresses: [], monsters: {
            LevelOne: [{name: "Flame Salamander", id: 8, amount: 2},
                {name: "Mercenary", id: 100, amount: 2}],
            LevelTwo: [{name: "Flame Wraith", id: 10, amount: 1}],
            LevelThree: [{name: "Cerberus", id: 23, amount: 1}],
            LevelFour: [],
        }
    },
    {
        id: '25',
        name: 'Ashata',
        roomLevel: '1',
        set: 'Soloth',
        extraInfo: null,
        suppresses: [{type: "Rush", modifier: "Poison"},
            {type: "Melee", modifier: "Poison"},
            {type: "Missile", modifier: "Poison"}],
        monsters: {
            LevelOne: [{name: "Level 1 Monster Group", id: 201, amount: 1}],
            LevelTwo: [{name: "Level 2 Monster Group", id: 202, amount: 1}],
            LevelThree: [{name: "Infernal Acolyte", id: 27, amount: 1}],
            LevelFour: [],
        }
    },
    {
        id: '26', name: 'Tromsarth Hall', roomLevel: '1', set: 'Soloth', extraInfo: null, suppresses: [], monsters: {
            LevelOne: [{name: "Zombie", id: 6, amount: 2},
                {name: "Mercenary", id: 100, amount: 1}],
            LevelTwo: [{name: "Skeleton Archer", id: 14, amount: 1},
                {name: "Shade", id: 19, amount: 1}],
            LevelThree: [],
            LevelFour: [{name: "Level 4 Monster Group", id: 204, amount: 1}],
        }
    },
    {
        id: '27', name: 'The Sewer Tunnels', roomLevel: '1', set: 'Soloth', extraInfo: null, suppresses: [], monsters: {
            LevelOne: [{name: "Sewer Rat", id: 5, amount: 2},
                {name: "Mercenary", id: 100, amount: 1}],
            LevelTwo: [{name: "Shade", id: 19, amount: 2}],
            LevelThree: [],
            LevelFour: [{name: "Rust Monster", id: 41, amount: 1}],
        }
    },
    {
        id: '28', name: 'Forge of Gnoth', roomLevel: '1', set: 'Soloth', extraInfo: null, suppresses: [], monsters: {
            LevelOne: [{name: "Centaur", id: 1, amount: 2},
                {name: "Mercenary", id: 100, amount: 2}],
            LevelTwo: [{name: "Phantom", id: 13, amount: 1}],
            LevelThree: [],
            LevelFour: [{name: "Wyvern", id: 43, amount: 1}],
        }
    },
    {
        id: '29', name: 'Vault of Whispers', roomLevel: '1', set: 'Soloth', extraInfo: null, suppresses: [], monsters: {
            LevelOne: [{name: "Level 1 Monster Group", id: 201, amount: 1}],
            LevelTwo: [{name: "Phantom", id: 13, amount: 1},
                {name: "Lizard Man", id: 18, amount: 1}],
            LevelThree: [{name: "Infernal Acolyte", id: 27, amount: 1}],
            LevelFour: [],
        }
    },
    {
        id: '30', name: "Matinya's Cellar", roomLevel: '1', set: 'Soloth', extraInfo: null, suppresses: [], monsters: {
            LevelOne: [{name: "Sewer Rat", id: 5, amount: 1},
                {name: "Mercenary", id: 100, amount: 2}],
            LevelTwo: [{name: "Pit Viper", id: 16, amount: 1},
                {name: "Shade", id: 19, amount: 1}],
            LevelThree: [],
            LevelFour: [{name: "Level 4 Monster Group", id: 204, amount: 1}],
        }
    },
    {
        id: '31', name: 'Nothoru Crossing', roomLevel: '1', set: 'Soloth', extraInfo: null, suppresses: [], monsters: {
            LevelOne: [{name: "Orc", id: 0, amount: 1},
                {name: "Skeleton Warrior", id: 2, amount: 2}],
            LevelTwo: [{name: "Shade", id: 19, amount: 1},
                {name: "Lizard Man", id: 18, amount: 1}],
            LevelThree: [{name: "Orc Wolf Rider", id: 25, amount: 1}],
            LevelFour: [],
        }
    },
    {
        id: '32', name: 'The Lekraith Tomb', roomLevel: '1', set: 'Soloth', extraInfo: null, suppresses: [], monsters: {
            LevelOne: [{name: "Orc", id: 0, amount: 1},
                {name: "Mercenary", id: 100, amount: 1},
                {name: "Armoured Beetle", id: 3, amount: 1}],
            LevelTwo: [{name: "Pit Viper", id: 16, amount: 2}],
            LevelThree: [],
            LevelFour: [{name: "Elder Vampire", id: 38, amount: 1}],
        }
    },
    {
        id: '33',
        name: 'Orsharsh Graveyard',
        roomLevel: '1',
        set: 'Soloth',
        extraInfo: null,
        suppresses: [],
        monsters: {
            LevelOne: [{name: "Mercenary", id: 100, amount: 3}],
            LevelTwo: [{name: "Gargoyle", id: 17, amount: 1},
                {name: "Lizard Man", id: 18, amount: 1}],
            LevelThree: [{name: "Wight", id: 28, amount: 1}],
            LevelFour: [],
        }
    },
    {
        id: '34', name: 'The Urcak Pit', roomLevel: '1', set: 'Soloth', extraInfo: null, suppresses: [], monsters: {
            LevelOne: [{name: "Flame Salamander", id: 8, amount: 2}], LevelTwo: [{name: "Gargoyle", id: 17, amount: 1},
                {name: "Troll", id: 12, amount: 1}], LevelThree: [{name: "Wight", id: 28, amount: 1},
                {name: "Ghoul", id: 20, amount: 1}], LevelFour: [],
        }
    },
    {
        id: '35',
        name: 'Cave of the Blood Scribes',
        roomLevel: '1',
        set: 'Soloth',
        extraInfo: null,
        suppresses: [],
        monsters: {
            LevelOne: [{name: "Mercenary", id: 100, amount: 3}],
            LevelTwo: [{name: "Level 2 Monster Group", id: 202, amount: 1}],
            LevelThree: [{name: "Infernal Acolyte", id: 27, amount: 1},
                {name: "Vampire Bat", id: 24, amount: 1}],
            LevelFour: [],
        }
    },
    {
        id: '36',
        name: 'The Armoury',
        roomLevel: '1',
        set: 'Soloth',
        extraInfo: null,
        suppresses: [{type: "Roll", modifier: null}],
        monsters: {
            LevelOne: [{name: "Centaur", id: 1, amount: 1},
                {name: "Flame Salamander", id: 8, amount: 1}],
            LevelTwo: [{name: "Level 2 Monster Group", id: 202, amount: 1}],
            LevelThree: [{name: "Level 3 Monster Group", id: 203, amount: 1}],
            LevelFour: [],
        }
    },
    {
        id: '37', name: 'Pyramid of Omens', roomLevel: '1', set: 'Soloth', extraInfo: null, suppresses: [], monsters: {
            LevelOne: [{name: "Centaur", id: 1, amount: 1},
                {name: "Zombie", id: 6, amount: 3}],
            LevelTwo: [{name: "Level 2 Monster Group", id: 202, amount: 1}],
            LevelThree: [{name: "Siren", id: 39, amount: 1}],
            LevelFour: [],
        }
    },
    {
        id: '38', name: 'Chalmor Arena', roomLevel: '1', set: 'Soloth', extraInfo: null, suppresses: [], monsters: {
            LevelOne: [{name: "Flame Salamander", id: 8, amount: 1},
                {name: "Armoured Beetle", id: 3, amount: 2}],
            LevelTwo: [{name: "Lizard Man", id: 18, amount: 1}],
            LevelThree: [{name: "Giant Scorpion", id: 21, amount: 1},
                {name: "Manticore", id: 26, amount: 1}],
            LevelFour: [],
        }
    },
    {
        id: '39',
        name: 'Dorill Cave',
        roomLevel: '1',
        set: 'Soloth',
        extraInfo: null,
        suppresses: [],
        monsters: {
            LevelOne: [{name: "Mercenary", id: 100, amount: 2}],
            LevelTwo: [{name: "Level 2 Monster Group", id: 202, amount: 1}],
            LevelThree: [{name: "Vampire Bat", id: 24, amount: 1}],
            LevelFour: [{name: "Phoenix", id: 40, amount: 1}],
        }
    },
    {
        id: '40',
        name: 'Flooded Shrine',
        roomLevel: '1',
        set: 'Soloth',
        extraInfo: null,
        suppresses: [{type: "Fireball", modifier: null}],
        monsters: {
            LevelOne: [{name: "Mercenary", id: 100, amount: 3}],
            LevelTwo: [{name: "Gargoyle", id: 17, amount: 1},
                {name: "Pit Viper", id: 16, amount: 1}],
            LevelThree: [],
            LevelFour: [{name: "Rust Monster", id: 41, amount: 1}],
        }
    },
    {
        id: '41', name: 'Barothir Swamp', roomLevel: '1', set: 'Soloth', extraInfo: null, suppresses: [], monsters: {
            LevelOne: [{name: "Sewer Rat", id: 5, amount: 2},
                {name: "Mercenary", id: 100, amount: 1}],
            LevelTwo: [{name: "Shade", id: 19, amount: 1},
                {name: "Lizard Man", id: 18, amount: 1}],
            LevelThree: [{name: "Fire Demon", id: 22, amount: 1}],
            LevelFour: [],
        }
    },
    {
        id: '42',
        name: 'The Isthalle Portal',
        roomLevel: '1',
        set: 'Soloth',
        extraInfo: null,
        suppresses: [],
        monsters: {
            LevelOne: [{name: "Mercenary", id: 100, amount: 2}],
            LevelTwo: [{name: "Gargoyle", id: 17, amount: 1},
                {name: "Blood Skull", id: 15, amount: 2}],
            LevelThree: [{name: "Manticore", id: 26, amount: 1}],
            LevelFour: [],
        }
    },
    {
        id: '43', name: 'Korog Stronghold', roomLevel: '1', set: 'Soloth', extraInfo: null, suppresses: [], monsters: {
            LevelOne: [{name: "Sewer Rat", id: 5, amount: 1},
                {name: "Armoured Beetle", id: 3, amount: 2}],
            LevelTwo: [],
            LevelThree: [{name: "Orc Wolf Rider", id: 25, amount: 1}],
            LevelFour: [{name: "Venomous Spider", id: 42, amount: 1}],
        }
    },
    {
        id: '44',
        name: 'Qurlathorm',
        roomLevel: '2',
        set: 'Base',
        extraInfo: null,
        suppresses: [],
        monsters: {
            LevelOne: [],
            LevelTwo: [{name: "Level 2 Monster Group", id: 202, amount: 1}],
            LevelThree: [{name: "Level 3 Monster Group", id: 203, amount: 2}],
            LevelFour: [{name: "Level 4 Monster Group", id: 204, amount: 1}],
        }
    },
    {
        id: '45',
        name: 'Lair of the Coramel',
        roomLevel: '2',
        set: 'Base',
        extraInfo: null,
        suppresses: [{type: "Rush", modifier: "Poison"},
            {type: "Melee", modifier: "Poison"},
            {type: "Missile", modifier: "Poison"}],
        monsters: {
            LevelOne: [{name: "Level 1 Monster Group", id: 201, amount: 2}],
            LevelTwo: [],
            LevelThree: [],
            LevelFour: [{name: "Level 4 Monster Group", id: 204, amount: 1}],
        }
    },
    {
        id: '46',
        name: 'The Phaoslay Realm',
        roomLevel: '2',
        set: 'Base',
        extraInfo: null,
        suppresses: [{type: "Rush", modifier: "Stun"},
            {type: "Melee", modifier: "Stun"},
            {type: "Missile", modifier: "Stun"}],
        monsters: {
            LevelOne: [],
            LevelTwo: [{name: "Level 2 Monster Group", id: 202, amount: 2}],
            LevelThree: [{name: "Level 3 Monster Group", id: 203, amount: 1}],
            LevelFour: [{name: "Level 4 Monster Group", id: 204, amount: 1}],
        }
    },
    {
        id: '47',
        name: 'Krhlot',
        roomLevel: '2',
        set: 'Base',
        extraInfo: null,
        suppresses: [],
        monsters: {
            LevelOne: [{name: "Mercenary", id: 100, amount: 4}],
            LevelTwo: [{name: "Troll", id: 12, amount: 2}],
            LevelThree: [{name: "Giant Scorpion", id: 21, amount: 2}],
            LevelFour: [],
        }
    },
    {
        id: '48', name: 'Athenoch Mortuary', roomLevel: '2', set: 'Base', extraInfo: null, suppresses: [], monsters: {
            LevelOne: [{name: "Zombie", id: 6, amount: 2},
                {name: "Skeleton Warrior", id: 2, amount: 2}],
            LevelTwo: [],
            LevelThree: [{name: "Ghoul", id: 20, amount: 2}],
            LevelFour: [{name: "Gelatinous Cube", id: 35, amount: 1}],
        }
    },
    {
        id: '49',
        name: 'Shannotul',
        roomLevel: '2',
        set: 'Base',
        extraInfo: null,
        suppresses: [{type: "Roll", modifier: null}],
        monsters: {
            LevelOne: [{name: "Mercenary", id: 100, amount: 2}],
            LevelTwo: [{name: "Level 2 Monster Group", id: 202, amount: 1}],
            LevelThree: [{name: "Level 3 Monster Group", id: 203, amount: 1}],
            LevelFour: [{name: "Level 4 Monster Group", id: 204, amount: 2}],
        }
    },
    {
        id: '50',
        name: 'Sepulcher of the Sisters',
        roomLevel: '2',
        set: 'Base',
        extraInfo: null,
        suppresses: [],
        monsters: {
            LevelOne: [{name: "Centaur", id: 1, amount: 1},
                {name: "Mercenary", id: 100, amount: 1},
                {name: "Fire Spirit", id: 4, amount: 1}],
            LevelTwo: [{name: "Minotaur", id: 11, amount: 1},
                {name: "Blood Skull", id: 15, amount: 2}],
            LevelThree: [{name: "Vampire Bat", id: 24, amount: 2}],
            LevelFour: [],
        }
    },
    {
        id: '51',
        name: 'Monoliths to Xokarst',
        roomLevel: '2',
        set: 'Base',
        extraInfo: null,
        suppresses: [],
        monsters: {
            LevelOne: [{name: "Mercenary", id: 100, amount: 2}],
            LevelTwo: [{name: "Phantom", id: 13, amount: 1},
                {name: "Flame Wraith", id: 10, amount: 1}],
            LevelThree: [{name: "Fire Demon", id: 22, amount: 2}],
            LevelFour: [{name: "Crypt Spider", id: 32, amount: 1}],
        }
    },
    {
        id: '52',
        name: 'The Covert Monument',
        roomLevel: '2',
        set: 'Base',
        extraInfo: null,
        suppresses: [],
        monsters: {
            LevelOne: [{name: "Level 1 Monster Group", id: 201, amount: 1}],
            LevelTwo: [{name: "Level 2 Monster Group", id: 202, amount: 2}],
            LevelThree: [],
            LevelFour: [{name: "Level 4 Monster Group", id: 204, amount: 1}],
        }
    },
    {
        id: '53',
        name: 'Tombs of Kings',
        roomLevel: '2',
        set: 'Soloth',
        extraInfo: null,
        suppresses: [{type: "Rush", modifier: "Stun"},
            {type: "Melee", modifier: "Stun"},
            {type: "Missile", modifier: "Stun"}],
        monsters: {
            LevelOne: [{name: "Centaur", id: 1, amount: 1},
                {name: "Mercenary", id: 100, amount: 2}],
            LevelTwo: [],
            LevelThree: [{name: "Level 3 Monster Group", id: 203, amount: 1}],
            LevelFour: [{name: "Level 4 Monster Group", id: 204, amount: 1}],
        }
    },
    {
        id: '54', name: 'Nolothag Dungeon', roomLevel: '2', set: 'Soloth', extraInfo: null, suppresses: [], monsters: {
            LevelOne: [],
            LevelTwo: [{name: "Level 2 Monster Group", id: 202, amount: 1}],
            LevelThree: [{name: "Infernal Acolyte", id: 27, amount: 2},
                {name: "Wight", id: 28, amount: 1}],
            LevelFour: [{name: "Level 4 Monster Group", id: 204, amount: 1}],
        }
    },
    {
        id: '55', name: 'Temple of Yagotha', roomLevel: '2', set: 'Soloth', extraInfo: null, suppresses: [], monsters: {
            LevelOne: [{name: "Flame Salamander", id: 8, amount: 1}],
            LevelTwo: [{name: "Minotaur", id: 11, amount: 1}],
            LevelThree: [{name: "Manticore", id: 26, amount: 1},
                {name: "Wight", id: 28, amount: 1},
                {name: "Orc Wolf Raider", id: 25, amount: 2}],
            LevelFour: [],
        }
    },
    {
        id: '56',
        name: 'Labyrinth of Visions',
        roomLevel: '2',
        set: 'Soloth',
        extraInfo: null,
        suppresses: [],
        monsters: {
            LevelOne: [{name: "Skeleton Warrior", id: 2, amount: 1}],
            LevelTwo: [{name: "Gargoyle", id: 17, amount: 1},
                {name: "Shade", id: 19, amount: 1}],
            LevelThree: [{name: "Orc Wolf Raider", id: 25, amount: 2}],
            LevelFour: [{name: "Phoenix", id: 40, amount: 1},
                {name: "Siren", id: 39, amount: 1}],
        }
    },
    {
        id: '57',
        name: 'Chomatha Bridge',
        roomLevel: '2',
        set: 'Soloth',
        extraInfo: null,
        suppresses: [],
        monsters: {
            LevelOne: [{name: "Swamp Orc", id: 9, amount: 3}],
            LevelTwo: [{name: "Level 2 Monster Group", id: 202, amount: 2}],
            LevelThree: [{name: "Vampire Bat", id: 24, amount: 2}],
            LevelFour: [],
        }
    },
    {
        id: '58', name: 'The Breeding Pits', roomLevel: '2', set: 'Soloth', extraInfo: null, suppresses: [], monsters: {
            LevelOne: [{name: "Sewer Rat", id: 5, amount: 3}], LevelTwo: [{name: "Shade", id: 19, amount: 2},
                {name: "Lizard Man", id: 18, amount: 1}], LevelThree: [{name: "Cerberus", id: 23, amount: 1},
                {name: "Ghoul", id: 20, amount: 1}], LevelFour: [],
        }
    },
    {
        id: '59', name: 'Sagomot', roomLevel: '2', set: 'Soloth', extraInfo: null, suppresses: [], monsters: {
            LevelOne: [{name: "Mercenary", id: 100, amount: 4}],
            LevelTwo: [{name: "Skeleton Archer", id: 14, amount: 1},
                {name: "Phantom", id: 13, amount: 2}],
            LevelThree: [],
            LevelFour: [{name: "RemorHaz", id: 37, amount: 1}],
        }
    },
    {
        id: '60', name: 'Lalothost Crypts', roomLevel: '2', set: 'Soloth', extraInfo: null, suppresses: [], monsters: {
            LevelOne: [{name: "Sewer Rat", id: 5, amount: 2},
                {name: "Mercenary", id: 100, amount: 1},
                {name: "Skeleton Warrior", id: 2, amount: 1}],
            LevelTwo: [{name: "Level 2 Monster Group", id: 202, amount: 1}],
            LevelThree: [{name: "Cerberus", id: 23, amount: 1},
                {name: "Manticore", id: 26, amount: 1}],
            LevelFour: [],
        }
    },
    {
        id: '61', name: 'Fortress of Nale', roomLevel: '2', set: 'Soloth', extraInfo: null, suppresses: [], monsters: {
            LevelOne: [{name: "Centaur", id: 1, amount: 1}],
            LevelTwo: [{name: "Skeleton Archer", id: 14, amount: 1}],
            LevelThree: [{name: "Infernal Acolyte", id: 27, amount: 1},
                {name: "Wight", id: 28, amount: 1}],
            LevelFour: [{name: "Rust Monster", id: 41, amount: 1},
                {name: "Siren", id: 39, amount: 1}],
        }
    },
    {
        id: '62',
        name: 'Sacthar Cenotaph',
        roomLevel: '2',
        set: 'Soloth',
        extraInfo: null,
        suppresses: [{type: "Rush", modifier: "Poison"},
            {type: "Melee", modifier: "Poison"},
            {type: "Missile", modifier: "Poison"}],
        monsters: {
            LevelOne: [{name: "Mercenary", id: 100, amount: 3}],
            LevelTwo: [{name: "Level 2 Monster Group", id: 202, amount: 1}],
            LevelThree: [{name: "Level 3 Monster Group", id: 203, amount: 1}],
            LevelFour: [{name: "Level 4 Monster Group", id: 204, amount: 1}],
        }
    },
    {
        id: '63',
        name: 'Cavern of Soloth',
        roomLevel: '2',
        set: 'Soloth',
        extraInfo: null,
        suppresses: [{type: "Roll", modifier: null}],
        monsters: {
            LevelOne: [{name: "Mercenary", id: 100, amount: 1}],
            LevelTwo: [{name: "Level 2 Monster Group", id: 202, amount: 1}],
            LevelThree: [{name: "Manticore", id: 26, amount: 1},
                {name: "Wight", id: 28, amount: 1}],
            LevelFour: [{name: "Rust Monster", id: 41, amount: 1},
                {name: "Elder Vampire", id: 38, amount: 1}],
        }
    },
    {
        id: '64', name: "Vaiel's Manse", roomLevel: '2', set: 'Soloth', extraInfo: null, suppresses: [], monsters: {
            LevelOne: [{name: "Savage Centaur", id: 7, amount: 3}],
            LevelTwo: [{name: "Gargoyle", id: 17, amount: 1},
                {name: "Minotaur", id: 11, amount: 1}],
            LevelThree: [{name: "Manticore", id: 26, amount: 1}],
            LevelFour: [{name: "Dread Scorpion", id: 36, amount: 1}],
        }
    },
    {
        id: '65',
        name: 'Stelloth Crematorium',
        roomLevel: '2',
        set: 'Soloth',
        extraInfo: null,
        suppresses: [{type: "Ice", modifier: null}],
        monsters: {
            LevelOne: [{name: "Fire Spirit", id: 4, amount: 2}],
            LevelTwo: [{name: "Flame Wraith", id: 10, amount: 2}],
            LevelThree: [{name: "Level 3 Monster Group", id: 203, amount: 1}],
            LevelFour: [{name: "Level 4 Monster Group", id: 204, amount: 1}],
        }
    },

];
