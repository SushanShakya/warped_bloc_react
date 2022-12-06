import { BlocState } from '../states/states';
declare class Cubit {
    state: BlocState;
    listeners: Array<Function>;
    constructor(state?: BlocState | null);
    listen: (fn: Function) => void;
    removeListener: () => void;
    publishToListeners: (state: BlocState) => void;
    emit: (state: BlocState) => void;
}
export default Cubit;
