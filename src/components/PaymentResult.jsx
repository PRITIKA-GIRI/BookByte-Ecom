import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { recordPurchase } from "../api/api";
const PaymentResult = () => {
  const navigate = useNavigate();
  const location = useLocation();
  

  const isSuccess = location.pathname === "/success";
  const pid = new URLSearchParams(location.search).get("pid");
  const oid = new URLSearchParams(location.search).get("oid");
  const amt = new URLSearchParams(location.search).get("amt");

  useEffect(() => {
    if (isSuccess && pid && oid && amt) {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("No auth token found. User must login first.");
        return;
      }
       recordPurchase({ bookId: pid, orderId: oid, amount: amt }, token)
      .then(res => console.log("Purchase recorded:", res.data))
      .catch(console.error);
  }

    const timer = setTimeout(() => navigate("/", { replace: true }), 4000);
    return () => clearTimeout(timer);
  }, [isSuccess, pid, oid, amt, navigate]);

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
