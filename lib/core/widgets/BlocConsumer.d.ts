/// <reference types="react" />
import Cubit from "../cubit/Cubit";
import { ListenerFunction } from './BlocListener';
import { BuilderFunction } from './BlocBuilder';
type ConsumerParam = {
    bloc: Cubit;
    listener: ListenerFunction;
    builder: BuilderFunction;
};
declare const BlocConsumer: ({ bloc, listener, builder, }: ConsumerParam) => JSX.Element;
export default BlocConsumer;
