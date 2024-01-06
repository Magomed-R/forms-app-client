import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
    state: () => ({
        _id: "",
        mail: "",
        name: "",
        forms: []
    })
})