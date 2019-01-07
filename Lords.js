
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
      shotSequence: [ {
        first: [{
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
      } ]

    }

  ];
