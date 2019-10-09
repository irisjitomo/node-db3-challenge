// const schemesDb = require('../data/seeds/01-schemes');
// const stepsDb = require('../data/seeds/02-steps');
// const express = require('express')
const knex = require('knex');
const knexConfig = require('../knexfile')

const db = knex(knexConfig.development)


module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

function find() {
    return db('schemes');
}

function findById(id){
    return db('schemes').where('id', '=', id).first()
}

function findSteps(id) {
    return db('schemes as sc')
    .select('sc.scheme_name', 's.step_number', 's.instructions')
    .orderBy('s.step_number', 'asc')
    .join('steps as s', 'sc.id', '=', 's.scheme_id')
    .where('sc.id', id )
}

function add(scheme){
    return db('schemes')
    .insert(scheme, 'id')
}

function update(changes, id){
    return db('schemes')
    .where({id})
    .update(changes)
}

function remove(id){
    return db('schemes')
    .where({id})
    .del()
}
