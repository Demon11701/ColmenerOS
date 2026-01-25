export function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="cGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#22d3ee', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      
      {/* Hexagon */}
      <polygon 
        points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" 
        fill="none" 
        stroke="url(#hexGradient)" 
        strokeWidth="3"
      />
      
      {/* Letter C - thick with very rounded ends */}
      <path 
        d="M 70 30 C 70 22 65 22 65 22 L 40 22 C 32 22 28 28 28 36 L 28 64 C 28 72 32 78 40 78 L 65 78 C 65 78 70 78 70 70 L 70 65 C 70 65 68 65 65 65 L 43 65 C 38 65 38 62 38 60 L 38 55 L 50 55 L 50 45 L 38 45 L 38 40 C 38 38 38 35 43 35 L 65 35 C 68 35 70 35 70 35 L 70 30 Z" 
        fill="url(#cGradient)"
      />
      
      {/* Horizontal line in the middle */}
      <rect
        x="48"
        y="46"
        width="30"
        height="8"
        rx="4"
        fill="url(#cGradient)"
      />
    </svg>
  );
}