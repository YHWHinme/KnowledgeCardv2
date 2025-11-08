<script lang="ts">
	// Importing components
	import CardModal from "$lib/components/CardModal.svelte";
	import Card from "$lib/components/Card.svelte";
	import { modalStore, openModal } from "$lib/modal";
	import type { Blob } from "$lib/modal";

	// Sample data
	let tasks: Blob[] = [
		{
			id: 1,
			task: "Task 1",
			expression: "E = \\sqrt{5^2+2}",
			desc: "Some desc",
		},
		{
			id: 2,
			task: "Task 2",
			expression: "E = m c^2",
			desc: "Some desc",
		},
		{ id: 3, task: "Task 3", expression: "Func 3", desc: "Some desc" },
		{ id: 4, task: "Task 4", expression: "Func 4", desc: "Some desc" },
	];

	// TODO: Take care of this function
	function handleDetails() {}

	$: modalState = $modalStore;
</script>

<main class="flex flex-col items-center min-h-screen p-4 bg-card-house">
	<h1 class="text-2xl font-bold mb-4 text-app-text-primary">Formulae</h1>
	<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
		{#each tasks as task}
			<Card
				blobName={task.task}
				expression={task.expression}
				description={task.desc}
				on:details={() => openModal(task)}
			/>
		{/each}
	</div>

	{#if modalState.isOpen}
		<CardModal />
	{/if}
</main>
