import { useState } from "react";

export const UserRoll = ({ login, registedAt, roleId, roles }) => {
    const isSave = true;
    const [initialRoleId, setInitialRoleId] = useState(roleId);

    return (
        <div className="flex items-center">
            <div className="grid grid-cols-3 gap-y-2 bg-lightGray p-[5px] mb-[3px] rounded-lg w-[80%]">
                <div className="">{login}</div>
                <div className="">{registedAt}</div>
                <select value={initialRoleId}>
                    {roles.map(({ id, name }) => (
                        <option key={id} value={id}>{name}</option>
                    ))}
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
