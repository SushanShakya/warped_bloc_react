import ErrorState from "../states/ErrorState";
import LoadingState from "../states/LoadingState";
import Cubit from "./Cubit";

type CallbackType = () => Promise<void>

class AsyncCubit extends Cubit {
    handleDefaultStates = async (callback: CallbackType, showLoading: boolean = true) => {
        if (showLoading) {
            this.emit(new LoadingState());
        }
        try {
            await callback();
        } catch (e) {
            this.emit(new ErrorState<any>("Error Has Occured"));
        }
    }
}

export default AsyncCubit;