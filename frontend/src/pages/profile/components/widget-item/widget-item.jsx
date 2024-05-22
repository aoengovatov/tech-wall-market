import { Link } from "react-router-dom";
import favoritesIcon from "../../../../assets/favorites.png";
import basketIcon from "../../../../assets/basket.png";
import usersIcon from "../../../../assets/users.png";
import myOrdersIcon from "../../../../assets/my-orders.png";
import categoriesIcon from "../../../../assets/categories.png";
import ordersIcon from "../../../../assets/orders.png";

export const WidgetItem = ({ name, count, link }) => {
    let title = "";
    let src = "";
    let color = "";

    switch (name) {
        case "favorites":
            title = "Избранное";
            src = favoritesIcon;
            color = "#FFADAD";
            break;
        case "basket":
            title = "Корзина";
            src = basketIcon;
            color = "#BAFFEB";
            break;
        case "users":
            title = "Пользователи";
            src = usersIcon;
            color = "#BAFFEB";
            break;
        case "my-orders":
            title = "Мои заказы";
            src = myOrdersIcon;
            color = "#A0DEFF";
            break;
        case "add-product":
            title = "Добавить товар";
            src = myOrdersIcon;
            color = "#A0DEFF";
            break;
        case "categories":
            title = "Категории";
            src = categoriesIcon;
            color = "#FEBDFF";
            break;
        case "orders":
            title = "Заказы";
            src = ordersIcon;
            color = "#D4A9FF";
            break;
        default:
            title = "Виджет";
    }
    return (
        <Link
            to={link}
            className="flex w-full h-[150px] min-[450px]:w-[49%] min-[850px]:w-[32%] min-[1100px]:w-[24%] items-center justify-end rounded-xl relative transition-all duration-100 hover:scale-105"
            style={{ backgroundColor: color }}
        >
            <div className="flex items-center justify-center text-white text-xl bg-black min-w-[45px]  h-[45px] px-[10px] rounded-full opacity-80 absolute top-3 right-3 z-30">
                {count}
            </div>
            <h2 className="font-medium absolute bottom-3 left-7 z-20">{title}</h2>
            <img src={src} className="h-[75%] pr-[20px] z-10"></img>
        </Link>
    );
};
