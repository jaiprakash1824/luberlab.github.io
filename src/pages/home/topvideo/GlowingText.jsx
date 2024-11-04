import PropTypes from "prop-types";

const GlowingText = ({ text, glowColor = "#0070f3", glowSpread = "8px" }) => {
  return (
    <div className="text-white font-bold text-[clamp(3rem,10vw,7.5rem)]">
      <span
        className="relative"
        style={{
          textShadow: `0 0 ${glowSpread} ${glowColor}, 0 0 ${glowSpread} ${glowColor}`,
        }}
      >
        {text}
      </span>
    </div>
  );
};

// Prop types for customization
GlowingText.propTypes = {
  text: PropTypes.string.isRequired,
  glowColor: PropTypes.string, // Custom color for the glow
  glowSpread: PropTypes.string, // Spread of the glow, e.g., '2px', '4px', '8px'
};

export default GlowingText;
