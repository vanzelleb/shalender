<script>
		import axios from "axios";

		// Backend consists of Netlify functions that can access secret API keys
		const backend = axios.create({
		  baseURL: "https://shalendar.netlify.app/.netlify/functions/"
		});

		async function createEvent() {
		  const { data } = await backend.get("addEvent", {
		    params: { name: "test", date: "2022-01-22" }
		  });
		}
</script>

<style>
	button {
	  background: #ff3e00;
	  color: white;
	  border: none;
	  padding: 8px 12px;
	  border-radius: 2px;
	}
</style>

<button on:click={createEvent}>
  Create event
</button>