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
        this.listeners.set(cur, fn);
        this.count++;
        return cur
    }

    removeListener = (count: number) => {
        this.listeners.delete(count)
    }

    publishToListeners = (state: BlocState) => {
        this.listeners.forEach((listener) => {
            listener(state);
        })
    }

    emit = (state: BlocState) => {
        this.state = state;
        this.publishToListeners(state);
    }
}

export default Cubit;