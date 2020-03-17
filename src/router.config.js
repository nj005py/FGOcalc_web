import FGOcalcGuidePage from './components/FGOcalcGuidePage'
import GameStrategyPage from './components/GameStrategyPage'
import MainPage from './components/MainPage'
import IntroductionPage from './components/IntroductionPage'
import FeedbackPage from './components/FeedbackPage'
import TmMagazineList from './components/TmMagazineList'

export default {
    routes: [
        {path:'/introduction',component:IntroductionPage,name:'简介'},
        {path:'/GameStrategyPage',component:GameStrategyPage,name:'fgo攻略收集'},
        {path:'/FGOcalcGuidePage',component:FGOcalcGuidePage,name:'FGOcalc引导页（草稿）'},
        {path:'/TmMagazineList',component:TmMagazineList,name:'TM吧吧刊阅览室（草稿）'},
        {path:'/FeedbackPage',component:FeedbackPage,name:'反馈'},
        {path:'/MainPage',component:MainPage,name:'主页'},
        {path:'*',component:IntroductionPage,name:'简介'},
    ],
}