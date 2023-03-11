import { useEffect, useState, FC, ReactElement } from "react";
import Cubit from "../cubit/Cubit";
import AsyncCubit from "../cubit/AsyncCubit";
import BlocState from "../states/BlocState";

export type BuilderFunction = (state: any) => ReactElement<any, any>;

const BlocBuilder = <T extends Cubit<any>>({
    bloc,
    builder
}: {
    bloc: T,
    builder: BuilderFunction
}) => {
    let isAsync = (bloc instanceof AsyncCubit)
    let [state, setState] = useState(isAsync ? (bloc.state as BlocState) : (bloc.state as any))

    useEffect(() => {
        let cur: number
        if (isAsync) {
            cur = bloc.listen((state: BlocState) => {
                setState(state)
            });
        } else {
            cur = bloc.listen((state: any) => {
                setState(state)
            });
        }
        return () => {
            bloc.removeListener(cur);
        }
    }, [bloc]);

    return builder(state);
}

export default BlocBuilder;