import React from 'react';

interface OrnamentProps {
  className?: string;
  color?: string;
}

/**
 * Intricate line-art Ganesha emblem in Antique Gold (#B38A45) for the top of the Hero section
 */
export const GaneshaEmblem: React.FC<OrnamentProps> = ({
  className = 'w-14 h-16',
  color = '#B38A45',
}) => (
  <svg
    viewBox="0 0 100 115"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Crown / Kirita */}
    <path
      d="M50 6L43 20H57L50 6Z"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M38 25C41 18 59 18 62 25"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M34 30H66"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="50" cy="14" r="2" fill={color} />
    <circle cx="50" cy="3" r="1.5" fill={color} />

    {/* Ears */}
    <path
      d="M35 35C20 32 16 48 25 58C29 62 34 60 36 56"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M65 35C80 32 84 48 75 58C71 62 66 60 64 56"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
    />

    {/* Forehead Tilak & Trunk */}
    <path
      d="M45 38H55M46 42H54"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="50" cy="46" r="1.8" fill={color} />
    <path
      d="M44 45C44 58 43 72 52 76C58 79 63 73 60 68C58 65 54 67 55 70"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* Eyes & Tusks */}
    <path d="M39 45C40.5 43.5 42.5 43.5 44 45" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M56 45C57.5 43.5 59.5 43.5 61 45" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M41 59L37 63" stroke={color} strokeWidth="1.6" strokeLinecap="round" />

    {/* Shoulders / Blessings Hand & Modak */}
    <path
      d="M28 72C24 78 24 88 32 92C38 95 45 94 50 94C55 94 62 95 68 92C76 88 76 78 72 72"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    {/* Lotus Pedestal */}
    <path
      d="M30 100C38 106 62 106 70 100"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M50 95L46 103H54L50 95Z"
      stroke={color}
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <path
      d="M22 106H78"
      stroke={color}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeDasharray="3 3"
    />
  </svg>
);

/**
 * Signature 5-petal antique gold lotus emblem used above section headings
 */
export const LotusMotif: React.FC<OrnamentProps> = ({
  className = 'w-11 h-8',
  color = '#B38A45',
}) => (
  <svg
    viewBox="0 0 80 54"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Center Petal */}
    <path
      d="M40 6C34 16 33 28 40 38C47 28 46 16 40 6Z"
      stroke={color}
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
    {/* Inner Side Petals */}
    <path
      d="M38 37C30 33 23 23 26 13C32 16 36 24 38 37Z"
      stroke={color}
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path
      d="M42 37C50 33 57 23 54 13C48 16 44 24 42 37Z"
      stroke={color}
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    {/* Outer Side Petals */}
    <path
      d="M36 38C25 38 14 31 13 22C21 22 29 28 36 38Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M44 38C55 38 66 31 67 22C59 22 51 28 44 38Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    {/* Base Flourish */}
    <path
      d="M22 43C30 40 50 40 58 43"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <circle cx="40" cy="46" r="2" fill={color} />
  </svg>
);

/**
 * Symmetrical antique gold filigree horizontal divider
 */
export const GoldDivider: React.FC<OrnamentProps> = ({
  className = 'w-44 h-5',
  color = '#B38A45',
}) => (
  <svg
    viewBox="0 0 220 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <line x1="8" y1="12" x2="84" y2="12" stroke={color} strokeWidth="1.2" strokeOpacity="0.75" />
    <line x1="136" y1="12" x2="212" y2="12" stroke={color} strokeWidth="1.2" strokeOpacity="0.75" />
    {/* Center Diamond & Side Loops */}
    <path d="M110 5L117 12L110 19L103 12L110 5Z" stroke={color} strokeWidth="1.5" />
    <circle cx="110" cy="12" r="2" fill={color} />
    <path
      d="M101 12C96 7 90 7 88 12C90 17 96 17 101 12Z"
      stroke={color}
      strokeWidth="1.3"
    />
    <path
      d="M119 12C124 7 130 7 132 12C130 17 124 17 119 12Z"
      stroke={color}
      strokeWidth="1.3"
    />
    <circle cx="82" cy="12" r="1.8" fill={color} />
    <circle cx="138" cy="12" r="1.8" fill={color} />
  </svg>
);

