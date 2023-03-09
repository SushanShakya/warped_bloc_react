import { useEffect, ReactElement } from "react";
import Cubit from "../cubit/Cubit";

export type ListenerFunction = (state: any) => void

const BlocListener = <T extends Cubit>({
    bloc,
    listener,
    child
}: {
    bloc: T,
    listener: ListenerFunction,
    child: ReactElement,
}) => {

    useEffect(() => {
        let cur = bloc.listen(listener);
        return () => {
            bloc.removeListener(cur);
        };
    }, [bloc]);

    return child;
}

export default BlocListener;