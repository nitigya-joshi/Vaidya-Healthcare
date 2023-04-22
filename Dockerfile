FROM node:17.4.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV AUTH_EMAIL = ishikiirohasan@gmail.com
ENV AUTH_PASS = dspachyybdjwmkwb
ENV MONGO_URI=mongodb+srv://sudeep:fsdproject@cluster0.hohd1.mongodb.net/vaidyaHealthcare?retryWrites=true&w=majority
ENV SERVER_URL=http://localhost:3000
ENV CLIENT_URL=http://localhost:3001
ENV STRIPE_PRIVATE_KEY=sk_test_51KosdYSC8Elc1T5pCGBDB0LyhuMtzLCGlqygKVC1sIaz0bIjBQUNBN9BmuxaZAArzIAiO1yPMvc1JusRXTMUhk1e00GsHsQTiQ
ENV STRIPE_PUB_KEY=pk_test_51KosdYSC8Elc1T5p6tRG6T1zK4yMcIRMUpNE8Q5PMfq7qO6nlR13FGSfbNMg3einjs5JIEWC1wM39RNWubd1WtJp00jNupGt6d
ENV JWT_SECRET=superduperstrongsecret
ENV PORT=3000
ENV NODE_ENV=production

EXPOSE 3000

CMD ["npm", "run", "docker-build-webapp"]