import { NavLinkFooter } from "../nav-link-footer/nav-link-footer";

export const NavPanel = () => {
    return (
        <nav className="flex flex-col items-left justify-between w-full mb-[10px] min-[440px]:flex-row">
            <div className="flex flex-col mb-2">
                <h3 className="mb-[5px]">Покупателям</h3>
                <NavLinkFooter href={"#"}>Как сделать заказ</NavLinkFooter>
                <NavLinkFooter href={"#"}>Способы оплаты</NavLinkFooter>
                <NavLinkFooter href={"#"}>Доставка</NavLinkFooter>
                <NavLinkFooter href={"#"}>Возврат товара</NavLinkFooter>
            </div>
            <div className="flex flex-col mb-2">
                <h3 className="mb-[5px]">Компания</h3>
                <NavLinkFooter href={"#"}>О нас</NavLinkFooter>
                <NavLinkFooter href={"#"}>Магазины</NavLinkFooter>
                <NavLinkFooter href={"#"}>Реквизиты</NavLinkFooter>
                <NavLinkFooter href={"#"}>Контакты</NavLinkFooter>
            </div>
            <div className="flex flex-col mb-2">
                <h3 className="mb-[5px]">Мы в соцсетях</h3>
                <NavLinkFooter href={"#"}>ВКонтакте</NavLinkFooter>
                <NavLinkFooter href={"#"}>Одноклассники</NavLinkFooter>
                <NavLinkFooter href={"#"}>Youtube</NavLinkFooter>
                <NavLinkFooter href={"#"}>Телеграм</NavLinkFooter>
            </div>
        </nav>
    );
};
