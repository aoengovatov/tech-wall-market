import { useDispatch, useSelector } from "react-redux";
import { ButtonBlue } from "../button-blue/button-blue";
import { getModal, setCloseModal } from "../../store/modalSlice";

export const Modal = () => {
    const dispatch = useDispatch();
    const modal = useSelector(getModal);

    const onConfirnModal = () => {
        modal.onConfirn();
        dispatch(setCloseModal());
    };

    return (
        <>
            {modal.isOpen && (
                <div className="flex items-center justify-center w-full h-full bg-blackTransparent absolute z-50">
                    <div className="flex flex-col items-center w-[350px] h-auto p-7 bg-lightGray rounded-2xl">
                        <div className="text-[25px] leading-8 mb-[25px] text-center">
                            {modal.text}
                        </div>
                        <div className="flex justify-around w-[250px]">
                            <ButtonBlue onClick={onConfirnModal}>подтвердить</ButtonBlue>
                            <ButtonBlue onClick={() => dispatch(setCloseModal())}>
                                отмена
                            </ButtonBlue>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
