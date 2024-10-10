import { useState, useEffect } from "react";
import { Oval } from "react-loader-spinner";

const DataFetchingComponent = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setData({ message: "Data loaded successfully!" });
      setLoading(false);
    }, 3000); // Simulate 3 second load time
  }, []);

  return (
    <div>
      {loading ? (
        <div style={{ textAlign: "center" }}>
          <Oval height={80} width={80} color="blue" ariaLabel="loading" />
        </div>
      ) : (
        <div>{data?.message}</div>
      )}
    </div>
  );
};

export default DataFetchingComponent;

// npm i react-loader-spinner
