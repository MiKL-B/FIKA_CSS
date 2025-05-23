import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DocsButton from '@/components/DocsButton.vue'
import DocsTypography from '@/components/DocsTypography.vue'
import DocsInput from '@/components/DocsInput.vue'
import DocsExamples from '@/components/DocsExamples.vue'
import DocsInstallation from '@/components/DocsInstallation.vue'
import DocsAvatar from '@/components/DocsAvatar.vue'
import DocsBlockquote from '@/components/DocsBlockquote.vue'
import DocsDatalist from '@/components/DocsDatalist.vue'
import DocsDetails from '@/components/DocsDetails.vue'
import DocsFieldset from '@/components/DocsFieldset.vue'
import DocsLists from '@/components/DocsLists.vue'
import DocsSelect from '@/components/DocsSelect.vue'
import DocsSeparator from '@/components/DocsSeparator.vue'
import DocsTables from '@/components/DocsTables.vue'
import DocsTextarea from '@/components/DocsTextarea.vue'
import DocsIntroduction from '@/components/DocsIntroduction.vue'
import DocsTheme from '@/components/DocsTheme.vue'
import ContactView from '@/views/ContactView.vue'
import ChangelogView from '@/views/ChangelogView.vue'
import NotFoundCompo from '@/components/NotFoundCompo.vue'
import DocsBreadcrumb from '@/components/DocsBreadcrumb.vue'
import DocsClasses from '@/components/DocsClasses.vue'
import DocsGrid from '@/components/DocsGrid.vue'
import DocsSection from '@/components/DocsSection.vue'
import DocsImage from '@/components/DocsImage.vue'
import DocsLandingPage from '@/components/DocsLandingPage.vue'
import DocsTabs from '@/components/DocsTabs.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,

    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/changelog',
      name: 'changelog',
      component: ChangelogView,
    },
    {
      path: '/:catchAll(.*)', // Cela capturera toutes les routes non définies
      name: 'NotFoundCompo',
      component: NotFoundCompo,
    },
    {
      path: '/landingpage',
      name:"DocsLandingPage",
      component: DocsLandingPage,
      meta:{title:"Landingpage"},
    },
    {
      path: '/docs',
      name: 'docs',
      meta:{title:"Docs"},
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DocsView.vue'),
      children: [
        {
          path: '',
          name:"DocsIntroduction",
          component: DocsIntroduction,
          meta:{title:"Introduction"},
        },
        {
          path: 'installation',
          name:"DocsInstallation",
          component: DocsInstallation,
          meta:{title:"Installation"},
        },
        {
          path: 'classes',
          name:"DocsClasses",
          component: DocsClasses,
          meta:{title:"Classes"},
        },
        {
          path: 'grid',
          name:"DocsGrid",
          component: DocsGrid,
          meta:{title:"Grid"},
        },
        {
          path: 'theme',
          name:"DocsTheme",
          component: DocsTheme,
          meta:{title:"Theme"},
        },
        {
          path: 'examples',
          name:"DocsExamples",
          component: DocsExamples,
          meta:{title:"Examples"},
        },
        {
          path:'avatar',
          name:"DocsAvatar",
          component:DocsAvatar,
          meta:{title:"Avatar"},
        },
        {
          path: 'blockquote',
          name:"DocsBlockquote",
          component: DocsBlockquote,
          meta:{title:"Blockquote"},
        },
        {
          path: 'breadcrumb',
          name:"DocsBreadcrumb",
          component: DocsBreadcrumb,
          meta:{title:"Breadcrumb"},
        },
        {
          path: 'button',
          name:"DocsButton",
          component: DocsButton,
          meta:{title:"Button"},
        },
        {
          path: 'datalist',
          name:"DocsDatalist",
          component: DocsDatalist,
          meta:{title:"Datalist"},
        },
        {
          path: 'details',
          name:"DocsDetails",
          component: DocsDetails,
          meta:{title:"Details"},
        },
        {
          path: 'fieldset',
          name:"DocsFieldset",
          component: DocsFieldset,
          meta:{title:"Fieldset"},
        },
        {
          path: 'image',
          name:"DocsImage",
          component: DocsImage,
          meta:{title:"Image"},
        },
        {
          path: 'input',
          name:"DocsInput",
          component: DocsInput,
          meta:{title:"Input"},
        },
        {
          path: 'lists',
          name:"Docslists",
          component: DocsLists,
          meta:{title:"Lists"},
        },
        {
          path: 'section',
          name:"DocsSection",
          component: DocsSection,
          meta:{title:"Section"},
        },
        {
          path: 'select',
          name:"DocsSelect",
          component: DocsSelect,
          meta:{title:"Select"},
        },
        {
          path: 'separator',
          name:"DocsSeparator",
          component: DocsSeparator,
          meta:{title:"Separator"},
        },
        {
          path: 'tables',
          name:"DocsTables",
          component: DocsTables,
          meta:{title:"Tables"},
        },
        {
          path:"tabs",
          name:"DocsTabs",
          component:DocsTabs,
          meta:{title:"Tabs"},
        },
        {
          path: 'textarea',
          name:"DocsTextarea",
          component: DocsTextarea,
          meta:{title:"Textarea"},
        },
        {
          path: 'typography',
          name:"DocsTypography",
          component: DocsTypography,
          meta:{title:"Typography"},
        },
      ]
    },
  ],

})

export default router
