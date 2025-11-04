<script lang="ts">
	export let projects: { id: number; title: string }[];
</script>

<div class="bg-sidebar-background h-screen p-4">
	<!-- Sidebar title -->
	<h2 class="text-xl text-sidebar-text-primary font-bold mb-4">Projects</h2>
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
