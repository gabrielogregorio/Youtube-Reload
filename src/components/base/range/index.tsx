import type { ReactElement } from 'react';
import type { Control, FieldValues, Path } from 'react-hook-form';
import { useController } from 'react-hook-form';

interface IDataItems {
  value: string | number;
  label: string | number;
}

interface IRange<T extends FieldValues> {
  control: Control<T>;
  label: ReactElement;
  name: Path<T>;
  data: IDataItems[];
}

export const Range = <T extends FieldValues>({ control, label, name, data }: IRange<T>) => {
  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
  });

  const handleUpdateMinOrMax = (newValue: number): void => {
    const COUNT_OPTIONS = 2;
    if (newValue <= (value.min + value.max) / COUNT_OPTIONS) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      onChange({ min: newValue, max: value?.max });
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      onChange({ min: value.min, max: newValue });
    }
  };

  return (
    <div className="border-2 border-dark px-2 py-1">
      <label htmlFor={name}>
        <span className="text-sm select-none">{label}</span>

        <div>
          {data.map((item: IDataItems) => {
            const styleInsideMaxAndMin: string = item.value <= value.max && item.value >= value.min ? 'bg-red' : '';
            return (
              <button
                type="button"
                key={item.value.toString()}
                onClick={() => handleUpdateMinOrMax(Number(item.value) || 0)}
                className={`text-[0.5rem] p-1 rounded-md border border-dark hover:bg-red transition-all duration-150 select-none ${styleInsideMaxAndMin}`}>
                {item.label}
              </button>
            );
          })}
        </div>
      </label>
    </div>
  );
};
