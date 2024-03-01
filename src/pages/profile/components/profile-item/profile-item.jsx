export const ProfileItem = ({ title, value }) => {
    return (
        <div className="flex">
            <div className="font-semibold mr-[5px]">{title}:</div>
            <div>{value}</div>
        </div>
    );
};
