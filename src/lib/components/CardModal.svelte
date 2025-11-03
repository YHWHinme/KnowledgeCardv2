<script lang="ts">
	import { onMount, onDestroy } from "svelte";
	import { modalStore, closeModal } from "$lib/modal";

	$: modalState = $modalStore;

	let modalElement: HTMLElement;

	function handleClose() {
		closeModal();
	}

	function handleEdit() {
		// Handle edit logic here or dispatch
		console.log("Edit task:", modalState.currentTask);
		closeModal();
	}

	function handleDelete() {
		// Handle delete logic here or dispatch
		console.log("Delete task:", modalState.currentTask);
		closeModal();
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === "Escape") {
			handleClose();
		}
	}

	onMount(() => {
		window.addEventListener("keydown", handleKeydown);
	});

	onDestroy(() => {
		window.removeEventListener("keydown", handleKeydown);
	});
</script>

<!-- Modal backdrop -->
<div
	class="fixed inset-0 bg-modal-backdrop flex items-center justify-center z-50"
	on:click={handleClose}
>
	<!-- Modal content -->
	<div
		class="card w-96 shadow-xl relative"
		on:click|stopPropagation
		bind:this={modalElement}
	>
		<!-- Close button -->
		<button
			class="btn btn-sm btn-circle btn-ghost absolute top-2 right-2 text-app-text-primary hover:bg-modal-buttons-hovery z-10"
			on:click={handleClose}>✕</button
		>
		<!-- Everything inside -->
		<div
			class="card-body bg-modal-modal-body p-5 text-app-text-primary rounded-xl border border-modal-modal-outline"
		>
			<!-- The Card's title -->
			<h2 class="card-title w-full justify-center">{modalState.currentTask?.task || "No Task"}</h2>
			<br />
			<!-- Function viewing section -->
			<h3 class="font-bold mt-2">Function:</h3>
			<pre
				class="bg-modal-inputs-background text-app-text-primary rounded p-4 font-mono text-sm">{modalState.currentTask?.func || "No Function"}</pre>
			<br />
			<!-- The placeholder for the description -->
			<h3 class="font-bold">Description:</h3>
			<p>
				{modalState.currentTask?.desc || "No Description"}
			</p>
			<br />
			<!-- The buttons section -->
			<div class="card-actions justify-start">
				<div class="justify-center">
					<button
						class="btn rounded-lg bg-modal-buttons-background text-modal-buttons-text h-8 px-4 hover:bg-modal-buttons-hovery"
						on:click={handleEdit}>✏️ Edit</button
					>
					<button
						class="btn rounded-lg bg-modal-buttons-background text-modal-buttons-text h-8 px-4 hover:bg-modal-buttons-hovery"
						on:click={handleDelete}>🗑️ Delete</button
					>
				</div>
			</div>
		</div>
	</div>
</div>
