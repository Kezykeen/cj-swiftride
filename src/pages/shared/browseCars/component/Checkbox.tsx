type CheckboxProps = {
  label: string;
  count?: number;
  checked: boolean;
  onChange: () => void;
};

const Checkbox = ({ label, count, checked, onChange }: CheckboxProps) => {
  return (
    <label className="flex items-center justify-between text-sm text-[#595959]">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="h-4 w-4"
        />
        <span>{label}</span>
      </div>

      {count !== undefined && (
        <span className="text-gray-400 text-xs">{count}</span>
      )}
    </label>
  );
};

export default Checkbox;
