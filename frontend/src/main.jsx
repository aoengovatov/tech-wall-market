import { Provider } from "react-redux";
import { store } from "./store/store.js";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MarketApp } from "./MarketApp.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Provider store={store}>
            <MarketApp />
        </Provider>
    </BrowserRouter>
);
