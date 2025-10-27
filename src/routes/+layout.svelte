<script lang="ts"> // ignore
	import "../app.css";
	import Sidebar from "../lib/components/Sidebar.svelte";

	const projects = [
		{ id: 1, title: "Project 1" },
		{ id: 2, title: "Project 2" },
		{ id: 3, title: "Project 3" },
	];

	let { children } = $props();
</script>

<main>
	<div class="grid grid-cols-7">
		<!-- TODO: Ensure against bugs -->
		<div class="col-span-1">
			<Sidebar {projects} />
		</div>

		<div class="col-span-6 text-app-text-primary">
			{@render children()}
		</div>
	</div>
</main>
