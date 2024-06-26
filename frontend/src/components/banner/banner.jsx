export const Banner = ({ imageUrl }) => {
    return (
        <div className="flex mx-auto max-w-[1070px] mb-[30px]">
            <div className="mx-0 md:mx-[10px] w-full h-auto rounded-xl overflow-hidden shadow-md">
                <img src={imageUrl}></img>
            </div>
        </div>
    );
};
