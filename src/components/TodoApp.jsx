import { useState } from "react";
import PrintTodos from "./PrintTodos";

export default function TodoApp() {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);
  
  function taskAdded(e) {
    e.preventDefault();
    if (task.trim() !== "") {
      setTodo([...todo, task]);
      setTask("");
    }
  }

  function deleteTask(indexToRemove) {
    setTodo(todo.filter((_, index) => index !== indexToRemove));
  }

  return (
    <div
      style={{
        display: "flex",
        paddingTop: "70px",
        paddingBottom: "60px",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "flex-start",
        transition: "background-color 0.3s ease"
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
          width: "100%",
          maxWidth: "500px",
          transform: "translateY(0)",
          transition: "all 0.3s ease",
          ":hover": {
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
            transform: "translateY(-2px)"
          }
        }}
        className="todo-container"
      >
        <form
          onSubmit={taskAdded}
          style={{ 
            display: "flex", 
            gap: "10px", 
            marginBottom: "20px",
            transition: "all 0.3s ease"
          }}
        >
          <input
            type="text"
            placeholder="Enter Your Task"
            onChange={(e) => setTask(e.target.value)}
            value={task}
            style={{
              flex: 1,
              padding: "12px 15px",
              border: "1px solid #ddd",
              borderRadius: "6px",
              fontSize: "16px",
              outline: "none",
              transition: "all 0.3s ease",
              ":focus": {
                borderColor: "rgba(0, 255, 255, 0.5)",
                boxShadow: "0 0 0 2px rgba(0, 255, 255, 0.2)"
              }
            }}
          />
          <button 
            onClick={taskAdded}
            style={{
              padding: "12px 20px",
              backgroundColor: "black",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "600",
              transition: "all 0.3s ease",
              ":hover": {
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                transform: "translateY(-1px)"
              },
              ":active": {
                transform: "translateY(0)"
              }
            }}
          >
            Add Task
          </button>
        </form>
        <div
          style={{
            maxHeight: "400px",
            overflowY: "auto",
            paddingRight: "5px"
          }}
        >
          {todo.map((item, index) => (
            <PrintTodos
              item={item}
              key={index}
              onDelete={() => deleteTask(index)}
            />
          ))}
        </div>
      </div>

      {/* Add this in your global CSS or style tag */}
      <style jsx>{`
        .todo-container {
          animation: fadeIn 0.5s ease-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
}