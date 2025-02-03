import { defineStore } from "pinia";
import { ref } from "vue";

export const usePaginationStore = defineStore("pagination", () => {
    const showPagination = ref(true);
    const pageNo = ref(1);
    const maxPages = ref(0);
    const searchQuery = ref("");

    function pageUpdate(direction: "plus" | "minus") {
        if (maxPages.value === 0) {
            return;
        }
        if (direction === "plus" && pageNo.value < maxPages.value) {
            pageNo.value++;
        } else if (direction === "minus" && pageNo.value > 1) {
            pageNo.value--;
        }
    }

    function maxPagesUpdate(newMax: number) {
        maxPages.value = newMax;
    }

    function updateSearch(query: string) {
        searchQuery.value = query;
    }

    return {
        showPagination,
        pageNo,
        maxPages,
        searchQuery,
        pageUpdate,
        maxPagesUpdate,
        updateSearch,
    };
});
