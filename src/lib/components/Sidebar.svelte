<script lang="ts">
	export let projects: {id: number, title: string}[];
</script>

<div class="bg-sidebar-background h-screen p-4">
	<h2 class="text-xl font-bold mb-4">Projects</h2>
	<ul class="menu bg-sidebar-background rounded-box">
		{#each projects as project}
			<li>
				<a href="/{project.id}" class="menu-item">{project.title}</a>
			</li>
		{/each}
	</ul>
</div>
