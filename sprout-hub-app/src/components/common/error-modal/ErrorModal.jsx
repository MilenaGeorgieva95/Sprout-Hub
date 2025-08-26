export default function ErrorModal({ error, onClose }) {
  if (!error) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2>Error</h2>
        <p>{error}</p>
        <button onClick={onClose} style={styles.button}>
          Close
        </button>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    background: "#fff",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.25)",
    textAlign: "center",
  },
  button: {
    marginTop: "10px",
    padding: "10px",
    background: "red",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
