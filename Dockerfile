FROM node:14.16.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./

## install only the packages defined in the package-lock.json (faster than the normal npm install)
RUN npm install

COPY . .

EXPOSE 3000 

# Run 'npm run dev' when the container starts.
CMD ["npm", "run", "start"]