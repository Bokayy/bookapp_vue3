<template>
    <h1>IT Books Search</h1>
    <div class="break">&nbsp;</div>

    <div v-show="template_show_pagination" class="pageIndicator">
        <i
            @click="template_pageOscillator(false)"
            class="fa-solid fa-angle-left"
            id="btnLeft"
        >
        </i>
        <p class="pageNo">
            {{ template_current_page }}/{{ template_max_pages }}
        </p>
        <i
            @click="template_pageOscillator(true)"
            class="fa-solid fa-angle-right"
            id="btnRight"
        ></i>
    </div>
    <search>
        <form action="http://www.byxnet.pro/books/search" method="get">
            <label for="searchQuery">Search:</label>
            <input
                type="text"
                id="searchQuery"
                name="q"
                placeholder="Anything programming related"
                v-model="template_search_string"
            />
            <button type="submit">Search</button>
        </form>
    </search>
    <!-- <div class="search">
        <div class="wrap">
            <input @keyup="keymonitor" v-model="searchQuery" class="searchTerm" placeholder="Anything IT related?" id="test">
            <button @click="emitSearchTerm" type="submit" class="searchButton">
                <i class="fa fa-search"></i>
            </button>
        </div>
    </div>-->
    <customFooter :showPagination="true" :pageNo="1" :maxPages="5" />
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { ref } from "vue";
import CustomFooter from "./components/CustomFooter.vue";

export default {
    setup() {
        let current_page = ref<number>(0); //current page
        let search_string = ref<string>(""); //what has been or will be searched
        let max_pages = ref<number>(0); //the maximum number of pages based on query
        let show_pagination = ref<boolean>(false); //are there pages

        function pageOscillator(positive_or_negative: boolean) {
            if (positive_or_negative) {
                if (current_page.value < max_pages.value) {
                    current_page.value++;
                }
            } else if (current_page.value > 1) {
                current_page.value--;
                //else was used so that decrement would not be executed
            }
        }
        return {
            template_show_pagination: show_pagination,
            template_pageOscillator: pageOscillator,
            template_current_page: current_page,
            template_max_pages: max_pages,
            template_search_string: search_string,
        };
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;

    .divider {
        background-color: rgb(197, 164, 120);
        min-width: 100%;
        min-height: 1.5rem;
    }
}
</style>
