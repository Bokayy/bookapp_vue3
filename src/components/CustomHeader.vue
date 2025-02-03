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

        <div class="search">
            <div class="wrap">
                <input
                    v-model="template_searchQuery"
                    class="searchTerm"
                    placeholder="Look up 'dev'!"
                    id="test"
                />
                <button
                    @click="template_searchQuery"
                    type="submit"
                    class="searchButton"
                >
                    <i class="fa fa-search"></i>
                </button>
            </div>
        </div>
    </header>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";
import { usePaginationStore } from "../src/store/usePagination";

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
