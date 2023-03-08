import { useState } from "react";
import Cubit from "../cubit/Cubit";

const useBloc = (bloc: typeof Cubit) => {
    let [cubit, setBloc] = useState(new bloc());
    return cubit;
}

export default useBloc;