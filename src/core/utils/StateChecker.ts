import BlocState from "../states/BlocState";
import DataState from "../states/DataState";
import ErrorState from "../states/ErrorState";
import InitialState from "../states/InitialState";
import LoadingState from "../states/LoadingState";

export const StateChecker = {
    isInitial(state: BlocState) {
        return state instanceof InitialState
    },
    isLoading(state: BlocState) {
        return state instanceof LoadingState
    },
    isError(state: BlocState) {
        return state instanceof ErrorState
    },
    isData(state: BlocState) {
        return state instanceof DataState
    }
}