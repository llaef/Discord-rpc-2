module.exports = {
    "token": process.env.USER_TOKEN,
    "mode": "game",
    "status": "online",

    "game": {
        "applicationID": process.env.APPLICATION_ID,
        "name": "VALORANT",
        "details": "Unrated (Bind) 4-4",
        "state": "3/5 Playing",
        "timestamps": {
            "start": Math.floor(Date.now() / 1000) - 894 // حساب الوقت (14:54 دقيقة)
        },
        "party": {
            "id": "valorant_party_123",
            "size": [3, 5]
        },
        "secrets": {
            "join": "mystery_join_secret_code"
        }
    }
};
