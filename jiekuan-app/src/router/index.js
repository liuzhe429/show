const Jiekuan = resolve => require(['@views/jiekuan'], resolve);
const Apply = resolve => require(['@views/jiekuan/apply'], resolve);
const Huankuan = resolve => require(['@views/huankuan'], resolve);
const RegLogin = resolve => require(['@views/register-login/reg-login'], resolve);
const Login = resolve => require(['@views/register-login/login'], resolve);
const Register = resolve => require(['@views/register-login/reg'], resolve);
const QuickRegister = resolve => require(['@views/register-login/quick-register'], resolve);
const Verifiy = resolve => require(['@views/register-login/verifiy'], resolve);
const SetPassword= resolve => require(['@views/register-login/set-password'], resolve);
const ForgetPassword = resolve => require(['@views/register-login/forget'], resolve);
const Account = resolve => require(['@views/account'], resolve);
const Setup = resolve => require(['@views/account/setup'], resolve);
const BankCard = resolve => require(['@views/account/bankcard'], resolve);
const AddBankCard = resolve => require(['@views/account/add-bankcard'], resolve);
const AddId= resolve => require(['@views/account/add-id'], resolve);
const Question = resolve => require(['@views/account/question'], resolve);
const Answer = resolve => require(['@views/account/answer'], resolve);
const Info = resolve => require(['@views/jiekuan/info'], resolve);
const Shenhe = resolve => require(['@views/jiekuan/shenhe'], resolve);
const ShenheWait = resolve => require(['@views/jiekuan/shenhewait'], resolve);
const ShenheResult = resolve => require(['@views/account/shenhe-result'], resolve);
const JieKuanPay = resolve => require(['@views/jiekuan/pay'], resolve);
const AdminIndex = resolve => require(['@views/admin/index'], resolve);
const AdminHome = resolve => require(['@views/admin/home'], resolve);
const AdminLogin = resolve => require(['@views/admin/login'], resolve);
const AdminUser = resolve => require(['@views/admin/user'], resolve);
const AdminBankList = resolve => require(['@views/admin/bank-list'], resolve);
const AdminAddPic = resolve => require(['@views/admin/add-pic'], resolve);
const AdminQuestion = resolve => require(['@views/admin/question'], resolve);
const AdminApplylist = resolve => require(['@views/admin/applylist'], resolve);
const AdminHuankuan = resolve => require(['@views/admin/addhuankuan'], resolve);
const routes = [
  {
    path: '/admin',
    name: 'AdminIndex',
    component: AdminIndex,
    redirect: '/admin/login',
    children: [
      {
        path: 'home',
        name: 'AdminHome',
        component: AdminHome,
        
        children: [{
          path: 'add-pic',
          name: 'AdminAddPic',
          component: AdminAddPic
        },{
          path: 'user',
          name: 'AdminUser',
          component: AdminUser
        },{
          path: 'bank-list',
          name: 'AdminBankList',
          component: AdminBankList
        },{
          path: 'question',
          name: 'AdminQuestion',
          component: AdminQuestion
        },{
          path: 'applylist',
          name: 'AdminQuestion',
          component: AdminApplylist
          
        },{
          path: 'huankuan',
          name: 'AdminHuankuan',
          component: AdminHuankuan
          
        }]
      },
      {
        path: 'login',
        name: 'AdminLogin',
        component: AdminLogin
      }
    ]
  },
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
    name: '审核等待',
    component: ShenheWait
  },
  {
    path: '/shenhe-result',
    name: '审核等待',
    component: ShenheResult
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
    name: '登录注册',
    component: RegLogin,
  },
  {
    path: '/login',
    name: '登录',
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
    path: '/add-bankcard',
    name: '添加银行卡',
    component: AddBankCard,
  },
  {
    path: '/add-id',
    name: '完善身份证信息',
    component: AddId,
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
  },
  {
    path: '/answer',
    name: '答案',
    component: Answer
  }
];

export default routes;
