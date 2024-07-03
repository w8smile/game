export class EventEmitter {
    subscribers = {}

    // addEventListener(eventName, callback) {
    //
    // }
    // on(eventName, callback) {
    //
    // }

    subscribe(eventName, callback) {
        if (!this.subscribers[eventName]){
            this.subscribers[eventName] = []
        }
        this.subscribers[eventName].push(callback);
    }

    emit(eventName, data = null) {
        this.subscribers[eventName]?.forEach(cb => cb(data));
    }
    unSubscribe(eventName, callBack) {
        this.subscribers[eventName] = this.subscribers[eventName].filter(el=>el !== callBack);
    }
}