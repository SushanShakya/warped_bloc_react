import { BlocState, InitialState } from '../states/states'


class Cubit {
    state: any
    listeners: Map<number, Function>
    count: number

    constructor(state: any | null = null) {
        this.state = state ?? new InitialState();
        this.count = 0;
        this.listeners = new Map<number, Function>();
    }

    listen = (fn: Function) => {
        let cur = this.count;
        this.listeners[cur] = fn;
        this.count++;
        return cur
    }

    removeListener = (count: number) => {
        delete this.listeners[count]
    }

    publishToListeners = (state: BlocState) => {
        this.listeners.forEach((listener, k) => {
            listener(state);
        })
    }

    emit = (state: BlocState) => {
        this.state = state;
        this.publishToListeners(state);
    }
}

export default Cubit;