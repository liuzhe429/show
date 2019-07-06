const Jiekuan = resolve => require(['@views/jiekuan'], resolve);
const Apply = resolve => require(['@views/jiekuan/apply'], resolve);
const Huankuan = resolve => require(['@views/huankuan'], resolve);
const RegLogin = resolve => require(['@views/register-login/reg-login'], resolve);
const Login = resolve => require(['@views/register-login/login'], resolve);
const Register = resolve => require(['@views/register-login/reg'], resolve);
const QuickRegister = resolve => require(['@views/register-login/quick-register'], resolve);
const Verifiy = resolve => require(['@views/register-login/verifiy'], resolve);
const SetPassword= resolve => require(['@views/register-login/setPassword'], resolve);
const ForgetPassword = resolve => require(['@views/register-login/forget'], resolve);
const Account = resolve => require(['@views/account'], resolve);
const Setup = resolve => require(['@views/account/setup'], resolve);
const BankCard = resolve => require(['@views/account/bankcard'], resolve);
const Question = resolve => require(['@views/account/question'], resolve);
const Info = resolve => require(['@views/jiekuan/info'], resolve);
const Shenhe = resolve => require(['@views/jiekuan/shenhe'], resolve);
const ShenheWait = resolve => require(['@views/jiekuan/shenhewait'], resolve);
const JieKuanPay = resolve => require(['@views/jiekuan/pay'], resolve);
const routes = [
  {
    path: '/',
    name: '借款',
    component: Jiekuan,
  },
  {
    path: '/apply',
    name: '申请',
    component: Apply,
  },
  {
    path: '/info',
    name: '个人信息补充',
    component: Info,
  },
  {
    path: '/shenhe',
    name: '审核结果',
    component: Shenhe
  },
  {
    path: '/shenhe-wait',
    name: '审核结果',
    component: ShenheWait
  },
  {
    path: '/jiekuan-pay',
    name: '支付管理费',
    component: JieKuanPay
  },
  {
    path: '/huankuan',
    name: '还款',
    component: Huankuan,
  },
  {
    path: '/reg-login',
    name: '活动中心',
    component: RegLogin,
  },
  {
    path: '/login',
    name: '活动中心',
    component: Login,
  }, {
    path: '/register',
    name: '注册',
    component: Register,
  },{
    path: '/quick-register',
    name: '快速注册',
    component: QuickRegister,
  }, {
    path: '/verifiy',
    name: '验证码',
    component: Verifiy,
  },
  {
    path: '/setpassword',
    name: '设置密码',
    component: SetPassword,
  },
  {
    path: '/forget',
    name: '忘记密码',
    component: ForgetPassword,
  },
  {
    path: '/account',
    name: '个人中心',
    component: Account,
  },
  {
    path: '/bankcard',
    name: '我的银行卡',
    component: BankCard,
  },
  {
    path: '/setup',
    name: '系统设置',
    component: Setup,
  },
  {
    path: '/question',
    name: '常见问题',
    component: Question
  }
];

export default routes;
