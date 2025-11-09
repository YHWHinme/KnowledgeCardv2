<script lang="ts">
    import { goto } from "$app/navigation";
    import { createBlob } from "$lib/lib";

    export let projectId: number;

    let creating = false;

    // Create a minimal blank blob for the provided project and refresh the page
    async function addBlankCard(): Promise<void> {
        if (creating) return;
        creating = true;

        try {
            const id = projectId;

            if (typeof id !== "number" || Number.isNaN(id)) {
                console.error("AddCardButton: invalid project id", id);
                creating = false;
                return;
            }

            // Placeholder values for a blank card
            const blobName = "Untitled";
            const description = "Placeholder description";
            const isFunction = false;
            const blobValue = "";

            const status = await createBlob(
                blobName,
                description,
                isFunction,
                blobValue,
                id,
            );

            // On success, refresh the current page so the newly created blob appears.
            if (status === 201 || status === 200) {
                // Use client-side navigation to the same path to re-run the page load without adding history
                await goto(window.location.pathname, { replaceState: true });
            } else {
                console.error(
                    "AddCardButton: failed to create blob, status=",
                    status,
                );
            }
        } catch (err) {
            console.error("AddCardButton error", err);
        } finally {
            creating = false;
        }
    }
</script>

<!-- Fixed plus button in bottom-right corner -->
<button
    on:click={addBlankCard}
    class="fixed right-6 bottom-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-teal-600 hover:bg-teal-500 text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-300"
    aria-label="Add new card"
    title="Add new card"
    disabled={creating}
>
    <!-- Simple plus icon -->
    <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-7 h-7"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
        focusable="false"
    >
        <path d="M12 5v14M5 12h14" />
    </svg>
</button>

<style>
    /* minimal fallback styles in case Tailwind utilities aren't available here */
    .fixed {
        position: fixed;
    }
    .right-6 {
        right: 1.5rem;
    }
    .bottom-6 {
        bottom: 1.5rem;
    }
    .z-50 {
        z-index: 50;
    }
    .w-14 {
        width: 3.5rem;
    }
    .h-14 {
        height: 3.5rem;
    }
    .rounded-full {
        border-radius: 9999px;
    }
    .bg-teal-600 {
        background-color: #0d9488;
    }
    .hover\:bg-teal-500:hover {
        background-color: #14b8a6;
    }
    .text-white {
        color: white;
    }
    .shadow-lg {
        box-shadow:
            0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }
    .flex {
        display: flex;
    }
    .items-center {
        align-items: center;
    }
    .justify-center {
        justify-content: center;
    }
    .focus\:outline-none:focus {
        outline: none;
    }
    .focus\:ring-2:focus {
        box-shadow: 0 0 0 2px rgba(20, 184, 166, 0.2);
    }
</style>
