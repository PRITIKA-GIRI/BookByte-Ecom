import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { recordPurchase } from "../api/api";

const PaymentResult = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isSuccess = location.pathname === "/success";

  const bookId = parseInt(new URLSearchParams(location.search).get("pid"));
  const orderId = new URLSearchParams(location.search).get("oid");
  const amount = new URLSearchParams(location.search).get("amt");

  useEffect(() => {
    if (isSuccess && bookId && orderId && amount) {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("No auth token found. User must login first.");
        return;
      }

      recordPurchase({ bookId, orderId, amount }, token)
        .then(res => console.log("✅ Purchase recorded:", res.data))
        .catch(err => console.error("❌ Purchase record failed:", err));
    }

    const timer = setTimeout(() => navigate("/", { replace: true, state: { refresh: true } }), 4000);

    return () => clearTimeout(timer);
  }, [isSuccess, bookId, orderId, amount, navigate]);

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