/**
 * Antique gold line-art illustration of Kerala Caparisoned Elephants, Muthukuda Parasol, Palm Trees & Temple
 */
export const KeralaElephantLineArt: React.FC<OrnamentProps> = ({
  className = 'w-64 h-36',
  color = '#B38A45',
}) => (
  <svg
    viewBox="0 0 280 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Ground Line */}
    <path d="M10 140H270" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeOpacity="0.7" />

    {/* Muthukuda (Ceremonial Silk Parasol) */}
    <path d="M72 22V68" stroke={color} strokeWidth="1.5" />
    <path
      d="M36 36C48 20 96 20 108 36H36Z"
      stroke={color}
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path
      d="M36 36C42 40 48 40 54 36C60 40 66 40 72 36C78 40 84 40 90 36C96 40 102 40 108 36"
      stroke={color}
      strokeWidth="1.3"
    />
    <path d="M72 15V22" stroke={color} strokeWidth="1.8" strokeLinecap="round" />

    {/* Lead Caparisoned Elephant with Nettipattam */}
    {/* Back & Body */}
    <path
      d="M42 92C42 74 58 66 80 68C96 70 106 78 108 95V139H94V112H62V139H46V102"
      stroke={color}
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Head & Trunk */}
    <path
      d="M104 75C116 74 124 82 124 96C124 108 122 122 116 126C112 128 109 124 111 120"
      stroke={color}
      strokeWidth="1.7"
      strokeLinecap="round"
    />
    {/* Tusk */}
    <path d="M116 102C123 105 128 103 130 98" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    {/* Nettipattam (Forehead Ornament) */}
    <path
      d="M114 75L121 96L111 98L108 78Z"
      stroke={color}
      strokeWidth="1.4"
      fill={color}
      fillOpacity="0.12"
    />
    {/* Ear & Caparison Cloth */}
    <path d="M96 74C88 78 88 94 98 98" stroke={color} strokeWidth="1.4" />
    <path d="M62 70V98H90V72" stroke={color} strokeWidth="1.3" strokeDasharray="2 2" />
    {/* Tail */}
    <path d="M42 92L35 112" stroke={color} strokeWidth="1.3" strokeLinecap="round" />

    {/* Second Smaller Elephant & Parasol */}
    <path d="M158 46V78" stroke={color} strokeWidth="1.3" />
    <path d="M136 56C144 45 172 45 180 56H136Z" stroke={color} strokeWidth="1.4" />
    <path
      d="M138 104C138 90 150 84 166 86C178 87 184 96 184 110V139H174V118H150V139H140V104Z"
      stroke={color}
      strokeWidth="1.5"
    />
    <path d="M182 92C190 92 195 100 194 114C193 122 190 126 187 124" stroke={color} strokeWidth="1.5" />

    {/* Coconut Palms & Kerala Temple Roof */}
    <path d="M218 139C216 112 220 88 226 68" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M226 68C214 62 204 66 198 74" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
    <path d="M226 68C218 56 208 54 200 58" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
    <path d="M226 68C236 56 248 56 254 62" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
    <path d="M226 68C238 64 248 70 252 78" stroke={color} strokeWidth="1.3" strokeLinecap="round" />

    {/* Traditional Sloped Kerala Nalukettu / Temple Roof */}
    <path d="M225 112L248 96L271 112H225Z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M220 124L248 108L275 124H220Z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M228 124V139M248 124V139M268 124V139" stroke={color} strokeWidth="1.4" />
  </svg>
);

/**
 * Antique gold line-art illustration of Tamil Nadu Temple Gopuram & Mandapam
 */
