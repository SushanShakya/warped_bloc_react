import { BlocState, InitialState } from '../states/states'

class Cubit {
    state: BlocState
    listeners: Array<Function>

    constructor(state: BlocState | null = null) {
        this.state = state ?? new InitialState();
        this.listeners = [];
    }

    listen = (fn: Function) => {
        this.listeners.push(fn);
    }

    removeListener = () => {
        this.listeners = [];
    }

    publishToListeners = (state: BlocState) => {
        for (let listener of this.listeners) {
            listener(state);
        }
    }

    emit = (state: BlocState) => {
        this.state = state;
        this.publishToListeners(state);
    }
}

export default Cubit;