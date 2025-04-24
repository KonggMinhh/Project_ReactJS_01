import {
    Home,
    Login,
    Public,
    Library,
    Album,
    WeekRank,
} from "./containers/public";
// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import path from "./ultis/path";
import * as actions from "./store/actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.getHome());
    }, [dispatch]);

    return (
        <>
            <section className="flex flex-col w-full h-[calc(100vh_-_90px)]">
                <Routes>
                    <Route path={path.PUBLIC} element={<Public />}>
                        <Route path={path.HOME} element={<Home />} />
                        <Route path={path.LOGIN} element={<Login />} />
                        <Route
                            path={path.ALBUM__TITLE__PID}
                            element={<Album />}
                        />
                        <Route
                            path={path.PLAYLIST__TITLE__PID}
                            element={<Album />}
                        />
                        <Route path={path.STAR} element={<Home />} />
                        <Route path={path.LIBRARY} element={<Library />} />
                        <Route
                            path={path.WEEKRANK_TITLE_PID}
                            element={<WeekRank />}
                        />
                    </Route>
                </Routes>
            </section>
            {/* <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <ToastContainer /> */}
        </>
    );
}

export default App;
