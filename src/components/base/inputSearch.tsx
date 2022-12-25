import type { ReactElement } from 'react';
import type { Control, FieldValues, Path } from 'react-hook-form';
import { useController } from 'react-hook-form';

interface IInputText<T extends FieldValues> {
  control: Control<T>;
  label: string;
  name: Path<T>;
  placeholder: string;
}

export const InputSearch = <T extends FieldValues>({
  control,
  label,
  name,
  placeholder,
}: IInputText<T>): ReactElement => {
  const {
    field: { value, onChange, onBlur, ref },
  } = useController({
    name,
    control,
  });

  return (
    <label htmlFor={name}>
      <span className="text-sm">{label}</span>
      <br />
      <input
        placeholder={placeholder}
        onBlur={onBlur}
        onChange={onChange}
        type="search"
        value={value}
        id={name}
        name={name}
        ref={ref}
        className="bg-transparent border-blue border rounded-lg focus:outline-none focus:border-red px-3 py-2 text-base placeholder:text-sm"
      />
    </label>
  );
};
