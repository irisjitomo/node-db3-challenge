// const schemesDb = require('../data/seeds/01-schemes');
// const stepsDb = require('../data/seeds/02-steps');
// const express = require('express')
const knex = require('knex');
const knexConfig = require('../knexfile')

const db = knex(knexConfig.development)


module.exports = {
    find,
    findById,
    // findSteps,
    // add,
    // update,
    // remove
}

function find() {
    return db('schemes');
}

function findById(id){
    return db('schemes').where('id', '=', id)
}
