<script lang="ts">
	import { renderKatex } from "$lib/lib";
	const expression = "\\ce{CO2 + C -> 2 CO}";
</script>

<main class="p-4">
	<h1 class="text-2xl font-bold mb-4">Katex Testing</h1>
	<div class="bg-gray-100 p-4 rounded">
		<h2 class="font-semibold mb-2">Expression: {expression}</h2>
		<div>{@html renderKatex(expression)}</div>
	</div>
</main>
