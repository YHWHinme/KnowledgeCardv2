<script lang="ts">
	import Katex from "$lib/components/Katex.svelte";
	const expression = "\\ce{CO2 + C -> 2 C0}";
</script>

<main>
	<Katex {expression} />
</main>
