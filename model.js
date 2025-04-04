// MODEL
const model = {
    page: "summoners", 
    input: {
        name: "",
        winRate: "",
        gamesPlayed: "",
        level: "",
        rank: "",
        csPerMin: ""
    },
    data: {
        lastGamesSummoners: [], 
        
        
        summoners: [
            { 
                name: "Player1", 
                winRate: 55, 
                gamesPlayed: 200, 
                level: 150, 
                rank: "Platinum 3", 
                csPerMin: 7.5, 
                games: [
                    { outcome: "Win", kills: 10, deaths: 3, assists: 5, cs: 150, gameDuration: 20 },
                    { outcome: "Loss", kills: 7, deaths: 5, assists: 8, cs: 120, gameDuration: 22 },
                    { outcome: "Win", kills: 12, deaths: 2, assists: 9, cs: 160, gameDuration: 18 },
                    { outcome: "Loss", kills: 6, deaths: 6, assists: 4, cs: 130, gameDuration: 25 },
                    { outcome: "Win", kills: 14, deaths: 5, assists: 7, cs: 140, gameDuration: 20 },
                    { outcome: "Win", kills: 9, deaths: 4, assists: 6, cs: 145, gameDuration: 19 },
                    { outcome: "Loss", kills: 5, deaths: 7, assists: 8, cs: 110, gameDuration: 23 },
                    { outcome: "Win", kills: 11, deaths: 3, assists: 10, cs: 150, gameDuration: 21 },
                    { outcome: "Loss", kills: 8, deaths: 6, assists: 5, cs: 120, gameDuration: 20 },
                    { outcome: "Win", kills: 10, deaths: 2, assists: 11, cs: 160, gameDuration: 18 }
                ]
            },
            { 
                name: "Player2", 
                winRate: 48, 
                gamesPlayed: 300, 
                level: 120, 
                rank: "Gold 2",
                csPerMin: 6.8, 
                games: [
                    { outcome: "Loss", kills: 5, deaths: 2, assists: 10, cs: 140, gameDuration: 23 },
                    { outcome: "Win", kills: 6, deaths: 4, assists: 9, cs: 150, gameDuration: 20 },
                    { outcome: "Loss", kills: 7, deaths: 6, assists: 5, cs: 130, gameDuration: 25 },
                    { outcome: "Win", kills: 10, deaths: 3, assists: 7, cs: 160, gameDuration: 22 },
                    { outcome: "Win", kills: 8, deaths: 5, assists: 12, cs: 140, gameDuration: 21 },
                    { outcome: "Loss", kills: 4, deaths: 7, assists: 6, cs: 110, gameDuration: 26 },
                    { outcome: "Win", kills: 11, deaths: 2, assists: 10, cs: 150, gameDuration: 20 },
                    { outcome: "Loss", kills: 9, deaths: 6, assists: 8, cs: 120, gameDuration: 24 },
                    { outcome: "Win", kills: 7, deaths: 4, assists: 5, cs: 135, gameDuration: 22 },
                    { outcome: "Loss", kills: 6, deaths: 3, assists: 9, cs: 140, gameDuration: 20 }
                ]
            },
            { 
                name: "Faker", 
                winRate: 65, 
                gamesPlayed: 800, 
                level: 250, 
                rank: "Challenger 1000 LP", 
                csPerMin: 8.4, 
                games: [
                    { outcome: "Win", kills: 15, deaths: 2, assists: 10, cs: 180, gameDuration: 20 },
                    { outcome: "Win", kills: 12, deaths: 1, assists: 8, cs: 160, gameDuration: 18 },
                    { outcome: "Win", kills: 18, deaths: 3, assists: 12, cs: 200, gameDuration: 22 },
                    { outcome: "Win", kills: 14, deaths: 2, assists: 7, cs: 175, gameDuration: 20 },
                    { outcome: "Win", kills: 16, deaths: 1, assists: 9, cs: 190, gameDuration: 21 },
                    { outcome: "Win", kills: 13, deaths: 3, assists: 11, cs: 170, gameDuration: 19 },
                    { outcome: "Loss", kills: 10, deaths: 5, assists: 6, cs: 160, gameDuration: 22 },
                    { outcome: "Win", kills: 20, deaths: 2, assists: 14, cs: 210, gameDuration: 20 },
                    { outcome: "Win", kills: 17, deaths: 4, assists: 9, cs: 180, gameDuration: 19 },
                    { outcome: "Win", kills: 14, deaths: 1, assists: 10, cs: 160, gameDuration: 18 }
                ]
            },
            { 
                name: "Dopa", 
                winRate: 70, 
                gamesPlayed: 900, 
                level: 280, 
                rank: "Challenger 1200 LP",
                csPerMin: 9.2, 
                games: [
                    { outcome: "Win", kills: 20, deaths: 1, assists: 12, cs: 220, gameDuration: 24 },
                    { outcome: "Win", kills: 18, deaths: 2, assists: 10, cs: 210, gameDuration: 23 },
                    { outcome: "Win", kills: 25, deaths: 3, assists: 15, cs: 240, gameDuration: 26 },
                    { outcome: "Win", kills: 22, deaths: 1, assists: 11, cs: 230, gameDuration: 25 },
                    { outcome: "Win", kills: 19, deaths: 2, assists: 13, cs: 220, gameDuration: 24 },
                    { outcome: "Win", kills: 21, deaths: 3, assists: 14, cs: 230, gameDuration: 22 },
                    { outcome: "Win", kills: 23, deaths: 1, assists: 16, cs: 240, gameDuration: 23 },
                    { outcome: "Loss", kills: 17, deaths: 5, assists: 9, cs: 180, gameDuration: 24 },
                    { outcome: "Win", kills: 26, deaths: 2, assists: 14, cs: 250, gameDuration: 25 },
                    { outcome: "Win", kills: 24, deaths: 3, assists: 12, cs: 230, gameDuration: 23 }
                ]
            }
        ]
    }
};