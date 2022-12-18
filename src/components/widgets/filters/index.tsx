import { ReactElement, ReactNode } from 'react';

const Checkbox = ({ label, id }: { label: string; id: string }): ReactElement => {
  return (
    <label className="inline-flex items-center cursor-pointer text-base" htmlFor={id}>
      <input
        className="w-3 h-3 border-0 focus:ring-0 accent-blue focus:accent-red cursor-pointer hover:scale-110 transition-all duration-150"
        id={id}
        onClick={(): void => {}}
        type="checkbox"
      />
      <span className="ml-2 text-base">{label}</span>
    </label>
  );
};

const FieldsetFilter = ({ title, children }: { title: string; children: ReactNode }): ReactElement => {
  return (
    <fieldset className="mx-3">
      <h3 className="text-base mb-2">{title}</h3>
      <div className="flex flex-col gap-2">{children}</div>
    </fieldset>
  );
};

export const Filters = (): ReactElement => {
  return (
    <section className="animate-fadeIn px-3 py-2 rounded-xl shadow-lg mb-4 border bg-dark-dark border-dark-dark hover:scale-105 transition-all duration-150">
      <div className="flex justify-center">
        <FieldsetFilter title="Métricas">
          <Checkbox label="Mostrar Views" id="filter-2019" />
          <Checkbox label="Mostrar Likes" id="filter-aaa" />
          <Checkbox id="filter-2bbbbb" label="Mostrar Comentários" />
        </FieldsetFilter>

        <FieldsetFilter title="Técnicos">
          <Checkbox id="filter-ddd" label="Mostrar Duração" />
        </FieldsetFilter>

        <FieldsetFilter title="Sobre">
          <Checkbox id="filter-20eee" label="Mostrar Categoria" />
          <Checkbox id="filter-20fff" label="Mostrar Autores" />
        </FieldsetFilter>
      </div>
    </section>
  );
};
