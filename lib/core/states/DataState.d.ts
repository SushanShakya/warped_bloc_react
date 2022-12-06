import BlocState from './BlocState';
declare class DataState<T> implements BlocState {
    data: T;
    constructor(data: T);
}
export default DataState;
