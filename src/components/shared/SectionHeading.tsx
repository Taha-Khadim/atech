interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({ title, subtitle, centered = true, light = false }: SectionHeadingProps) {
  return (
    <div className={centered ? 'text-center' : ''}>
      <h2
        className={`text-2xl md:text-3xl font-bold tracking-tight ${light ? 'text-white' : 'text-[#1a1a1a]'}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-2 text-sm md:text-base max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-gray-300' : 'text-[#666]'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
