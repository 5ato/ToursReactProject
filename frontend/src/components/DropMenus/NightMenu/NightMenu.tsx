import { useState } from "react";

const MAX_NIGHTS = 12;
const TOTAL_NIGHTS = 28;

interface NightsMenuProps {
    defaultStartNight?: number | null,
    defaultEndNight?: number | null,
    onChangeStartNight: (value: number) => void,
    onChangeEndNight: (value: number) => void
}

export default function NightsMenu({ defaultStartNight = null, defaultEndNight = null, onChangeStartNight, onChangeEndNight }: NightsMenuProps) {
  const [startNight, setStartNight] = useState<number | null>(defaultStartNight);
  const [endNight, setEndNight] = useState<number | null>(defaultEndNight);
  const [hoverNight, setHoverNight] = useState<number | null>(null);

  const nights = Array.from({ length: TOTAL_NIGHTS }, (_, i) => i + 1);

  // Effective hover: clamp to max range
  const effectiveHover = (() => {
    if (hoverNight === null || startNight === null || endNight !== null) return hoverNight;
    const diff = Math.abs(hoverNight - startNight);
    if (diff > MAX_NIGHTS) {
      return hoverNight > startNight ? startNight + MAX_NIGHTS : startNight - MAX_NIGHTS;
    }
    return hoverNight;
  })();

  const rangeEnd = endNight !== null ? endNight : effectiveHover;
  const rangeMin = rangeEnd !== null && startNight !== null ? Math.min(startNight, rangeEnd) : null;
  const rangeMax = rangeEnd !== null && startNight !== null ? Math.max(startNight, rangeEnd) : null;
  const hasRange = rangeMin !== null && rangeMax !== null && rangeMin !== rangeMax;

  function isInRange(n: number) {
    if (!hasRange) return false;
    return n > rangeMin && n < rangeMax;
  }

  function isDisabled(n: number) {
    if (startNight !== null && endNight === null) {
      return Math.abs(n - startNight) > MAX_NIGHTS;
    }
    return false;
  }

  function handleClick(n: number) {
    if (isDisabled(n)) return;
    if (startNight === null || endNight !== null) {
      setStartNight(n);
      setEndNight(null);
      onChangeStartNight(n)
      onChangeEndNight(0)
    } else {
      if (n === startNight) {
        setStartNight(null);
        onChangeStartNight(0)
        return;
      }
      setEndNight(n);
      onChangeEndNight(n);
    }
  }

  function nightsLabel(n: number) {
    if (n === 1) return "ночь";
    if (n < 5) return "ночи";
    return "ночей";
  }

  const COLS = 7;
  const rows = [];
  for (let i = 0; i < nights.length; i += COLS) {
    rows.push(nights.slice(i, i + COLS));
  }

  return (
    <div style={{
      background: "#f0f4fa",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontFamily: "'Geologica', sans-serif"
    }}
        onClick={(e) => e.stopPropagation()}>
      <link href="https://fonts.googleapis.com/css2?family=Geologica:wght@300;400;600;700;800&display=swap" rel="stylesheet" />

      <div style={{
        background: "#fff", borderRadius: 20,
        boxShadow: "0 8px 40px rgba(26,58,107,0.10)",
        padding: "32px 36px", minWidth: 420
      }}>
        {/* Title */}
        <div style={{
          fontSize: 18, fontWeight: 800, letterSpacing: 1.5,
          color: "#1a2340", marginBottom: 24,
          fontFamily: "'Geologica', sans-serif"
        }}>
          НОЧЕЙ ОТ:
        </div>

        {/* Grid */}
        <div onMouseLeave={() => setHoverNight(null)}>
          {rows.map((row, rowIdx) => (
            <div key={rowIdx} style={{ display: "flex", marginBottom: 8 }}>
              {row.map((n) => {
                const isStart = n === startNight;
                const isEnd = n === endNight;
                const isSelected = isStart || isEnd;
                const inRange = isInRange(n);
                const isHoverEdge = n === effectiveHover && startNight !== null && endNight === null && n !== startNight;
                const disabled = isDisabled(n);

                const inFullRange = hasRange && (inRange || isSelected || isHoverEdge);

                // Wrapper strip
                let wrapBg = "transparent";
                if (inFullRange) {
                  if (isStart) {
                    wrapBg = startNight < rangeMax
                      ? "linear-gradient(to right, transparent 50%, #dce8f7 50%)"
                      : "linear-gradient(to left, transparent 50%, #dce8f7 50%)";
                  } else if (isEnd || isHoverEdge) {
                    wrapBg = n > startNight!
                      ? "linear-gradient(to left, transparent 50%, #dce8f7 50%)"
                      : "linear-gradient(to right, transparent 50%, #dce8f7 50%)";
                  } else {
                    wrapBg = "#dce8f7";
                  }
                }
                return (
                  <div
                    key={n}
                    style={{
                      background: wrapBg,
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: 56,
                    }}
                  >
                    <div
                      onClick={() => handleClick(n)}
                      onMouseEnter={() => !disabled && setHoverNight(n)}
                      style={{
                        width: 52,
                        height: 52,
                        borderRadius: 10,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 1,
                        cursor: disabled ? "not-allowed" : "pointer",
                        userSelect: "none",
                        background: isSelected
                          ? "#1a3a6b"
                          : inRange
                            ? "#dce8f7"
                            : isHoverEdge
                              ? "#c8daf0"
                              : "#eef3fa",
                        opacity: disabled ? 0.3 : 1,
                        transition: "background 0.15s, transform 0.1s",
                        transform: isSelected ? "scale(1.05)" : "scale(1)",
                        boxShadow: isSelected ? "0 4px 12px rgba(26,58,107,0.25)" : "none",
                      }}
                    >
                      <span style={{
                        fontSize: 18,
                        fontWeight: isSelected ? 700 : 500,
                        color: isSelected ? "#fff" : disabled ? "#b0bac8" : "#1a2340",
                        lineHeight: 1,
                        fontFamily: "'Geologica', sans-serif",
                      }}>
                        {n}
                      </span>
                      {isSelected && (
                        <span style={{
                          fontSize: 9,
                          fontWeight: 600,
                          color: "rgba(255,255,255,0.85)",
                          letterSpacing: 0.5,
                          textTransform: "uppercase",
                          fontFamily: "'Geologica', sans-serif",
                        }}>
                          {nightsLabel(n)}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{
          marginTop: 20, paddingTop: 18,
          borderTop: "1px solid #eef1f7",
          display: "flex", alignItems: "center", justifyContent: "space-between"
        }}>
          <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
            {startNight !== null && (
              <div>
                <div style={{ fontSize: 11, color: "#8a94a8", fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", marginBottom: 3 }}>От</div>
                <div style={{ fontSize: 15, color: "#1a2340", fontWeight: 700 }}>{startNight} {nightsLabel(startNight)}</div>
              </div>
            )}
            {endNight !== null && (
              <div>
                <div style={{ fontSize: 11, color: "#8a94a8", fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", marginBottom: 3 }}>До</div>
                <div style={{ fontSize: 15, color: "#1a2340", fontWeight: 700 }}>{endNight} {nightsLabel(endNight)}</div>
              </div>
            )}
          </div>

          {(startNight !== null || endNight !== null) && (
            <button
              onClick={() => { setStartNight(null); setEndNight(null); }}
              style={{
                fontSize: 13, color: "#8a94a8", background: "none",
                border: "none", cursor: "pointer", padding: "6px 12px",
                borderRadius: 8, transition: "color 0.15s",
                fontFamily: "'Geologica', sans-serif"
              }}
              onMouseEnter={e => e.currentTarget.style.color = "#e05c5c"}
              onMouseLeave={e => e.currentTarget.style.color = "#8a94a8"}
            >
              Сбросить
            </button>
          )}
        </div>
      </div>
    </div>
  );
}