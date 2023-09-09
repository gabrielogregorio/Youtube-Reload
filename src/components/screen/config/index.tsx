import { Select } from '@/base/select/Select';
import { StorageService } from '@/services/StorageService';
import { BsFillTrashFill } from 'react-icons/bs';
import { ScreenEnum } from '@/contracts/homeScreens';
import { useScreenSelected } from '@/hooks/useScreenSelected';

export const ConfigScreen = () => {
  const { updateScreen } = useScreenSelected();

  return (
    <div className="animate-fadeIn min-h-screen mt-20">
      <section className="mx-auto md:max-w-[700px] lg:max-w-[1000px] w-full">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-3">
            <div>
              <div>
                <h2 className="ml-4 md:ml-4 md:mb-4">Preferencias (Não funciona ainda)</h2>
                <div className="ml-4 md:ml-12 flex flex-col">
                  <Select>🍀 Mostrar Frases Aleatórias</Select>

                  <Select>🎅 Dias Especial</Select>

                  <Select>📱 Atalho na barra inferior</Select>
                </div>
              </div>

              <div className="mt-8">
                <button
                  className="w-full text-center py-[10px]  bg-transparent cursor-pointer transition-all duration-150 hover:scale-95"
                  type="button"
                  onClick={() => {
                    StorageService.clear();
                    updateScreen(ScreenEnum.configs);
                  }}>
                  <div className="flex items-center justify-center">
                    <span className=" text-red underline select-none">Limpar Preferências</span>
                    <BsFillTrashFill className="ml-2 fill-red" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
