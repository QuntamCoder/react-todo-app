export default function Footer() {
  return (
    <div>
      <footer
        style={{
          color: "white",
          fontSize: "18px",
          backgroundColor: "rgba(0, 0, 0, 0.9)",
          position: "fixed",
          bottom: 0,
          width: "100%",
          textAlign: "center",
          padding: "15px",
          left: 0,
          zIndex: 1000,
          boxShadow: "0 -2px 10px rgba(255, 165, 0, 0.3)",
          transition: "all 0.3s ease",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          letterSpacing: "1px",
          cursor: "default",
          // Interactive effects
          ":hover": {
            boxShadow: "0 -5px 15px rgba(255, 165, 0, 0.5)",
            padding: "18px 15px",
            backgroundColor: "rgba(20, 20, 20, 0.95)"
          }
        }}
        className="footer" // Added for CSS animations
      >
        All Rights Reserved by Amol Jadhav
      </footer>

      {/* Add this in your global CSS or style tag */}
      <style jsx>{`
        .footer {
          animation: fadeInUp 0.5s ease-out;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .footer::before {
          content: '';
          display: block;
          width: 0;
          height: 2px;
          background: orange;
          transition: width 0.3s;
          margin: 0 auto 5px;
        }
        
        .footer:hover::before {
          width: 30%;
        }
        
        .footer:hover {
          font-size: "19px";
        }
      `}</style>
    </div>
  );
}