export const TamilGopuramLineArt: React.FC<OrnamentProps> = ({
  className = 'w-64 h-36',
  color = '#B38A45',
}) => (
  <svg
    viewBox="0 0 260 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Ground Line */}
    <path d="M10 140H250" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeOpacity="0.7" />

    {/* Left Mandapam Shrine */}
    <path d="M35 102C35 88 50 80 65 80C80 80 95 88 95 102H35Z" stroke={color} strokeWidth="1.5" />
    <path d="M65 72V80" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    <rect x="30" y="102" width="70" height="10" stroke={color} strokeWidth="1.4" />
    <rect x="34" y="112" width="62" height="28" stroke={color} strokeWidth="1.4" />
    <path d="M48 112V140M65 112V140M82 112V140" stroke={color} strokeWidth="1.3" />
    <path d="M56 140V124C56 119 74 119 74 124V140" stroke={color} strokeWidth="1.3" />

    {/* Towering Multi-Tiered Tamil Nadu Gopuram */}
    {/* Kalasam Finials at Top */}
    <path
      d="M156 18V24M166 16V24M176 16V24M186 16V24M196 18V24"
      stroke={color}
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    {/* Barrel Vaulted Top Roof (Shikhara) */}
    <path
      d="M148 34C150 24 202 24 204 34H148Z"
      stroke={color}
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    {/* Tier 1 */}
    <path d="M144 34H208L211 50H141L144 34Z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
    {/* Tier 2 */}
    <path d="M139 50H213L217 68H135L139 50Z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
    {/* Tier 3 */}
    <path d="M133 68H219L223 88H129L133 68Z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
    {/* Tier 4 */}
    <path d="M127 88H225L230 110H122L127 88Z" stroke={color} strokeWidth="1.6" strokeLinejoin="round" />
    {/* Base Gateway Tier */}
    <rect x="118" y="110" width="116" height="30" stroke={color} strokeWidth="1.6" />

    {/* Central Gopuram Gavaksha (Window / Arch Portal Line Details) */}
    <path d="M170 36V108M182 36V108" stroke={color} strokeWidth="1.1" strokeDasharray="3 2" />
    <path
      d="M166 140V120C166 114 186 114 186 120V140"
      stroke={color}
      strokeWidth="1.6"
    />
    {/* Sculptural Pillar Niche Lines */}
    <path
      d="M152 52V66M200 52V66M146 70V86M206 70V86M140 90V108M212 90V108M134 114V138M150 114V138M202 114V138M218 114V138"
      stroke={color}
      strokeWidth="1.2"
      strokeOpacity="0.85"
    />
  </svg>
);

/**
 * Custom antique gold line-art icons for Wedding Events
 */
