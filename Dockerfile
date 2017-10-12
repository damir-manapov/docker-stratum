FROM node:latest
RUN npm install coin-hive-stratum
EXPOSE 8892
ENTRYPOINT /node_modules/.bin/coin-hive-stratum 8892 --host=xmr-eu1.nanopool.org --port=14444
