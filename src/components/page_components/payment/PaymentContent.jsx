/* eslint-disable react/prop-types */

import { FaCheckCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";

import styles from "./Payment.module.css";

const PaymentContent = ({ stage }) => {

  let content = "";

  if (stage) {
    content = (
      <>
        <h1>Payment Success</h1>
        <FaCheckCircle className={styles["green-check-icon"]} />
      </>
    );
  } else {
    content = (
      <>
        <h1>Payment Cancel</h1>
        <FaTimesCircle className={styles["red-check-icon"]} />
      </>
    );
  }

  return (
    <div className={styles["payment-card"]}>
      <div className={styles["payment-header"]}>{content}</div>
    </div>
  );
};

export default PaymentContent;
