function Index() {
  return import(/* webpackChunkName: "index" */ 'ProjectPages/index.vue')
}
function AddSite() {
  return import(/* webpackChunkName: "add-site" */ 'ProjectPages/add-site.vue')
}
function AdsCreate() {
  return import(
    /* webpackChunkName: "ads-create" */ 'ProjectPages/ads-create.vue'
  )
}
function Ads() {
  return import(/* webpackChunkName: "ads" */ 'ProjectPages/ads.vue')
}
function BidderAnalysis() {
  return import(
    /* webpackChunkName: "bidder-analysis" */ 'ProjectPages/bidder-analysis.vue'
  )
}
function Bidders() {
  return import(/* webpackChunkName: "bidders" */ 'ProjectPages/bidders.vue')
}
function Billings() {
  return import(/* webpackChunkName: "billings" */ 'ProjectPages/billings.vue')
}
function ConfigureBilling() {
  return import(
    /* webpackChunkName: "configure-billing" */ 'ProjectPages/configure-billing.vue'
  )
}
function Contact() {
  return import(/* webpackChunkName: "contact" */ 'ProjectPages/contact.vue')
}
function Dashboard() {
  return import(
    /* webpackChunkName: "dashboard" */ 'ProjectPages/dashboard.vue'
  )
}
function Faq() {
  return import(/* webpackChunkName: "faq" */ 'ProjectPages/faq.vue')
}
function ForgotPassword() {
  return import(
    /* webpackChunkName: "forgot-password" */ 'ProjectPages/forgot-password.vue'
  )
}
function GeneralReport() {
  return import(
    /* webpackChunkName: "general-report" */ 'ProjectPages/general-report.vue'
  )
}
function Installation() {
  return import(
    /* webpackChunkName: "installation" */ 'ProjectPages/installation.vue'
  )
}
function Invoice() {
  return import(/* webpackChunkName: "invoice" */ 'ProjectPages/invoice.vue')
}
function Login() {
  return import(/* webpackChunkName: "login" */ 'ProjectPages/login.vue')
}
function MatchTable() {
  return import(
    /* webpackChunkName: "match-table" */ 'ProjectPages/match-table.vue'
  )
}
function NewUser() {
  return import(/* webpackChunkName: "new-user" */ 'ProjectPages/new-user.vue')
}
function Profile() {
  return import(/* webpackChunkName: "profile" */ 'ProjectPages/profile.vue')
}
function Register() {
  return import(/* webpackChunkName: "register" */ 'ProjectPages/register.vue')
}
function RevenueReport() {
  return import(
    /* webpackChunkName: "revenue-report" */ 'ProjectPages/revenue-report.vue'
  )
}
function SiteAds() {
  return import(/* webpackChunkName: "site-ads" */ 'ProjectPages/site-ads.vue')
}
function Sites() {
  return import(/* webpackChunkName: "sites" */ 'ProjectPages/sites.vue')
}
function Users() {
  return import(/* webpackChunkName: "users" */ 'ProjectPages/users.vue')
}

export default [
  {
    name: 'index',
    path: '/',
    component: Index
  },
  {
    name: 'add-site',
    path: '/add-site',
    component: AddSite
  },
  {
    name: 'ads-create',
    path: '/ads-create',
    component: AdsCreate
  },
  {
    name: 'ads',
    path: '/ads',
    component: Ads
  },
  {
    name: 'bidder-analysis',
    path: '/bidder-analysis',
    component: BidderAnalysis
  },
  {
    name: 'bidders',
    path: '/bidders',
    component: Bidders
  },
  {
    name: 'billings',
    path: '/billings',
    component: Billings
  },
  {
    name: 'configure-billing',
    path: '/configure-billing',
    component: ConfigureBilling
  },
  {
    name: 'contact',
    path: '/contact',
    component: Contact
  },
  {
    name: 'dashboard',
    path: '/dashboard',
    component: Dashboard
  },
  {
    name: 'faq',
    path: '/faq',
    component: Faq
  },
  {
    name: 'forgot-password',
    path: '/forgot-password',
    component: ForgotPassword
  },
  {
    name: 'general-report',
    path: '/general-report',
    component: GeneralReport
  },
  {
    name: 'installation',
    path: '/installation',
    component: Installation
  },
  {
    name: 'invoice',
    path: '/invoice',
    component: Invoice
  },
  {
    name: 'login',
    path: '/login',
    component: Login
  },
  {
    name: 'match-table',
    path: '/match-table',
    component: MatchTable
  },
  {
    name: 'new-user',
    path: '/new-user',
    component: NewUser
  },
  {
    name: 'profile',
    path: '/profile',
    component: Profile
  },
  {
    name: 'register',
    path: '/register',
    component: Register
  },
  {
    name: 'revenue-report',
    path: '/revenue-report',
    component: RevenueReport
  },
  {
    name: 'site-ads',
    path: '/site-ads',
    component: SiteAds
  },
  {
    name: 'sites',
    path: '/sites',
    component: Sites
  },
  {
    name: 'users',
    path: '/users',
    component: Users
  }
]
