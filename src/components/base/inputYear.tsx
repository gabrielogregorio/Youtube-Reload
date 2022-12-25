/* eslint-disable no-magic-numbers */
import type { ReactElement } from 'react';
import type { Control, FieldValues, Path } from 'react-hook-form';
import { useController } from 'react-hook-form';

interface IInputYear<T extends FieldValues> {
  control: Control<T>;
  label: string;
  name: Path<T>;
  minimum?: number;
  maximum?: number;
  placeholder: string;
}

export const InputYear = <T extends FieldValues>({
  control,
  label,
  name,
  placeholder,
  minimum = 0,
  maximum = 9999999,
}: IInputYear<T>): ReactElement => {
  const {
    field: { value, onChange, onBlur, ref },
  } = useController({
    name,
    control,
  });

  return (
    <div>
      <label htmlFor={name}>
        <span className="text-sm">{label}</span>
        <br />
        <input
          placeholder={placeholder}
          onBlur={onBlur}
          onChange={onChange}
          min={minimum}
          max={maximum}
          type="number"
          value={value}
          id={name}
          name={name}
          ref={ref}
          className="bg-transparent border-blue border rounded-lg focus:outline-none focus:border-red px-3 py-2 text-base"
        />
      </label>
    </div>
  );
};
