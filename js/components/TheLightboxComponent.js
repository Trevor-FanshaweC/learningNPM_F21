import AudioComponent from "./TheAudioComponent.js";
import VideoComponent from "./TheVideoComponent.js";

export default {
    name: "TheLightboxComponent",

    props: ["piece"],

    data: function() {
        return {
            activeComponent: AudioComponent
        }           
    },

    template: `
    <section class="lightboxWrapper">
        <component :is="activeComponent"></component>

        <h1>{{piece.name}}</h1>
        <p>{{piece.description}}</p>
        <img :src='"images/" + piece.biopic' :alt="piece.name">
    </section>
    `
}