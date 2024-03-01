export const WidgetItem = ({ name, count }) => {
    let title = "";
    let src = "";
    let color = "";

    switch (name) {
        case "favorites":
            title = "Избранное";
            src = "/src/assets/favorites.png";
            color = "#FFADAD";
            break;
        default:
            title = "Виджет";
    }
    return (
        <div
            className="flex w-[260px] h-[150px] items-center justify-end  mb-[10px] rounded-xl relative"
            style={{ backgroundColor: color }}
        >
            <div className="flex items-center justify-center text-white text-xl bg-black min-w-[45px]  h-[45px] px-[10px] rounded-full opacity-80 absolute top-2 right-2 z-30">
                {count}
            </div>
            <h2 className="font-medium absolute bottom-3 left-7 z-20">{title}</h2>
            <img src={src} className="h-[75%] pr-[20px] z-10"></img>
        </div>
    );
};
