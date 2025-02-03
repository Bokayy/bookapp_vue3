<template>
    <CustomHeader />
    <customFooter :showPagination="true" :pageNo="1" :maxPages="5" />
</template>

<script lang="ts">
import { ref, onMounted } from "vue";
import { usePaginationStore } from "./store/usePagination";
import CustomHeader from "./components/CustomHeader.vue";
import CustomFooter from "./components/CustomFooter.vue";

export default {
    components: {
        CustomHeader,
        CustomFooter,
    },
    setup() {
        const paginationStore = usePaginationStore();
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

        onMounted(() => {
            //debugging
        });
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
