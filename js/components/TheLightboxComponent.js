import TheAudioComponent from "./TheAudioComponent.js";
import TheVideoComponent from "./TheVideoComponent.js";

export default {
    name: "TheLightboxComponent",

    props: ["piece"],

    computed: {
        activeComponent: function() {
            return `${this.piece.mediaType + "Component"}`;
        }       
    },

    template: `
    <section class="lightboxWrapper">
        <i @click="closeMe" class="fa-solid fa-circle-xmark"></i>
        <h1>Type of Work: {{piece.mediaType}} Project</h1>

        <component v-if="piece.mediaType" :is="activeComponent"></component>

        <h1>{{piece.name}}</h1>
        <p>{{piece.description}}</p>
        <img :src='"images/" + piece.biopic' :alt="piece.name">
    </section>
    `,

    methods: {
        closeMe() {
            debugger;
            this.$emit("closelb");
        }
    },

    components: {
        AudioComponent: TheAudioComponent,
        VideoComponent: TheVideoComponent

    }
}