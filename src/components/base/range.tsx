import type { ReactElement } from 'react';
import type { Control, FieldValues, Path } from 'react-hook-form';
import { useController } from 'react-hook-form';

interface IDataItems {
  value: string | number;
  label: string | number;
}

interface IRange<T extends FieldValues> {
  control: Control<T>;
  label: string;
  name: Path<T>;
  data: IDataItems[];
}

export const Range = <T extends FieldValues>({ control, label, name, data }: IRange<T>): ReactElement => {
  const {
    field: { value, onChange, onBlur, ref },
  } = useController({
    name,
    control,
  });

  return (
    <label htmlFor="temp2">
      <span className="text-sm">{label}</span>
      <br />
      <input
        onBlur={onBlur}
        onChange={onChange}
        type="range"
        min={0}
        value={value}
        max={data.length - 1}
        step={1}
        id="temp2"
        name={name}
        ref={ref}
        list="tickmarks2"
        className="w-[15rem]"
      />
      <datalist id="tickmarks2" className="flex justify-between w-[15rem]">
        {data.map((item: IDataItems) => {
          return (
            <option
              key={item.value.toString()}
              value={item.value.toString()}
              label={item.label.toString()}
              className="text-[0.5rem] rotate-90"
            />
          );
        })}
      </datalist>
    </label>
  );
};
