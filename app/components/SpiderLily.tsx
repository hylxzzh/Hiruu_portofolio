type SpiderLilyProps = {
  className?: string;
  style?: React.CSSProperties;
};

export default function SpiderLily({ className = '', style }: SpiderLilyProps) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 24 64"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2 C15 10 17 24 15.5 38 C14.6 49 15.6 59 13 62.5 C11.6 58.5 9.8 48.5 9.4 42 C7.8 36.5 8.2 26 8 27 C7.2 16.5 8.6 7 12 2 Z" />
    </svg>
  );
}