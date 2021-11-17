// import statements have to go at the top
import { getData } from "./components/TheDataMiner.js";
import TheThumbNail from "./components/TheThumbNail.js";
import LightboxComponent from "./components/TheLightboxComponent.js";

(() => {
    const myVue = new Vue({
        created: function() {
            // go fetch the portfolio data here
            // make it available in the Vue instance
            getData(null, (data) => this.portfolioData = data);
        },

        data: {
            // this is storing the database info from our fetch call
            portfolioData: [],
            message: "hello from Vue",
            isVisible: false,
            currentPortfolioItem: {}
        },

        methods: {
            popLightBox(item) {
                debugger;
                this.currentPortfolioItem = item;

                // turn the lightbox on
                this.isVisible = true;
            },

            closeLightBox() {
                debugger;
                this.isVisible = false;
            }
        },

        components: {
            thumb: TheThumbNail,
            lightbox: LightboxComponent
        }
    }).$mount("#app");    
})()
