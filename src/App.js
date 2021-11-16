import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleInitialData } from "./redux/actions/shared.actions";
import AuthPage from "./components/AuthPage";
import PrivateRoutes from "./routes/PrivateRoutes";
import Login from "./components/Login";

function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  const { authedUser, loadingBar } = state;

  useEffect(() => {
    dispatch(handleInitialData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='flex flex-col items-center'>
      {!authedUser ? <Login /> : <PrivateRoutes />}
    </div>
  );
}

export default App;
