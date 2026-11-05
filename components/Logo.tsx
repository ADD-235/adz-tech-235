export default function Logo({ size = 36 }: { size?: number }) {
  return (
    <span className="inline-flex items-center gap-2" aria-label="ADZ-tech">
      <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true">
        <rect width="40" height="40" rx="10" fill="#D6AC50" />
        <path d="M8 29 L17 11 L26 29 M12 23 H22 M27 11 H34 L27 29 H34" stroke="#111A35" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="font-display text-lg font-bold">
        ADZ<span className="text-gold">-tech</span>
      </span>
    </span>
  );
}
