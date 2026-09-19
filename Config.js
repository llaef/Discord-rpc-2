module.exports = {
    "token": process.env.USER_TOKEN,
    "mode": "game", 
    "status": "online",

    "game": {
        "applicationID": process.env.APPLICATION_ID,
        "name": "Minecraft",
        "details": "Playing Bedrock Edition",
        "state": "Survival Mode - Multiplayer",

        "largeImageKey": "https://cdn.discordapp.com/attachments/1547776611523371028/1549749482835677314/IMG_0806.jpg",
        "largeImageText": "Minecraft Bedrock",

        "smallImageKey": "",
        "smallImageText": "",
        "startTimestamp": Date.now(),
        "endTimestamp": ""
    },
    "twitch": {
        "applicationID": "",
        "url": "",
        "details": "",
        "state": "",
        "largeImageKey": "",
        "largeImageText": "",
        "smallImageKey": "",
        "smallImageText": "",
        "startTimestamp": "",
        "endTimestamp": ""
    },
    "spotify": {
        "name": "",
        "details": "",
        "state": "",
        "largeImageKey": "",
        "largeImageText": "",
        "smallImageKey": "",
        "smallImageText": "",
        "startTimestamp": "",
        "endTimestamp": ""
    }
}
