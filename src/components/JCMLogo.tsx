export default function JCMLogo({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 280 58"
      fill="none"
      role="img"
      aria-label="JCM Software"
      className={className}
    >
      <defs>
        <linearGradient id="jcm-ul" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#29ABE2" />
          <stop offset="100%" stopColor="#0071BC" />
        </linearGradient>
      </defs>
      <text
        x="0"
        y="43"
        fontFamily="'Nunito', 'Manrope', sans-serif"
        fontSize="44"
        fontWeight="800"
        letterSpacing="-0.5"
        fill="#1B2A6B"
      >
        JCM
      </text>
      <text
        x="85"
        y="43"
        fontFamily="'Nunito', 'Manrope', sans-serif"
        fontSize="44"
        fontWeight="400"
        letterSpacing="-0.5"
        fill="#1B2A6B"
      >
        {"\u00A0Software"}
      </text>
      <rect x="85" y="51" width="192" height="2.5" rx="1.25" fill="url(#jcm-ul)" />
    </svg>
  );
}
