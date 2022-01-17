import { ref } from 'vue';
import { bookEvent } from '../../services/api/event'

export default function withBookEvent() {
    const result = ref(null);
    const loading = ref(false);
    const error = ref(false);
    const bookEventPromise = async (capacity) => {
        loading.value = true;
        try {
            await bookEvent(capacity.value);
            result.value = 'Ok, booked for ' + capacity.value;
        } catch (error) {
            console.log(error);
            error.value = error;
        } finally {
            loading.value = false;
        }
    };

    return {
        result,
        loading,
        error,
        bookEventPromise,
    };
}