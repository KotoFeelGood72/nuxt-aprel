import { ref, computed } from 'vue';
import type { ItemTypes } from '~/types/ItemTypes';


export function usePagination(items: Ref<ItemTypes[]>, pageSize: number) {
    const currentPage = ref<number>(1);
    const pageCount = computed(() => Math.ceil(items.value.length / pageSize));

    const paginatedItems = computed(() => {
        const start = (currentPage.value - 1) * pageSize;
        const end = start + pageSize;
        return items.value.slice(start, end);
    });

    function setPage(pageNumber: number) {
        if (pageNumber < 1 || pageNumber > pageCount.value) return;
        currentPage.value = pageNumber;
    }

    return {
        currentPage,
        pageCount,
        paginatedItems,
        setPage
    };
}
