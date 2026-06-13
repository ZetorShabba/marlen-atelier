"use client";

const blades = Array.from({ length: 18 }, (_, i) => i);

export default function HeroLogoAnimation({ compact = false }) {
  return (
    <div className={compact ? "logoStage compactLogoStage" : "logoStage"}>
      <div className="bladeWrap">
        {blades.map((_, i) => {
          const side = i < 9 ? "left" : "right";
          const local = side === "left" ? i : i - 9;
          const x = side === "left" ? local * 12 : 150 + local * 12;
          const h = 92 - Math.abs(local - 8) * 6;
          const delay = ((i * 47) % 13) * 0.06;

          return (
            <span
              key={i}
              className={`blade ${side}`}
              style={{
                left: `${x}px`,
                height: `${h}px`,
                animationDelay: `${delay}s`,
              }}
            />
          );
        })}
      </div>

      {!compact && (
        <div className="logoText">
          <strong>MARLEN</strong>
          <span>ATELIER KFT.</span>
        </div>
      )}
    </div>
  );
}