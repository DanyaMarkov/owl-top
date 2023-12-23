# FROM node:14-alpine
# FROM node:16.13.1-stretch
FROM node:19.5.0-alpine
WORKDIR /opt/app
ADD package.json package.json
RUN NODE_ENV=development npm i
ADD . .
ENV NODE_ENV production
RUN npm run build
RUN npm prune --production
CMD ["npm", "start"]
EXPOSE 3000