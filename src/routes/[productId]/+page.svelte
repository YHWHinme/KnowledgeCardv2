<script lang="ts">
	//Importing types
	import type { PageProps } from "./$types";
	import type { Blobs } from "$lib/lib";
	//Importing components
	import Card from "$lib/components/Card.svelte";
	import CardModal from "$lib/components/CardModal.svelte";
	//Importing modal function
	import { modalStore, openModal } from "$lib/modal";

	let { data }: PageProps = $props();
</script>

<main class="flex flex-col items-center min-h-screen p-4 bg-card-house">
	<h1 class="text-2xl font-bold mb-4 text-app-text-primary">
		{data.project.title}
	</h1>

	<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
		{#if data.blobs.length > 0}
			{#each data.blobs as blob (blob.id)}
				<Card
					blobName={blob.blobName}
					expression={blob.blobValue}
					description={blob.description}
					on:details={() =>
						openModal({
							id: blob.id,
							task: blob.blobName,
							expression: blob.blobValue,
							desc: blob.description,
						})}
				/>
			{/each}
		{:else}
			<p>No blobs found.</p>
		{/if}
	</div>

	{#if $modalStore.isOpen}
		<CardModal />
	{/if}
</main>
