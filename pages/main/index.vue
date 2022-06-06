<template>
  <div>
		Menu Page

		<button
			class="main-button"
			@click="$router.push('/login')"
		>Return login</button>
  </div>
</template>

<script>
export default {
  name: 'mainMenu',
}
</script>
<style scoped>
	div {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		color: aliceblue;
		flex-direction: column;
		background-color: #232931;
	}
	.main-button {
		margin-top: 20px;
		padding: 10px;
		border-radius: 5px;
		border: 1px solid aliceblue;
		background-color: #232931;
		color: aliceblue;
		cursor: pointer;
	}
</style>
