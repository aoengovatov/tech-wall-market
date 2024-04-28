export const Button = ({ logoSrc, rotateLogo = false }) => {
    const imgStyle = rotateLogo ? "h-[21px] rotate-180" : "h-[21px]";

    return (
        <button className="border-none outline-none mx-1 hover:scale-110">
            <img src={logoSrc} className={imgStyle} />
        </button>
    );
};
