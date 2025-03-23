import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Auth from "./pages/Auth";
import Checkout from "./pages/Checkout";
import Order from "./pages/Order";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { ReactElement } from "react";

interface RouteType {
    path: string;
    element: ReactElement;
    children?: RouteType[];
}

const appRoutes: RouteType[] = [
    { path: "/", element: <HomePage /> },
    {
        path: "/products",
        element: <Products />,
        children: [{ path: ":id", element: <ProductDetails /> }],
    },
    { path: "/auth", element: <Auth /> },
    { path: "/cart", element: <Cart /> },
    { path: "/order", element: <Order /> },
    { path: "/checkout", element: <Checkout /> },
    { path: "/contact", element: <Contact /> },
    { path: "/about", element: <About /> },
];

const renderRoutes = (routes: RouteType[]) => {
    return routes.map((route, index) => {
        const { path, element, children } = route;

        return (
            <Route key={index} path={path} element={element}>
                {children && renderRoutes(children)}
            </Route>
        );
    });
};

const App = () => {
    return <Routes>{renderRoutes(appRoutes)}</Routes>;
};

export default App;
