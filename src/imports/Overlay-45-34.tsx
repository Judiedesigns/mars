import svgPaths from "./svg-i2tprnl7c3";
import imgRectangle7 from "figma:asset/70459b818159c8c03df21953c9719e152a0166f4.png";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

export default function Overlay() {
  return (
    <div className="bg-[#648cd6] content-stretch flex flex-col items-start overflow-clip px-[40px] py-[70px] relative rounded-[8px] size-full" data-name="overlay">
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="contents">
        <div className="content-stretch flex flex-col gap-[70px] items-end relative shrink-0 w-[601.388px]" data-name="image and year">
          <div className="h-[393px] relative rounded-[8.627px] shrink-0 w-full">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8.627px] size-full" src={imgRectangle7} />
          </div>
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="year and title">
            <div className="content-stretch flex gap-[6px] items-center p-[4px] relative shrink-0" data-name="Link">
              <div className="relative shrink-0 size-[20px]" data-name="ArrowLeft">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <g id="ArrowLeft">
                    <path d={svgPaths.p1d04f480} fill="var(--fill-0, white)" id="Vector" />
                  </g>
                </svg>
              </div>
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white w-[41.89px]">
                <p className="leading-[24px]">Prev</p>
              </div>
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.85)] tracking-[-0.7px] whitespace-nowrap">1/4</p>
            <div className="content-stretch flex gap-[6px] items-center p-[4px] relative shrink-0" data-name="Link">
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white w-[41.89px]">
                <p className="leading-[24px]">Next</p>
              </div>
              <Wrapper>
                <g id="ArrowRight">
                  <path d={svgPaths.p24860100} fill="var(--fill-0, white)" id="Vector" />
                </g>
              </Wrapper>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[499px] items-start justify-between relative shrink-0 w-[503px]" data-name="title/livelink">
          <div className="content-stretch flex flex-col gap-[24px] h-[135px] items-start relative shrink-0 w-full" data-name="project-title and coworker">
            <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="project- cancel">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.85)] tracking-[-0.7px] whitespace-nowrap">PROJECT</p>
              <Wrapper>
                <g id="X">
                  <path d={svgPaths.p5ff8500} fill="var(--fill-0, white)" id="Vector" />
                </g>
              </Wrapper>
            </div>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[32px] text-white tracking-[-0.7px] whitespace-nowrap">Dashboard Design</p>
            <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-center justify-between leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.85)] tracking-[-0.7px] w-full whitespace-nowrap" data-name="year and title">
              <p className="relative shrink-0">Year : 2025</p>
              <p className="relative shrink-0">Development</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
            <p className="font-['DM_Mono:Regular',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.4)] tracking-[-0.119px] w-[min-content]">live link</p>
            <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
              <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.98)] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                <p className="leading-[24px] whitespace-pre">{`Live  preview`}</p>
              </div>
              <div className="relative shrink-0 size-[18px]" data-name="ArrowUpRight">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                  <g id="ArrowUpRight">
                    <path d={svgPaths.p22c9cb00} fill="var(--fill-0, white)" fillOpacity="0.984314" id="Vector" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}