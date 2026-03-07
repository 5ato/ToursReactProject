import { useState } from "react";

const CHILD_AGES = [
  "до 2 лет", "2 года", "3 года", "4 года", "5 лет",
  "6 лет", "7 лет", "8 лет", "9 лет", "10 лет",
  "11 лет", "12 лет", "13 лет", "14 лет", "15 лет",
];

const MIN_ADULTS = 1;
const MAX_ADULTS = 6;
const MAX_CHILDREN = 3;

function adultLabel(n: number) {
  if (n === 1) return "взрослый";
  if (n < 5) return "взрослых";
  return "взрослых";
}

interface TouristsMenuProps {
  countAdults?: number,
  children: (string | null)[],
  setChildren: React.Dispatch<React.SetStateAction<(string | null)[]>>
  onChangeAdults: (value: number) => void
}

export default function TouristsMenu({ countAdults = 2, children, setChildren, onChangeAdults }: TouristsMenuProps) {
  const [adults, setAdults] = useState(countAdults);
  const [showAgeSelect, setShowAgeSelect] = useState(false); // which child index is picking age
  const [selectingFor, setSelectingFor] = useState<number | null>(null);

  function changeAdults(delta: number) {
    setAdults(a => {
      let value = Math.max(MIN_ADULTS, Math.min(MAX_ADULTS, a + delta))
      onChangeAdults(value)
      return value
    });
  }

  function addChild() {
    if (children.length >= MAX_CHILDREN) return;
    const newChildren = [...children, null];
    setChildren(newChildren);
    setSelectingFor(newChildren.length - 1);
    setShowAgeSelect(true);
    
  }

  function selectAge(age: string) {
    const updated = [...children];
    updated[selectingFor!] = age;
    setChildren(updated);
    setShowAgeSelect(false);
    setSelectingFor(null);
  }

  function removeChild(idx: number) {
    const updated = children.filter((_, i) => i !== idx);
    setChildren(updated);
    if (showAgeSelect && selectingFor === idx) {
      setShowAgeSelect(false);
      setSelectingFor(null);
    }
  }

  function openAgeSelect(idx: number) {
    setSelectingFor(idx);
    setShowAgeSelect(true);
  }

  function cancelAgeSelect() {
    // if child has no age yet, remove it
    if (children[selectingFor!] === null) {
      removeChild(selectingFor!);
    }
    setShowAgeSelect(false);
    setSelectingFor(null);
  }

  const btn = {
    display: "flex", alignItems: "center", justifyContent: "center",
    width: 40, height: 40, borderRadius: "50%",
    background: "#4a5568", border: "none", cursor: "pointer",
    color: "#fff", fontSize: 22, fontWeight: 300,
    transition: "background 0.15s",
    flexShrink: 0,
    fontFamily: "'Geologica', sans-serif",
  };

  // Age grid: 3 columns, 5 rows
  const cols = 3;
  const rows = [];
  for (let i = 0; i < CHILD_AGES.length; i += cols) {
    rows.push(CHILD_AGES.slice(i, i + cols));
  }

  return (
    <div onClick={(e) => e.stopPropagation()} style={{
      background: "#f0f4fa",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontFamily: "'Geologica', sans-serif",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Geologica:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

      <div style={{
        background: "#fff", borderRadius: 20,
        boxShadow: "0 8px 40px rgba(26,58,107,0.10)",
        padding: "28px 28px 24px", width: 320,
      }}>
        {/* Title */}
        <div style={{
          fontSize: 16, fontWeight: 800, letterSpacing: 1.5,
          color: "#1a2340", marginBottom: 20,
          fontFamily: "'Geologica', sans-serif",
          textTransform: "uppercase",
        }}>
          Туристы
        </div>

        {/* Adults counter */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
          <button
            style={{ ...btn, opacity: adults <= MIN_ADULTS ? 0.4 : 1, cursor: adults <= MIN_ADULTS ? "not-allowed" : "pointer" }}
            onClick={() => changeAdults(-1)}
            onMouseEnter={e => { if (adults > MIN_ADULTS) e.currentTarget.style.background = "#2d3748"; }}
            onMouseLeave={e => e.currentTarget.style.background = "#4a5568"}
          >−</button>

          <div style={{
            flex: 1, textAlign: "center",
            fontSize: 16, fontWeight: 500, color: "#1a2340",
            fontFamily: "'Geologica', sans-serif",
          }}>
            {adults} {adultLabel(adults)}
          </div>

          <button
            style={{ ...btn, opacity: adults >= MAX_ADULTS ? 0.4 : 1, cursor: adults >= MAX_ADULTS ? "not-allowed" : "pointer" }}
            onClick={() => changeAdults(1)}
            onMouseEnter={e => { if (adults < MAX_ADULTS) e.currentTarget.style.background = "#2d3748"; }}
            onMouseLeave={e => e.currentTarget.style.background = "#4a5568"}
          >+</button>
        </div>

        {/* Children tags */}
        {children.length > 0 && !showAgeSelect && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
            {children.map((age, idx) => (
              <div key={idx} style={{
                display: "flex", alignItems: "center", gap: 6,
                background: "#eef3fa", borderRadius: 20, padding: "6px 12px",
                fontSize: 13, color: "#1a2340", fontWeight: 500,
                cursor: "pointer",
              }}
                onClick={() => openAgeSelect(idx)}
              >
                <span>Ребёнок {idx + 1}: {age || "—"}</span>
                <span
                  onClick={e => { e.stopPropagation(); removeChild(idx); }}
                  style={{ color: "#8a94a8", fontWeight: 700, fontSize: 15, lineHeight: 1, cursor: "pointer" }}
                >×</span>
              </div>
            ))}
          </div>
        )}

        {/* Age selector */}
        {showAgeSelect ? (
          <div>
            <div style={{
              fontSize: 14, color: "#4a5568", fontWeight: 500,
              marginBottom: 14, textAlign: "center",
              fontFamily: "'Geologica', sans-serif",
            }}>
              Выберите возраст ребенка
            </div>
            <div>
              {rows.map((row, ri) => (
                <div key={ri} style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                  {row.map(age => (
                    <button key={age} onClick={() => selectAge(age)} style={{
                      flex: 1, padding: "10px 4px",
                      borderRadius: 20, border: "none",
                      background: children[selectingFor!] === age ? "#1a3a6b" : "#eef3fa",
                      color: children[selectingFor!] === age ? "#fff" : "#1a2340",
                      fontSize: 13, fontWeight: 500,
                      cursor: "pointer",
                      fontFamily: "'Geologica', sans-serif",
                      transition: "background 0.15s, color 0.15s",
                    }}
                      onMouseEnter={e => {
                        if (children[selectingFor!] !== age) e.currentTarget.style.background = "#dce8f7";
                      }}
                      onMouseLeave={e => {
                        if (children[selectingFor!] !== age) e.currentTarget.style.background = "#eef3fa";
                      }}
                    >
                      {age}
                    </button>
                  ))}
                </div>
              ))}
            </div>
            <button onClick={cancelAgeSelect} style={{
              width: "100%", marginTop: 8, padding: "10px",
              background: "none", border: "1.5px solid #dce3ee",
              borderRadius: 20, color: "#8a94a8", fontSize: 13,
              cursor: "pointer", fontFamily: "'Geologica', sans-serif",
              fontWeight: 500, transition: "border-color 0.15s",
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "#b0bac8"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "#dce3ee"}
            >
              Отмена
            </button>
          </div>
        ) : (
          <>
            {/* Add child button */}
            {children.length < MAX_CHILDREN && (
              <button onClick={addChild} style={{
                width: "100%", padding: "12px",
                background: "#eef3fa", border: "none",
                borderRadius: 20, color: "#4a5568",
                fontSize: 14, fontWeight: 500,
                cursor: "pointer", marginBottom: 20,
                fontFamily: "'Geologica', sans-serif",
                transition: "background 0.15s",
              }}
                onMouseEnter={e => e.currentTarget.style.background = "#dce8f7"}
                onMouseLeave={e => e.currentTarget.style.background = "#eef3fa"}
              >
                Добавить ребенка
              </button>
            )}

            {/* Select button */}
            <button style={{
              width: "100%", padding: "14px",
              background: "#1a3a6b", border: "none",
              borderRadius: 24, color: "#fff",
              fontSize: 16, fontWeight: 600,
              cursor: "pointer",
              fontFamily: "'Geologica', sans-serif",
              boxShadow: "0 4px 16px rgba(26,58,107,0.25)",
              transition: "background 0.15s, transform 0.1s",
            }}
              onMouseEnter={e => { e.currentTarget.style.background = "#0f2448"; e.currentTarget.style.transform = "scale(1.02)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#1a3a6b"; e.currentTarget.style.transform = "scale(1)"; }}
            >
              Выбрать
            </button>
          </>
        )}
      </div>
    </div>
  );
}