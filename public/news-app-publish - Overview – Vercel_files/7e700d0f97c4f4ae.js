
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="7f8ba663-da58-5d13-90a3-e31ddc0e482a")}catch(e){}}();
(globalThis.TURBOPACK=globalThis.TURBOPACK||[]).push(["object"==typeof document?document.currentScript:void 0,{3988382:e=>{"use strict";e.s({TrackUserProjectActivity:()=>a});var t=e.i(6645307),r=e.i(6530772),c=e.i(5535439),u=e.i(82706);function a(){return(0,t.jsx)(r.Suspense,{fallback:null,children:(0,t.jsx)(i,{})})}function i(){let e=(0,c.useParams)(),t=(0,r.useRef)(void 0);return(0,r.useEffect)(()=>{if(!e?.teamSlug||!e.project)return;let r=`${e.teamSlug}/${e.project}`;t.current!==r&&(t.current=r,(0,u.sendBeacon)(`/api/dashboard/projects/${e.project}/activity?teamId=${e.teamSlug}`,{}).catch(()=>{}))},[e?.project,e?.teamSlug]),null}}}]);

//# sourceMappingURL=95f53376e134acd6.js.map
//# debugId=7f8ba663-da58-5d13-90a3-e31ddc0e482a
