import Cubit from "./Cubit";
type CallbackType = () => Promise<void>;
declare class AsyncCubit extends Cubit {
    handleDefaultStates: (callback: CallbackType, showLoading?: boolean) => Promise<void>;
}
export default AsyncCubit;
