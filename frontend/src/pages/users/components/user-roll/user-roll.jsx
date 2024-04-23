export const UserRoll = ({ login, registeredAt, role }) => {
    const isSave = true;

    return (
        <div className="flex items-center">
            <div className="grid grid-cols-3 gap-y-2 bg-lightGray p-[5px] mb-[3px] rounded-lg w-[80%]">
                <div className="">ivan1994</div>
                <div className="">2020-07-03 15:23</div>
                <select>
                    <option>Покупатель</option>
                    <option>Модератор</option>
                    <option>Администратор</option>
                </select>
            </div>
            {isSave && (
                <div className="ml-[10px] text-blue cursor-pointer hover:underline">
                    Сохранить
                </div>
            )}
        </div>
    );
};
