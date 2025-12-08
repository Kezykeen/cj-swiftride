const Breadcrumb = ({
  items,
}: {
  items: { label: string; onClick?: () => void }[];
}) => {
  return (
    <nav className="flex items-center gap-2 text-sm">
      {items.map((item, i) => {
        const isLast = i === items.length - 1;

        return (
          <div key={i} className="flex items-center gap-2">
            {i > 0 && (
              <img src="/images/arrow-right.png" alt="arrow" className="w-4" />
            )}

            {item.onClick && !isLast ? (
              <button
                onClick={item.onClick}
                className="text-[#9F9C9C] cursor-pointer"
              >
                {item.label}
              </button>
            ) : (
              <span className="text-[#072C59]">{item.label}</span>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
