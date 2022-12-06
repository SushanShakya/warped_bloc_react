import { useEffect, FC, ReactElement } from "react";
import Cubit from "../cubit/Cubit";
import BlocState from "../states/BlocState";

export type ListenerFunction = (state: BlocState) => void

type ListenerParam = {
    bloc: Cubit,
    listener: ListenerFunction,
    child: ReactElement<any, any>,
}


const BlocListener: FC<ListenerParam> = ({
    bloc,
    listener,
    child
}) => {

    useEffect(() => {
        bloc.listen(listener);
        return () => {
            bloc.removeListener();
        };
    }, [bloc]);

    return child;
}

export default BlocListener;