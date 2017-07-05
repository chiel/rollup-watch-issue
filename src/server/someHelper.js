import events from 'events';

const emitter = new events.EventEmitter();

export default function someHelper() {
	console.log('emitter', emitter);
}
