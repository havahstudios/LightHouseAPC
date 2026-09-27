import Icon from "@/components/Icon";

type Props = {
  onPrev: () => void;
  onNext: () => void;
  progress: number; // 0–1, fills the gold line
  tone?: "light" | "dark";
};

// Thin progress line with previous / next arrows, shared by every slider.
export default function SliderArrows({ onPrev, onNext, progress, tone = "dark" }: Props) {
  const track = tone === "dark" ? "bg-line" : "bg-white/15";
  const arrow = tone === "dark" ? "text-beacon hover:text-ink" : "text-beacon hover:text-white";

  return (
    <div className="flex items-center gap-6">
      <div className={`relative h-px flex-1 ${track}`}>
        <span
          className="absolute inset-y-0 left-0 bg-beacon transition-[width] duration-700 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
      <div className="flex gap-2">
        <button type="button" onClick={onPrev} aria-label="Previous" className={`p-1.5 transition ${arrow}`}>
          <Icon name="arrowLeft" />
        </button>
        <button type="button" onClick={onNext} aria-label="Next" className={`p-1.5 transition ${arrow}`}>
          <Icon name="arrowRight" />
        </button>
      </div>
    </div>
  );
}
