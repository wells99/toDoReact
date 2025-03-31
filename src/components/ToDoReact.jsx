import { useState, useEffect } from "react";

function ToDoReact() {
    const [toDo, setToDo] = useState([]);
    const [input, setInput] = useState("");

    // Carregar tarefas do localStorage ao iniciar
    useEffect(() => {
        const storedToDo = localStorage.getItem("toDoList");
        if (storedToDo) {
            setToDo(JSON.parse(storedToDo));
        }
    }, []);

    // Atualizar localStorage sempre que toDo mudar
    useEffect(() => {
        localStorage.setItem("toDoList", JSON.stringify(toDo));
    }, [toDo]);

    const adicionarToDo = () => {
        if (input.trim()) {
            setToDo([...toDo, { id: Date.now(), text: input, completo: false }]);
            setInput("");
        }
    };

    return (
        <div className="min-h-screen flex items-start pt-10 justify-center bg-gradient-to-r from-blue-600 to-emerald-400">
            <div className="bg-white shadow-lg rounded-3xl m-4 p-4 lg:p-16 items-center">
                <h1 className="text-3xl font-bold text-center text-gray-900">ReactTarefas 😁</h1>
                <p className="text-gray-500 text-sm text-center mb-6">Não esqueça suas tarefas, anote aqui e esqueça que anotou !!</p>
                <div className="mb-4 flex items-center justify-center">
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        type="text"
                        placeholder="O que você vai fazer ?"
                        className="w-[180px] lg:w-[900px] px-3 py-2 border border-gray-400 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 hover:cursor-pointer"
                        onClick={adicionarToDo}
                    >
                        Adicionar
                    </button>
                </div>
                <ul className="space-y-2">
                    {toDo.map((tarefa) => (
                        <li key={tarefa.id} className="flex items-center p-3 rounded-lg bg-slate-100 border border-gray-300">
                            <input
                                type="checkbox"
                                checked={tarefa.completo}
                                onChange={() => setToDo(
                                    toDo.map((element) =>
                                        element.id === tarefa.id ? { ...element, completo: !element.completo } : element
                                    )
                                )}
                                className="mr-2 h-5 w-5 text-blue-600"
                            />
                            <span className={`grow ${tarefa.completo ? "line-through text-gray-500" : "text-gray-800"}`}>
                                {tarefa.text}
                            </span>
                            <button
                                onClick={() => setToDo(toDo.filter((t) => t.id !== tarefa.id))}
                                className="ml-2 border-none rounded-lg p-2 bg-red-500 text-white hover:bg-red-600"
                            >
                                Deletar
                            </button>
                            <span
                                onClick={() => {
                                    setInput(tarefa.text);
                                    setToDo(toDo.filter((t) => t.id !== tarefa.id));
                                }}
                                className="material-symbols-outlined pl-2 hover:cursor-pointer"
                            >
                                edit_square
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
<span>https://perfilreact.onrender.com </span>
        </div>
    );
}

export default ToDoReact;
