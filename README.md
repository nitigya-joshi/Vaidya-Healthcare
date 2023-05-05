# Vaidya-Healthcare

(GROUP 41) MEMBERS :-<br/>
-------------------------------<br/>
SUDEEP GANGWAR<br/>
NITIGYA JOSHI<br/>
GULSHAN KUMAR<br/>
ARYAN VERMA<br/>
ANMOL SINGH

Steps to run on production environment :

- go to the client folder
- run "npm run build"
- after build is successful
- go back to root folder
- run "npm start"
- go to "http://localhost:80"

deployed link => https://vaidya-healthcare.azurewebsites.net/

github repo link -> https://github.com/rex2828/Vaidya-Healthcare

We are using mongodb and redis as databases :

- to host an instance of mongodb -> go to mongodb.com -> create new database of mongoose -> get connection string -> change it in .env file
- to host a redis instance -> go to redislabs.com -> create a free redis instance with azure -> get connection credentials -> go to cache.js and change the credentials
