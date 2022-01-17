import { delay } from "../../stubs";

export async function bookEvent(capacity) {
    await delay(2000);

    return capacity;
}