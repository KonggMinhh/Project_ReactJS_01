import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
    const [work, setWork] = useState("");
    const [todos, setTodos] = useState([]);
    const handleAdd = () => {
        const formattedWork = work?.replace(/\s/g, "");
        if (!formattedWork) {
            toast.warn("Công việc không được để trống !");
        } else if (todos?.some((item) => item.id === formattedWork)) {
            toast.warn("Công việc đã bị trùng !");
        } else {
            const newTask = { id: formattedWork, job: work };
            setTodos((prevTodos) => [...prevTodos, newTask]);
            setWork("");
        }
    };

    const handleDeleteJob = (id) => {
        setTodos((prev) => prev.filter((item) => item.id !== id));
    };
    console.log(todos);
    return (
        <>
            <div className=" bg-white shadow rounded-lg w-[500px] p-4 ">
                <div className="flex justify-center items-center gap-6">
                    <input
                        type="text"
                        className="outline-none border-2 border-blue-600 border-solid rounded-md px-4 py-2 w-[350px] "
                        value={work}
                        onChange={(e) => setWork(e.target.value)}
                    />
                    <button
                        type="button"
                        className="bg-blue-600 px-4 py-2 border rounded-md flex-1 hover:bg-blue-700 text-white"
                        onClick={handleAdd}
                    >
                        Add
                    </button>
                </div>
                <section>
                    <ul>
                        {todos?.map((item) => {
                            return (
                                <li
                                    className="flex justify-between items-center border border-solid border-gray-400 bg-[#c5e1e5] rounded-lg px-3 py-3 mt-5"
                                    key={item.key}
                                >
                                    <span className="text-black font-semibold">
                                        {item.job}
                                    </span>
                                    <button
                                        type="button"
                                        className="border rounded-md bg-blue-700 outline-none border-none px-3 py-3 hover:opacity-80"
                                        onClick={() => handleDeleteJob(item.id)}
                                    >
                                        <svg
                                            class="w-5 h-5 text-white dark:text-white"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 18 20"
                                        >
                                            <path d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z" />
                                        </svg>
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </section>
            </div>
            <ToastContainer
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
            <ToastContainer />
        </>
    );
}

export default App;
