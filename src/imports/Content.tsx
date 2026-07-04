import clsx from "clsx";
import imgImage100 from "figma:asset/0830eef97b6bfe1f7585339046b07b5bcf202dd8.png";
import imgImage99 from "figma:asset/583603d629b8bb6cdc4feb3102fdaa24753e82a3.png";
import ArrowUpRight from "./ArrowUpRight-28-2166";
import ArrowRight from "./ArrowRight";

type ArticleSubProps = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function ArticleSub({ text, text1, additionalClassNames = "" }: ArticleSubProps) {
  return (
    <div className={clsx("content-stretch flex flex-col gap-[4px] items-start leading-[20px] not-italic relative shrink-0 text-[14px]", additionalClassNames)}>
      <p className="font-['Inter',sans-serif] font-medium relative shrink-0 text-[#0a0a0a] tracking-[-0.7px] w-full">{text}</p>
      <p className="font-['Inter',sans-serif] font-normal relative shrink-0 text-[rgba(119,119,119,0.8)] tracking-[-0.8px] w-full">{text1}</p>
    </div>
  );
}

export default function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start relative size-full" data-name="content">
      <p className="font-['DM_Mono',sans-serif] font-medium leading-[24px] min-w-full not-italic relative shrink-0 text-[16px] lg:text-[20px] text-[rgba(9,9,9,0.85)] tracking-[-1px] w-[min-content]">Latest writings</p>
      <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="writings">
        <a href="https://medium.com/@juddblck2/visual-design-principles-for-web-design-b43c3fe23268" target="_blank" rel="noopener noreferrer" className="bg-[#fafafa] relative rounded-[8px] shrink-0 w-full hover:bg-[#f0f0f0] transition-colors group" data-name="Link">
          <div className="content-stretch flex gap-[11px] items-center overflow-clip px-[8px] py-[10px] relative rounded-[inherit] w-full">
            <div className="h-[52px] relative shrink-0 w-[78px]" data-name="image 100">
              <img alt="Visual Hierarchy article cover" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgImage100} />
            </div>
            <ArticleSub text="Visual Hierarchy" text1="What makes it important and why we should do it" additionalClassNames="flex-1" />
            <div className="size-[20px] shrink-0 relative opacity-0 lg:group-hover:opacity-100 transition-opacity">
              <div className="absolute inset-0 group-hover:opacity-0 transition-opacity">
                <ArrowUpRight />
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight />
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[rgba(229,229,229,0.92)] border-solid inset-0 pointer-events-none rounded-[8px]" />
        </a>
        <a href="https://medium.com/@juddblck2/what-are-variables-ab89fb4f43ba" target="_blank" rel="noopener noreferrer" className="bg-[#fafafa] relative rounded-[8px] shrink-0 w-full hover:bg-[#f0f0f0] transition-colors group" data-name="Link">
          <div className="content-stretch flex gap-[11px] items-center overflow-clip px-[8px] py-[10px] relative rounded-[inherit] w-full">
            <div className="h-[52px] relative shrink-0 w-[90px]" data-name="image 99">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
                <img alt="Color Variables in Figma article cover" className="absolute h-[154.76%] left-[-18.37%] max-w-none top-[-22.51%] w-[128.51%]" src={imgImage99} />
              </div>
            </div>
            <ArticleSub text="How to Create Color Variables in Figma: A Beginner's Guide" text1="What makes it important and why we should do it" additionalClassNames="flex-1" />
            <div className="size-[20px] shrink-0 relative opacity-0 lg:group-hover:opacity-100 transition-opacity">
              <div className="absolute inset-0 group-hover:opacity-0 transition-opacity">
                <ArrowUpRight />
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight />
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
        </a>
      </div>
    </div>
  );
}