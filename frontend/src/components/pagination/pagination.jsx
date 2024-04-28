import { Button } from "./components";

export const Pagination = () => {
    return (
        <div className=" m-auto">
            <div className="flex">
                <Button logoSrc={"/src/assets/first-last.png"} rotateLogo={true} />
                <Button logoSrc={"/src/assets/next-last.png"} rotateLogo={true} />

                <div className="flex items-center justify-center h-[30px] px-3 mx-3 bg-blue text-white text-xs rounded-md">
                    1 из 3
                </div>
                <Button logoSrc={"/src/assets/next-last.png"} />
                <Button logoSrc={"/src/assets/first-last.png"} />
            </div>
        </div>
    );
};
