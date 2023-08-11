import * as jsonServer from 'json-server'
import {Express} from 'express'

import * as fs from 'fs'
import * as https from 'https'



import {handleAuthentication} from "./auth";
import {handleAuthorization} from "./auth0";

// @ts-ignore
const server: Express = jsonServer.create()
const router = jsonServer.router('db.json')
const middleware = jsonServer.defaults()

// set default middleware (logger, static, cors and no-cache)
server.use(middleware)

server.use(jsonServer.bodyParser)

server.post('/login', handleAuthentication)
server.use('/orders', handleAuthorization)

server.use(router)

const options = {
    cert: fs.readFileSync('./backend/keys/cert.pem'),
    key: fs.readFileSync('./backend/keys/key.pem')
}

https.createServer(options, server).listen(3001, () => {
    console.log(`JSON Server is running on http://localhost:3001`)
})



