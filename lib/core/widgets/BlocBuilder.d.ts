import { FC, ReactElement } from "react";
import Cubit from "../cubit/Cubit";
import BlocState from "../states/BlocState";
type BuilderProps = {
    bloc: Cubit;
    builder: BuilderFunction;
};
export type BuilderFunction = (state: BlocState) => ReactElement<any, any>;
declare const BlocBuilder: FC<BuilderProps>;
export default BlocBuilder;
