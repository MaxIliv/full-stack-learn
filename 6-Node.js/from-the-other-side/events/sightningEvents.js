import { EventEmitter } from 'node:events';
import { createAlert } from '../utils/createAlert.js';


export const SIGHTING_EVENT_ADD = Symbol('sighting-add');
export const sightingEmitter = new EventEmitter();

sightingEmitter.on(SIGHTING_EVENT_ADD, createAlert);