import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DocsButton from '@/components/DocsButton.vue'
import DocsTypography from '@/components/DocsTypography.vue'
import DocsInput from '@/components/DocsInput.vue'
import DocsExamples from '@/components/DocsExamples.vue'
import DocsInstallation from '@/components/DocsInstallation.vue'
import DocsBlockquote from '@/components/DocsBlockquote.vue'
import DocsDatalist from '@/components/DocsDatalist.vue'
import DocsDetails from '@/components/DocsDetails.vue'
import DocsFieldset from '@/components/DocsFieldset.vue'
import DocsLists from '@/components/DocsLists.vue'
import DocsSelect from '@/components/DocsSelect.vue'
import DocsSeparator from '@/components/DocsSeparator.vue'
import DocsTables from '@/components/DocsTables.vue'
import DocsTextarea from '@/components/DocsTextarea.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,

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
          path: 'installation',
          name:"DocsInstallation",
          component: DocsInstallation,
          meta:{title:"Installation"},
        },
        {
          path: 'examples',
          name:"DocsExamples",
          component: DocsExamples,
          meta:{title:"Examples"},
        },
        {
          path: 'blockquote',
          name:"DocsBlockquote",
          component: DocsBlockquote,
          meta:{title:"Blockquote"},
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
