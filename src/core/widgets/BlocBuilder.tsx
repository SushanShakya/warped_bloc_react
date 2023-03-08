import { useEffect, useState, FC, ReactElement } from "react";
import Cubit from "../cubit/Cubit";
import BlocState from "../states/BlocState";


type BuilderProps = {
    bloc: Cubit,
    builder: BuilderFunction
}

export type BuilderFunction = (state: BlocState) => ReactElement<any, any>;

const BlocBuilder: FC<BuilderProps> = ({
    bloc,
    builder
}) => {
    let [state, setState] = useState(bloc.state);

    useEffect(() => {
        let cur = bloc.listen((state: BlocState) => {
            console.log(state);
            setState(state);
        });

        return () => {
            bloc.removeListener(cur);
        }
    }, [bloc]);

    return builder(state);
}

export default BlocBuilder;