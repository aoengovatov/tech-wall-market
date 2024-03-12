import { ButtonBlue } from "../button-blue/button-blue";

export const Modal = ({ on }) => {
    return (
        <>
            {on && (
                <div className="flex items-center justify-center w-full h-full bg-blackTransparent absolute z-100">
                    <div className="flex flex-col items-center w-[350px] h-auto p-7 bg-lightGray rounded-2xl">
                        <div className="text-[25px] leading-8 mb-[25px] text-center">
                            Вы точно хотите удалить категорию?
                        </div>
                        <div className="flex justify-around w-[250px]">
                            <ButtonBlue>подтвердить</ButtonBlue>
                            <ButtonBlue>отмена</ButtonBlue>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
