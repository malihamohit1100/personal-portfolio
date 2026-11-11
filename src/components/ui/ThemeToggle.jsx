
const ThemeToggle = ({ theme, onToggle }) => {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text)] transition hover:bg-[var(--color-surface-alt)]"
    >
      <i
        className={`bi ${isDark ? 'bi-sun' : 'bi-moon-stars'} text-lg`}
        aria-hidden="true"
      ></i>
    </button>
  );
};

export default ThemeToggle;
