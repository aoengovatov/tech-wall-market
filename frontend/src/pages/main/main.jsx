import { Popular, Banner, Categories, Brands } from "../../components";

export const Main = () => {
    return (
        <>
            <Banner />
            <Popular />
            <Categories edit={false} />
            <Brands />
        </>
    );
};
