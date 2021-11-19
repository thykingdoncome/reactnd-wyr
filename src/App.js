import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleInitialData } from "./redux/actions/shared.actions";
import PrivateRoutes from "./routes/PrivateRoutes";
import Login from "./components/Login";
import { Box } from "@chakra-ui/react";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const { authedUser } = state;

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return <Box>{!authedUser ? <Login /> : <PrivateRoutes />}</Box>;
}

export default App;
