<script lang="ts">
	//Dispatching
	import { createEventDispatcher } from "svelte";
	const dispatch = createEventDispatcher();

	//Katex
	import "katex/contrib/mhchem";
	import "katex/dist/katex.min.css";
	import { renderToString } from "katex";
	import { goto } from "$app/navigation";

	// Props
	export let blobName: string;
	export let expression: string;
	export let description: string;

	const formula = renderToString(expression, {
		throwOnError: false,
		displayMode: true,
	});

	// Handlers
	function handleClick() {
		dispatch("details");
	}

	function handleLogoClick() {
		goto("/");
	}
</script>

<div
	class="card text-knlCard-text-markdown w-80 bg-knlCard-background shadow-lg rounded-lg hover:shadow-xl hover:shadow-knlCard-glowColor transition-all duration-300 cursor-pointer border-knlCard-border"
>
	<div
		class="card-body bg-app-background text-knlCard-text-markdown rounded-lg p-4"
	>
		<!-- Compact title -->
		<h2
			class="card-title text-lg font-semibold text-center mb-4 text-knlCard-text-summary"
		>
			{blobName}
		</h2>

		<!-- Function display -->
		<!-- TODO: setup the copy icon so it looks good -->
		<!-- 			<div -->
		<!-- 				class=" -->
		<!-- flex justify-end items-end -->
		<!-- 				">󰆏</div> -->
		<h3 class="font-bold text-sm mb-3">Function:</h3>
		<pre
			class="bg-app-secondary text-knlCard-text-function rounded-lg p-1 font-mono text-sm overflow-x-auto border border-knlCard-border mb-4">
			
			{@html formula}
		</pre>

		<!-- Description -->
		<h3 class="font-bold text-sm mb-3">Description:</h3>
		<div
			class="px-6 text-knlCard-text-function p-1 bg-knlCard-background rounded-lg"
		>
			{description}
		</div>

		<!-- View Button -->
		<div class="flex justify-center mt-4">
			<button
				class="hover:pointer rounded-lg border border-knlCard-border py-2 px-4 hover:bg-knlCard-button hover:scale-105 transition-all duration-200 cursor-pointer text-knlCard-text-markdown"
				on:click={handleClick}>View Details</button
			>
		</div>
	</div>
</div>
