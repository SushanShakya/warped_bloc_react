import BlocState from "./BlocState";
declare class ErrorState<T> implements BlocState {
    message: string;
    data: T | null;
    constructor(message: string, data?: any);
}
export default ErrorState;
