export const Api = {
    baseUrl: "http://localhost:3000/",
    // baseUrl: "https://ocean.onrender.com/",

    itens: {
        endpoint: function () { 
            return Api.baseUrl + "itens" 
        },

        readAll: function () { 
            return this.endpoint() + "/" 
        },
    },

    //GET
    buildApiGetRequest: function (url) {
        return fetch(url, {
            method: "GET",
        });
    },

};