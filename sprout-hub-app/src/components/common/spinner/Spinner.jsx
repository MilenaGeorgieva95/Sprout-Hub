export default function Spinner() {
  return (
    <div className="text-center mx-auto">
      <h1>Sprout Hub</h1>
      <div className="container">
        <div className="spinner-grow text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
}
