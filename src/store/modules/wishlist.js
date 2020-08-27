const state = {
    listWishList: []
};

const getters = {};

const actions = {
    addToWishList({ commit, state }, obj) {
        let index = state.listWishList.findIndex(
            item =>
            item.size == obj.size &&
            item.color == obj.color &&
            item.infoProduct.id == obj.infoProduct.id
        );
        if (index < 0) {
            commit("ADD_TO_WISHLIST", obj);
            return 0;
        } else {
            return 1;
        }
    },
    deleteItem({ commit }, index) {
        commit("DELETE_ITEM", index);
    }
};

const mutations = {
    ADD_TO_WISHLIST(state, obj) {
        state.listWishList.push(obj);
    },
    DELETE_ITEM(state, index) {
        state.listWishList.splice(index, 1);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};