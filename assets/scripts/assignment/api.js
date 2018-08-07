'use strict'

const store = require('../store')
const config = require('../config')

const createAssignment = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/assignments',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateAssignment = function (data, assignmentId) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/assignments/' + assignmentId,
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getAssignments = function (data) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/assignments',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteAssignment = function (assignmentId) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/assignments/' + assignmentId,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createAssignment,
  getAssignments,
  deleteAssignment,
  updateAssignment
}
