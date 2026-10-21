import "./EffectsLayer.css";

const snippets = [
  "SELECT * FROM users",
  "conversion_rate = 12.8%",
  "GROUP BY product_id",
  "retention_rate = 68%",
  "JOIN orders ON user_id",
  "DAU / MAU",
  "A/B TEST: VARIANT B",
  "WHERE event = 'purchase'",
];

export default function EffectsLayer() {
  return (
    <div className="effects-layer" aria-hidden="true">
      <div className="code-stream">
        {snippets.map((code, i) => (
          <span
            className={`code-fragment fragment-${i + 1}`}
            key={code}
          >
            {code}
          </span>
        ))}
      </div>

      <div className="data-orbit">
        <div className="orbit-ring ring-one" />
        <div className="orbit-ring ring-two" />
        <div className="orbit-ring ring-three" />

        <div className="orbit-core">
          <span className="core-label">PRODUCT</span>
          <strong>INSIGHTS</strong>
          <span className="core-symbol">↗</span>
        </div>

        <span className="orbit-dot dot-one" />
        <span className="orbit-dot dot-two" />
        <span className="orbit-dot dot-three" />
      </div>

      <div className="data-bars">
        {[35, 58, 43, 78, 62, 92, 70].map((height, i) => (
          <span
            key={i}
            style={{ "--bar-height": `${height}%`, "--i": i }}
          />
        ))}
      </div>
    </div>
  );
}