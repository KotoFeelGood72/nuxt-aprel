import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export function useSearchQuery() {
  const router = useRouter();
  const route = useRoute();

  const searchQuery = ref(route.query.search || '');
  watch(searchQuery, (newValue) => {
    router.replace({ query: newValue ? { search: newValue } : {} });
  });

  return { searchQuery };
}
