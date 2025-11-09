<script lang="ts">
    export let projects: { id: number; title: string }[];
    import { goto } from "$app/navigation";

    // Handler functions
    function handleLogoClick(): void {
        // perform client-side navigation (no need to await here)
        goto("/");
    }

    function handleLogoKeyDown(event: KeyboardEvent): void {
        // Activate on Enter or Space for keyboard accessibility
        if (
            event.key === "Enter" ||
            event.key === " " ||
            event.key === "Spacebar"
        ) {
            event.preventDefault();
            handleLogoClick();
        }
    }
</script>

<div class="bg-sidebar-background h-screen p-4">
    <!-- Sidebar title -->
    <h2
        class="text-xl hover:cursor-pointer hover:text-teal-200 text-sidebar-text-primary font-bold mb-4"
        on:click={handleLogoClick}
        on:keydown={handleLogoKeyDown}
        role="button"
        tabindex="0"
        aria-label="Go to projects home"
    >
        Projects
    </h2>
    <div class="separator"></div>
    <br />
    <br />
    <br />

    <!-- Actual sidebar -->
    <ul class="menu bg-sidebar-background rounded-box">
        {#each projects as project}
            <li class="list-item">
                <a href="/{project.id}" class="menu-item">{project.title}</a>
            </li>
        {/each}
    </ul>
</div>

<style>
    .menu-item {
        @apply text-sidebar-text-primary mx-6;
    }
    .list-item {
        @apply py-3 hover:bg-gray-500 rounded-lg;
    }
    .separator {
        @apply border;
    }
</style>
