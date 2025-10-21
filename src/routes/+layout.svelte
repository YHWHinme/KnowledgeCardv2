<script lang="ts">
	import "../app.css";
	import Sidebar from "../lib/components/Sidebar.svelte"

	const projects = [
		{id: 1, title: "Project 1"},
		{id: 2, title: "Project 2"},
		{id: 3, title: "Project 3"},
	]

	let { children } = $props();
</script>

<main>
	<!-- TODO: Setup css grid -->
	<Sidebar {projects} />

	{@render children()}
</main>
