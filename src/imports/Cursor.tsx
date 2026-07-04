import svgPaths from "./svg-73q1axz7qe";

export default function Cursor() {
  return (
    <div className="bg-[#648cd6] overflow-clip relative rounded-[100px] size-full" data-name="cursor">
      <div className="absolute content-stretch flex gap-[2px] items-center left-[11px] top-[20px]">
        <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[24px]">View</p>
        </div>
        <div className="relative shrink-0 size-[14px]" data-name="ArrowUpRight">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <g id="ArrowUpRight">
              <path d={svgPaths.pd49f500} fill="var(--fill-0, white)" id="Vector" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}