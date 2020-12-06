// Import vue component
import V2Cupertino from './components/V2Cupertino.vue';
declare var global: any;
declare var window: any;

// Declare install function executed by Vue.use()
export function install(Vue: any) {
	if ((install as any).installed) return;
	(install as any).installed = true;
	Vue.component('V2Cupertino', V2Cupertino);
}

// Create module definition for Vue.use()
const plugin = {
	install,
};

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null;
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}

// To allow use as module (npm/webpack/etc.) export component
export default V2Cupertino;
