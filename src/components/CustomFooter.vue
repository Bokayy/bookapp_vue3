<template>
    <div class="break">&nbsp;</div>
    <div class="wrapper">
        <div class="pageButtons" v-for="index in maxPages" :key="index">
            <svg height="100" width="100">
                <circle
                    cx="50"
                    cy="50"
                    r="8"
                    stroke="rgb(197, 164, 120)"
                    stroke-width="3"
                    fill="white"
                />
            </svg>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
    props: {
        showPagination: Boolean,
        pageNo: Number,
        maxPages: Number,
    },
    methods: {
        pagePlus() {
            if (this.pageNo !== this.maxPages) {
                this.$emit("page_plus", true);
            }
        },
        pageMinus() {
            if (this.pageNo > 1) {
                this.$emit("page_minus", false);
            }
        },
    },
})
export default class CustomFooter extends Vue {
    showPagination!: boolean;
    pageNo!: number;
    maxPages!: number;
}
</script>

<style scoped>
.break {
    background-color: #c5a478;
    min-width: 100%;
    min-height: 1.5rem;
}
.wrapper {
    display: flex;
    align-items: center;
    justify-content: space-around;
    align-items: center;
    display: flex;
    flex-direction: row;
    max-height: 10rem;
    max-width: 100%;
}
</style>
