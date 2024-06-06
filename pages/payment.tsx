import { changePaymentStatus } from "@/zustand/action";
import { getPaymentData } from "@/zustand/store";
import { useRouter } from "next/navigation";
import React from "react";

const Payment = () => {
  const payment = getPaymentData();
  const router = useRouter();

  const changeStatus = () => {
    changePaymentStatus(true);
    router.push("/dashboard");
  };

  return (
    <div className="h-[83.5vh] flex  justify-center items-center flex-col gap-5">
      <div className="text-3xl">Payment</div>
      {payment ? (
        "Payment Successful"
      ) : (
        <button onClick={changeStatus} className="border-2 border-white p-3">
          Payment now
        </button>
      )}
    </div>
  );
};

export default Payment;
