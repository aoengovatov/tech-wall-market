import { Link } from "react-router-dom";

export const WidgetItem = ({ name, count, link }) => {
    let title = "";
    let src = "";
    let color = "";

    switch (name) {
        case "favorites":
            title = "Избранное";
            src = "/src/assets/favorites.png";
            color = "#FFADAD";
            break;
        case "basket":
            title = "Корзина";
            src = "/src/assets/basket.png";
            color = "#BAFFEB";
            break;
        case "users":
            title = "Пользователи";
            src = "/src/assets/users.png";
            color = "#BAFFEB";
            break;
        case "my-orders":
            title = "Мои заказы";
            src = "/src/assets/my-orders.png";
            color = "#A0DEFF";
            break;
        case "add-product":
            title = "Добавить товар";
            src = "/src/assets/my-orders.png";
            color = "#A0DEFF";
            break;
        case "categories":
            title = "Категории";
            src = "/src/assets/categories.png";
            color = "#FEBDFF";
            break;
        case "orders":
            title = "Заказы";
            src = "/src/assets/orders.png";
            color = "#D4A9FF";
            break;
        default:
            title = "Виджет";
    }
    return (
        <Link
            to={link}
            className="flex w-[260px] h-[150px] items-center justify-end  mb-[15px] mr-[15px] rounded-xl relative transition-all duration-100 hover:scale-105"
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
