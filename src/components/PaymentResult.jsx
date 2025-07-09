import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const PaymentResult = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isSuccess = location.pathname === "/success";
  const pid = new URLSearchParams(location.search).get("pid");

  useEffect(() => {
    if (isSuccess && pid) {
      fetch("http://localhost:5000/api/purchase", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // if needed
        body: JSON.stringify({ bookId: pid }),
      })
        .then(res => res.json())
        .then(console.log)
        .catch(console.error);
    }

    const timer = setTimeout(() => navigate("/", { replace: true }), 4000);
    return () => clearTimeout(timer);
  }, [isSuccess, pid, navigate]);

  return (
    <div style={{ textAlign: "center", marginTop: "5rem" }}>
      {isSuccess ? (
        <h2>✅ Purchase Successful! Redirecting home...</h2>
      ) : (
        <h2>❌ Payment Failed. Returning to home...</h2>
      )}
    </div>
  );
};
export default PaymentResult;
