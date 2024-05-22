import { getPage, setPage } from "../../store/catalogSlice";
import { Button } from "./components";
import { useDispatch, useSelector } from "react-redux";
import firstLastIcon from "../../assets/first-last.png";
import nextLastIcon from "../../assets/next-last.png";

export const Pagination = ({ lastPage }) => {
    const dispatch = useDispatch();
    const currentPage = useSelector(getPage);

    if (currentPage > lastPage) {
        dispatch(setPage(1));
    }

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
            <div className="mx-auto">
                <div className="flex">
                    <Button
                        logoSrc={firstLastIcon}
                        onClick={firstPage}
                        rotateLogo={true}
                        disabled={currentPage === 1}
                    />
                    <Button
                        logoSrc={nextLastIcon}
                        onClick={onPrevPage}
                        rotateLogo={true}
                        disabled={currentPage === 1}
                    />

                    <div className="flex items-center justify-center h-[30px] px-3 mx-3 bg-blue text-white text-xs rounded-md">
                        {currentPage} из {lastPage}
                    </div>
                    <Button
                        logoSrc={nextLastIcon}
                        onClick={onNextPage}
                        disabled={currentPage === lastPage}
                    />
                    <Button
                        logoSrc={firstLastIcon}
                        onClick={onLastPage}
                        disabled={currentPage === lastPage}
                    />
                </div>
            </div>
        )
    );
};
