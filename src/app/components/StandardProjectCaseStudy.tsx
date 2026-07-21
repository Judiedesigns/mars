import { projects, type ProjectMedia } from "../data/projects";
import { CaseStudySheet, type CaseStudyDetail, type CaseStudyVisual } from "./CaseStudySheet";

type StandardProjectCaseStudyProps = {
  projectId: number;
  onBack: () => void;
  onOpenNextProject?: () => void;
  nextProjectLabel?: string;
  hasWorkBackdrop?: boolean;
  onDragProgressChange?: (progress: number) => void;
};

type ProjectCopy = {
  intro: string;
  paragraphs: string[];
  details: Array<Omit<CaseStudyDetail, "href">>;
};

const copyByProjectId: Record<number, ProjectCopy> = {
  15: {
    intro: "A lightweight workspace for turning scattered thoughts into organized next steps.",
    paragraphs: [
      "Random Notes started from a personal workflow problem: I needed a faster way to capture loose thoughts, tasks, and planning notes without turning them into a heavy productivity system.",
      "The goal was to create a surface that could hold messy ideas, keep quick tasks visible, and still make it easy to turn scattered notes into clearer next steps.",
      "I kept the interface intentionally light, prioritizing fast capture, simple organization, and a calmer planning flow over complex productivity features.",
    ],
    details: [
      { label: "Role", value: "Design & AI Development" },
      { label: "Stack", value: "React, AI-assisted development" },
    ],
  },
  16: {
    intro: "A focused color tool for exploring palettes and making visual decisions faster.",
    paragraphs: [
      "Paletta started from a recurring design problem: choosing colors that looked good in isolation was not enough. I needed a faster way to test whether palettes could hold up across real interface decisions.",
      "The goal was to make comparison easier, so designers could move between combinations, evaluate contrast, and reuse stronger color directions with less guesswork.",
      "The interface stays focused on the palette itself, keeping the workflow quick and practical instead of turning color exploration into a heavy design system task.",
    ],
    details: [
      { label: "Role", value: "Design & AI Development" },
      { label: "Stack", value: "React, AI-assisted development" },
    ],
  },
  5: {
    intro: "A clean podcast website direction with simple episode discovery and listening touchpoints.",
    paragraphs: [
      "Radio was built as a Framer website for presenting podcast content in a way that feels direct, organized, and easy to browse.",
      "The main challenge was giving episodes, show details, and listening actions enough structure without making the page feel crowded.",
      "I focused on responsive sections, clear content hierarchy, and simple touchpoints that help visitors understand the show and move toward listening.",
    ],
    details: [
      { label: "Role", value: "Framer Development" },
      { label: "Stack", value: "Framer" },
    ],
  },
  8: {
    intro: "An automotive e-commerce case study focused on clearer product discovery and purchase decisions.",
    paragraphs: [
      "The Garage looked at a common e-commerce problem: automotive products can be difficult to compare when categories, specifications, and purchase paths are not clearly organized.",
      "The goal was to make browsing feel more confident by improving how users move through categories, evaluate product options, and understand what they are choosing.",
      "The design direction focused on clearer discovery, stronger product hierarchy, and a shopping flow that supports decision-making instead of adding friction.",
    ],
    details: [
      { label: "Role", value: "User Research, UX Design, UI Design" },
      { label: "Industry", value: "E-commerce" },
    ],
  },
  9: {
    intro: "A warm restaurant website build with clear menu storytelling and responsive structure.",
    paragraphs: [
      "Bistro was built in Webflow to give a restaurant concept a polished digital presence that feels warm, clear, and easy to navigate.",
      "The page needed to support menu storytelling, service details, and basic discovery without becoming visually heavy.",
      "I focused on responsive structure, simple page rhythm, and content sections that help visitors understand the restaurant quickly.",
    ],
    details: [
      { label: "Role", value: "Webflow Development" },
      { label: "Stack", value: "Webflow" },
    ],
  },
  10: {
    intro: "A bold Framer website build shaped around product presentation and launch-ready structure.",
    paragraphs: [
      "Candi was built as a product-focused Framer website with a bold visual direction and clear launch-ready structure.",
      "The challenge was balancing expressive presentation with enough hierarchy for visitors to understand the product quickly.",
      "I focused on responsive layouts, strong section pacing, and a page structure that keeps the product story easy to follow across screen sizes.",
    ],
    details: [
      { label: "Role", value: "Framer Development" },
      { label: "Stack", value: "Framer" },
    ],
  },
  11: {
    intro: "A motion-led Framer website concept for a more dynamic brand experience.",
    paragraphs: [
      "Energy began as an exploration of how a product website could feel more active without sacrificing clarity.",
      "The goal was to use motion, pacing, and visual rhythm to make the brand experience feel more dynamic while still keeping the interface understandable.",
      "The final direction gives the page moments of movement and visual energy, but keeps the content hierarchy simple enough to follow.",
    ],
    details: [
      { label: "Role", value: "Design & Development" },
      { label: "Stack", value: "Framer" },
    ],
  },
  12: {
    intro: "An AI-assisted literature tool for making Nigerian books and authors easier to discover.",
    paragraphs: [
      "Nigerian Literature started from a discovery problem: finding Nigerian authors, books, and cultural references can feel scattered when the information lives across many sources.",
      "The goal was to use an AI-assisted interface to make literary exploration feel more structured, approachable, and easier to continue.",
      "I shaped the experience around browsing and guided discovery, so users could start with a broad interest and move toward more specific authors or books.",
    ],
    details: [
      { label: "Role", value: "Design & AI Development" },
      { label: "Stack", value: "React, AI-assisted development" },
    ],
  },
  13: {
    intro: "A collection of fast AI-assisted product experiments and working interface prototypes.",
    paragraphs: [
      "Vibe-coded Projects is a collection of small product experiments created to test how quickly rough ideas can become usable interface directions.",
      "The goal was not to make each idea feel finished, but to explore interaction patterns, visual systems, and product concepts through fast working prototypes.",
      "Each prototype was treated like a short design sprint, balancing speed with enough structure for the idea to be understood and evaluated.",
    ],
    details: [
      { label: "Role", value: "Design & AI Development" },
      { label: "Stack", value: "React, AI-assisted development" },
    ],
  },
  14: {
    intro: "A visual tool for arranging image collections into a more playful interactive wall.",
    paragraphs: [
      "Photo Wall started from a simple visual organization problem: image collections often become static grids, even when the goal is to explore mood, placement, and relationships between images.",
      "The goal was to create a more flexible surface where images could feel easier to arrange, move, and compare.",
      "The interaction stays intentionally simple so the focus remains on the images, their placement, and the playful feeling of building a wall.",
    ],
    details: [
      { label: "Role", value: "Design & AI Development" },
      { label: "Stack", value: "React, AI-assisted development" },
    ],
  },
  17: {
    intro: "A polished website direction shaped by brand storytelling and editorial visual structure.",
    paragraphs: [
      "Mapinduzi was approached as a visual direction for a brand-led website, with emphasis on storytelling, imagery, and editorial structure.",
      "The goal was to create a more confident digital identity through layout rhythm, stronger hierarchy, and a clearer relationship between content and visuals.",
      "The final direction leans on confident spacing and editorial pacing to make the brand presentation feel more resolved.",
    ],
    details: [
      { label: "Role", value: "Creative Direction, UI Design" },
      { label: "Industry", value: "Brand / Editorial Design" },
    ],
  },
};

