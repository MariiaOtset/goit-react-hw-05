import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TbError404 } from "react-icons/tb";
import css from "./NotFoundPage.module.css";

function NotFoundPage() {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          clearInterval(timer);
          navigate("/");
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className={css.container}>
      <TbError404 className={css.icon} />
      <p className={css.message}>
        Oops, it seems that this page does not exist
      </p>
      <p className={css.countdown}>
        Redirecting to Home page in {countdown}...
      </p>
    </div>
  );
}

export default NotFoundPage;
