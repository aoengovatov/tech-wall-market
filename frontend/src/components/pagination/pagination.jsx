import { getPage } from "../../store/searchProductSlice";
import { Button } from "./components";
import { useSelector } from "react-redux";

export const Pagination = ({ lastPage }) => {
    const page = useSelector(getPage);
    console.log(page, lastPage);

    const isVisible = lastPage > 1;

    return (
        isVisible && (
            <div className=" m-auto">
                <div className="flex">
                    <Button logoSrc={"/src/assets/first-last.png"} rotateLogo={true} />
                    <Button logoSrc={"/src/assets/next-last.png"} rotateLogo={true} />

                    <div className="flex items-center justify-center h-[30px] px-3 mx-3 bg-blue text-white text-xs rounded-md">
                        {page} из {lastPage}
                    </div>
                    <Button logoSrc={"/src/assets/next-last.png"} />
                    <Button logoSrc={"/src/assets/first-last.png"} />
                </div>
            </div>
        )
    );
};
