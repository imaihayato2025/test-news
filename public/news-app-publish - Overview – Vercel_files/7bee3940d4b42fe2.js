
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="71d7a1ab-d3f5-5da5-99bb-ba61532d7092")}catch(e){}}();
(globalThis.TURBOPACK=globalThis.TURBOPACK||[]).push(["object"==typeof document?document.currentScript:void 0,{8790464:[e=>{"use strict";e.s({ExperimentProvider:()=>l,useSignupExperiment:()=>c,useTrackEvent:()=>_},8790464);var t=e.i(6645307),i=e.i(7573892),n=e.i(9802771),r=e.i(6530772),a=e.i(4922888),o=e.i(6532952);let s=(0,r.createContext)(null);function l(e){let{variant:i,children:n}=e,a=(0,r.useMemo)(()=>Math.random().toString(36).slice(2),[]);return(0,t.jsx)(s.Provider,{value:(0,r.useMemo)(()=>({anonId:a,variant:i}),[i,a]),children:n})}s.displayName="ExperimentContext";let c=()=>(0,r.useContext)(s),u={[n.AnalyticsEvent.SIGNUP_VIEW_STATE]:{topic:a.Topic.LifecycleV0SignupViewState,action:"view"},[n.AnalyticsEvent.SIGNUP_VIEW_PAGE]:{topic:a.Topic.LifecycleV0SignupViewPage,action:"view"},[n.AnalyticsEvent.SIGNUP_PLAN_SELECTED]:{topic:a.Topic.LifecycleV0SignupPlanSelected,action:"select-plan"},[n.AnalyticsEvent.SIGNUP_CLICK_ELEMENT]:{topic:a.Topic.LifecycleV0SignupClickElement,action:"click"}},_=()=>{let e=c();return(0,r.useCallback)((t,n)=>{if(!e)return;let{variant:r,anonId:a}=e;i.analytics.track(t,{...n});let s=u[t];(0,o.trackInSnowflake)(s.topic,{metrics_object:{actor_id:a,actor_type:"visitor",action:s.action,object:"new"===r?"new-signup":"signup"},is_new_page:"new"===r,...n},"vercel-app")},[e])};e.s({useAuthPopup:()=>E},3087024);var d=e.i(5744013),T=e.i(2046740);function E(e,t){let i=(0,r.useRef)(null);(0,r.useEffect)(()=>()=>{i.current&&i.current.close(),i.current=null},[]);let n=(0,r.useCallback)((n,r)=>{!i.current&&(i.current=new d.default({id:e,url:n,callbacks:{onOpen:()=>{t.onOpen?.(r)},onAbort:()=>{i.current=null,t.onAbort?.(r)},onClose:()=>{i.current=null,t.onClose?.(r)},onBlocked:()=>{i.current=null,t.onBlocked?.(r)}},prerenderHtml:`<!DOCTYPE html>
<html lang="en">
  <meta charset="utf-8" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <style>
    /*!normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css*/
    html {
      -webkit-text-size-adjust: 100%;
      height: -webkit-fill-available;
    }
    *,
    *:before,
    *:after {
      box-sizing: border-box;
    }
    body {
      margin: 0;
      align-items: center;
      display: flex;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI',
        'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
        'Helvetica Neue', sans-serif;
      height: 100vh;
      width: 100vw;
      height: -webkit-fill-available;
      width: -webkit-fill-available;
      justify-content: center;
      max-height: 100vh;
      max-height: -webkit-fill-available;
      min-height: 100vh;
      min-height: -webkit-fill-available;
      padding: 0;
      -webkit-font-smoothing: antialiased;
      position: fixed;
      top: 0;
    }
    h1 {
      font-size: 1.5em;
      color: rgba(0, 0, 9);
      font-weight: 600;
      line-height: 1.5rem;
      margin-top: 16px;
      margin-bottom: 4px;
      text-align: center;
      letter-spacing: -0.47px;
    }
    p {
      color: rgba(0, 0, 9);
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.5rem;
      margin: 0 0 24px 0;
      text-align: center;
    }
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 auto;
    }
    .backup-redirect {
      font-size: 14px;
      color: #666;
      position: absolute;
      bottom: 0;
      animation: 0.2s ease 4s 1 delay;
      animation-fill-mode: both;
    }
    a {
      color: #333;
      display: inline;
    }
    .spinner-wrapper {
      height: 24px;
      width: 24px;
    }
    .spinner {
      position: relative;
      top: 50%;
      left: 50%;
      height: 24px;
      width: 24px;
    }
    .spinner-bar {
      -webkit-animation: spinner-spin 1.2s linear infinite;
      animation: spinner-spin 1.2s linear infinite;
      background: rgba(0, 0, 56);
      border-radius: 5px;
      height: 8%;
      left: -10%;
      position: absolute;
      top: -3.9%;
      width: 24%;
    }
    .spinner-bar:nth-child(1) {
      animation-delay: -1.2s;
      transform: rotate(0.0001deg) translate(146%);
    }
    .spinner-bar:nth-child(2) {
      animation-delay: -1.1s;
      transform: rotate(30deg) translate(146%);
    }
    .spinner-bar:nth-child(3) {
      animation-delay: -1s;
      transform: rotate(60deg) translate(146%);
    }
    .spinner-bar:nth-child(4) {
      animation-delay: -0.9s;
      transform: rotate(90deg) translate(146%);
    }
    .spinner-bar:nth-child(5) {
      animation-delay: -0.8s;
      transform: rotate(120deg) translate(146%);
    }
    .spinner-bar:nth-child(6) {
      animation-delay: -0.7s;
      transform: rotate(150deg) translate(146%);
    }
    .spinner-bar:nth-child(7) {
      animation-delay: -0.6s;
      transform: rotate(180deg) translate(146%);
    }
    .spinner-bar:nth-child(8) {
      animation-delay: -0.5s;
      transform: rotate(210deg) translate(146%);
    }
    .spinner-bar:nth-child(9) {
      animation-delay: -0.4s;
      transform: rotate(240deg) translate(146%);
    }
    .spinner-bar:nth-child(10) {
      animation-delay: -0.3s;
      transform: rotate(270deg) translate(146%);
    }
    .spinner-bar:nth-child(11) {
      animation-delay: -0.2s;
      transform: rotate(300deg) translate(146%);
    }
    .spinner-bar:nth-child(12) {
      animation-delay: -0.1s;
      transform: rotate(330deg) translate(146%);
    }
    @keyframes spinner-spin {
      0% {
        opacity: 0.5;
      }
      100% {
        opacity: 0.1;
      }
    }
    @keyframes delay {
      from {
        transform: translateY(72px);
      }
      to {
        transform: none;
      }
    }
    @media (prefers-color-scheme: dark) {
      body {
        color: rgb(237, 237, 237);
        background: #000;
      }
      h1 {
        color: rgb(237, 237, 237);
      }
      p {
        color: #ddd;
      }
      .spinner-bar {
        background: #eee;
      }
    }
  </style>
  <body>
    <div class="container">
      <div class="spinner-wrapper">
        <div class="spinner">
          <div class="spinner-bar"></div>
          <div class="spinner-bar"></div>
          <div class="spinner-bar"></div>
          <div class="spinner-bar"></div>
          <div class="spinner-bar"></div>
          <div class="spinner-bar"></div>
          <div class="spinner-bar"></div>
          <div class="spinner-bar"></div>
          <div class="spinner-bar"></div>
          <div class="spinner-bar"></div>
          <div class="spinner-bar"></div>
          <div class="spinner-bar"></div>
        </div>
      </div>
      <h1>Authenticating</h1>
      <p class="backup-redirect">
        If you aren't automatically redirected,
        <a href="${(0,T.default)(n)}">click here</a>
      </p>
    </div>
  </body>
</html>`}),i.current.open())},[e,t]),a=(0,r.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];i.current&&i.current.close(e),i.current=null},[]);return{popup:i.current,openPopup:n,closePopup:a}}},[3087024]],172296:e=>{"use strict";var t,{m:i,e:n}=e,r=e.e&&e.e.__assign||function(){return(r=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var r in t=arguments[i])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};Object.defineProperty(n,"__esModule",{value:!0}),n.ERRORS=n.CODES=n.OTP_CODES=void 0,n.OTP_CODES={INVALID_USERNAME:"invalid_username",INVALID_EMAIL:"invalid_email",INVALID_EMAIL_DOMAIN:"invalid_email_domain",VERIFICATION_IN_PROGRESS:"verification_in_progress",ACCOUNT_NEEDS_VERIFY:"account_needs_verify",COULD_NOT_VERIFY:"could_not_verify",DIGITS_MISMATCH:"digits_mismatch",INVALID_JWT:"invalid_jwt",USED_OR_EXPIRED:"used_or_expired",ACCOUNT_NOT_FOUND:"account_not_found",TEAM_NOT_FOUND:"team_not_found",USER_BLOCKED:"user_blocked",DUPLICATED:"duplicated",FORBIDDEN_SSO:"forbidden_sso"},n.CODES=r(r({},n.OTP_CODES),{GITHUB_PRIMARY_EMAIL_NOT_FOUND:"github_primary_email_not_found",GITHUB_ACCOUNT_NOT_LINKED:"github_account_not_linked",GITHUB_ACCOUNT_INVALID_ACCESS_TOKEN:"github_invalid_access_token",GITHUB_ACCOUNT_ALREADY_LINKED:"github_account_already_linked",GITHUB_BAD_CREDENTIALS:"github_bad_credentials",GITHUB_EMAIL_IN_USE:"github_email_in_use",GITHUB_INVITE_ACCOUNT_MISMATCH:"github_invite_account_mismatch",GITHUB_INVALID_HOST:"github_invalid_host",INCORRECT_CLIENT_CREDENTIALS:"incorrect_client_credentials",REDIRECT_URI_MISMATCH:"redirect_uri_mismatch",BAD_VERIFICATION_CODE:"bad_verification_code",USER_BLOCKED:"user_blocked",ACCOUNT_NOT_FOUND:"account_not_found",TEAM_NOT_FOUND:"team_not_found",TEAM_FORBIDDEN:"team_forbidden",USER_FORBIDDEN:"user_forbidden",EXISTING_ACCOUNT_FOUND:"existing_account_found",UNAUTHORIZED:"unauthorized",METHOD_UNKNOWN:"method_unknown",INTEGRATION_CONNECT_UNAUTHORIZED:"integration_connect_unauthorized",RESERVED:"reserved",DUPLICATED:"duplicated",DUPLICATED_BY_ALIAS:"duplicated_by_alias",GITLAB_ACCOUNT_NOT_LINKED:"gitlab_account_not_linked",GITLAB_INVALID_ACCESS_TOKEN:"gitlab_invalid_access_token",GITLAB_ACCOUNT_ALREADY_LINKED:"gitlab_account_already_linked",GITLAB_ACCOUNT_FLAGGED:"gitlab_account_flagged",GITLAB_LOGIN_ERROR:"gitlab_login_error",GITLAB_ACCEPT_TERMS:"gitlab_accept_terms",GITLAB_INVALID_MODE:"gitlab_invalid_mode",GITLAB_BAD_CREDENTIALS:"gitlab_bad_credentials",GITLAB_API_ERROR:"gitlab_api_error",GITLAB_EMAIL_IN_USE:"gitlab_email_in_use",GITLAB_INVITE_ACCOUNT_MISMATCH:"gitlab_invite_account_mismatch",BITBUCKET_ACCOUNT_NOT_LINKED:"bitbucket_account_not_linked",BITBUCKET_INVALID_ACCESS_TOKEN:"bitbucket_invalid_access_token",BITBUCKET_ACCOUNT_ALREADY_LINKED:"bitbucket_account_already_linked",BITBUCKET_ACCOUNT_FLAGGED:"bitbucket_account_flagged",BITBUCKET_LOGIN_ERROR:"bitbucket_login_error",BITBUCKET_ACCEPT_TERMS:"bitbucket_accept_terms",BITBUCKET_INVALID_MODE:"bitbucket_invalid_mode",BITBUCKET_BAD_CREDENTIALS:"bitbucket_bad_credentials",BITBUCKET_API_ERROR:"bitbucket_api_error",BITBUCKET_EMAIL_IN_USE:"bitbucket_email_in_use",BITBUCKET_INVITE_ACCOUNT_MISMATCH:"bitbucket_invite_account_mismatch",SAML_ENFORCED:"saml_enforced",SAML_NOT_ENABLED:"saml_not_enabled",IDENTITY_PROVIDER_ERROR:"service_provider_error"}),(t={})[n.CODES.GITHUB_PRIMARY_EMAIL_NOT_FOUND]="No primary email found on the GitHub account.",t[n.CODES.GITHUB_ACCOUNT_NOT_LINKED]="There is already an account associated with your GitHub email address. Please login with your email and password then link your GitHub account.",t[n.CODES.GITHUB_ACCOUNT_INVALID_ACCESS_TOKEN]="There is no Vercel account linked with this GitHub account.",t[n.CODES.GITHUB_ACCOUNT_ALREADY_LINKED]="This GitHub account is already linked to another Vercel account.",t[n.CODES.GITHUB_BAD_CREDENTIALS]="Bad credentials.",t[n.CODES.GITHUB_EMAIL_IN_USE]="The GitHub email is already used by a Vercel account.",t[n.CODES.GITHUB_INVITE_ACCOUNT_MISMATCH]="The GitHub account did not match the invited account.",t[n.CODES.GITHUB_INVALID_HOST]="Invalid host provided.",t[n.CODES.INCORRECT_CLIENT_CREDENTIALS]="The client_id and/or client_secret passed are incorrect.",t[n.CODES.REDIRECT_URI_MISMATCH]="The redirect_uri MUST match the registered callback URL for this application.",t[n.CODES.BAD_VERIFICATION_CODE]="The code passed is incorrect or expired.",t[n.CODES.USER_BLOCKED]="Your account requires further verification. Please contact registration@vercel.com to complete your registration.",t[n.CODES.ACCOUNT_NOT_FOUND]="Account not found.",t[n.CODES.TEAM_NOT_FOUND]="Team not found.",t[n.CODES.TEAM_FORBIDDEN]="You are not an owner of the team.",t[n.CODES.USER_FORBIDDEN]="You are not an owner of the account.",t[n.CODES.EXISTING_ACCOUNT_FOUND]="An existing account found with your email. Visit https://vercel.com/account and connect your GitHub account.",t[n.CODES.UNAUTHORIZED]="Unauthorized to access the given account.",t[n.CODES.METHOD_UNKNOWN]="Wrong request method for this endpoint.",t[n.CODES.INTEGRATION_CONNECT_UNAUTHORIZED]="You don't have the permission to connect the integration to the team.",t[n.CODES.RESERVED]="The username is a reserved word.",t[n.CODES.DUPLICATED]="The username is already in use.",t[n.CODES.DUPLICATED_BY_ALIAS]="The username is already in use.",t[n.CODES.ACCOUNT_NEEDS_VERIFY]="The account needs to be verified via SMS.",t[n.CODES.COULD_NOT_VERIFY]="Something went wrong with the link you used. Please go back and try again.",t[n.CODES.DIGITS_MISMATCH]="The entered code is incorrect. Please try again and check for typos.",t[n.CODES.INVALID_EMAIL_DOMAIN]="Invalid email domain. Please use a different mail provider.",t[n.CODES.INVALID_EMAIL]="Invalid email",t[n.CODES.INVALID_JWT]="Something went wrong with the link you used. Please go back and try again.",t[n.CODES.INVALID_USERNAME]="Usernames must be lowercase, begin with an alphanumeric character followed by more alphanumeric characters or dashes and ending with an alphanumeric character.",t[n.CODES.USED_OR_EXPIRED]="This code has been used or expired. Please go back to get a new code.",t[n.CODES.VERIFICATION_IN_PROGRESS]="Email verification in progress. Please check your inbox and spam folder.",t[n.CODES.FORBIDDEN_SSO]="Invalid SSO verification token.",t[n.CODES.SAML_ENFORCED]="The account must authenticate with SAML SSO.",t[n.CODES.SAML_NOT_ENABLED]="SAML Single Sign-On is not enabled for this Team",t[n.CODES.GITLAB_ACCOUNT_NOT_LINKED]="There is already an account associated with your GitLab email address. Please login with your email and password then link your GitLab account.",t[n.CODES.GITLAB_INVALID_ACCESS_TOKEN]="There is no Vercel account linked with this GitLab account.",t[n.CODES.GITLAB_ACCOUNT_ALREADY_LINKED]="This GitLab account is already linked to a Vercel account.",t[n.CODES.GITLAB_ACCOUNT_FLAGGED]="The GitLab account you selected has been flagged for moderation.",t[n.CODES.GITLAB_LOGIN_ERROR]="Runtime error when login with GitLab.",t[n.CODES.GITLAB_ACCEPT_TERMS]="Please visit https://gitlab.com/users to accept the terms and try again.",t[n.CODES.GITLAB_INVALID_MODE]="Supplied mode is invalid.",t[n.CODES.GITLAB_BAD_CREDENTIALS]="Bad credentials.",t[n.CODES.GITLAB_EMAIL_IN_USE]="The GitLab email is already used by a Vercel account.",t[n.CODES.GITLAB_INVITE_ACCOUNT_MISMATCH]="The GitLab account did not match the invited account.",t[n.CODES.BITBUCKET_ACCOUNT_NOT_LINKED]="There is already an account associated with your Bitbucket email address. Please login with your email and password then link your Bitbucket account.",t[n.CODES.BITBUCKET_INVALID_ACCESS_TOKEN]="There is no Vercel account linked with this Bitbucket account.",t[n.CODES.BITBUCKET_ACCOUNT_ALREADY_LINKED]="This Bitbucket account is already linked to a Vercel account.",t[n.CODES.BITBUCKET_ACCOUNT_FLAGGED]="The Bitbucket account you selected has been flagged for moderation.",t[n.CODES.BITBUCKET_LOGIN_ERROR]="Runtime error when login with Bitbucket.",t[n.CODES.BITBUCKET_ACCEPT_TERMS]="Please visit https://bitbucket.org to accept the terms and try again.",t[n.CODES.BITBUCKET_INVALID_MODE]="Supplied mode is invalid.",t[n.CODES.BITBUCKET_BAD_CREDENTIALS]="Bad credentials.",t[n.CODES.BITBUCKET_EMAIL_IN_USE]="The Bitbucket email is already used by a Vercel account.",t[n.CODES.BITBUCKET_INVITE_ACCOUNT_MISMATCH]="The Bitbucket account did not match the invited account.",t[n.CODES.IDENTITY_PROVIDER_ERROR]="We are experiencing a problem with the identity provider, please try another authentication method or try again later.",n.ERRORS=t},6072718:e=>{"use strict";e.s({getErrorMessage:()=>i,getLoginError:()=>n});var t=e.i(172296);function i(e){if(!e)return null;let i=e in t.CODES?t.CODES[e]:e;return i in t.ERRORS?t.ERRORS[i]:null}function n(e){let t;if("string"!=typeof e)return null;try{t=JSON.parse(decodeURIComponent(e))}catch(e){return null}return t.message=i(t.code)||"Unknown error.",t}},9620581:e=>{var{m:t,e:i}=e;function n(e,t){"boolean"==typeof t&&(t={forever:t}),this._originalTimeouts=JSON.parse(JSON.stringify(e)),this._timeouts=e,this._options=t||{},this._maxRetryTime=t&&t.maxRetryTime||1/0,this._fn=null,this._errors=[],this._attempts=1,this._operationTimeout=null,this._operationTimeoutCb=null,this._timeout=null,this._operationStart=null,this._options.forever&&(this._cachedTimeouts=this._timeouts.slice(0))}t.exports=n,n.prototype.reset=function(){this._attempts=1,this._timeouts=this._originalTimeouts},n.prototype.stop=function(){this._timeout&&clearTimeout(this._timeout),this._timeouts=[],this._cachedTimeouts=null},n.prototype.retry=function(e){if(this._timeout&&clearTimeout(this._timeout),!e)return!1;var t=new Date().getTime();if(e&&t-this._operationStart>=this._maxRetryTime)return this._errors.unshift(Error("RetryOperation timeout occurred")),!1;this._errors.push(e);var i=this._timeouts.shift();if(void 0===i)if(!this._cachedTimeouts)return!1;else this._errors.splice(this._errors.length-1,this._errors.length),this._timeouts=this._cachedTimeouts.slice(0),i=this._timeouts.shift();var n=this,r=setTimeout(function(){n._attempts++,n._operationTimeoutCb&&(n._timeout=setTimeout(function(){n._operationTimeoutCb(n._attempts)},n._operationTimeout),n._options.unref&&n._timeout.unref()),n._fn(n._attempts)},i);return this._options.unref&&r.unref(),!0},n.prototype.attempt=function(e,t){this._fn=e,t&&(t.timeout&&(this._operationTimeout=t.timeout),t.cb&&(this._operationTimeoutCb=t.cb));var i=this;this._operationTimeoutCb&&(this._timeout=setTimeout(function(){i._operationTimeoutCb()},i._operationTimeout)),this._operationStart=new Date().getTime(),this._fn(this._attempts)},n.prototype.try=function(e){console.log("Using RetryOperation.try() is deprecated"),this.attempt(e)},n.prototype.start=function(e){console.log("Using RetryOperation.start() is deprecated"),this.attempt(e)},n.prototype.start=n.prototype.try,n.prototype.errors=function(){return this._errors},n.prototype.attempts=function(){return this._attempts},n.prototype.mainError=function(){if(0===this._errors.length)return null;for(var e={},t=null,i=0,n=0;n<this._errors.length;n++){var r=this._errors[n],a=r.message,o=(e[a]||0)+1;e[a]=o,o>=i&&(t=r,i=o)}return t}},840603:e=>{var{m:t,e:i}=e,n=e.r(9620581);i.operation=function(e){return new n(i.timeouts(e),{forever:e&&e.forever,unref:e&&e.unref,maxRetryTime:e&&e.maxRetryTime})},i.timeouts=function(e){if(e instanceof Array)return[].concat(e);var t={retries:10,factor:2,minTimeout:1e3,maxTimeout:1/0,randomize:!1};for(var i in e)t[i]=e[i];if(t.minTimeout>t.maxTimeout)throw Error("minTimeout is greater than maxTimeout");for(var n=[],r=0;r<t.retries;r++)n.push(this.createTimeout(r,t));return e&&e.forever&&!n.length&&n.push(this.createTimeout(r,t)),n.sort(function(e,t){return e-t}),n},i.createTimeout=function(e,t){var i=Math.round((t.randomize?Math.random()+1:1)*t.minTimeout*Math.pow(t.factor,e));return Math.min(i,t.maxTimeout)},i.wrap=function(e,t,n){if(t instanceof Array&&(n=t,t=null),!n)for(var r in n=[],e)"function"==typeof e[r]&&n.push(r);for(var a=0;a<n.length;a++){var o=n[a],s=e[o];e[o]=(function(n){var r=i.operation(t),a=Array.prototype.slice.call(arguments,1),o=a.pop();a.push(function(e){r.retry(e)||(e&&(arguments[0]=r.mainError()),o.apply(this,arguments))}),r.attempt(function(){n.apply(e,a)})}).bind(e,s),e[o].options=t}}},7562549:e=>{var{m:t,e:i}=e;t.exports=e.r(840603)},3753406:e=>{var{m:t,e:i}=e,n=e.r(7562549);t.exports=function(e,t){return new Promise(function(i,r){var a=t||{},o=n.operation(a);function s(e){r(e||Error("Aborted"))}function l(e,t){if(e.bail)return void s(e);o.retry(e)?a.onRetry&&a.onRetry(e,t):r(o.mainError())}o.attempt(function(t){var n;try{n=e(s,t)}catch(e){l(e,t);return}Promise.resolve(n).then(i).catch(function(e){l(e,t)})})})}},978429:[e=>{"use strict";e.s({useAuth:()=>K},978429);var t=e.i(6530772),i=e.i(7315479),n=e.i(9336536),r=e.i(674684),a=e.i(5535439),o=e.i(4083080),s=e.i(6136001),l=e.i(2452546),c=e.i(5454140),u=e.i(1183506),_=e.i(909856),d=e.i(5202469),T=e.i(8790464),E=e.i(2542724),m=e.i(8794374),h=e.i(1177611),g=e.i(3087024);e.s({isJWT:()=>O,useAuthState:()=>A},2469474);var p=e.i(172296),I=e.i(6072718);function S(e,t){return Object.keys(t).some(i=>t[i]!==e[i])?{...e,...t}:e}function O(e){if(!e)return!1;let t=e.split(".");if(3!==t.length)return!1;try{return JSON.parse(atob(t[1])),!0}catch{return!1}}function f(e){let t=e?.get("token")??void 0,i=!!e?.get("legacy");if(O(t)){let{email:e,error:n}=function(e){try{if(!e)throw Error();let t=JSON.parse(atob(e.split(".")[1])),i=Date.now()/1e3;if(t.exp<i)return{email:t.sub,error:{code:"used_or_expired",message:p.ERRORS.used_or_expired}};return{email:t.sub,error:null}}catch{return{email:void 0,error:{code:"invalid_jwt",message:p.ERRORS.invalid_jwt}}}}(t);return{token:t,email:e,loginState:n?h.LOGIN_STATE.ERROR_EMAIL_OTP:h.LOGIN_STATE.VERIFYING_EMAIL_OTP,loginError:n,isLoading:!1,isOtpLinkFlow:i,factorOne:"email"}}return{loginState:h.LOGIN_STATE.PLACEHOLDER,loginError:null,isLoading:!0,isOtpLinkFlow:i,factorOne:"email"}}function A(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=(0,a.useSearchParams)(),[n,r]=(0,t.useReducer)(S,{...f(i),...e.defaultState});return(0,t.useEffect)(()=>{let e=i?.get("loginError");e?r({loginState:h.LOGIN_STATE.ERROR,loginError:(0,I.getLoginError)(e)}):i?.has("token")&&r(f(i))},[i]),(0,t.useEffect)(()=>{let e=n.loginState===h.LOGIN_STATE.PLACEHOLDER||h.LOADING_STATES.includes(n.loginState);n.isLoading&&!e&&r({isLoading:e})},[n.loginState,n.isLoading]),{state:n,dispatch:r,saveInput:function(e,t){n.loginState===h.LOGIN_STATE.ERROR?r({[e]:t,loginError:null}):r({[e]:t})},verifySMS(e){n.email&&r({loginState:h.LOGIN_STATE.ACCOUNT_NEEDS_VERIFY_SMS,smsVerificationToken:e})}}}var N=e.i(2046740),C=e.i(8466107);e.s({fastRetry:()=>b},3066914);var R=e.i(3753406);async function b(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return(0,R.default)(e,{randomize:!1,factor:1,minTimeout:t>=5?1e3:250,maxTimeout:t>=5?1001:251,retries:t})}var L=e.i(4640326),y=e.i(7573892),v=e.i(9802771),D=e.i(6649026),U=e.i(8679773),w=e.i(4038414),G=e.i(1312661);async function k(e,t){if("signup"===e&&t?.startsWith("/turborepo"))try{let e=await (0,U.getUser)();if(!e.user)return;if(!(await fetch("/api/turborepo-signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.user.email,heapUserId:(0,w.getHeapUserId)(),heapIdentity:(0,w.getHeapUserIdentity)()})})).ok)throw Error("An unexpected error. Please try again later.")}catch{}}async function P(e){e&&e.length>0&&await b(()=>(0,u.fetchAPI)(n.API_USER,{method:"PATCH",body:{name:(0,N.default)(e)}}))}async function B(e){["loading-github","loading-gitlab","loading-bitbucket"].includes(e)&&await (0,C.updatePreferredGitAccount)({provider:e.split("-")[1],namespaceId:null})}function M(e){let t=new URL("/oauth/git",window.location.origin);return t.search=(e instanceof URLSearchParams?e:new URLSearchParams((0,D.encode)(e))).toString(),t.toString()}function x(e){let{authType:t,baseUrl:i,mode:r,next:a,useRedirect:o=!1,params:s}=e,{next:l,ssoToken:c,...u}=s,_=a?.match(/^\/(?<scope>[^/]+)/)?.groups?.scope||null,d=M({next:o?l??a:l,scope:_,ssoToken:c}),T="saml"===t.toLowerCase()?n.API_SSO:n.API_REGISTRATION,E=function(e){if(!e)return{};let{sessionReferrer:t,landingPage:i,pageBeforeConversionPage:n,utm:r}=e,a={...r.utmSource&&{utmSource:r.utmSource},...r.utmMedium&&{utmMedium:r.utmMedium},...r.utmCampaign&&{utmCampaign:r.utmCampaign},...r.utmTerm&&{utmTerm:r.utmTerm}},o=Object.keys(a).length>0;return{...t&&{sessionReferrer:t},...i&&{landingPage:i},...n&&{pageBeforeConversionPage:n},...o&&{...a},...e.gclid&&{gclid:e.gclid}}}((0,m.getAttributionForEventStreaming)());return`${T}${i}${(0,D.encode)({mode:r,next:d,...u,..."saml"!==t?E:{},..."saml"!==t&&s.oppId?{opportunityId:s.oppId}:{}})}`}let V=Object.values(p.OTP_CODES);var F=e.i(830695);let K=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"login",p=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{state:I,dispatch:S,saveInput:O,verifySMS:f}=A(p),N=(0,r.useRouter)(),C=(0,a.usePathname)(),R=(0,F.useTeamSlug)(),b=(0,a.useSearchParams)(),D=(0,d.validNextRedirect)(b?.get("next")),U=(0,T.useSignupExperiment)(),{query:w}=N,K=Array.isArray(w.ssoToken)?w.ssoToken[0]:w.ssoToken,H=(0,t.useRef)(s.default),Y=(0,t.useRef)(p);(0,t.useEffect)(()=>{Y.current=p},[p]);let{data:j}=(0,c.useUser)(),$=j?.user;!function(e,i){let n=(0,r.useRouter)(),o=(0,a.usePathname)(),s=(0,a.useSearchParams)();(0,t.useEffect)(()=>{if(!s)return;let t=s.get(e);if(t&&o&&t&&!i(t)){let t=new URLSearchParams(s);t.delete(e),n.replace(`${o}?${t.toString()}`,void 0,{shallow:!0})}},[o,s,e,i,n])}("next",e=>!!(0,d.validNextRedirect)(e));let{popup:z,openPopup:J,closePopup:W}=(0,g.useAuthPopup)(`vercel-login-popup-${crypto.randomUUID()}`,{onOpen:e=>{let{authType:t}=e;S({loginState:h.LOGIN_STATE[`LOADING_${t.toUpperCase()}`]})},onAbort:()=>{S({loginState:h.LOGIN_STATE.INPUT})},onClose:()=>{S({loginState:h.LOGIN_STATE.INPUT})},onBlocked:e=>{let{authType:t,redirectUrl:i}=e;S({loginState:h.LOGIN_STATE[`LOADING_${t.toUpperCase()}`]}),window.location.assign(i)}});(0,t.useEffect)(()=>{if(!z&&(!("isReady"in N)||N.isReady)){if(b?.get("loginType")==="saml"&&"1"===b.get("confirmed")){S({loginState:h.LOGIN_STATE.LOADING_SAML});let e=new URLSearchParams(b);R&&!e.has("teamSlug")&&e.set("teamSlug",R),!D&&(p.defaultNextUrl?e.set("next",p.defaultNextUrl):R&&e.set("next",`/${R}`));let t=`${M(e)}`;N.push(t);return}if(b?.get("origin")==="saml"&&"/login"===C){S({loginState:h.LOGIN_STATE.LOADING_SAML}),N.push(`/teams/connect?${b.toString()}`);return}N.query.token||I.loginState!==h.LOGIN_STATE.PLACEHOLDER||S({loginState:h.LOGIN_STATE.INPUT})}},[R,b,N,D,z,S,C,p.defaultNextUrl,I.loginState]);let X=(0,t.useRef)(void 0);var q=async(e,t)=>{if(e.close)return(W(!0),t?.get("origin")==="saml")?void N.push(`/teams/connect?${t.toString()}`):void await Y.current.onAuthenticated?.();if(e.loginError&&W(!0),e.loginState||e.loginError){let t={};e.loginState&&(t.loginState=e.loginState),e.loginError&&(t.loginError=e.loginError),S(t)}if(!e.success){S({loginState:e.loginState,loginError:e.loginError}),Y.current.onError?.();return}let i=t?.get("next");i=i?decodeURIComponent(i):null,await ei({next:e.next??i,provider:X.current??void 0,showAuthSuccess:!0})};let Z=(0,t.useRef)(q);(0,t.useEffect)(()=>{Z.current=q},[q]);let Q=(0,t.useCallback)(e=>{if(!z)return;let t=function(e,t){if(!t.source||t.source!==e?.popup||!t.data||"object"!=typeof t.data)return null;let i=t.data;return"vercel-verify-auth"!==i.source?null:i}(z,e);if(!t)return;let i=z.popup?.location.search,n=i?new URLSearchParams(i):null;Z.current(t,n)},[z]);function ee(t){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};X.current=t,S({loginError:null,loginState:h.LOGIN_STATE[`LOADING_${t.toUpperCase()}`],factorOne:t});let n="github"===t?"/login-with-github":`/${t}/connect`;"saml"===t&&(n="");let r={authType:t,baseUrl:n,params:i,mode:e,next:D},a=x(r),o=x({...r,useRedirect:!0});if(!p.useRedirect){W(!0),J(a,{redirectUrl:o,authType:t});return}window.location.href=new URL(o,window.location.origin).href}async function et(e){let{response:t,params:i,factorOne:n,factorTwo:r}=e,a=await t.json();if(a&&"object"==typeof a&&"error"in a){if((0,E.isTwoFactorAuthFailed)(a.error))return void S({loginState:h.LOGIN_STATE.ERROR_2FA_VERIFICATION_FAILED,loginError:{message:"totp"===r?"6-digit code is incorrect. Please try again.":"Recovery code is incorrect. Please try again."},continuationToken:a.error.continuationToken});if((0,E.isTwoFactorMaxAttempts)(a.error))return void S({loginState:h.LOGIN_STATE.ERROR_MAX_2FA_ATTEMPTS,loginError:{message:"Two-factor maximum attempts reached. Please try again later."},continuationToken:null});if((0,E.isTwoFactorInvalidToken)(a.error))return void S({loginState:h.LOGIN_STATE.ERROR_2FA_INVALID_TOKEN,loginError:{message:"Session expired. Please try again."},continuationToken:null})}if(!a.verified)return void S({loginState:h.LOGIN_STATE.ERROR,loginError:{message:"totp"===r?"Login with time-based one time password failed. Please try again.":"Login with Recovery code failed. Please try again."}});if(i.next&&a.nextParams){let e=new URL(i.next);Object.entries(a.nextParams).forEach(t=>{let[i,n]=t;e.searchParams.append(i,n)}),i.next=e.toString()}if(I.isOtpLinkFlow)return void N.push("/notifications/email-confirmed");await ei({...i,provider:n,showAuthSuccess:!1})}async function ei(t){let{provider:i,showAuthSuccess:n,...r}=t;W(!0),r.mode??=e,r.teamSlug??=I.teamSlug??R??void 0,r.next??=D,function(e){let{source:t,variant:i}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{let n=t?`${L.ORIGINS[t]} login`:void 0;"signup"===e?(y.analytics.track(v.AnalyticsEvent.CREATE_ACCOUNT,{source:n,variant:i}),y.analytics.track(v.AnalyticsEvent.SIGN_UP,{source:n,variant:i}),(0,G.postToStatsigClient)({events:[{eventName:"create_account",metadata:{source:n||""}}]})):"login"===e&&y.analytics.track(v.AnalyticsEvent.LOGIN,{source:n})}catch{}}(r.mode,{source:i,variant:U?.variant}),delete globalThis.__loggedIn,await (0,_.jwtKVStoreInitializeFetch)();let a=function(){let e=(0,l.getScope)();return r.next?r.next:r.teamSlug?`/${r.teamSlug}`:e?`/${e}`:$?`/${$.username}`:"signup"===r.mode?h.NEW_PROJECT_LINK_FOR_EXISTING_USER:"/dashboard"}();if(k(r.mode,a),"signup"===r.mode&&await Promise.all([P(r.patchedSignupAccountName),B(I.loginState)]),n&&S({loginState:h.LOGIN_STATE.SUCCESS}),Y.current.onAuthenticated)return void Y.current.onAuthenticated();p.skipDefaultRedirectOnSignup||("signup"===r.mode&&(a=h.NEW_PROJECT_LINK),setTimeout(()=>{window.location.href=new URL(a,window.location.href).href},300))}return(0,t.useEffect)(()=>(window.addEventListener("message",Q),()=>{window.removeEventListener("message",Q)}),[Q]),{saveInput:O,cancelLogin:function(){if(H.current(),S({loginState:h.LOGIN_STATE.INPUT,loginError:null}),p.skipRouterRedirectOnCancel||!C)return;let e=new URLSearchParams;D&&e.set("next",D);let t=b?.get("isRequestAccess");t&&e.set("isRequestAccess",t);let i=b?.get("teamName");i&&e.set("teamName",i),N.replace(`${C}?${e.toString()}`)},async login(t){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(K&&(r.ssoToken=K),t){case"passkey":{let e;S({loginState:h.LOGIN_STATE.LOADING_PASSKEY,loginError:null,factorOne:"passkey"});let t=await fetch("/api/auth/webauthn/options"),n=await t.json();if(!("challenge"in n))return void S({loginState:h.LOGIN_STATE.ERROR,loginError:(0,i.normalizeError)(n.error)});try{e=await (0,o.startAuthentication)(n)}catch(e){S({loginState:h.LOGIN_STATE.ERROR,loginError:{message:"Login with Passkey took too long or was cancelled. Please try again."}});return}let a=await fetch("/api/auth/webauthn/verify",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ssoToken:r.ssoToken,...I.continuationToken?{continuationToken:I.continuationToken}:null,...e})}),s=await a.json();if(s&&"object"==typeof s&&"error"in s){if((0,E.isTwoFactorAuthFailed)(s.error))return void S({loginState:h.LOGIN_STATE.ERROR_2FA_VERIFICATION_FAILED,loginError:{message:"Two-factor validation failed."},continuationToken:s.error.continuationToken});if((0,E.isTwoFactorMaxAttempts)(s.error))return void S({loginState:h.LOGIN_STATE.ERROR_MAX_2FA_ATTEMPTS,loginError:{message:"Two-factor maximum attempts reached. Please try again later."},continuationToken:null});if((0,E.isTwoFactorInvalidToken)(s.error))return void S({loginState:h.LOGIN_STATE.ERROR_2FA_INVALID_TOKEN,loginError:{message:"Session expired. Please try again."},continuationToken:null})}if(!s.verified)return void S({loginState:h.LOGIN_STATE.ERROR,loginError:{message:"Login with Passkey failed. Please try again."}});if(r.next&&s.nextParams){let e=new URL(r.next);Object.entries(s.nextParams).forEach(t=>{let[i,n]=t;e.searchParams.append(i,n)}),r.next=e.toString()}if(I.isOtpLinkFlow)return void N.push("/notifications/email-confirmed");return ei({...r,provider:"passkey",showAuthSuccess:!1})}case"saml":{let t=r.teamSlug??I.teamSlug??R;if(!t)return S({loginState:h.LOGIN_STATE.ERROR,loginError:{code:"",message:"Please enter a Team slug."}});return ee("saml",{next:D||p.defaultNextUrl||`/${t}`,...r,teamId:t,mode:e})}case"google":case"github":case"gitlab":case"bitbucket":return ee(t,r);case"totp":if(!I.continuationToken)return;return S({loginState:h.LOGIN_STATE.LOADING_TOTP,loginError:null}),et({response:await fetch(`${n.API_REGISTRATION}/totp/verify`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({continuationToken:I.continuationToken,code:r.code})}),params:r,factorOne:I.factorOne,factorTwo:"totp"});case"recovery-code":if(!I.continuationToken)return;return S({loginState:h.LOGIN_STATE.LOADING_RECOVERY_CODE,loginError:null}),et({response:await fetch(`${n.API_REGISTRATION}/recovery-code/verify`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({continuationToken:I.continuationToken,code:r.recoveryCode})}),params:r,factorOne:I.factorOne,factorTwo:"recovery-code"})}},async createOTP(t){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};S({loginState:h.LOGIN_STATE.LOADING_EMAIL_CREATE_OTP,loginError:null,factorOne:"email"});let n=i.email??I.email;if(!n)return void S({loginState:h.LOGIN_STATE.ERROR,loginError:{code:"",message:"Please enter an email address."},factorOne:"email"});H.current();let r=new AbortController;H.current=()=>{r.abort()},D&&(i.next??=D),K&&(i.ssoToken=K);let a=await t({...i,email:n,mode:e,pathname:C??"/",attribution:(0,m.getAttributionForEventStreaming)()});if("string"==typeof a)!function(e,t){try{if("signup"!==e||"email"!==t)return;y.analytics.track(v.AnalyticsEvent.SIGN_UP_INTENT,{source:`${L.ORIGINS.email} login`})}catch{}}(e,"email"),S({loginState:h.LOGIN_STATE.VERIFYING_EMAIL_OTP,token:a,email:n});else{var o;S({loginState:(o=I.loginState,(0,E.isAuthError)(a)&&V.includes(a.code)&&o===h.LOGIN_STATE.VERIFYING_EMAIL_OTP?h.LOGIN_STATE.ERROR_EMAIL_OTP:h.LOGIN_STATE.ERROR),loginError:a})}},async verifyOTP(e){try{S({loginState:h.LOGIN_STATE.LOADING_EMAIL_VERIFY_OTP,loginError:null,factorOne:"email"});let t=await (0,u.fetchAPI)(`${n.API_REGISTRATION}/email/verify`,{body:JSON.stringify(e),headers:{"Content-Type":"application/json"},method:"POST",throwOnHTTPError:!0});delete globalThis.__loggedIn,await ei({...t,provider:"email",showAuthSuccess:!0})}catch(t){if((0,E.isAccountNeedsVerifyError)(t))return f(t.smsVerificationToken);if((0,E.isTwoFactorAuthRequired)(t)&&403===t.status)return void S({loginState:h.LOGIN_STATE.VERIFYING_2FA,continuationToken:t.continuationToken});if((0,E.isTwoFactorMaxAttempts)(t)&&403===t.status)return void S({loginState:h.LOGIN_STATE.ERROR_MAX_2FA_ATTEMPTS,continuationToken:null});let e=(0,i.normalizeError)(t);"rate_limited"===e.code&&(e.message=e.message.replace(/ \(.*\)\.$/,".")),S({loginState:h.LOGIN_STATE.ERROR_EMAIL_OTP,loginError:e})}},state:I,dispatch:S,mode:e}}},[2469474,3066914]]}]);

//# sourceMappingURL=4ec5f93969b723d7.js.map
//# debugId=71d7a1ab-d3f5-5da5-99bb-ba61532d7092
