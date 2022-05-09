import { useContext } from "react";
import { ContextApiProvider } from "../../ContextApi/ContextApi";

const useContextAuth = () => useContext(ContextApiProvider);

export default useContextAuth;