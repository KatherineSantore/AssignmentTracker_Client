'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
import 'confetti-js'
const authEvents = require('./auth/events')
const assignmentEvents = require('./assignment/events')
const assignmentUi = require('./assignment/ui')
const authUi = require('./auth/ui')

$(() => {
  // Authentication Event Handler
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePW)
  $('#sign-out').on('click', authEvents.onSignOut)

  // Assignment Events
  $('#create-item-form').on('submit', assignmentEvents.onCreateAssignment)

  // Handlebar Event Handlers
  assignmentEvents.addHandlers()

  // $('#my-canvas').hide()

  // Reset UI Handling Elements
  $('.content-button').on('click', assignmentUi.resetUiHandleing)
  $('.update-close-button').on('click', assignmentUi.resetUiHandleing)
  $('.menu').on('click', authUi.resetAuth)
})
