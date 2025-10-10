FROM node:18

RUN mkdir -p/usr/scr/app
WORKDIR /usr/scr/app
COPY package.json /usr/scr/app/

RUN npm install
COPY . .

EXPOSE 3000
CMD ["npm","Start"]do