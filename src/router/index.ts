import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [];

const modules = import.meta.globEager('./module/*.ts');
for (const path in modules) {
    modules[path]
    routes.push(...modules[path].default)
}
console.log(routes)

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
});

export default router