export const EventLineIcon: React.FC<{
  type: 'rings' | 'garland' | 'cheers';
  className?: string;
}> = ({ type, className = 'w-11 h-11' }) => {
  const color = '#B38A45';

  if (type === 'rings') {
    return (
      <svg viewBox="0 0 56 56" fill="none" className={className} aria-hidden="true">
        {/* Interlocking Wedding Rings with Diamond */}
        <circle cx="22" cy="32" r="11" stroke={color} strokeWidth="2" />
        <circle cx="34" cy="32" r="11" stroke={color} strokeWidth="2" />
        <path d="M22 21L18 15L22 12L26 15L22 21Z" stroke={color} strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M22 8V10M15 11L16.5 12.5M29 11L27.5 12.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === 'garland') {
    return (
      <svg viewBox="0 0 56 56" fill="none" className={className} aria-hidden="true">
        {/* Sacred Varmala / Thali & Lotus */}
        <path
          d="M16 14C16 28 21 38 28 42C35 38 40 28 40 14"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="3 3"
        />
        <path
          d="M20 14C20 24 23 32 28 35C33 32 36 24 36 14"
          stroke={color}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path d="M28 42L25 47H31L28 42Z" stroke={color} strokeWidth="1.6" fill={color} fillOpacity="0.2" />
        <path d="M28 12C25 17 25 22 28 26C31 22 31 17 28 12Z" stroke={color} strokeWidth="1.6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 56 56" fill="none" className={className} aria-hidden="true">
      {/* Celebration Flutes & Sparkles */}
      <path d="M16 16H26L24 30C23.5 33 18.5 33 18 30L16 16Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M21 32V42M16 42H26" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M30 16H40L38 30C37.5 33 32.5 33 32 30L30 16Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M35 32V42M30 42H40" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M17 22H25M31 22H39" stroke={color} strokeWidth="1.3" />
      <path d="M28 8V12M24 10L26 12M32 10L30 12" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
};

/**
 * Botanical floral corner spray (Jasmine & Hibiscus/Rose) for cards and section corners
 */
export const FloralCornerSpray: React.FC<{
  className?: string;
  flipX?: boolean;
  flipY?: boolean;
}> = ({ className = 'w-24 h-24', flipX = false, flipY = false }) => (
  <svg
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{
      transform: `scale(${flipX ? -1 : 1}, ${flipY ? -1 : 1})`,
    }}
    aria-hidden="true"
  >
    {/* Leafy Vine Branches */}
    <path
      d="M8 105C12 65 35 30 95 12"
      stroke="#4A6B46"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    {/* Green Leaves */}
    <path d="M16 76C6 68 8 54 20 52C24 62 22 72 16 76Z" fill="#4A6B46" fillOpacity="0.75" />
    <path d="M36 46C28 34 34 22 46 22C48 32 44 42 36 46Z" fill="#3B5938" fillOpacity="0.8" />
    <path d="M64 26C60 16 68 8 78 10C76 18 72 24 64 26Z" fill="#4A6B46" fillOpacity="0.75" />
    <path d="M26 68C36 66 44 74 42 84C32 82 26 76 26 68Z" fill="#5E7E58" fillOpacity="0.7" />
    <path d="M52 40C62 40 68 48 66 56C56 54 52 48 52 40Z" fill="#5E7E58" fillOpacity="0.7" />

    {/* Crimson / Rose Blossom */}
    <circle cx="28" cy="42" r="11" fill="#A64B53" fillOpacity="0.85" />
    <circle cx="28" cy="42" r="7" fill="#C86D74" />
    <circle cx="28" cy="42" r="3" fill="#E6B86A" />

    {/* White Jasmine Blossoms */}
    <g transform="translate(48, 24)">
      <circle cx="0" cy="-5" r="4" fill="#FFFDF8" stroke="#D9C5A0" strokeWidth="0.6" />
      <circle cx="5" cy="0" r="4" fill="#FFFDF8" stroke="#D9C5A0" strokeWidth="0.6" />
      <circle cx="0" cy="5" r="4" fill="#FFFDF8" stroke="#D9C5A0" strokeWidth="0.6" />
      <circle cx="-5" cy="0" r="4" fill="#FFFDF8" stroke="#D9C5A0" strokeWidth="0.6" />
      <circle cx="0" cy="0" r="2.2" fill="#D4AF37" />
    </g>
    <g transform="translate(18, 64)">
      <circle cx="0" cy="-4" r="3.5" fill="#FFFDF8" stroke="#D9C5A0" strokeWidth="0.6" />
      <circle cx="4" cy="0" r="3.5" fill="#FFFDF8" stroke="#D9C5A0" strokeWidth="0.6" />
      <circle cx="0" cy="4" r="3.5" fill="#FFFDF8" stroke="#D9C5A0" strokeWidth="0.6" />
      <circle cx="-4" cy="0" r="3.5" fill="#FFFDF8" stroke="#D9C5A0" strokeWidth="0.6" />
      <circle cx="0" cy="0" r="1.8" fill="#D4AF37" />
    </g>
  </svg>
);

/**
 * Hanging Madurai Jasmine (Malligai) Garland & Mango Leaf Toran for Hero and RSVP top corners
 */
export const HangingJasmineGarland: React.FC<{
  className?: string;
  side?: 'left' | 'right';
  withPinkBlossoms?: boolean;
}> = ({ className = 'w-36 h-56', side = 'left', withPinkBlossoms = false }) => (
  <svg
    viewBox="0 0 160 260"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ transform: side === 'right' ? 'scaleX(-1)' : undefined }}
    aria-hidden="true"
  >
    {/* Lush Tropical Green Leaves Canopy at Top */}
    <path
      d="M0 0C35 8 60 32 72 68C42 58 16 38 0 0Z"
      fill="#2D4F2E"
    />
    <path
      d="M18 0C55 4 88 22 106 54C74 48 42 30 18 0Z"
      fill="#3E683B"
    />
    <path
      d="M0 24C24 38 42 66 44 102C18 84 4 56 0 24Z"
      fill="#4C7A45"
    />
    <path
      d="M52 0C84 6 114 20 132 42C102 38 74 22 52 0Z"
      fill="#29452F"
    />

    {/* Strand 1 (Longest Jasmine / Floral Strand) */}
    <line x1="34" y1="20" x2="34" y2="225" stroke="#B38A45" strokeWidth="1.2" />
    {[42, 60, 78, 96, 114, 132, 150, 168, 186, 204].map((y, idx) => (
      <g key={`s1-${y}`}>
        <ellipse cx="29" cy={y} rx="6.5" ry="4.5" transform={`rotate(-25 29 ${y})`} fill="#FFFDF7" stroke="#E5D6B8" strokeWidth="0.7" />
        <ellipse cx="39" cy={y + 4} rx="6.5" ry="4.5" transform={`rotate(25 39 ${y + 4})`} fill="#FAF3E3" stroke="#E5D6B8" strokeWidth="0.7" />
        <circle cx="34" cy={y + 2} r="3.5" fill={withPinkBlossoms && idx % 3 === 1 ? '#D86C7C' : '#FFFFFF'} />
      </g>
    ))}
    {/* Crimson / Gold Tassel Tip */}
    <circle cx="34" cy="222" r="5" fill="#B38A45" />
    <path d="M34 226L29 242H39L34 226Z" fill="#713D43" />

    {/* Strand 2 (Medium Jasmine Strand) */}
    <line x1="72" y1="12" x2="72" y2="168" stroke="#B38A45" strokeWidth="1.2" />
    {[34, 52, 70, 88, 106, 124, 142, 156].map((y, idx) => (
      <g key={`s2-${y}`}>
        <ellipse cx="67" cy={y} rx="6" ry="4" transform={`rotate(-25 67 ${y})`} fill={withPinkBlossoms && idx % 2 === 0 ? '#E895A2' : '#FFFDF7'} stroke="#E5D6B8" strokeWidth="0.6" />
        <ellipse cx="77" cy={y + 3} rx="6" ry="4" transform={`rotate(25 77 ${y + 3})`} fill="#FFFDF7" stroke="#E5D6B8" strokeWidth="0.6" />
        <circle cx="72" cy={y + 1} r="3" fill={withPinkBlossoms ? '#C44D5E' : '#F5E6C4'} />
      </g>
    ))}
    <circle cx="72" cy="168" r="4.5" fill="#B38A45" />
    <path d="M72 172L68 185H76L72 172Z" fill="#713D43" />

    {/* Strand 3 (Shorter Inner Strand) */}
    <line x1="108" y1="8" x2="108" y2="115" stroke="#B38A45" strokeWidth="1" />
    {[28, 46, 64, 82, 100].map((y) => (
      <g key={`s3-${y}`}>
        <ellipse cx="104" cy={y} rx="5" ry="3.5" transform={`rotate(-20 104 ${y})`} fill="#FFFDF7" />
        <ellipse cx="112" cy={y + 2} rx="5" ry="3.5" transform={`rotate(20 112 ${y + 2})`} fill="#FAF3E3" />
      </g>
    ))}
    <circle cx="108" cy="114" r="3.5" fill="#B38A45" />
  </svg>
);

