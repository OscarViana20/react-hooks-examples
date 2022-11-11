import { useTodo } from "../hooks"
import { TodoForm } from "./components/TodoForm"
import { TodoList } from "./components/TodoList"

export const TodoApp = () => {

    const { 
        todos, 
        allCount, 
        pendingCount, 
        handleNewTodo, 
        handleDeleteTodo, 
        handleToggleTodo
    } = useTodo()

    return (
        <>
            <h1>TodoApp: {allCount}, <small>pendientes: {pendingCount}</small></h1>
            <hr/>

            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos = {todos} 
                        onDeleteTodo = {handleDeleteTodo}
                        onToggleTodo = {handleToggleTodo}
                    />
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr/>
                    
                    <TodoForm onNewTodo={handleNewTodo}/>
                </div>
            </div>
            
        </>
    )
}
