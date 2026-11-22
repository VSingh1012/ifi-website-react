"use client";
import { useState } from "react";
export function ExperienceList({
  items,
}: {
  items: { label: string; description: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <ul className="experience-list">
      {items.map((item, index) => (
        <li
          className={`experience-item${openIndex === index ? " open" : ""}`}
          key={item.label}
        >
          <button
            className="experience-header"
            type="button"
            aria-expanded={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-controls={`experience-${index}`}
          >
            <span className="experience-title">{item.label}</span>
            <span className="experience-toggle-icon" aria-hidden="true">
              +
            </span>
          </button>
          <div
            className="experience-body"
            id={`experience-${index}`}
            style={{ maxHeight: openIndex === index ? "400px" : "0px" }}
          >
            <div className="experience-body-inner">{item.description}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}
