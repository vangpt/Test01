const state = {
    listCart: []
};

const getters = {};

const actions = {
    addToCart({ commit }, item) {
        commit("ADD_TO_CART", item);
    },
    deleteItemCart({ commit }, index) {
        commit("DELETE_ITEM_CART", index);
    },
    changeQuantity({ commit }, obj) {
        commit("CHANGE_QUANTITY", obj);
    },
    updateQuantity({ commit }, obj) {
        commit("UPDATE_QUANTITY", obj);
    }
};

const mutations = {
    ADD_TO_CART(state, item) {
        const index = state.listCart.findIndex(
            cart =>
            cart.infoProduct.id === item.infoProduct.id &&
            cart.size === item.size &&
            cart.color === item.color
        );
        if (index > -1) {
            state.listCart[index].quantityCart += 1;
        } else {
            const cart = {
                ...item,
                size: item.size,
                color: item.color,
                quantityCart: 1
            };
            state.listCart.push(cart);
        }
    },
    DELETE_ITEM_CART(state, index) {
        state.listCart.splice(index, 1);
    },
    CHANGE_QUANTITY(state, obj) {
        if (obj.str == "minus") {
            state.listCart[obj.index].quantityCart =
                parseInt(state.listCart[obj.index].quantityCart) - 1;
        } else {
            state.listCart[obj.index].quantityCart =
                parseInt(state.listCart[obj.index].quantityCart) + 1;
        }
    },
    UPDATE_QUANTITY(state, obj) {
        state.listCart[obj.index].quantityCart = obj.newQuantity;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};