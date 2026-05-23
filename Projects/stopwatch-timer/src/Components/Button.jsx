const Button = ({ children, onClick, disabled, variant }) => {
  const styles = {
    start: "bg-green-500 hover:bg-green-600",
    pause: "bg-yellow-500 hover:bg-yellow-600",
    reset: "bg-red-500 hover:bg-red-600",
    lap: "bg-blue-500 hover:bg-blue-600",
  };
  const variantClass = styles[variant] ?? styles.start;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`px-5 py-2 rounded-xl text-white font-semibold transition-all duration-300 shadow-lg shadow-black/20 disabled:cursor-not-allowed disabled:opacity-50 ${variantClass}`}
    >
      {children}
    </button>
  );
};

export default Button;
