import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../feature/todo/todoslice"

function Addtodo() {

    const dispatch = useDispatch()
    const HandelData = () => {
        if (input != "") {
            dispatch(addTodo(input))
            Setinput("")


        } else {
            alert("please enter task ")
        }

    }

    let [input, Setinput] = useState('')

    return (
        <>
            <div className="container h-auto flex mt-3 justify-center">
                <div className="inputbox flex flex-col  size-[50%] bg-slate-800  rounded-lg p-5 gap-y-2">

                    {/* Input-Task  */}
                    <div className="input flex flex-col h-[40%] w-[100%]  gap-5">
                        <label htmlFor="Text" className=" font-extrabold text-white text-[25px]">
                            Enter task
                        </label>
                        <input type="text"
                            className=" h-[60px] text-[30px] px-2"
                            id="Text"
                            value={input}
                            onChange={(e) => Setinput(e.target.value)}
                            r />
                    </div>

                    {/* Submit-Remove-tasj  */}
                    <div className="input flex mt-9 h-[40%] w-[100%]  gap-5">
                        <div className="btns flex items-center   size-[100%]">
                            <button
                                onClick={HandelData}
                                className="bg-blue-600 w-[200px] h-[60%] rounded-xl active:bg-red-700 text-white text-[30px] ">Add-Task</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Addtodo