import { useState } from "react";
import { request } from "../../../../utils";

export const UserRoll = ({ id, login, registedAt, roleId, roles }) => {
    const [initialRoleId, setInitialRoleId] = useState(roleId);
    const [updatedRoleId, setUpdatedRoleId] = useState(roleId);

    const onRoleChange = ({ target }) => {
        setUpdatedRoleId(Number(target.value));
    };

    const updateUserRole = () => {
        request(`/users/${id}`, "PATCH", { roleId: updatedRoleId }).then(() => {
            setInitialRoleId(updatedRoleId);
        });
    };

    const isSaveRole = initialRoleId !== updatedRoleId;

    return (
        <div className="flex items-center">
            <div className="grid grid-cols-3 gap-y-2 bg-lightGray p-[5px] mb-[3px] rounded-lg w-[80%]">
                <div className="">{login}</div>
                <div className="">{registedAt}</div>
                <select value={updatedRoleId} onChange={(target) => onRoleChange(target)}>
                    {roles.map(({ id, name }) => (
                        <option key={id} value={id}>
                            {name}
                        </option>
                    ))}
                </select>
            </div>
            {isSaveRole && (
                <div
                    onClick={() => updateUserRole()}
                    className="ml-[10px] text-blue cursor-pointer hover:underline"
                >
                    Сохранить
                </div>
            )}
        </div>
    );
};
