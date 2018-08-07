'use strict'
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
  console.log('data is', data)
  assignmentApi.createAssignment(data)
    .then(assignmentUi.createAssignmentSuccess)
    .then(onGetAssignments)
    .catch(assignmentUi.createAssignmentError)
}
const onDeleteAssignment = function (event) {
  event.preventDefault()
  assignmentUi.resetUiHandleing()
  const assignmentId = $(event.target).attr('data-id')
  console.log('event.target', event.target)
  assignmentApi.deleteAssignment(assignmentId)
    .then(onGetAssignments)
    .catch(assignmentUi.deleteAssignmentError)
}

const onUpdateAssignment = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const assignmentId = $(event.target).attr('data-id')
  console.log('assignmentId', assignmentId)
  console.log('assignment.id')
  assignmentApi.updateAssignment(data, assignmentId)
    .then(() => assignmentUi.updateassignmentSuccess(assignmentId))
    .then(onGetAssignments)
    .catch(assignmentUi.updateAssignmentError)
}

const onOpenUpdateModal = function (event) {
  assignmentUi.resetUiHandleing()
  const assignmentId = $(event.target).attr('data-id')
  $(`[data-id="modal${assignmentId}"]`).modal('show')
}

const addHandlers = () => {
  $('#assignmentList').on('click', '.deleteButton', onDeleteAssignment)
  $('#assignmentList').on('click', '.updateButton', onOpenUpdateModal)
  $('#assignmentList').on('submit', '.update-form', onUpdateAssignment)
}

module.exports = {
  onCreateAssignment,
  onDeleteAssignment,
  onGetAssignments,
  onUpdateAssignment,
  addHandlers
}
