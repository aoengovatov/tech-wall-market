export const OrderRoll = () => {
    return (
        <div className="flex items-center">
            <div className="grid grid-cols-7 mb-[5px] px-[5px] w-[90%] p-[5px] bg-lightGray rounded-lg">
                <div className="text-xs">2019-05-03 21:42</div>
                <div className="">ivan1994</div>
                <div className="">015785</div>
                <div className="col-span-2 text-xs">товары</div>
                <div className="">19990 Р</div>
                <select className="">
                    <option>доставлен</option>
                    <option>сборка на складе</option>
                    <option>в пути на пункт выдачи</option>
                </select>
            </div>
            <div className="ml-[10px] text-blue">Сохранить</div>
        </div>
    );
};
