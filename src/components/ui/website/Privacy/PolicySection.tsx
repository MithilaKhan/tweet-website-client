"use client";

interface PolicySectionProps {
  title: string;
  content: string[];
}

export function PolicySection({ title, content }: PolicySectionProps) {
  return (
    <section className="space-y-3">
      <h2 className="text-[#333333] font-semibold text-lg">{title}</h2>
      {content.map((text, index) => (
        <p key={index} className="text-[#666666] text-sm leading-relaxed">
          {text}
        </p>
      ))}
    </section>
  );
}