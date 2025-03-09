import { Cart, Events, Home, Offer, Product } from "../pages";

export const routes = [
    {
        path: "/",
        element: <Home />,
        name: "Showcase",
    },
    {
        path: "/products",
        element: <Product />,
        name: "Product",
    },
    {
        path: "/offers",
        element: <Offer />,
        name: "Offer",
    },
    {
        path: "/events",
        element: <Events />,
        name: "Events",
    },
    {
        path: "/cart",
        element: <Cart />,
        name: "Cart",
    }
];