import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary">
      <div className="text-center bg-card rounded-xl shadow-lg p-10">
        <div className="flex justify-center mb-6">
          <svg width="64" height="64" fill="none" viewBox="0 0 64 64">
            <circle cx="32" cy="32" r="32" fill="#9AADFF"/>
            <text x="32" y="42" textAnchor="middle" fontSize="32" fill="#1B2037" fontFamily="sans-serif" fontWeight="bold">404</text>
          </svg>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-primary">404</h1>
        <p className="text-xl text-primary/70 mb-6">Oops! Page not found</p>
        <a href="/future-forge/" className="inline-block px-6 py-3 rounded-lg bg-secondary text-primary font-semibold shadow hover:bg-secondary/80 transition">Return to Home</a>
      </div>
    </div>
  );
};

export default NotFound;
