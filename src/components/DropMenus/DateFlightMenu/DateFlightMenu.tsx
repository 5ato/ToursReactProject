import { useState } from "react";

const MONTHS_RU = ["ЯНВАРЬ","ФЕВРАЛЬ","МАРТ","АПРЕЛЬ","МАЙ","ИЮНЬ","ИЮЛЬ","АВГУСТ","СЕНТЯБРЬ","ОКТЯБРЬ","НОЯБРЬ","ДЕКАБРЬ"];
const DAYS_RU = ["ПН","ВТ","СР","ЧТ","ПТ","СБ","ВС"];

function isSameDay(a?: Date | null, b?: Date | null) {
    return a && b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}
function isInRange(date: Date, start?: Date | null, end?: Date | null) {
    if (!start || !end) return false;
    const t = date.getTime();
    const s = start.getTime(), e = end.getTime();
    return t > Math.min(s,e) && t < Math.max(s,e);
}

function isWeekend(date: Date) {
    const d = date.getDay();
    return d === 0 || d === 6;
}

function isPast(date: Date) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
}

function isOutOfRange(date: Date, startDate: Date) {
    if (!startDate) return false;
    const diff = Math.round(Math.abs((date.getTime() - startDate.getTime()) / 86400000));
    return diff > MAX_DAYS;
}

const MAX_DAYS = 20;

interface MonthGridProps {
    year: number,
    month: number,
    startDate?: Date | null,
    endDate?: Date | null,
    hoverDate?: Date | null,
    onDayClick: (date: Date) => void
    onDayHover: (date: Date) => void
}

