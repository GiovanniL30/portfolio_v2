import { skills, type SkillCategory } from "../../../data/content";
import ScrollableContainer from "../../containers/ScrollableContainer";

const categoryLabels: Record<SkillCategory, string> = {
  frontend: "Frontend",
  backend: "Backend",
  cloud_and_services: "Cloud & Services",
  tools: "Tools",
  ai_tools: "AI Tools",
};

const Skills = () => {
  return (
    <ScrollableContainer className="h-full w-full">
      <div className="p-4 space-y-6">
        {(
          Object.entries(skills) as [
            SkillCategory,
            (typeof skills)[SkillCategory],
          ][]
        ).map(([category, items]) => (
          <div key={category}>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3 text-text-muted">
              {categoryLabels[category]}
            </p>

            <div className="flex flex-wrap gap-2">
              {items.map(({ name, icon: Icon }) => (
                <div
                  key={name}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium border border-border bg-surface text-text-main hover:bg-surface-hover hover:border-border-strong hover:text-primary transition-colors duration-150 cursor-default"
                >
                  <Icon size={13} strokeWidth={1.75} />
                  <span>{name}</span>
                </div>
              ))}
            </div>

            {category !== "ai_tools" && <div className="mt-5 h-px bg-border" />}
          </div>
        ))}
      </div>
    </ScrollableContainer>
  );
};

export default Skills;
