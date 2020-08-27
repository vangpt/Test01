import Vue from "vue";
import VueX from "vuex";

import product from "./modules/product";
import cart from "./modules/cart";
import wishlist from "./modules/wishlist";
import users from "./modules/users";

Vue.use(VueX);
const store = new VueX.Store({
    strict: true,
    state: {
        isLoading: false
    },
    actions: {
        setLoading({ commit }, loading = true) {
            commit("TOGGLE_LOADING", loading);
        }
    },
    mutations: {
        TOGGLE_LOADING(state, loading = true) {
            state.isLoading = loading;
        }
    },
    modules: {
        product,
        cart,
        wishlist,
        users
    }
});

export default store;