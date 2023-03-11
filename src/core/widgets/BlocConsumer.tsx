import React from 'react';
import Cubit from "../cubit/Cubit";
import BlocListener, { ListenerFunction } from './BlocListener';
import BlocBuilder, { BuilderFunction } from './BlocBuilder';

type ConsumerParam = {
    bloc: Cubit<any>,
    listener: ListenerFunction,
    builder: BuilderFunction
}


const BlocConsumer = ({
    bloc,
    listener,
    builder,
}: ConsumerParam) => {
    return (
        <BlocListener
            bloc={bloc}
            listener={listener}
            child={
                (<BlocBuilder bloc={bloc} builder={builder} />)
            }
        />
    );
}

export default BlocConsumer;