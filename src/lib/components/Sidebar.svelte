<script lang="ts">
	export let projects: {id: number, title: string}[];
</script>

<div class="w-64 bg-base-200 h-screen p-4">
	<h2 class="text-xl font-bold mb-4">Projects</h2>
	<ul class="menu bg-base-100 rounded-box">
		{#each projects as project}
			<li>
				<a href="/{project.id}" class="menu-item">{project.title}</a>
			</li>
		{/each}
	</ul>
</div>
