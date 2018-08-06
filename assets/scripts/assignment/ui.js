'use strict'
const store = require('../store')
const showAssignmentsTemplate = require('../templates/assignment-listing.handlebars')

const createAssignmentSuccess = function (data) {
  $('#createItemModal').modal('hide')
  $('#create-item-form')[0].reset()
}

const createAssignmentError = function () {
  $('#createModalLabel').css('color', 'red')
  $('#createModalLabel').html('Something went wrong creating the assignment try again!')
}

// const getAssignmentsSuccess = (data) => {
//   const yourAssignments = data.assignments.filter((assignment) => {
//     if (assignment.owner === store.user.id) {
//       return assignment
//     }
//   })
//   const showNewAssignmentsHtml = showAssignmentsTemplate({ assignments: yourAssignments })
//   $('#assignmentList').html(showNewAssignmentsHtml)
// }
const getAssignmentsSuccess = (data) => {
  const showNewAssignmentsHtml = showAssignmentsTemplate({ assignments: data.assignments })
  $('#assignmentList').html(showNewAssignmentsHtml)
}

const getAssignmentsFailure = function () {
  $('#assignmentTitle').css('color', 'red')
  $('#assignmentTitle').html('Something went wrong loading assignments try again!')
}

const deleteAssignmentError = function () {
  $('#assignmentTitle').css('color', 'red')
  $('#assignmentTitle').html('Something went wrong deleting assignment try again!')
}

const updateAssignmentSuccess = function (itemId) {
  $(`[data-id="modal${itemId}"]`).modal('hide')
  $('.modal-backdrop').remove()
  $('.update-form')[0].reset()
}
const updateAssignmentError = function () {
  $('.itemUpdateTitle').css('color', 'red')
  $('.itemUpdateTitle').html('Something went wrong updating item try again!')
}

const resetUiHandleing = function () {
  $('.itemUpdateTitle').css('color', 'black')
  $('.itemUpdateTitle').html('Update Item')
  $('#assignmentTitle').css('color', 'white')
  $('#assignmentTitle').html('Assignments')
  $('#createModalLabel').css('color', 'black')
  $('#createModalLabel').html('Create Item')
  $('.update-form')[0].reset()
  $('#create-item-form')[0].reset()
}

module.exports = {
  createAssignmentSuccess,
  createAssignmentError,
  deleteAssignmentError,
  getAssignmentsSuccess,
  getAssignmentsFailure,
  updateAssignmentError,
  updateAssignmentSuccess,
  resetUiHandleing
}
