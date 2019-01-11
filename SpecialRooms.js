let specialRooms = [
    {
        id: 1,
        className: "Merchant",
        name: "Izchak the Merchant",
        description:  `<p>
                        When the heroes arrive at Izchak, they may use their gold to buy items. 
                        The overseer shuffles the deck of item cards and flips over 6 cards. 
                        These items are available for purchase, or the players may pay 1 gold coin to see the next card on top of the item deck. 
                        There is no limit as to how many times they may do this.
                        </p>`
    },
    {
        id: 2,
        className: "Inn",
        name: "Amaranth Inn",
        description:    `
                        <p>The heroes stop at the Amaranth Inn and meet with the Innkeeper. They may pool their gold to do any or all of the following activities:</p>
                        <ul>
                            <li>Sleep for a night at the Inn. Pay 8 gold coins and each living hero receives one health (in this case, they can exceed their starting health).</li>
                            <li>Help the Innkeeper clear out his cellar. Pay 8 gold coins and each living hero receives one of each of the following unused items from the item deck: Vaiel's Urn, Healing Salve, Raisthrim's Potion, and Cloak of Invisibility. Any left over items are shuffled back into the item deck.</li>
                            <li>Enjoy a meal in the hall and meet fellow travellers. Pay 10 gold coins to recruit an ally. Shuffle all unused Hero Portrait cards together. Randomly draw one card: this is the ally that may be recruited.</li>            
                        </ul>
                        `
    },
    {
        id: 3,
        className: "Tavern",
        name: "Alewife Tavern",
        description:  `<p>Test your luck to win items, regain health or be cures of poison. Place 4 orcs, 4 Fire Spirits, 4 Centaurs and 4 Hero pieces into a bag. Heroes may pay 2 gold coins to blindly pull 3 pieces from the bag. Consult the following table of rewards from top to bottom:</p>
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
        className: "Healer",
        name: "Althea the Healer",
        description: `<p>Althea offers rest and relief to the heroes. She will cure on poison card for free. She also enables the heroes to obtain the following services in exchange for and offering</p>
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
                            <td>One dead hero is brought back to life with two health points. The hero returns to life with all of his or her gold coins and any unused Item and/or Spell cards.</td>
                        </tr>
                    </table>
                    <p>Multiple services can be purchased from the Healer. Allies can be healed by the Healer, but not resurrected.</p>`
    },
    {
        id: 5,
        name: "Altar of Soloth",
        className: "Altar",
        description:  `
                        <p>Pay 5 Gold coins to make an offering:
                        Flip over top item card and take it or discard it to the bottom of the deck.
                        Pay 5 Gold to make another offering and flip over the next item card, but only once.
                        </p>`
    }
];