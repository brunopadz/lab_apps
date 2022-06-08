require('dotenv').config()
const express = require('express')
const axios = require('axios')
const {response, json, raw} = require("express");
const app = express()
const port = 3000

let service = axios.create({
    baseURL: process.env.API_URL,
    responseType: "json"
})

app.get('/', (req, res) => {
    service.get("/").then(result => res.json(result.data))
})

app.listen(port, () => {
    console.log(`App is up.`)
})
