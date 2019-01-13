var monsters = [
    {
        id: 0,
        name: 'Orc',
        family: 'Dungeon',
        level: 1,
        health: 1,
        reward: 1,
        set: 'Base',
        extraInfo: null,
        isShadow: false,
        discSize: 'Medium',
        discColor: 'Green',
        nullifies: [],
        reflects: [],
        shotSequences: [{
            id: 1,
            sequence: [{type: "Melee", modifier: null}]
        },
            {
                id: 2,
                sequence: [{type: "Missile", modifier: null}]
            }]
    },
    {
        id: 1,
        name: 'Centaur',
        family: 'Mythological',
        level: 1,
        health: 1,
        reward: 1,
        set: 'Base',
        extraInfo: null,
        isShadow: false,
        discSize: 'Medium',
        discColor: 'Blue',
        nullifies: [],
        reflects: [],
        shotSequences: [{
            id: 1,
            sequence: [{type: "Rush", modifier: null}, {type: "Then", modifier: null}, {
                type: "Missile",
                modifier: null
            }]
        }]
    },
    {
        id: 2,
        name: 'Skeleton Warrior',
        family: 'Undead',
        level: 1,
        health: 1,
        reward: 1,
        set: 'Base',
        extraInfo: null,
        isShadow: false,
        discSize: 'Medium',
        discColor: 'Grey',
        nullifies: [{type: "Missile", modifier: null}],
        reflects: [],
        shotSequences: [{
            id: 1,
            sequence: [{type: "Melee", modifier: null}]
        }]
    },
    {
        id: 3,
        name: 'Armoured Beetle',
        family: 'Vermin',
        level: 1,
        health: 1,
        reward: 1,
        set: 'Base',
        extraInfo: null,
        isShadow: false,
        discSize: 'Small',
        discColor: 'Brown',
        nullifies: [{type: "Missile", modifier: null}],
        reflects: [],
        shotSequences: [{
            id: 1,
            sequence: [{type: "Melee", modifier: null}]
        },
            {
                id: 2,
                sequence: [{type: "Rush", modifier: "Poison"}]
            }]
    },
    {
        id: 4,
        name: 'Fire Spirit',
        family: 'Infernal',
        level: 1,
        health: 1,
        reward: 1,
        set: 'Base',
        extraInfo: "Transforms into fire column",
        isShadow: false,
        discSize: 'Medium',
        discColor: 'Orange',
        nullifies: [],
        reflects: [],
        shotSequences: [{
            id: 1,
            sequence: [{type: "Melee", modifier: null}]
        },
            {
                id: 2,
                sequence: [{type: "Melee", modifier: "Transform"}]
            }]
    },
    {
        id: 5,
        name: 'Sewer Rat',
        family: 'Vermin',
        level: 1,
        health: 1,
        reward: 1,
        set: 'Base',
        extraInfo: null,
        isShadow: false,
        discSize: 'Small',
        discColor: 'Brown',
        nullifies: [],
        reflects: [],
        shotSequences: [{
            id: 1,
            sequence: [{type: "Melee", modifier: "Poison"}]
        }]
    },
    {
        id: 6,
        name: 'Zombie',
        family: 'Undead',
        level: 1,
        health: 1,
        reward: 1,
        set: 'Base',
        extraInfo: null,
        isShadow: false,
        discSize: 'Medium',
        discColor: 'Grey',
        nullifies: [],
        reflects: [],
        shotSequences: [{
            id: 1,
            sequence: [{type: "Melee", modifier: null}]
        }]
    },
    {
        id: 7,
        name: 'Savage Centaur',
        family: 'Mythological',
        level: 1,
        health: 1,
        reward: 1,
        set: 'Soloth',
        extraInfo: null,
        isShadow: false,
        discSize: 'Medium',
        discColor: 'Blue',
        nullifies: [],
        reflects: [],
        shotSequences: [{
            id: 1,
            sequence: [{type: "Rush", modifier: null}, {type: "Missile", modifier: "Poison"}]
        }]
    },
    {
        id: 8,
        name: 'Flame Salamander',
        family: 'Infernal',
        level: 1,
        health: 1,
        reward: 1,
        set: 'Soloth',
        extraInfo: null,
        isShadow: false,
        discSize: 'Medium',
        discColor: 'Orange',
        nullifies: [],
        reflects: [],
        shotSequences: [{
            id: 1,
            sequence: [{type: "Melee", modifier: null}]
        },
            {
                id: 2,
                sequence: [{type: "Fireball", modifier: null}]
            }]
    },
    {
        id: 9,
        name: 'Swamp Orc',
        family: 'Dungeon',
        level: 1,
        health: 1,
        reward: 1,
        set: 'Soloth',
        extraInfo: null,
        isShadow: false,
        discSize: 'Medium',
        discColor: 'Green',
        nullifies: [],
        reflects: [],
        shotSequences: [{
            id: 1,
            sequence: [{type: "Rush", modifier: null}, {type: "Melee", modifier: null}]
        },
            {
                id: 2,
                sequence: [{type: "Rush", modifier: null}, {type: "Missile", modifier: null}]
            }]
    },
    {
        id: 10,
        name: 'Flame Wraith',
        family: 'Infernal',
        level: 2,
        health: 2,
        reward: 2,
        set: 'Base',
        extraInfo: null,
        isShadow: false,
        discSize: 'Medium',
        discColor: 'Orange',
        nullifies: [],
        reflects: [],
        shotSequences: [{
            id: 1,
            sequence: [{type: "Melee", modifier: null}]
        },
            {
                id: 2,
                sequence: [{type: "Rush", modifier: null}, {type: "Fireball", modifier: null}]
            }]
    },
    {
        id: 11,
        name: 'Minotaur',
        family: 'Mythological',
        level: 2,
        health: 2,
        reward: 2,
        set: 'Base',
        extraInfo: null,
        isShadow: false,
        discSize: 'Medium',
        discColor: 'Blue',
        nullifies: [],
        reflects: [{type: "Missile", modifier: null}],
        shotSequences: [{
            id: 1,
            sequence: [{type: "Rush", modifier: null}, {type: "Melee", modifier: null}]
        }]
    },
    {
        id: 12,
        name: 'Troll',
        family: 'Dungeon',
        level: 2,
        health: 2,
        reward: 2,
        set: 'Base',
        extraInfo: null,
        isShadow: false,
        discSize: 'Medium',
        discColor: 'Green',
        nullifies: [],
        reflects: [],
        shotSequences: [{
            id: 1,
            sequence: [{type: "Melee", modifier: "Regeneration"}]
        }]
    },
    {
        id: 13,
        name: 'Phantom',
        family: 'Infernal',
        level: 2,
        health: 0,
        reward: 2,
        set: 'Base',
        extraInfo: "Phantom Monster",
        isShadow: true,
        discSize: 'Medium',
        discColor: 'Orange',
        nullifies: [],
        reflects: [],
        shotSequences: [{
            id: 1,
            sequence: [{type: "Rush", modifier: null}, {type: "Missile", modifier: "Fear"}]
        }]
    },
    {
        id: 14,
        name: 'Skeleton Archer',
        family: 'Undead',
        level: 2,
        health: 2,
        reward: 2,
        set: 'Base',
        extraInfo: null,
        isShadow: false,
        discSize: 'Medium',
        discColor: 'Grey',
        nullifies: [],
        reflects: [],
        shotSequences: [{
            id: 1,
            sequence: [{type: "Melee", modifier: null}]
        },
            {
                id: 2,
                sequence: [{type: "Missile", modifier: "Stun"}]
            }]
    },
    {
        id: 15,
        name: 'Blood Skull',
        family: 'Vermin',
        level: 2,
        health: 0,
        reward: 2,
        set: 'Base',
        extraInfo: null,
        isShadow: true,
        discSize: 'Small',
        discColor: 'Brown',
        nullifies: [],
        reflects: [],
        shotSequences: [{
            id: 1,
            sequence: [{type: "Melee", modifier: "Fear"}]
        }]
    },
    {
        id: 16,
        name: 'Pit Viper',
        family: 'Vermin',
        level: 2,
        health: 1,
        reward: 2,
        set: 'base',
        extraInfo: null,
        isShadow: false,
        discSize: 'Small',
        discColor: 'Brown',
        nullifies: [],
        reflects: [],
        shotSequences: [{
            id: 1,
            sequence: [{type: "Missile", modifier: "Poison"}]
        },
            {
                id: 2,
                sequence: [{type: "Rush", modifier: null}, {type: "Melee", modifier: "Poison"}]
            }]
    },
    {
        id: 17,
        name: 'Gargoyle',
        family: 'Mythological',
        level: 2,
        health: 2,
        reward: 2,
        set: 'Soloth',
        extraInfo: null,
        isShadow: false,
        discSize: 'Medium',
        discColor: 'Blue',
        nullifies: [{type: "Missile", modifier: null}],
        reflects: [],
        shotSequences: [{
            id: 1,
            sequence: [{type: "Melee", modifier: null}, {type: "Rush", modifier: null}]
        }]
    },
    {
        id: 18,
        name: 'Lizard Man',
        family: 'Dungeon',
        level: 2,
        health: 2,
        reward: 2,
        set: 'Soloth',
        extraInfo: null,
        isShadow: false,
        discSize: 'Medium',
        discColor: 'Green',
        nullifies: [],
        reflects: [],
        shotSequences: [{
            id: 1,
            sequence: [{type: "Melee", modifier: null}]
        },
            {
                id: 2,
                sequence: [{type: "Repeat", modifier: null}]
            }]
    },
    {
        id: 19,
        name: 'Shade',
        family: 'Undead',
        level: 2,
        health: 0,
        reward: 2,
        set: 'Soloth',
        extraInfo: null,
        isShadow: true,
        discSize: 'Medium',
        discColor: 'Grey',
        nullifies: [],
        reflects: [],
        shotSequences: [{
            id: 1,
            sequence: [{type: "Melee", modifier: "Stun"}]
        }]
    },
    {
        id: 20,
        name: 'Ghoul',
        family: 'Undead',
        level: 3,
        health: 2,
        reward: 3,
        set: 'Base',
        extraInfo: null,
        isShadow: false,
        discSize: 'Large',
        discColor: 'Grey',
        nullifies: [],
        reflects: [],
        shotSequences: [{
            id: 1,
            sequence: [{type: "Melee", modifier: null}, {type: "Melee", modifier: "Stun"}]
        }]
    },
    {
        id: 21,
        name: 'Giant Scorpion',
        family: 'Dungeon',
        level: 3,
        health: 2,
        reward: 3,
        set: 'Base',
        extraInfo: null,
        isShadow: false,
        discSize: 'Large',
        discColor: 'Green',
        nullifies: [],
        reflects: [],
        shotSequences: [{
            id: 1,
            sequence: [{type: "Rush", modifier: null}, {type: "Melee", modifier: "Critical"}]
        }]
    },
    {
        id: 22,
        name: 'Fire Demon',
        family: 'Infernal',
        level: 3,
        health: 2,
        reward: 3,
        set: 'Base',
        extraInfo: null,
        isShadow: false,
        discSize: 'Large',
        discColor: 'Orange',
        nullifies: [{type: "Missile", modifier: null}, {type: "Ice", modifier: null}, {
            type: "Fireball",
            modifier: null
        }],
        reflects: [],
        shotSequences: [{
            id: 1,
            sequence: [{type: "Melee", modifier: "Fear"}]
        },
            {
                id: 2,
                sequence: [{type: "Fireball", modifier: "Chain"}, {
                    type: "Fireball",
                    modifier: "Chain"
                }, {type: "Fireball", modifier: "Chain"}]
            }]
    },
    {
        id: 23,
        name: 'Cerberus',
        family: 'Mythological',
        level: 3,
        health: 2,
        reward: 3,
        set: 'Base',
        extraInfo: null,
        isShadow: false,
        discSize: 'Large',
        discColor: 'Blue',
        nullifies: [],
        reflects: [],
        shotSequences: [{
            id: 1,
            sequence: [{type: "Rush", modifier: null}, {type: "Melee", modifier: null}, {
                type: "Missile",
                modifier: "Chain"
            }, {type: "Missile", modifier: "Chain"}]
        }]
    },
    {
        id: 24,
        name: 'Vampire Bat',
        family: 'Vermin',
        level: 3,
        health: 2,
        reward: 3,
        set: 'Base',
        extraInfo: null,
        isShadow: false,
        discSize: 'Small',
        discColor: 'Brown',
        nullifies: [],
        reflects: [],
        shotSequences: [{
            id: 1,
            sequence: [{type: "Melee", modifier: null}, {type: "Melee", modifier: "Poison"}]
        }]
    },
    {
        id: 25,
        name: 'Orc Wolf Rider',
        family: 'Dungeon',
        level: 3,
        health: 2,
        reward: 3,
        set: 'Soloth',
        extraInfo: null,
        isShadow: false,
        discSize: 'Large',
        discColor: 'Green',
        nullifies: [],
        reflects: [],
        shotSequences: [{
            id: 1,
            sequence: [{type: "Melee", modifier: null}, {type: "Melee", modifier: null}]
        },
            {
                id: 2,
                sequence: [{type: "Rush", modifier: null}, {type: "Missile", modifier: "Critical"}]
            }]
    },
    {
        id: 26,
        name: 'Manticore',
        family: 'Mythological',
        level: 3,
        health: 2,
        reward: 3,
        set: 'Soloth',
        extraInfo: null,
        isShadow: false,
        discSize: 'Large',
        discColor: 'Blue',
        nullifies: [],
        reflects: [],
        shotSequences: [{
            id: 1,
            sequence: [{type: "Melee", modifier: null}, {type: "Fireball", modifier: null}, {
                type: "Melee",
                modifier: null
            }]
        }]
    },
    {
        id: 27,
        name: 'Infernal Acolyte',
        family: 'Infernal',
        level: 3,
        health: 2,
        reward: 3,
        set: 'Soloth',
        extraInfo: "Summons Fire Spirit",
        isShadow: false,
        discSize: 'Medium',
        discColor: 'Orange',
        nullifies: [{type: "Fireball", modifier: null}],
        reflects: [],
        shotSequences: [{
            id: 1,
            sequence: [{type: "Melee", modifier: null}, {type: "Melee", modifier: null}]
        },
            {
                id: 2,
                sequence: [{type: "Rush", modifier: null}, {type: "Summon", modifier: "Fire Spirit"}]
            }]
    },
    {
        id: 28,
        name: 'Wight',
        family: 'Undead',
        level: 3,
        health: 2,
        reward: 3,
        set: 'Soloth',
        extraInfo: null,
        isShadow: false,
        discSize: 'Medium',
        discColor: 'Grey',
        nullifies: [],
        reflects: [],
        shotSequences: [{
            id: 1,
            sequence: [{type: "Melee", modifier: "Regeneration"}, {type: "Melee", modifier: null}]
        }]
    },
    {
        id: 29,
        name: 'Owl Bear',
        family: 'Mythological',
        level: 4,
        health: 4,
        reward: 5,
        set: 'Base',
        extraInfo: null,
        isShadow: false,
        discSize: 'Large',
        discColor: 'Blue',
        nullifies: [],
        reflects: [],
        shotSequences: [{
            id: 1,
            sequence: [{type: "Melee", modifier: "Regeneration"}, {type: "Melee", modifier: "Fear"}, {
                type: "Target",
                modifier: null
            }]
        }]
    },
    {
        id: 30,
        name: 'Swordmaster Ghoul',
        family: 'Undead',
        level: 4,
        health: 4,
        reward: 5,
        set: 'Base',
        extraInfo: null,
        isShadow: false,
        discSize: 'Large',
        discColor: 'Grey',
        nullifies: [{type: "Missile", modifier: null}],
        reflects: [],
        shotSequences: [{
            id: 1,
            sequence: [{type: "Melee", modifier: "Chain"}, {type: "Melee", modifier: "Chain"}, {
                type: "Melee",
                modifier: "Chain"
            }]
        }]
    },
    {
        id: 31,
        name: 'Fenris',
        family: 'Vermin',
        level: 4,
        health: 4,
        reward: 5,
        set: 'Base',
        extraInfo: null,
        isShadow: false,
        discSize: 'Large',
        discColor: 'Brown',
        nullifies: [{type: "Ice", modifier: null}],
        reflects: [],
        shotSequences: [{
            id: 1,
            sequence: [{type: "Melee", modifier: "Poison"}]
        },
            {
                id: 2,
                sequence: [{type: "Rush", modifier: null}, {type: "Bite", modifier: null}, {
                    type: "Rush",
                    modifier: null
                }]
            }]
    },
    {
        id: 32,
        name: 'Crypt Spider',
        family: 'Undead',
        level: 4,
        health: 4,
        reward: 5,
        set: 'Base',
        extraInfo: null,
        isShadow: false,
        discSize: 'Large',
        discColor: 'Grey',
        nullifies: [],
        reflects: [],
        shotSequences: [{
            id: 1,
            sequence: [{type: "Melee", modifier: "Regeneration"}]
        },
            {
                id: 2,
                sequence: [{type: "Rush", modifier: null}, {type: "Missile", modifier: "Stun"}, {
                    type: "Missile",
                    modifier: "Stun"
                }]
            }]
    },
    {
        id: 33,
        name: 'Rakshasa',
        family: 'Infernal',
        level: 4,
        health: 4,
        reward: 5,
        set: 'Base',
        extraInfo: null,
        isShadow: false,
        discSize: 'Large',
        discColor: 'Orange',
        nullifies: [],
        reflects: [],
        shotSequences: [{
            id: 1,
            sequence: [{type: "Melee", modifier: "Critical"}]
        },
            {
                id: 2,
                sequence: [{type: "Melee", modifier: "Stun"}, {type: "Teleport", modifier: null}]
            }]
    },
    {
        id: 34,
        name: 'Roal',
        family: 'Dungeon',
        level: 4,
        health: 4,
        reward: 5,
        set: 'Base',
        extraInfo: null,
        isShadow: false,
        discSize: 'Large',
        discColor: 'Green',
        nullifies: [{type: "Ice", modifier: null}],
        reflects: [],
        shotSequences: [{
            id: 1,
            sequence: [{type: "Roll", modifier: "Critical"}]
        },
            {
                id: 2,
                sequence: [{type: "Rush", modifier: null}, {type: "Roll", modifier: null}]
            },
            {
                id: 3,
                sequence: [{type: "Melee", modifier: null}]
            }]
    },
    {
        id: 35,
        name: 'Gelatinous Cube',
        family: 'Dungeon',
        level: 4,
        health: 4,
        reward: 5,
        set: 'Base',
        extraInfo: null,
        isShadow: false,
        discSize: 'Cube',
        discColor: 'Green',
        nullifies: [{type: "Missile", modifier: null}, {type: "Ice", modifier: null}, {
            type: "Fireball",
            modifier: null
        }],
        reflects: [],
        shotSequences: [{
            id: 1,
            sequence: [{type: "See Card", modifier: null}]
        }]
    },
    {
        id: 36,
        name: 'Dread Scorpion',
        family: 'Mythological',
        level: 4,
        health: 4,
        reward: 5,
        set: 'Soloth',
        extraInfo: null,
        isShadow: false,
        discSize: 'Medium',
        discColor: 'Blue',
        nullifies: [],
        reflects: [],
        shotSequences: [{
            id: 1,
            sequence: [{type: "Melee", modifier: "Fear"}, {type: "Melee", modifier: "Poison"}]
        }]
    },
    {
        id: 37,
        name: 'RemorHaz',
        family: 'Vermin',
        level: 4,
        health: 4,
        reward: 5,
        set: 'Soloth',
        extraInfo: null,
        isShadow: false,
        discSize: 'Large',
        discColor: 'Brown',
        nullifies: [{type: "Missile", modifier: null}, {type: "Fireball", modifier: null}],
        reflects: [],
        shotSequences: [{
            id: 1,
            sequence: [{type: "Melee", modifier: null}, {type: "Devour", modifier: null}]
        }]
    },
    {
        id: 38,
        name: 'Elder Vampire',
        family: 'Undead',
        level: 4,
        health: 4,
        reward: 5,
        set: 'Soloth',
        extraInfo: null,
        isShadow: false,
        discSize: 'Medium',
        discColor: 'Grey',
        nullifies: [{type: "Missile", modifier: null}, {type: "Ice", modifier: null}],
        reflects: [],
        shotSequences: [{
            id: 1,
            sequence: [{type: "Melee", modifier: "Regeneration"}, {type: "Summon", modifier: "Skeleton Warrior"}]
        },
            {
                id: 2,
                sequence: [{type: "Melee", modifier: "Stun"}, {type: "Summon", modifier: "Skeleton Warrior"}]
            }]
    },
    {
        id: 39,
        name: 'Siren',
        family: 'Mythological',
        level: 4,
        health: 4,
        reward: 5,
        set: 'Soloth',
        extraInfo: "Suppresses Missile, Ice, Fireball and Target until Killed.",
        isShadow: false,
        discSize: 'Medium',
        discColor: 'Blue',
        nullifies: [],
        reflects: [],
        shotSequences: [{
            id: 1,
            sequence: [{type: "Melee", modifier: null}]
        }]
    },
    {
        id: 40,
        name: 'Phoenix',
        family: 'Infernal',
        level: 4,
        health: 4,
        reward: 5,
        set: 'Soloth',
        extraInfo: "Can only die if killed after all other monsters, Drops Phoenix Feather Item",
        isShadow: false,
        discSize: 'Large',
        discColor: 'Orange',
        nullifies: [],
        reflects: [],
        shotSequences: [{
            id: 1,
            sequence: [{type: "Melee", modifier: null}, {type: "Melee", modifier: "Fear"}]
        }]
    },
    {
        id: 41,
        name: 'Rust Monster',
        family: 'Dungeon',
        level: 4,
        health: 4,
        reward: 5,
        set: 'Soloth',
        extraInfo: null,
        isShadow: false,
        discSize: 'Medium',
        discColor: 'Green',
        nullifies: [],
        reflects: [],
        shotSequences: [{
            id: 1,
            sequence: [{type: "Rush", modifier: null}, {type: "Melee", modifier: "Corrosion"}, {
                type: "Melee",
                modifier: null
            }]
        }]
    },
    {
        id: 42,
        name: 'Venomous Spider',
        family: 'Vermin',
        level: 4,
        health: 4,
        reward: 5,
        set: 'Soloth',
        extraInfo: null,
        isShadow: false,
        discSize: 'Large',
        discColor: 'Brown',
        nullifies: [],
        reflects: [],
        shotSequences: [{
            id: 1,
            sequence: [{type: "Melee", modifier: "Stun"}, {type: "Rush", modifier: null}, {
                type: "Melee",
                modifier: "Poison (2)"
            }, {type: "Rush", modifier: null}]
        }]
    },
    {
        id: 43,
        name: 'Wyvern',
        family: 'Vermin',
        level: 4,
        health: 4,
        reward: 5,
        set: 'Soloth',
        extraInfo: null,
        isShadow: false,
        discSize: 'Large',
        discColor: 'Brown',
        nullifies: [],
        reflects: [],
        shotSequences: [{
            id: 1,
            sequence: [{type: "Melee", modifier: "Poison (2)"}, {type: "Melee", modifier: null}]
        },
            {
                id: 2,
                sequence: [{type: "Giant Fireball", modifier: null}, {type: "Melee", modifier: null}]
            }]
    }


]
