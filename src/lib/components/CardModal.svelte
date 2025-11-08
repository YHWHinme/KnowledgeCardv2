<script lang="ts">
	import { onMount, onDestroy } from "svelte";
	import { modalStore, closeModal, type Blob } from "$lib/modal";
	import { updateBlob } from "$lib/lib";

	let modalState = $derived($modalStore);

	let modalElement: HTMLElement;
	let isEditing = $state(false);
	let editedTask = $state<Blob>({ id: 0, task: '', expression: '', desc: '' });

	function handleClose() {
		if (isEditing) {
			// Discard changes
			isEditing = false;
		}
		closeModal();
	}

	async function handleEdit() {
		if (isEditing) {
			await submitEdit();
		} else {
			isEditing = true;
			if (modalState.currentTask) {
				editedTask = { ...modalState.currentTask };
			}
		}
	}

	function handleCancel() {
		isEditing = false;
		if (modalState.currentTask) {
			editedTask = { ...modalState.currentTask };
		}
	}

	async function submitEdit() {
		if (!editedTask.id) return;
		const result = await updateBlob(editedTask.id, editedTask.task || '', editedTask.desc || '', false, editedTask.expression || '');
		if (result === 200) {
			// Update the modal store with edited data
			modalStore.update(store => ({ ...store, currentTask: editedTask }));
			isEditing = false;
		} else {
			console.error("Failed to update blob");
		}
	}

	function handleDelete() {
		// Handle delete logic here or dispatch
		console.log("Delete task:", modalState.currentTask);
		closeModal();
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === "Escape") {
			handleClose();
		} else if (event.key === "Enter" && !event.shiftKey && isEditing) {
			event.preventDefault();
			submitEdit();
		}
	}

	onMount(() => {
		window.addEventListener("keydown", handleKeydown);
	});

	onDestroy(() => {
		window.removeEventListener("keydown", handleKeydown);
	});
</script>

<main>
	<!-- NOTE: Snippets -->

	<!-- For rendering buttons  -->
	{#snippet button(buttonText: string, clickHandler: () => void)}
		<button
			class="flex items-center btn rounded-lg bg-modal-buttons-background text-modal-buttons-text h-8 mx-5 px-6 py-4.8 hover:bg-modal-buttons-hovery hover:scale-105 transition-all duration-200"
			on:click={clickHandler}>{buttonText}</button
		>
	{/snippet}

	<!-- For rendering separations -->
	{#snippet separator()}
		<div class="border mb-6"></div>
	{/snippet}

	<!-- Modal backdrop -->
	<div
		class="fixed inset-0 bg-modal-backdrop flex items-center justify-center z-50"
		role="dialog"
		aria-modal="true"
		tabindex="-1"
		on:click={handleClose}
	>
		<!-- Modal content -->
		<div
			class="card w-[28rem] shadow-xl relative rounded-lg hover:shadow-xl transition-all duration-300 shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:shadow-[0_0_30px_rgba(56,189,248,0.35)]"
			role="document"
			on:click|stopPropagation
			bind:this={modalElement}
		>
			<!-- Close button -->
			<button
				class="btn btn-sm btn-circle btn-ghost absolute top-2 right-2 text-app-text-primary hover:bg-modal-buttons-hover z-10"
				aria-label="Close modal"
				on:click={handleClose}>✕</button
			>
			<!-- Everything inside -->
			<div
				class="card-body bg-modal-modal-body p-5 text-app-text-primary rounded-xl border border-modal-modal-outline"
			>
				<!-- The Card's title -->
				{#if isEditing}
					<input
						bind:value={editedTask.task}
						class="card-title text-lg font-semibold text-center mb-6 text-app-text-primary bg-modal-inputs-background rounded p-2"
						placeholder="Task Title"
						on:keydown={handleKeydown}
					/>
				{:else}
					<h2
						class="card-title text-lg font-semibold text-center mb-6 text-app-text-primary"
					>
						{modalState.currentTask?.task || "No Task"}
					</h2>
				{/if}
				<!-- A separator -->
				{@render separator()}

				<!-- Function viewing section -->
				<h3 class="font-bold text-sm mb-4">Function:</h3>
				{#if isEditing}
					<textarea
						bind:value={editedTask.expression}
						class="bg-modal-inputs-background text-app-text-primary rounded-lg p-3 font-mono text-sm border border-modal-modal-outline mb-6 w-full"
						rows="3"
						placeholder="Function Expression"
						on:keydown={handleKeydown}
					></textarea>
				{:else}
					<pre
						class="bg-modal-inputs-background text-app-text-primary rounded-lg p-3 font-mono text-sm overflow-x-auto border border-modal-modal-outline mb-6 flex items-center">{modalState
							.currentTask?.expression || "No Function"}</pre>
				{/if}
				<!-- Empty distance -->
				<div class="py-4"></div>

				<!-- The placeholder for the description -->
				<h3 class="font-bold text-sm mb-4">Description:</h3>
				{#if isEditing}
					<textarea
						bind:value={editedTask.desc}
						class="px-6 text-app-text-primary p-1 bg-modal-inputs-background rounded-lg mb-6 w-full"
						rows="3"
						placeholder="Description"
						on:keydown={handleKeydown}
					></textarea>
				{:else}
					<div
						class="px-6 text-app-text-primary p-1 bg-modal-inputs-background rounded-lg mb-6"
					>
						{modalState.currentTask?.desc || "No Description"}
					</div>
				{/if}
				<!-- The buttons section -->
				<div class="flex justify-center gap-4 py-3 mt-6">
					{#if isEditing}
						{@render button("💾 Save", handleEdit)}
						{@render button("❌ Cancel", handleCancel)}
					{:else}
						{@render button("✏️ Edit", handleEdit)}
						{@render button("🗑️ Delete", handleDelete)}
					{/if}
				</div>
			</div>
		</div>
	</div>
</main>