function MonthGrid({ year, month, startDate, endDate, hoverDate, onDayClick, onDayHover }: MonthGridProps) {
  const firstDay = new Date(year, month, 1);
  let startDow = firstDay.getDay();
  if (startDow === 0) startDow = 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  const cells = [];
  for (let i = 1; i < startDow; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));

  // When selecting end date, clamp hover to max range
  const effectiveHover = hoverDate && startDate && !endDate && isOutOfRange(hoverDate, startDate) ? null : hoverDate;
  const rangeEnd = endDate || effectiveHover;

  return (
    <div style={{ flex: 1 }}>
      <div style={{ textAlign: "center", marginBottom: 16 }}>
        <div style={{ fontFamily: "'Geologica', sans-serif", fontWeight: 700, fontSize: 15, letterSpacing: 2, color: "#1a2340" }}>
          {MONTHS_RU[month]}
        </div>
        <div style={{ fontSize: 12, color: "#8a94a8", marginTop: 2, fontFamily: "'Geologica', sans-serif" }}>{year}</div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 0 }}>
        {DAYS_RU.map((d, i) => (
          <div key={d} style={{
            textAlign: "center", padding: "6px 0", fontSize: 12, fontWeight: 600,
            fontFamily: "'Geologica', sans-serif",
            color: i >= 5 ? "#e05c5c" : "#8a94a8",
            marginBottom: 4
          }}>{d}</div>
        ))}
        {cells.map((date, idx) => {
          if (!date) return <div key={`e-${idx}`} />;
          const past = isPast(date);
          const outOfRange = !endDate && startDate && isOutOfRange(date, startDate);
          const disabled = past || outOfRange;
          const isStart = isSameDay(date, startDate);
          const isEnd = isSameDay(date, endDate);
          const inRange = isInRange(date, startDate, rangeEnd);
          const isHoverEnd = isSameDay(date, effectiveHover) && startDate && !endDate;
          const weekend = isWeekend(date);
          const today = isSameDay(date, new Date());

          const isSelected = isStart || isEnd;
          // Is this day inside a confirmed or preview range (inclusive of edges)?
          const hasRange = rangeEnd && startDate && !isSameDay(startDate, rangeEnd);
          const inFullRange = hasRange && (isInRange(date, startDate, rangeEnd) || isStart || isEnd || isHoverEnd);

          // Wrapper background: full strip for interior days, half-strip for edges
          let wrapBg = "transparent";
          if (inFullRange) {
            if (isStart) {
              // right half highlighted
              const isStartLeft = startDate <= (rangeEnd || startDate);
              wrapBg = isStartLeft
                ? "linear-gradient(to right, transparent 50%, #dce8f7 50%)"
                : "linear-gradient(to left, transparent 50%, #dce8f7 50%)";
            } else if (isEnd || (isHoverEnd && !endDate)) {
              // left half highlighted
              const isEndRight = date >= startDate;
              wrapBg = isEndRight
                ? "linear-gradient(to left, transparent 50%, #dce8f7 50%)"
                : "linear-gradient(to right, transparent 50%, #dce8f7 50%)";
            } else {
              wrapBg = "#dce8f7";
            }
          }

          const textColor = disabled
            ? "#c8cfdb"
            : isSelected
              ? "#fff"
              : inFullRange
                ? (weekend ? "#c04040" : "#1a2340")
                : (weekend ? "#e05c5c" : "#1a2340");

          return (
            <div key={date.toISOString()} style={{ background: wrapBg, display: "flex", alignItems: "center", justifyContent: "center", height: 44, position: "relative" }}>
              <div
                onClick={() => !disabled && onDayClick(date)}
                onMouseEnter={() => !disabled && onDayHover(date)}
                style={{
                  width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center",
                  borderRadius: "50%",
                  background: isSelected ? "#1a3a6b" : (isHoverEnd && !endDate) ? "rgba(26,58,107,0.12)" : "transparent",
                  color: textColor,
                  fontWeight: isSelected ? 700 : today ? 600 : 400,
                  fontSize: 14,
                  fontFamily: "'Geologica', sans-serif",
                  cursor: disabled ? "not-allowed" : "pointer",
                  userSelect: "none",
                  opacity: disabled ? 0.45 : 1,
                  outline: today && !isSelected && !disabled ? "1px solid #1a3a6b" : "none",
                  outlineOffset: -2,
                  transition: "background 0.15s, color 0.15s",
                  position: "relative", zIndex: 1,
                }}
              >
                {date.getDate()}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

interface DateFlightMenuProps {
    today: Date,
    onChangeStartDate: (value: string) => void,
    onChangeEndDate: (value: string) => void
}

export default function DateFlightMenu({ today, onChangeStartDate, onChangeEndDate }: DateFlightMenuProps) {
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [hoverDate, setHoverDate] = useState<Date | null>(null);

  const secondMonth = viewMonth === 11 ? 0 : viewMonth + 1;
  const secondYear = viewMonth === 11 ? viewYear + 1 : viewYear;

  function prevMonth() {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  }
  function nextMonth() {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  }

  function handleDayClick(date: Date) {
    if (!startDate || (startDate && endDate)) {
        setStartDate(date);
        setEndDate(null);
        onChangeStartDate(formatDate(date))
        onChangeEndDate("")
    } else {
      if (isSameDay(date, startDate)) {
        setStartDate(null);
        onChangeStartDate("")
        return;
      }
      // enforce max 20 days
      const diff = Math.round(Math.abs((date.getTime() - startDate.getTime()) / 86400000));
      if (diff > MAX_DAYS) return;
      if (date < startDate) {
        setEndDate(startDate);
        setStartDate(date);
        onChangeStartDate(formatDate(date))
        onChangeEndDate(formatDate(startDate))
      } else {
        setEndDate(date);
        onChangeEndDate(formatDate(date))
      }
    }
  }

  function formatDate(d?: Date | null) {
    if (!d) return "—";
    let stringDate = d.toLocaleDateString("ru-RU", { day: "numeric", month: "long" })
    let splitedStringDate = stringDate.split(" ")
    splitedStringDate[1] = splitedStringDate[1].slice(0, 3)
    return splitedStringDate.join(" ");
  }

  return (
    <div onClick={(e) => e.stopPropagation()} style={{ background: "#f0f4fa", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Geologica', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Geologica:wght@300;400;600;700&display=swap" rel="stylesheet" />
      <div style={{ background: "#fff", borderRadius: 20, boxShadow: "0 8px 40px rgba(26,58,107,0.10)", padding: "32px 36px", minWidth: 700, maxWidth: 860 }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 28 }}>
          <button onClick={prevMonth} style={{ width: 36, height: 36, borderRadius: "50%", border: "1.5px solid #dce3ee", background: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#1a2340", fontSize: 18, transition: "background 0.15s" }}
            onMouseEnter={e => e.currentTarget.style.background="#f0f4fa"}
            onMouseLeave={e => e.currentTarget.style.background="#fff"}
          >‹</button>
          <div style={{ flex: 1 }} />
          <button onClick={nextMonth} style={{ width: 36, height: 36, borderRadius: "50%", border: "1.5px solid #dce3ee", background: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#1a2340", fontSize: 18, transition: "background 0.15s" }}
            onMouseEnter={e => e.currentTarget.style.background="#f0f4fa"}
            onMouseLeave={e => e.currentTarget.style.background="#fff"}
          >›</button>
        </div>

        {/* Two months */}
        <div style={{ display: "flex", gap: 40 }} onMouseLeave={() => setHoverDate(null)}>
          <MonthGrid year={viewYear} month={viewMonth} startDate={startDate} endDate={endDate} hoverDate={hoverDate} onDayClick={handleDayClick} onDayHover={setHoverDate} />
          <div style={{ width: 1, background: "#eef1f7", flexShrink: 0 }} />
          <MonthGrid year={secondYear} month={secondMonth} startDate={startDate} endDate={endDate} hoverDate={hoverDate} onDayClick={handleDayClick} onDayHover={setHoverDate} />
        </div>

        {/* Footer */}
        <div style={{ marginTop: 28, paddingTop: 20, borderTop: "1px solid #eef1f7", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 32 }}>
            <div>
              <div style={{ fontSize: 11, color: "#8a94a8", fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>Вылет</div>
              <div style={{ fontSize: 15, color: "#1a2340", fontWeight: 600 }}>{formatDate(startDate)}</div>
            </div>
            {startDate && (
              <div>
                <div style={{ fontSize: 11, color: "#8a94a8", fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>Возврат</div>
                <div style={{ fontSize: 15, color: "#1a2340", fontWeight: 600 }}>{formatDate(endDate)}</div>
              </div>
            )}
          </div>
          {(startDate || endDate) && (
            <button onClick={() => { setStartDate(null); setEndDate(null); onChangeStartDate(""); onChangeEndDate("") }} style={{ fontSize: 13, color: "#8a94a8", background: "none", border: "none", cursor: "pointer", padding: "6px 12px", borderRadius: 8, transition: "color 0.15s" }}
              onMouseEnter={e => e.currentTarget.style.color="#e05c5c"}
              onMouseLeave={e => e.currentTarget.style.color="#8a94a8"}
            >Сбросить</button>
          )}
        </div>
      </div>
    </div>
  );
}