/**
 * Traditional Kerala Brass Nilavilakku Standing Oil Lamp with Glowing Animated Flames (for RSVP Card)
 */
export const BrassNilavilakku: React.FC<{ className?: string }> = ({
  className = 'w-28 h-52',
}) => (
  <svg
    viewBox="0 0 120 220"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="brassGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#7C5821" />
        <stop offset="30%" stopColor="#D6B168" />
        <stop offset="50%" stopColor="#FCE6A6" />
        <stop offset="75%" stopColor="#B38A45" />
        <stop offset="100%" stopColor="#694818" />
      </linearGradient>
      <radialGradient id="flameGlowGrad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FFF6C2" stopOpacity="0.95" />
        <stop offset="45%" stopColor="#FFB82E" stopOpacity="0.55" />
        <stop offset="100%" stopColor="#FF8800" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Ambient Glow Around Lamp Top */}
    <circle cx="60" cy="68" r="46" fill="url(#flameGlowGrad)" />

    {/* Top Finial (Koombu / Swan Crest) */}
    <path d="M60 16L54 34H66L60 16Z" fill="url(#brassGrad)" />
    <circle cx="60" cy="39" r="5" fill="url(#brassGrad)" />
    <ellipse cx="60" cy="48" rx="12" ry="4" fill="url(#brassGrad)" />
    <rect x="55" y="48" width="10" height="16" fill="url(#brassGrad)" />

    {/* Glowing Flames on the Oil Bowl (Thattu) */}
    {/* Left Flame */}
    <g className="animate-flame">
      <path d="M26 48C22 56 22 63 26 66C30 63 30 56 26 48Z" fill="#FF9D1C" />
      <path d="M26 53C24 58 24 62 26 65C28 62 28 58 26 53Z" fill="#FFF7C2" />
    </g>
    {/* Mid-Left Flame */}
    <g className="animate-flame" style={{ animationDelay: '0.4s' }}>
      <path d="M42 52C39 59 39 65 42 68C45 65 45 59 42 52Z" fill="#FF9D1C" />
      <path d="M42 56C40 60 40 64 42 66C44 64 44 60 42 56Z" fill="#FFF7C2" />
    </g>
    {/* Center Front Flame */}
    <g className="animate-flame" style={{ animationDelay: '0.8s' }}>
      <path d="M60 54C56 62 56 68 60 71C64 68 64 62 60 54Z" fill="#FF9D1C" />
      <path d="M60 58C58 63 58 67 60 69C62 67 62 63 60 58Z" fill="#FFF7C2" />
    </g>
    {/* Mid-Right Flame */}
    <g className="animate-flame" style={{ animationDelay: '0.2s' }}>
      <path d="M78 52C75 59 75 65 78 68C81 65 81 59 78 52Z" fill="#FF9D1C" />
      <path d="M78 56C76 60 76 64 78 66C80 64 80 60 78 56Z" fill="#FFF7C2" />
    </g>
    {/* Right Flame */}
    <g className="animate-flame" style={{ animationDelay: '0.6s' }}>
      <path d="M94 48C90 56 90 63 94 66C98 63 98 56 94 48Z" fill="#FF9D1C" />
      <path d="M94 53C92 58 92 62 94 65C96 62 96 58 94 53Z" fill="#FFF7C2" />
    </g>

    {/* Oil Reservoir Bowl (Thattu) */}
    <path
      d="M22 65H98L88 76H32L22 65Z"
      fill="url(#brassGrad)"
    />
    <ellipse cx="60" cy="79" rx="22" ry="4.5" fill="url(#brassGrad)" />

    {/* Turned Brass Stem (Kandam) */}
    <rect x="53" y="83" width="14" height="14" rx="3" fill="url(#brassGrad)" />
    <ellipse cx="60" cy="100" rx="16" ry="5" fill="url(#brassGrad)" />
    <path d="M52 104H68L65 138H55L52 104Z" fill="url(#brassGrad)" />
    <ellipse cx="60" cy="140" rx="15" ry="4.5" fill="url(#brassGrad)" />
    <rect x="53" y="144" width="14" height="22" rx="2" fill="url(#brassGrad)" />
    <ellipse cx="60" cy="168" rx="18" ry="5" fill="url(#brassGrad)" />

    {/* Tiered Bell Base (Adithattu) */}
    <path d="M42 171H78L92 192H28L42 171Z" fill="url(#brassGrad)" />
    <rect x="22" y="192" width="76" height="7" rx="3" fill="url(#brassGrad)" />
    <path d="M16 199H104L110 208H10L16 199Z" fill="url(#brassGrad)" />
  </svg>
);

/**
 * Curved Golden Wave Section Divider for bottom of Hero Panorama
 */
export const CurvedGoldenWave: React.FC<{ className?: string }> = ({
  className = 'w-full h-16 sm:h-24',
}) => (
  <svg
    viewBox="0 0 1440 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    className={className}
    aria-hidden="true"
  >
    {/* Back Gold Ribbon */}
    <path
      d="M0 64C240 115 480 18 720 58C960 98 1200 12 1440 48V120H0V64Z"
      fill="#D4B475"
      fillOpacity="0.45"
    />
    {/* Accent Gold Stroke Wave */}
    <path
      d="M0 76C260 22 480 105 720 62C960 19 1200 94 1440 42"
      stroke="#B38A45"
      strokeWidth="2.5"
    />
    <path
      d="M0 84C260 32 480 112 720 70C960 28 1200 102 1440 52"
      stroke="#B38A45"
      strokeWidth="1.2"
      strokeOpacity="0.6"
    />
    {/* Main Warm Ivory Fill Merging into Next Section */}
    <path
      d="M0 78C260 24 480 107 720 64C960 21 1200 96 1440 44V120H0V78Z"
      fill="#F8F2E8"
    />
  </svg>
);
