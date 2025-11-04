<script lang="ts">
	// Importing components
	import CardModal from "$lib/components/CardModal.svelte";
	import Card from "$lib/components/Card.svelte";
	import { modalStore, openModal } from "$lib/modal";
	import type { Task } from "$lib/modal";

	// Sample data
	let tasks: Task[] = [
		{ id: 1, task: "Task 1", func: "Func 1", desc: "Some desc" },
		{ id: 2, task: "Task 2", func: "Func 2", desc: "Some desc" },
		{ id: 3, task: "Task 3", func: "Func 3", desc: "Some desc" },
		{ id: 4, task: "Task 4", func: "Func 4", desc: "Some desc" },
	];

	function handleDetails() {}

	$: modalState = $modalStore;
</script>

<main class="flex flex-col items-center min-h-screen p-4 bg-card-house">
	<h1 class="text-2xl font-bold mb-4 text-app-text-primary">Tasks</h1>
	<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
		{#each tasks as task}
			<Card
				task_title={task.task}
				func={task.func}
				description={task.desc}
				on:details={() => openModal(task)}
			/>
		{/each}
	</div>

	{#if modalState.isOpen}
		<CardModal />
	{/if}
</main>
