// import { useEffect } from "react"
import { removeTodo } from "../feature/todo/todoslice"
import { useDispatch, useSelector } from "react-redux"



function Todos() {



    let todos = useSelector(state => state.todos)
    const dispatch = useDispatch()



    return (
        <>
            <div className="h-[auto] container flex  items-center justify-center  mt-5">
                <div className="flex flex-col  h-[600px] w-[780px] gap-y-3 rounded-xl bg-slate-800 pt-3 px-3 gap-x-5">
                    {

                        todos.map((todo) => (
                            <li key={todo.id}
                                className=" list-none flex justify-around">
                                <input type="text" id={todo.id} value={todo.text} className=" px-3 h-10 w-[70%] rounded-md" />
                                <button
                                    onClick={() => dispatch(removeTodo(todo.id))}
                                    className=" bg-purple-500 h-10 rounded-md active:bg-red-600 font-semibold text-white w-[90px]">Remove</button>
                            </li>))}
                </div>
            </div>


        </>
    )
}

export default Todos