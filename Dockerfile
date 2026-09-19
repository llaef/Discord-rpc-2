FROM node:18
WORKDIR /app
RUN npm install discord.js-selfbot-v13
COPY . .
CMD ["node", "index.js"]
