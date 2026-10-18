type Palette = "lime" | "lavender" | "coral" | "blue";

const fallback = {
  lime: { kicker: "Curated / 001", headline: "Make it\nmatter.", caption: "A considered moment, delivered." },
  lavender: { kicker: "Flow / 002", headline: "A better\nhello.", caption: "Welcome, without the noise." },
  coral: { kicker: "Social / 003", headline: "The good\nstuff.", caption: "A cadence people can keep." },
  blue: { kicker: "Notes / 004", headline: "Go\ndeeper.", caption: "Longer stories, better signals." },
};

export function CampaignArt({
  palette = "lime",
  label,
  kicker,
  headline,
  caption,
  className = "",
}: {
  palette?: Palette;
  label?: string;
  kicker?: string;
  headline?: string;
  caption?: string;
  className?: string;
}) {
  const copy = fallback[palette];

  return (
    <div
      className={`campaign-art ${palette} ${className}`}
      aria-label={label || "Abstract campaign visual"}
      role="img"
    >
      <div className="art-grain" />
      <div className="art-orb one" />
      <div className="art-orb two" />
      <div className="art-letter">
        <span className="art-kicker">{kicker || copy.kicker}</span>
        <strong>{headline || copy.headline}</strong>
        <span className="art-rule" />
        <span className="art-caption">{caption || copy.caption}</span>
      </div>
      <span className="art-chip">✳</span>
    </div>
  );
}
