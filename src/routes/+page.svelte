<script lang="ts">
	// Importing components
	import CardModal from "$lib/components/CardModal.svelte";
	import Card from "$lib/components/Card.svelte";

	export let title: string;

	// Sample data
	let tasks = [
		{ id: 1, task: "Task 1", func: "Func 1", desc: "Some desc" },
		{ id: 2, task: "Task 2", func: "Func 2", desc: "Some desc" },
		{ id: 3, task: "Task 3", func: "Func 3", desc: "Some desc" },
		{ id: 4, task: "Task 4", func: "Func 4", desc: "Some desc" },
	];
</script>

<main class="flex justify-center items-center min-h-screen">
	<CardModal />
	<!-- <Card -->
	<!-- 	task_title="Sample Task" -->
	<!-- 	description="This is a sample description" -->
	<!-- 	func="function sample() " -->
	<!-- /> -->
</main>
