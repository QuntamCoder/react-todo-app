export default function PrintTodos({ item, onDelete }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 15px",
        margin: "8px 0",
        backgroundColor: "white",
        borderRadius: "6px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
        borderLeft: "3px solid rgba(0, 255, 255, 0.5)",
        transition: "all 0.3s ease",
        ":hover": {
          transform: "translateX(3px)",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderLeftColor: "rgba(0, 255, 255, 0.8)"
        }
      }}
      className="todo-item"
    >
      <span style={{ 
        flex: 1,
        fontSize: "16px",
        wordBreak: "break-word",
        paddingRight: "10px"
      }}>
        {item}
      </span>
      
      <button
        onClick={onDelete}
        style={{
          backgroundColor: "rgba(255, 0, 0, 0.1)",
          color: "#ff4444",
          border: "none",
          borderRadius: "4px",
          padding: "6px 12px",
          cursor: "pointer",
          fontSize: "14px",
          fontWeight: "600",
          transition: "all 0.2s ease",
          ":hover": {
            backgroundColor: "rgba(255, 0, 0, 0.2)",
            transform: "scale(1.05)"
          },
          ":active": {
            transform: "scale(0.98)"
          }
        }}
      >
        Done
      </button>

      {/* Add this in your global CSS or style tag */}
      <style jsx>{`
        .todo-item {
          animation: fadeIn 0.3s ease-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}