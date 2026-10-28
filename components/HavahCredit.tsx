/**
 * Havah Studios build credit, the same pill badge used on the other Havah
 * sites: a bordered rounded tag reading "Built by HAVAH STUDIOS", studio name
 * in bold uppercase, both halves shifting to gold on hover while the name
 * lifts 3px.
 *
 * This footer strip is light, so (like the MSJ build) it uses the deeper gold
 * #8C6511 instead of Havah's #E8A838, which would be too faint on pale sand.
 */
export default function HavahCredit() {
  return (
    <a
      href="https://havahstudios.live/"
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex shrink-0 items-center gap-1.5 self-start rounded-full border border-ink/15 bg-ink/[0.06] px-3.5 py-1.5 text-[11px] tracking-[0.08em] text-stone transition-colors duration-200 hover:text-[#8C6511]"
    >
      <span>Built by</span>
      <strong className="font-semibold tracking-[0.1em] text-ink/90 uppercase transition-[color,translate,transform] duration-200 group-hover:-translate-y-[3px] group-hover:text-[#8C6511] motion-reduce:transition-none">
        Havah Studios
      </strong>
    </a>
  );
}
