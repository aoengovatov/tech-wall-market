export const SortPanel = () => {
    return (
        <div className="flex justify-end mb-[15px]">
            <select className="outline-none text-darkGray border-2 px-[7px] py-[3px] border-gray rounded-lg mr-[10px] focus:border-blue">
                <option>сначала дешевле</option>
                <option>сначала дороже</option>
            </select>
            <input
                className="outline-none text-darkGray px-[7px] py-[3px] border-2 border-gray rounded-lg focus:border-blue"
                type="text"
                placeholder="поиск..."
            ></input>
        </div>
    );
};
