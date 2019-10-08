# Instagram API

Instagram clone API

## Frontend
https://github.com/marceloivanofre/instagram-vuejs

## Install and run

* Start MongoDB
```
$ docker-compose up -d
```

* Install packages
```
$ npm install
```

* Start development mode
```
$ npm run dev
```

* Start production mode
```
$ npm start
```

## Tips

* Script to generate a secret key
```
$ node -e "console.log(require('crypto').randomBytes(256).toString('base64'));"
```