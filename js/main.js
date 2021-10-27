// import statements have to go at the top
import { getData } from "./components/TheDataMiner.js";
import TheThumbNail from "./components/TheThumbNail.js";

(() => {
    const myVue = new Vue({
        created: function() {
            // go fetch the portfolio data here
            getData(null, (data) => this.portfolioData = data )
        },

        data: {
            // this is storing the database info from our fetch call
            portfolioData: [],
            message: "hello from Vue"
        },

        methods: {

        },

        components: {
            thumb: TheThumbNail
        }
    }).$mount("#app");    
})()
