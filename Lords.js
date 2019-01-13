const lords = [
    {
        id: 0,
        name: "Vasesak The Sorcerer",
        health: 6,
        home: 1,
        set: "Base",
        specialInfo: "",
        suppresses: [],
        nullifies: [],
        reflects: [],
        minions: [{
            id: 1,
            name: "Zombie",
            amount: 4
        }, {
            id: 2,
            name: "Troll",
            amount: 2
        }, {
            "id": 3,
            name: "Flame Wraith",
            amount: 2
        }],
        mercenaries: [{
            id: 1,
            name: "Skeleton Warrior"
        }],
        shotSequences: [
            {
                id: 1,
                sequence: [{
                    type: "Shield",
                    modifier: null
                },
                    {
                        type: "Then",
                        modifier: null
                    },
                    {
                        type: "Melee",
                        modifier: "Stun"
                    },
                    {
                        type: "Then",
                        modifier: null
                    },
                    {
                        type: "Melee",
                        modifier: null
                    }]
            }
        ]

    },
    {
        id: 1,
        name: "Phoshar The Dragon",
        health: 10,
        home: 1,
        set: "Base",
        specialInfo: "",
        suppresses: [],
        nullifies: [],
        reflects: [],
        minions: [{
            id: 4,
            name: "Fire Spirit",
            amount: 4
        }, {
            id: 10,
            name: "Flame Wraith",
            amount: 2
        },
            {
                "id": 21,
                name: "Giant Scorpion",
                amount: 2
            }
        ],
        mercenaries: [{
            id: 4,
            name: "Fire Spirit"
        }],
        shotSequences: [
            {
                id: 1, sequence: [
                    {
                        type: "Melee",
                        modifier: null
                    },
                    {
                        type: "Then",
                        modifier: null
                    },
                    {
                        type: "Fireball",
                        modifier: null
                    },
                    {
                        type: "Then",
                        modifier: null
                    },
                    {
                        type: "Rush",
                        modifier: null
                    },
                ]
            },
            {
                id: 2, sequence: [
                    {
                        type: "Melee",
                        modifier: "Chain"
                    },
                    {
                        type: "Then",
                        modifier: null
                    },
                    {
                        type: "Melee",
                        modifier: "Chain"
                    },
                    {
                        type: "Then",
                        modifier: null
                    },
                    {
                        type: "Melee",
                        modifier: "Chain"
                    },
                    {
                        type: "Then",
                        modifier: null
                    },
                    {
                        type: "Melee",
                        modifier: "Chain"
                    }
                ]
            },
            {
                id: 3, sequence: [
                    {
                        type: "Fireball",
                        modifier: "Chain"
                    },
                    {
                        type: "Then",
                        modifier: null
                    },
                    {
                        type: "Fireball",
                        modifier: "Chain"
                    },
                    {
                        type: "Then",
                        modifier: null
                    },
                    {
                        type: "Fireball",
                        modifier: "Chain"
                    },
                    {
                        type: "Then",
                        modifier: null
                    },
                    {
                        type: "Fireball",
                        modifier: "Chain"
                    }

                ]
            },
            {
                id: 4, sequence: [
                    {
                        type: "Melee",
                        modifier: null
                    },
                    {
                        type: "Then",
                        modifier: null
                    },
                    {
                        type: "Summon",
                        modifier: "Fire Spirit"
                    }
                ]
            }
        ]

    },
    {
        id: 2,
        name: "Hmotha The Lich Lord",
        health: 8,
        home: 1,
        set: "Base",
        specialInfo: "",
        suppresses: [],
        nullifies: [],
        reflects: [],
        minions: [
            {
                id: 2,
                name: "Skeleton Warrior",
                amount: 4
            },
            {
                id: 16,
                name: "Skeleton Archer",
                amount: 2
            },
            {
                "id": 20,
                name: "Ghoul",
                amount: 2
            }
        ],
        mercenaries: [{
            id: 6,
            name: "Zombie"
        }],
        shotSequences: [
            {
                id: 1, sequence: [
                    {
                        type: "Rush",
                        modifier: null
                    },
                    {
                        type: "Then",
                        modifier: null
                    },
                    {
                        type: "Summon",
                        modifier: "Skeleton Warrior"
                    },
                    {
                        type: "Then",
                        modifier: null
                    },
                    {
                        type: "Melee",
                        modifier: null
                    },
                ]
            },
            {
                id: 2, sequence: [
                    {
                        type: "Rush",
                        modifier: null
                    },
                    {
                        type: "Then",
                        modifier: null
                    },
                    {
                        type: "Summon",
                        modifier: "Zombie"
                    },
                    {
                        type: "Then",
                        modifier: null
                    },
                    {
                        type: "Melee",
                        modifier: null
                    }
                ]
            },
            {
                id: 3, sequence: [
                    {
                        type: "Rush",
                        modifier: null
                    },
                    {
                        type: "Then",
                        modifier: null
                    },
                    {
                        type: "Summon",
                        modifier: "Ghoul"
                    }

                ]
            },
            {
                id: 3, sequence: [
                    {
                        type: "Melee",
                        modifier: null
                    },
                    {
                        type: "Then",
                        modifier: null
                    },
                    {
                        type: "Missile",
                        modifier: null
                    }
                ]
            }
        ]

    },
    {
        id: 3,
        name: "Shargila The Gorgon",
        health: 6,
        home: 1,
        set: "Base",
        specialInfo: "",
        suppresses: [],
        nullifies: [],
        reflects: [],
        minions: [{
            id: 1,
            name: "Centaur",
            amount: 4
        }, {
            id: 11,
            name: "Minotaur",
            amount: 2
        },
            {
                "id": 23,
                name: "Cerberus",
                amount: 2
            }
        ],
        mercenaries: [{
            id: 1,
            name: "Centaur"
        }],
        shotSequences: [
            {
                id: 1, sequence: [
                    {
                        type: "Melee",
                        modifier: null
                    },
                    {
                        type: "Then",
                        modifier: null
                    },
                    {
                        type: "Missile",
                        modifier: "Stun"
                    }
                ]
            },
            {
                id: 2, sequence: [
                    {
                        type: "Melee",
                        modifier: "Poison"
                    },
                    {
                        type: "Then",
                        modifier: null
                    },
                    {
                        type: "Melee",
                        modifier: "Poison"
                    }
                ]
            },
            {
                id: 3, sequence: [
                    {
                        type: "Melee",
                        modifier: "Petrify"
                    }

                ]
            }
        ]
    },
    {
        id: 4,
        name: "Surlafeure The Queen of The Underworld",
        health: 10,
        home: 1,
        set: "Soloth",
        specialInfo: "",
        suppresses: [],
        nullifies: [],
        reflects: [],
        minions: [{
            id: 5,
            name: "Sewer Rat",
            amount: 4
        }, {
            id: 10,
            name: "Flame Wraith",
            amount: 2
        },
            {
                "id": 26,
                name: "Manticore",
                amount: 2
            }
        ],
        mercenaries: [{
            id: 5,
            name: "Sewer Rat"
        }],
        shotSequences: [
            {
                id: 1, sequence: [
                    {
                        type: "Melee",
                        modifier: "Regeneration"
                    },
                    {
                        type: "Then",
                        modifier: null
                    },
                    {
                        type: "Melee",
                        modifier: null
                    },
                    {
                        type: "Then",
                        modifier: null
                    },
                    {
                        type: "Teleport",
                        modifier: null
                    },
                ]
            },
            {
                id: 2, sequence: [
                    {
                        type: "Melee",
                        modifier: null
                    },
                    {
                        type: "Then",
                        modifier: null
                    },
                    {
                        type: "Missile",
                        modifier: "Chain"
                    }, {
                        type: "Then",
                        modifier: null
                    },
                    {
                        type: "Missile",
                        modifier: "Chain"
                    }, {
                        type: "Then",
                        modifier: null
                    },
                    {
                        type: "Missile",
                        modifier: "Chain"
                    }, {
                        type: "Then",
                        modifier: null
                    },
                    {
                        type: "Teleport",
                        modifier: null
                    },
                ]
            },
            {
                id: 3, sequence: [
                    {
                        type: "Summon",
                        modifier: "Wight"
                    },
                    {
                        type: "Then",
                        modifier: null
                    },
                    {
                        type: "Melee",
                        modifier: null
                    },
                    {
                        type: "Then",
                        modifier: null
                    },
                    {
                        type: "Teleport",
                        modifier: null
                    }

                ]
            },
            {
                id: 4, sequence: [
                    {
                        type: "Rush",
                        modifier: null
                    },
                    {
                        type: "Then",
                        modifier: null
                    },
                    {
                        type: "Melee",
                        modifier: "Stun"
                    }
                ]
            }
        ]

    },
    {
        id: 5,
        name: "Thaggu The Orc Warchief",
        health: 7,
        home: 1,
        set: "Soloth",
        specialInfo: "",
        suppresses: [],
        nullifies: [],
        reflects: [],
        minions: [{
            id: 11,
            name: "Swamp Orc",
            amount: 4
        },
            {
                id: 25,
                name: "Orc Wolf Rider",
                amount: 2
            },
            {
                "id": 41,
                name: "Rust Monster",
                amount: 1
            },
            {
                "id": 16,
                name: "Pit Viper",
                amount: 2
            }
        ],
        mercenaries: [{
            id: 0,
            name: "Orc"
        }],
        shotSequences: [
            {
                id: 1, sequence: [
                    {
                        type: "Melee",
                        modifier: null
                    },
                    {
                        type: "Then",
                        modifier: null
                    },
                    {
                        type: "Melee",
                        modifier: "Critical"
                    },
                    {
                        type: "Then",
                        modifier: null
                    },
                    {
                        type: "Repeat",
                        modifier: null
                    },
                ]
            },
            {
                id: 2, sequence: [
                    {
                        type: "Melee",
                        modifier: "Critical"
                    },
                    {
                        type: "Then",
                        modifier: null
                    },
                    {
                        type: "Melee",
                        modifier: null
                    },
                    {
                        type: "Then",
                        modifier: null
                    },
                    {
                        type: "Repeat",
                        modifier: null
                    }
                ]
            }
        ]
    },
    {
        id: 6,
        name: "Kaulaurn The Hydra",
        health: 6,
        home: 1,
        set: "Soloth",
        specialInfo: "As the hydra loses health, its attack becomes stronger: First shot sequence 7-8+ health, Second 4-6, third 1-3.",
        suppresses: [],
        nullifies: [],
        reflects: [],
        minions: [{
            id: 3,
            name: "Armoured Beetle",
            amount: 4
        }, {
            id: 17,
            name: "Gargoyle",
            amount: 2
        },
            {
                "id": 27,
                name: "Infernal Acolyte",
                amount: 2
            }
        ],
        mercenaries: [{
            id: 3,
            name: "Armoured Beetle"
        }],
        shotSequences: [
            {
                id: 1,
                sequence: [
                    {
                        type: "Melee",
                        modifier: null
                    },
                    {
                        type: "Then",
                        modifier: null
                    },
                    {
                        type: "Melee",
                        modifier: "Critical"
                    }
                ]
            }
            ,
            {
                id: 2, sequence: [
                    {
                        type: "Melee",
                        modifier: null
                    },
                    {
                        type: "Then",
                        modifier: null
                    },
                    {
                        type: "Fireball",
                        modifier: null
                    },
                    {
                        type: "Melee",
                        modifier: null
                    },
                    {
                        type: "Then",
                        modifier: null
                    },
                    {
                        type: "Fireball",
                        modifier: null
                    }
                ]
            },
            {
                id: 3, sequence: [
                    {
                        type: "Melee",
                        modifier: null
                    },
                    {
                        type: "Then",
                        modifier: null
                    },
                    {
                        type: "Melee",
                        modifier: "Critical"
                    },
                    {
                        type: "Then",
                        modifier: null
                    },
                    {
                        type: "Melee",
                        modifier: "Critical"
                    }
                ]
            }
        ]
    },
    {
        id: 7,
        name: "P'holith The Shapeshifter",
        health: 8,
        home: 1,
        set: "Soloth",
        specialInfo: "",
        suppresses: [],
        nullifies: [],
        reflects: [],
        minions: [{
            id: 8,
            name: "Flame Salamander",
            amount: 4
        }, {
            id: 19,
            name: "Shade",
            amount: 2
        },
            {
                id: 24,
                name: "Vampire Bat",
                amount: 2
            }
        ],
        mercenaries: [{
            id: 8,
            name: "Flame Salamander"
        }],
        shotSequences: [
            {
                id: 1,
                sequence: [

                    {
                        type: "Summon",
                        modifier: "Orc"
                    },
                    {
                        type: "Then",
                        modifier: null
                    },
                    {
                        type: "Open Portal",
                        modifier: null
                    },
                    {
                        type: "Then",
                        modifier: null
                    },
                    {
                        type: "Melee",
                        modifier: "Fear"
                    }
                ]
            },
            {
                id: 2,
                sequence: [
                    {
                        type: "Summon",
                        modifier: "Gargoyle"
                    },
                    {
                        type: "Then",
                        modifier: null
                    },
                    {
                        type: "Open Portal",
                        modifier: null
                    },
                    {
                        type: "Then",
                        modifier: null
                    },
                    {
                        type: "Melee",
                        modifier: "Fear"
                    },
                ]
            },
            {
                id: 3,
                sequence: [
                    {
                        type: "Summon",
                        modifier: "Pit Viper"
                    },
                    {
                        type: "Then",
                        modifier: null
                    },
                    {
                        type: "Open Portal",
                        modifier: null
                    },
                    {
                        type: "Then",
                        modifier: null
                    },
                    {
                        type: "Melee",
                        modifier: "Fear"
                    },
                ]
            },
            {
                id: 4,
                sequence: [
                    {
                        type: "Summon",
                        modifier: "Flame Salamander"
                    },
                    {
                        type: "Then",
                        modifier: null
                    },
                    {
                        type: "Open Portal",
                        modifier: null
                    },
                    {
                        type: "Then",
                        modifier: null
                    },
                    {
                        type: "Melee",
                        modifier: "Fear"
                    },
                ]
            },
            {
                id: 5,
                sequence: [
                    {
                        type: "Rush",
                        modifier: null
                    },
                    {
                        type: "Then",
                        modifier: null
                    },
                    {
                        type: "Melee",
                        modifier: "Critical"
                    }
                ]
            },

        ]

    }
];

