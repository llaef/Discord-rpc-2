const { Client, RichPresence } = require("discord.js-selfbot-v13");
const config = require("./config.js");

const client = new Client({
    checkUpdate: false,
    presence: {
        status: config.status || "online",
        afk: true
    }
});

// تثبيت وقت البداية لكي لا يعود للصفر مع كل تحديث
const startTime = Date.now();

client.on("ready", async () => {
    console.log(`Logged in successfully as ${client.user.tag}!`);

    const updateActivity = async () => {
        try {
            if (config.mode === "game" && config.game) {
                const gameConfig = config.game;
                
                const rpc = new RichPresence(client)
                    .setApplicationId(gameConfig.applicationID)
                    .setType("PLAYING")
                    .setName(gameConfig.name)
                    .setDetails(gameConfig.details)
                    .setState(gameConfig.state);

                if (gameConfig.largeImageKey) {
                    if (gameConfig.largeImageKey.startsWith("http")) {
                        try {
                            const ai = await RichPresence.getExternal(client, gameConfig.applicationID, gameConfig.largeImageKey);
                            if (ai && ai[0]) {
                                rpc.setAssetsLargeImage(ai[0].external_asset_path);
                            }
                        } catch (err) {
                            console.error("Failed to load external asset:", err);
                        }
                    } else {
                        rpc.setAssetsLargeImage(gameConfig.largeImageKey);
                    }

                    if (gameConfig.largeImageText) {
                        rpc.setAssetsLargeText(gameConfig.largeImageText);
                    }
                }

                // استخدام الوقت الثابت لتجنب إعادة التعيين
                rpc.setStartTimestamp(startTime);

                await client.user.setActivity(rpc);
            }
        } catch (e) {
            console.error("Error updating presence:", e);
        }
    };

    await updateActivity();
    setInterval(updateActivity, 15000);

    console.log("Rich Presence is active with stable timer!");
});

client.login(config.token);
