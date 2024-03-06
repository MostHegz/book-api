add a .env file that contain the following (make sure to set the port different than the frontend)

```bash
PORT=3001
BASE_URL=http://localhost
```

install node dependencies

```bash
npm install
```

migrate the db by running the script

```bash
npm run migrate
```

finally start the api

```bash
npm start
```

after app is started you can see the api documentation through

```javascript
`${BASE_URL}:${PORT}/swagger`;
```
