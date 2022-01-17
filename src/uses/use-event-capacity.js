
import { ref, computed } from 'vue';
import withBookEvent from '../components/events/book-event-data-source';

export default function useEventCapacity() {
    const capacity = ref(0);
    const bookEventDataSource = withBookEvent();
    
    const isBookEventDisabled = computed(() => {
        return bookEventDataSource.loading.value || capacity.value <= 0;
    });

    function increaseCapacity() {
        capacity.value++;
    }

    function decreaseCapacity() {
        capacity.value--;
    }

    function book() {
        bookEventDataSource.bookEventPromise(capacity);
    }

    return {
        capacity,
        bookEventDataSource,
        isBookEventDisabled,
        increaseCapacity,
        decreaseCapacity,
        book,
    };
}