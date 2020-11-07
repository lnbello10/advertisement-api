import {adGetAllAction} from "./controller/AdGetAllAction";
import {adGetByIdAction} from "./controller/AdGetByIdAction";
import {adSaveAction} from "./controller/AdSaveAction";
import {adModifyAction} from "./controller/AdModifyAction";
import {adDeleteAction} from "./controller/AdDeleteAction";

/**
 * All application routes.
 */
export const AppRoutes = [
    {
        path: "/ads",
        method: "get",
        action: adGetAllAction
    },
    {
        path: "/ads",
        method: "post",
        action: adSaveAction
    },
    {
        path: "/ads/:id",
        method: "get",
        action: adGetByIdAction
    },
    {
        path: "/ads/:id",
        method: "put",
        action: adModifyAction
    },
    {
        path: "/ads/:id",
        method: "delete",
        action: adDeleteAction
    }
];