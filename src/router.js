import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/definition",
            name: "definition",
            component: () => import("./components/Definition.vue")
        },
    ]
});
