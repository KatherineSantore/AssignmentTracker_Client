'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const authUi = require('./ui.js')
const authApi = require('./api.js')
const assignmentEvents = require('../assignment/events.js')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.signUp(data)
    .then(authUi.signUpSuccess)
    .catch(authUi.signUpError)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('data is', data)
  authApi.signIn(data)
    .then(authUi.signInSuccess)
    .then(assignmentEvents.onGetAssignments)
    .catch(authUi.signInError)
}

const onChangePW = function () {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.changePassword(data)
    .then(authUi.changePasswordSuccess)
    .catch(authUi.changePasswordError)
}

const onSignOut = function (event) {
  event.preventDefault()
  authApi.signOut()
    .then(authUi.signOutSuccess)
    .catch(authUi.signOutFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePW,
  onSignOut
}
