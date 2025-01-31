import './ShinyText.css';

const ShinyText = ({ text, disabled = false, speed = 5, className = '', onClick }) => {
  const animationDuration = `${speed}s`;

  return (
    <button
      className={`shiny-button ${disabled ? 'disabled' : ''} ${className}`}
      style={{ animationDuration }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ShinyText;
