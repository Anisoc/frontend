
/**
 * @roxi/routify 2.18.3
 * File generated Wed Sep 01 2021 05:25:06 GMT+0100 (British Summer Time)
 */

export const __version = "2.18.3"
export const __timestamp = "2021-09-01T04:25:06.979Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "root": true,
  "children": [
    {
      "isFallback": true,
      "path": "/_fallback",
      "component": () => import('../src/pages/_fallback.svelte').then(m => m.default)
    },
    {
      "isPage": true,
      "path": "/about-us",
      "id": "_aboutUs",
      "component": () => import('../src/pages/about-us.svelte').then(m => m.default)
    },
    {
      "isDir": true,
      "ext": "",
      "children": [
        {
          "isPage": true,
          "path": "/auth/login",
          "id": "_auth_login",
          "component": () => import('../src/pages/auth/login.svelte').then(m => m.default)
        },
        {
          "isPage": true,
          "path": "/auth/register",
          "id": "_auth_register",
          "component": () => import('../src/pages/auth/register.svelte').then(m => m.default)
        }
      ],
      "path": "/auth"
    },
    {
      "isIndex": true,
      "isPage": true,
      "path": "/index",
      "id": "_index",
      "component": () => import('../src/pages/index.svelte').then(m => m.default)
    }
  ],
  "isLayout": true,
  "path": "/",
  "id": "__layout",
  "component": () => import('../src/pages/_layout.svelte').then(m => m.default)
}


export const {tree, routes} = buildClientTree(_tree)

