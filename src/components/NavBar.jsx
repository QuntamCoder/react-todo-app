export default function NavBar() {
  return (
    <div>
      <nav 
        style={{ 
          color: "white",
          fontSize: "20px",
          backgroundColor: "rgba(0, 0, 0, 0.9)",
          position: "fixed",
          width: "100%",
          top: 0,
          textAlign: "center",
          padding: "15px",
          left: 0,
          zIndex: 1000,
          boxShadow: "0 2px 10px rgba(0, 255, 255, 0.3)",
          transition: "all 0.3s ease",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          textTransform: "uppercase",
          letterSpacing: "1px",
          cursor: "default",
          // Interactive effects
          ":hover": {
            boxShadow: "0 5px 15px rgba(0, 255, 255, 0.5)",
            padding: "18px 15px",
            backgroundColor: "rgba(20, 20, 20, 0.95)"
          }
        }}
        className="navbar" // Added for CSS animations
      >
        Welcome to -: To Do App
      </nav>
      
      {/* Add this in your global CSS or style tag */}
      <style jsx>{`
        .navbar {
          animation: fadeInDown 0.5s ease-out;
        }
        
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .navbar::after {
          content: '';
          display: block;
          width: 0;
          height: 2px;
          background: cyan;
          transition: width 0.3s;
          margin: 5px auto 0;
        }
        
        .navbar:hover::after {
          width: 50%;
        }
      `}</style>
    </div>
  );
}