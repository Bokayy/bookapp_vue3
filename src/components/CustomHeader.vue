<template>
    <header>
        <h1>IT Books Search</h1>
        <div class="break">&nbsp;</div>

        <div v-show="template_pagination_bool" class="pageIndicator">
            <i
                @click="template_pageUpdate('plus')"
                class="fa-solid fa-angle-left"
                id="btnLeft"
            ></i>
            <p class="pageNo">
                {{ template_current_page }}/{{ template_max_pages }}
            </p>
            <i
                @click="template_pageUpdate('minus')"
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
                    v-model="template_searchQuery"
                />
                <button type="submit">Search</button>
            </form>
        </search>
    </header>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";
import { usePaginationStore } from "../store/usePagination";
import "../style/CustomHeader.css";

export default {
    setup() {
        const paginationStore = usePaginationStore();
        let searchQuery = ref<string>("");

        onMounted(() => {
            console.log(searchQuery.value); //debugging
        });

        function update_searchQuery_store() {
            paginationStore.updateSearch(searchQuery.value);
        }

        return {
            //what is available in the template
            template_pageUpdate: paginationStore.pageUpdate,
            template_pagination_bool: paginationStore.showPagination,
            template_current_page: paginationStore.pageNo,
            template_max_pages: paginationStore.maxPages,
            template_searchQuery: update_searchQuery_store,
        };
    },
};
</script>

<style lang="scss" scoped></style>
