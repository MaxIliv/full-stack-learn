import { EventEmitter } from 'node:events';
const email = 'man@test.com';

const emailRequestEmitter = new EventEmitter();
const EMAIL_EVENT = Symbol('emailRequest');

function generateEmail(email) {
  console.log('Email generated for: ', email);
}

emailRequestEmitter.on(EMAIL_EVENT, generateEmail);

setTimeout(() => {
  emailRequestEmitter.emit(EMAIL_EVENT, email);
}, 2000);
