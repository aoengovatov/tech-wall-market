import { getPage, setPage } from "../../store/catalogSlice";
import { Button } from "./components";
import { useDispatch, useSelector } from "react-redux";

export const Pagination = ({ lastPage }) => {
    const dispatch = useDispatch();
    const currentPage = useSelector(getPage);

    const isVisible = lastPage > 1;

    const onLastPage = () => {
        if (currentPage !== lastPage) {
            dispatch(setPage(lastPage));
        }
    };
    const firstPage = () => {
        if (currentPage !== 1) {
            dispatch(setPage(1));
        }
    };

    const onNextPage = () => {
        if (currentPage !== lastPage) {
            dispatch(setPage(currentPage + 1));
        }
    };

    const onPrevPage = () => {
        if (currentPage > 1) {
            dispatch(setPage(currentPage - 1));
        }
    };

    return (
        isVisible && (
            <div className=" m-auto">
                <div className="flex">
                    <Button
                        logoSrc={"/src/assets/first-last.png"}
                        onClick={firstPage}
                        rotateLogo={true}
                        disabled={currentPage === 1}
                    />
                    <Button
                        logoSrc={"/src/assets/next-last.png"}
                        onClick={onPrevPage}
                        rotateLogo={true}
                        disabled={currentPage === 1}
                    />

                    <div className="flex items-center justify-center h-[30px] px-3 mx-3 bg-blue text-white text-xs rounded-md">
                        {currentPage} из {lastPage}
                    </div>
                    <Button
                        logoSrc={"/src/assets/next-last.png"}
                        onClick={onNextPage}
                        disabled={currentPage === lastPage}
                    />
                    <Button
                        logoSrc={"/src/assets/first-last.png"}
                        onClick={onLastPage}
                        disabled={currentPage === lastPage}
                    />
                </div>
            </div>
        )
    );
};
