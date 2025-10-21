<script lang="ts">
	export let task_title: string;
	export let func: string;
</script>

<!-- TODO: ENsure you use the custom colours here for text and background -->
<div class="card text-black w-80 bg-base-100 shadow-lg">
	<div class="card-body bg-surface text-text rounded-xl p-4">
		<!-- Compact title -->
		<h2 class="card-title text-lg font-semibold text-center mb-2">{task_title}</h2>

		<!-- Function display -->
		<h3 class="font-bold text-sm mb-1">Function:</h3>
		<pre class="bg-gray-800 text-text rounded p-2 font-mono text-xs overflow-x-auto">{func}</pre>
	</div>
</div>
