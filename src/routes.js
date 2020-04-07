import Home from './components/Home.vue';
import Crypto from './components/normal/Crypto.vue';
import Stegano from './components/steganography/Stegano.vue';
import GenKey from './components/generate/GenKey.vue';

export const routes = [
    { path: '/', component: Home},
    { path: '/crypto', component: Crypto},
    { path: '/stegano', component: Stegano},
    { path: '/genkey', component: GenKey}
]