export const Button = ({ logoSrc, rotateLogo = false, ...props }) => {
    const imgStyle = rotateLogo ? "h-[21px] rotate-180" : "h-[21px]";
    const disableStyle = props.disabled ? "grayscale" : "";

    return (
        <button {...props} className={`border-none outline-none mx-1 hover:scale-110`}>
            <img src={logoSrc} className={`${imgStyle} ${disableStyle}`} />
        </button>
    );
};
