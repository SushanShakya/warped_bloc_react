
class Cubit<T> {
    state: T
    listeners: Map<number, Function>
    count: number

    constructor(state: T | null = null) {
        this.state = state;
        this.count = 0;
        this.listeners = new Map<number, Function>();
    }

    listen = (fn: Function) => {
        let cur = this.count;
        this.listeners.set(cur, fn);
        this.count++;
        return cur
    }

    removeListener = (count: number) => {
        this.listeners.delete(count)
    }

    publishToListeners = (state: T) => {
        this.listeners.forEach((listener) => {
            listener(state);
        })
    }

    emit = (state: T) => {
        this.state = state;
        this.publishToListeners(state);
    }
}

export default Cubit;