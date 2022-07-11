function createMedalTable(medals) {
    // Parse the medal data to produce a medaltable
    // The winner gets 3 points, second place 2 points and third place 1 point

    const medalTable = {}

    // looping over disciplines podium results
    for (discipline of medals) {

        // this loop assigns value based on the place on the podium to a specific country in medalTable object
        for (let i = 0; i < discipline.podium.length; i++) {

            const countryOnPodium = discipline.podium[i].split(".");

            if (medalTable[countryOnPodium[1]] === undefined) {
                medalTable[countryOnPodium[1]] = 0;
            }
            switch (countryOnPodium[0]) {
                case "1":
                    medalTable[countryOnPodium[1]] += 3
                    break;
                case "2":
                    medalTable[countryOnPodium[1]] += 2
                    break;
                case "3":
                    medalTable[countryOnPodium[1]] += 1
                    break;
                default:
            }
        }
    }

    return medalTable;
}

describe("Medal Table Generator", () => {
    // Test function, please do not edit
    it("creates correct data structure ", () => {
        // Input data
        const medals = [{
            sport: "cycling",
            podium: ["1.China", "2.Germany", "3.ROC"]
        },
        {
            sport: "fencing",
            podium: ["1.ROC", "2.France", "3.Italy"]
        },
        {
            sport: "high jump",
            podium: ["1.Italy", "1.Qatar", "3.Belarus"]
        },
        {
            sport: "swimming",
            podium: ["1.USA", "2.France", "3.Brazil"]
        }
        ];

        // Expected output data
        const medalTable = {
            "Italy": 4,
            "France": 4,
            "ROC": 4,
            "USA": 3,
            "Qatar": 3,
            "China": 3,
            "Germany": 2,
            "Brazil": 1,
            "Belarus": 1,
        };

        const actualResult = createMedalTable(medals);
        expect(actualResult).toMatchObject(medalTable);
    });
});