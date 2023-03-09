import { useState } from "react";
import Cubit from "../cubit/Cubit";

const useBloc = (bloc: Cubit) => {
    let [cubit, setBloc] = useState(bloc);
    return cubit;
}

export default useBloc;