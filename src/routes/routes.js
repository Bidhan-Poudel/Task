import { Events, Franchises, Home, Members, Offer, Patterns, Product } from "../pages";

export const routes = [
    {
        path: "/",
        element: <Home />,
        name: "Showcase",
    },
    {
        path: "/product",
        element: <Product />,
        name: "Product",
    },
    {
        path: "/offer",
        element: <Offer />,
        name: "Offer",
    },
    {
        path: "/event",
        element: <Events />,
        name: "Events",
    },
    {
        path: "/patterns",
        element: <Patterns />,
        name: "Patterns",
    },
    {
        path: "/members",
        element: <Members />,
        name: "Members",
    },
    {
        path: "/franchises",
        element: <Franchises />,
        name: "Franchises",
    }
];