export default function StarRating({ value, max = 5 }) {
  // Renders filled, half, and empty stars based on value
  const stars = [];
  for (let i = 1; i <= max; i++) {
    const diff = value - i;
    if (diff >= 0) {
      stars.push(<span key={i} className="text-warning">&#9733;</span>); // full
    } else if (diff > -1) {
      // half
      stars.push(
        <span key={i} className="text-warning position-relative" style={{ display: "inline-block", width: "1em" }}>
          <span style={{ position: "absolute", width: "0.5em", overflow: "hidden" }}>&#9733;</span>
          <span className="text-muted">&#9733;</span>
        </span>
      );
    } else {
      stars.push(<span key={i} className="text-muted">&#9733;</span>); // empty
    }
  }
  return <span aria-label={`Rating ${value} out of ${max}`}>{stars}</span>;
}