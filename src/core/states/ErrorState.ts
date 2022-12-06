import BlocState from "./BlocState";

class ErrorState<T> implements BlocState {
    message: string
    data: T | null
    constructor(message: string, data = null) {
        this.message = message;
        this.data = data;
    }
}

export default ErrorState;