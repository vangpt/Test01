const state = {
    listUsers: localStorage.getItem("listUsers") ?
        JSON.parse(localStorage.getItem("listUsers")) :
        [],
    currentUser: localStorage.getItem("currentUser") ?
        JSON.parse(localStorage.getItem("currentUser")) :
        null
};

const getters = {};

const actions = {
    addUser({ commit }, user) {
        let index = state.listUsers.findIndex(
            item => item.email === user.email
        );
        if (index >= 0) {
            return 0;
        } else {
            commit("ADD_USER", user);
            localStorage.setItem("listUsers", JSON.stringify(state.listUsers));
            return 1;
        }
    },
    loginUser({ commit, state }, user) {
        let index = state.listUsers.findIndex(
            item => item.password === user.password && item.email === user.email
        );
        if (index >= 0) {
            commit("LOGIN_USER", user);
            localStorage.setItem(
                "currentUser",
                JSON.stringify(state.currentUser)
            );
            return 0;
        } else {
            return 1;
        }
    },
    logoutUser({ commit }) {
        commit("LOGOUT_USER");
        localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
    },
    addInfoUser({ commit }, info) {
        commit("ADD_INFO_USER", info);
    }
};

const mutations = {
    ADD_USER(state, user) {
        state.listUsers.push(user);
    },

    LOGIN_USER(state, user) {
        state.currentUser = user;
    },
    LOGOUT_USER(state) {
        state.currentUser = null;
    },
    ADD_INFO_USER(state, info) {
        state.currentUser.info = info;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};