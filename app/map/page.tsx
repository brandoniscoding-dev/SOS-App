"use client";

const MapPage = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "2rem", color: "#ff0000", marginBottom: "10px" }}>
        Service Unavailable
      </h1>
      <p style={{ fontSize: "1.2rem", color: "#555" }}>
        The map service is currently under maintenance and is unavailable. Please try again later. 
        We apologize for the inconvenience.
      </p>
    </div>
  );
};

export default MapPage;
