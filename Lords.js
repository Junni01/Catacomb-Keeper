
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
      }, {id: 2,
        name: "Troll",
        amount: 2}, {"id": 3,
        name: "Flame Wraith",
        amount: 2}],
      mercenaries: [{
        id: 1,
        name: "Skeleton Warrior"
      }],
      shotSequences: {
        0: [{
          type: "Shield",
          modifier: null
        },
        {
          type: "Then",
          modifier: null},
        {
          type: "Melee",
          modifier: "Stun"},
        {
          type: "Then",
          modifier: null},
        {
          type: "Melee",
          modifier: null}]
      }

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
      }, {id: 10,
        name: "Flame Wraith",
        amount: 2},
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
      shotSequences: {
        0: [
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
        ],
        1: [
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
        ],
        2: [
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

        ],
        3: [
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
        ],
      }

    }

  ];
