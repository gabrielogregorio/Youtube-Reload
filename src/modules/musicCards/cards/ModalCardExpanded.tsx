import { MouseEvent } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { IMusicWithTransformation } from '@/modules/musicCards/mappers/get/fromApi';

interface IProps {
  cardIsOpen: IMusicWithTransformation | undefined;
  onCloseModal: () => void;
}

export const ModalCardExpanded = ({ cardIsOpen, onCloseModal }: IProps) => {
  if (!cardIsOpen) {
    return <div />;
  }

  return (
    <div>
      <button
        type="button"
        className="fixed top-0 bottom-0 flex items-center justify-center w-screen h-screen z-20 transition-all duration-150 bg-dark/50 backdrop-blur-xl shadow-md"
        onClick={() => onCloseModal()}>
        <button
          type="button"
          className="w-[70vw] h-[80vh] bg-dark shadow-md flex flex-col items-center justify-center px-2 py-3 rounded-md"
          onClick={(event: MouseEvent<HTMLButtonElement>): void => event.preventDefault()}>
          <div className="flex items-center justify-end w-full mb-4">
            <button type="button" onClick={() => onCloseModal()}>
              <AiOutlineCloseCircle className="text-xl" />
            </button>
          </div>
          <div className="flex flex-1 w-full">
            <div className="flex-1p-2 w-full">
              <iframe
                className="w-full h-full object-cover"
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${cardIsOpen.id}?start=${
                  cardIsOpen.durationInSeconds || 0
                }&autoplay=1`}
                title={cardIsOpen.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </button>
      </button>
    </div>
  );
};
