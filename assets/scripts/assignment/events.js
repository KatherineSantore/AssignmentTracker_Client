'use strict'
import "confetti-js"
const getFormFields = require('../../../lib/get-form-fields.js')
const assignmentUi = require('./ui.js')
const assignmentApi = require('./api.js')

const onGetAssignments = (data) => {
  assignmentUi.resetUiHandleing()
  assignmentApi.getAssignments()
    .then(assignmentUi.getAssignmentsSuccess)
    .catch(assignmentUi.getAssignmentsFailure)
}
const onCreateAssignment = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  assignmentApi.createAssignment(data)
    .then(assignmentUi.createAssignmentSuccess)
    .then(onGetAssignments)
    .catch(assignmentUi.createAssignmentError)
}
const onDeleteAssignment = function (event) {
  event.preventDefault()
  assignmentUi.resetUiHandleing()
  const assignmentId = $(event.target).attr('data-id')
  assignmentApi.deleteAssignment(assignmentId)
    .then(onGetAssignments)
    .catch(assignmentUi.deleteAssignmentError)
}

const onUpdateAssignment = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const assignmentId = $(event.target).attr('data-id')
  assignmentApi.updateAssignment(data, assignmentId)
    .then(() => assignmentUi.updateAssignmentSuccess(assignmentId))
    .then(onGetAssignments)
    .catch(assignmentUi.updateAssignmentError)
}

const onOpenUpdateModal = function (event) {
  assignmentUi.resetUiHandleing()
  const assignmentId = $(event.target).attr('data-id')
  $(`[data-id="modal${assignmentId}"]`).modal('show')
}

// const confettiSettings = { target: 'my-canvas' };
// const confetti = new ConfettiGenerator(confettiSettings);
// const canvas = document.getElementById('my-canvas');

// const confettiRain = function () {
// 	confetti.render()
//   setTimeout(function() {
//   	console.log('in')
//     confetti.clear()
//   }, 5000)
// }
const confettiSettings = { target: 'my-canvas' }
const confetti = new ConfettiGenerator(confettiSettings)
const canvas = $('#my-canvas')

const confettiRain = function () {
  $('#my-canvas').show()
  confetti.render()
  setTimeout(() => {
    confetti.clear()
    $('#my-canvas').hide()
  }, 5000)
}


const addHandlers = () => {
  $('#assignmentList').on('click', '.deleteButton', onDeleteAssignment)
  $('#assignmentList').on('click', '.updateButton', onOpenUpdateModal)
  $('#assignmentList').on('submit', '.update-form', onUpdateAssignment)
  $('#assignmentList').on('click', '.confettiButton', confettiRain)
}

module.exports = {
  onCreateAssignment,
  onDeleteAssignment,
  onGetAssignments,
  onUpdateAssignment,
  addHandlers,
  confettiRain
}