const fullFrameProjectIds = new Set([15, 16, 5, 8, 9, 10, 11, 12, 13, 14, 17]);

function toCaseStudyVisual(media: ProjectMedia, projectId: number): CaseStudyVisual {
  return {
    type: media.type,
    src: media.src,
    alt: media.alt ?? "Project preview",
    fit: media.fit ?? (fullFrameProjectIds.has(projectId) ? "cover" : undefined),
  };
}

function formatLiveLink(url: string) {
  return url
    .replace(/^https?:\/\//, "")
    .replace(/\/$/, "");
}

export function StandardProjectCaseStudy({
  projectId,
  onBack,
  onOpenNextProject,
  nextProjectLabel,
  hasWorkBackdrop,
  onDragProgressChange,
}: StandardProjectCaseStudyProps) {
  const project = projects.find((item) => item.id === projectId);
  const copy = copyByProjectId[projectId];

  if (!project || !copy) return null;

  const visuals = (project.media?.length ? project.media : [project.cover]).map((media) => toCaseStudyVisual(media, projectId));
  const details: CaseStudyDetail[] = [
    ...copy.details,
    { label: "Live link", value: formatLiveLink(project.liveLink), href: project.liveLink },
  ];

  return (
    <CaseStudySheet
      title={project.title}
      role={project.role}
      year={project.year}
      intro={copy.intro}
      paragraphs={copy.paragraphs}
      details={details}
      visuals={visuals}
      nextProject={onOpenNextProject && nextProjectLabel ? { label: nextProjectLabel, onClick: onOpenNextProject } : undefined}
      onBack={onBack}
      hasWorkBackdrop={hasWorkBackdrop}
      onDragProgressChange={onDragProgressChange}
    />
  );
}
