import { createStore } from "vuex";
import navbar from "./modules/navbar";
import siswa from "./modules/siswa";

export default createStore({
    modules: {
        navbar,
        siswa,
    }
});