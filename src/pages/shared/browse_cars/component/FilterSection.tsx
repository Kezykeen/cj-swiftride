type FilterSectionProps = {
  title: string;
  children: React.ReactNode;
};

const FilterSection = ({ title, children }: FilterSectionProps) => {
  return (
    <div className="mb-8">
      <h3 className="font-semibold text-[#595959] mb-3">{title}</h3>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
};

export default FilterSection;
