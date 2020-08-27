import * as data from "../../../db.json";
const state = {
    products: data.products,
    listProducts: data.listProducts,
    listCart: [],
    listWishList: []
};
const getters = {};

const actions = {
    reduceQuantity({ commit }, obj) {
        commit("REDUCE_QUANTITY", obj);
    }
    /* changeHeart({ commit, state }, id) {
        let index = state.listProducts.findIndex(item => item.id === id);
        if (index > -1) {
            commit("CHANGE_HEART", index);
        }
    } */
};

const mutations = {
    REDUCE_QUANTITY(state, obj) {
        let index = state.listProducts.findIndex(item => item.id === obj.id);
        state.listProducts[index].quantity =
            parseInt(state.listProducts[index].quantity) - obj.count;
    }
    /* CHANGE_HEART(state, index) {
        state.listProducts[index].isHeart = !state.listProducts[index].isHeart;
    } */
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};