const Display = ({ time }) => {
  return (
    <div
      className="text-center font-mono text-5xl font-bold tracking-[0.2em] text-white md:text-7xl"
      aria-live="polite"
      aria-atomic="true"
    >
      <span>
        {time.hours}:{time.minutes}:{time.seconds}
      </span>
      <span className="ml-3 align-middle text-2xl tracking-[0.25em] text-cyan-300/80 md:text-3xl">
        {time.milliseconds}
      </span>
    </div>
  );
};

export default Display;
