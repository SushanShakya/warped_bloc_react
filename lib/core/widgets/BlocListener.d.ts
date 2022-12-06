import { FC, ReactElement } from "react";
import Cubit from "../cubit/Cubit";
import BlocState from "../states/BlocState";
export type ListenerFunction = (state: BlocState) => void;
type ListenerParam = {
    bloc: Cubit;
    listener: ListenerFunction;
    child: ReactElement<any, any>;
};
declare const BlocListener: FC<ListenerParam>;
export default BlocListener;
