import { ReactElement } from 'react';

export const Filters = (): ReactElement => {
  return (
    <section className="animate-fadeIn">
      <div className="w-full mx-auto grid grid-cols-2 max-w-[1280px] px-[2%]">
        <div className="w-full ">
          <h3 className=" text-[1.2rem] py-[10px]">Filtrar épocas</h3>
          <div className="w-full">
            <div className=" flex items-center">
              <label className="ml-[5px] text-[0.9rem] flex items-center" htmlFor="filter-2019">
                <input className="my-[3px]" id="filter-2019" onClick={(): void => {}} type="checkbox" />
                Excluir 2019
              </label>
            </div>

            <div className=" flex items-center">
              <label className="ml-[5px] text-[0.9rem] flex items-center" htmlFor="filter-2020">
                <input className="my-[3px]" id="filter-2020" onClick={(): void => {}} type="checkbox" />
                Excluir 2020
              </label>
            </div>

            <div className=" flex items-center">
              <label className="ml-[5px] text-[0.9rem] flex items-center" htmlFor="filter-2021">
                <input className="my-[3px]" id="filter-2021" onClick={(): void => {}} type="checkbox" />
                Excluir 2021
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
