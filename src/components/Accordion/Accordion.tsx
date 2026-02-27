import { FC, useState } from "react";
import "./styles.css";

type Section = {
  value: string;
  title: string;
  contents: string;
};

type AccordionProps = {
  sections: Section[];
};

export const Accordion: FC<AccordionProps> = ({ sections }) => {
  const [openSections, setOpenSections] = useState(new Set());

  const handleOpenSections = (value: string) => {
    const newOpenSections = new Set(openSections);

    newOpenSections.has(value)
      ? newOpenSections.delete(value)
      : newOpenSections.add(value);

    setOpenSections(newOpenSections);
  };

  console.log(openSections);

  return (
    <div className="accordion">
      {sections.map(({ value, title, contents }) => {
        const isExpanded = openSections.has(value);
        return (
          <div className="accordion-item" key={value}>
            <button
              className="accordion-item-title"
              type="button"
              onClick={() => handleOpenSections(value)}
            >
              {title}
              <span
                aria-hidden={true}
                className={[
                  "accordion-icon",
                  isExpanded && "accordion-icon--rotated",
                ]
                  .filter(Boolean)
                  .join(" ")}
              />
            </button>
            <div className="accordion-item-contents" hidden={!isExpanded}>
              {contents}
            </div>
          </div>
        );
      })}
    </div>
  );
};
