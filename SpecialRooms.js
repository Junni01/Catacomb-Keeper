let specialRooms = [
    {
        id: 1,
        name: "Izchak the Merchant",
        description:  `
                        <ul>
                        <li>Flip over 6 item cards</li>
                        <li>Heroes may purchase any amount of cards for listed price.</li>
                        <li>Pay 2 gold to see the next card on top of the deck.</li>
                        <li>Pay 2 gold to purchase a map: reveal rest of the rooms.</li>
                        </ul>`
    },
    {
        id: 2,
        name: "Amaranth Inn",
        description:    `
                        <ul><li>Recruit an ally for 10 Gold.</li></ul>
                        `
    },
    {
        id: 3,
        name: "Alewife Tavern",
        description:  `<p>Test your luck to win items. Place 4 orcs, 4 Fire Spirits, 4 Centaurs and 4 Hero pieces into a bag and draw 3. Consult the following table of rewards from top to bottom:</p>
                    <table>
                        <tr>
                            <th>Result</th>
                            <th>Reward</th>
                            
                        </tr>
                        <tr>
                            <td>3 Heroes</td>
                            <td>Gain full health for the chosen hero and their ally (if he or she has
                                one) OR cure all Poison cards assigned to one hero.</td>
                        </tr>
                        <tr>
                            <td>3 of a kind</td>
                            <td>Take an Item card of your choice from the item deck.</td>
                        </tr>
                        <tr>
                            <td>2 Hero pieces</td>
                            <td>Blindly draw 1 Item card (player must take first item they can use).</td>
                        </tr>
                        <tr>
                            <td>3 different coloured pieces</td>
                            <td>Gain 1 health point OR cure 1 Poison card.</td>
                        </tr>
                        <tr>
                            <td>1 Hero piece</td>
                            <td>Gain 1 gold coin from the Treasury.</td>
                        </tr>
                        
                        
                    </table>
                    
                    <p>Each player can bet as many times as they like.Players indicate
                        which hero is gambling for each wager and only that hero wins any rewards
                        which are paid out and applied immediately. Winning players may choose a
                        reward that is lower on the table than the one they qualified for. 
                    </p>`
    }, {
        id: 4,
        name: "Althea the Healer",
        description: `<p>Althea cures 1 Poison card for free (the players
                        decide which hero may discard a Poison card and shuffle
                        it into the poison deck). The heroes may also purhase the
                        following services:</p>
                    <table>
                        <tr>
                            <th>Service</th>
                            <th>Cost</th>
                            <th>Effect</th>
                        </tr>
                        <tr>
                            <td>Heal Hero or Ally</td>
                            <td>3 gold</td>
                            <td>One health point is restored to the hero or ally.</td>
                        </tr>
                        <tr>
                            <td>Cure Poison</td>
                            <td>2 gold</td>
                            <td>A hero is cured of one Poison card</td>
                        </tr>
                        <tr>
                            <td>Resurrect Hero</td>
                            <td>10 gold</td>
                            <td>One dead hero is brought back to life with two health points. The hero returns to life with all of his or her gold coins and any unused Item and/or Spell cards. They may pay to be healed further by the Healer. The resurrected hero starts playing in the next room.</td>
                        </tr>
                    </table>
                    <p>Multiple services can be purchased from the Healer. Allies can be healed by the Healer, but not resurrected.</p>`
    },
    {
        id: 5,
        name: "Altar of Soloth",
        description:  `
                        <ul>
                        <li>Pay 5 Gold coins to make an offering</li>
                        <li>Flip over top item card and take it or discard it to the bottom of the deck.</li>
                        <li>Pay 5 Gold to make another offering and flip over the next item card, but no more.</li>
                        </ul>`
    },
    {
        id: 7,
        name: "Saurath",
        description:  `
                        <ul>
                        <li>Shuffle the item card deck and draw 2 cards</li>
                        <li>Assing the items to heroes if possible.</li>
                        </ul>`
    }
];