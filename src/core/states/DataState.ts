import BlocState from './BlocState'

class DataState<T> implements BlocState {
    data: T
    constructor(data: T) {
        this.data = data;
    }
}

export default DataState;