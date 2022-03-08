import Vue from 'vue'
import Router from 'vue-router'
import MarketPage from "../pages/MarketPage";
import PrivatePage from "../pages/PrivatePage";
import ParticipatePage from "../pages/ParticipatePage";
import UpdatePage from "../pages/UpdatePage";
import AboutPage from "../pages/AboutPage";
import MarketDetailPage from "../pages/MarketDetailPage";
import CreateMarketPage from "../pages/CreateMarketPage";
import MarketWaitResultDetailPage from "@/pages/MarketWaitResultDetailPage";
import RefereeReviewPage from "@/pages/RefereeReviewPage";

Vue.use(Router);
export default new Router({
    routes: [
        {
            path: '/',
            name: 'MarketPage',
            component: MarketPage,
            meta: {
                keepAlive: true // 需要被缓存
            }
        },
        {
            path: '/market_detail',
            name: 'MarketDetailPage',
            component: MarketDetailPage
        },
        {
            path: '/market_detail_wait',
            name: 'MarketWaitResultDetailPage',
            component: MarketWaitResultDetailPage
        },
         {
             path: '/create_market',
            name: 'CreateMarketPage',
            component: CreateMarketPage,
             meta: {
                 keepAlive: true // 需要被缓存
             }
        },
        {
            path: '/private',
            name: 'PrivatePage',
            component: PrivatePage,
            meta: {
                keepAlive: true // 需要被缓存
            }
        },
        {
            path: '/participate',
            name: 'ParticipatePage',
            component: ParticipatePage,
            meta: {
                keepAlive: false // 需要被缓存
            }
        },
        {
            path: '/referee_view',
            name: 'RefereeReviewPage',
            component: RefereeReviewPage,
            meta: {
                keepAlive: false // 需要被缓存
            }
        },
        {
            path: '/update',
            name: 'UpdatePage',
            component: UpdatePage,
            meta: {
                keepAlive: true // 需要被缓存
            }
        },
        {
            path: '/about',
            name: 'AboutPage',
            component: AboutPage,
            meta: {
                keepAlive: true // 需要被缓存
            }
        }
    ]
});
