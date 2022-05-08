<script setup lang="ts">
const msg = 'Electron + Vue3 template'
</script>

<template>
	<div class="flex flex-col w-2/3 mx-auto mt-10 text-center">
		<img class="w-2/3 mx-auto" src="images/vue-logo.png" />
		<h1 class="text-4xl">{{ msg }}</h1>
		<p class="text-slate-500">
			This fork adds ESLint, Prettier, and Tailwind.
		</p>
		<h2>Essential Links</h2>
		<ul>
			<li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
			<li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
			<li>
				<a href="https://gitter.im/vuejs/vue" target="_blank"
					>Gitter Chat</a
				>
			</li>
			<li>
				<a href="https://twitter.com/vuejs" target="_blank">Twitter</a>
			</li>
		</ul>
		<h2>Ecosystem</h2>
		<ul>
			<li>
				<a href="http://router.vuejs.org/" target="_blank"
					>vue-router</a
				>
			</li>
			<li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
			<li>
				<a href="https://github.com/vuejs/vueify" target="_blank"
					>vueify</a
				>
			</li>
			<li>
				<a href="https://github.com/vuejs/awesome-vue" target="_blank"
					>awesome-vue</a
				>
			</li>
		</ul>
	</div>
</template>

<style scoped lang="postcss">
#hello {
	@apply text-center;
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	margin-top: 60px;
}

h1 {
	@apply text-3xl font-bold;
}

h2 {
	@apply text-2xl mt-10 font-normal;
}

ul {
	list-style-type: none;
	padding: 0;
}

li {
	@apply mx-2.5 inline-block;
}

a {
	color: #42b983;
}
</style>
