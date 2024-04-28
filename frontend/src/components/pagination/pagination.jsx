export const Pagination = () => {
    return (
        <div className=" m-auto">
            <div className="flex">
                <button className="border-none outline-none mx-1 hover:scale-110">
                    <img
                        src="/src/assets/first-last.png"
                        className="h-[21px] rotate-180"
                    />
                </button>
                <button className="border-none outline-none mx-1 hover:scale-110">
                    <img
                        src="/src/assets/next-last.png"
                        className="h-[21px] rotate-180"
                    />
                </button>

                <div className="flex items-center justify-center h-[30px] px-3 mx-3 bg-blue text-white text-sm rounded-md">
                    1 из 3
                </div>
                <button className="border-none outline-none mx-1 hover:scale-110">
                    <img src="/src/assets/next-last.png" className="h-[21px]" />
                </button>
                <button className="border-none outline-none mx-1 hover:scale-110">
                    <img src="/src/assets/first-last.png" className="h-[21px]" />
                </button>
            </div>
        </div>
    );
};
