<script>
		import { supabase } from "./dbClient.js";
		import { calendar, user } from "./sessionStore.js";

		export let date;

		async function cancel() {
		  // Delete a reservation from database
		  const { data, error } = await supabase
		    .from("events")
		    .delete()
		    .eq("date", date);
		  if (error) console.error(error);
		  else {
		    $calendar[date].name = "";
		    $calendar[date].booked = false;
		  }
		}
</script>

<style>
	button {
	  padding: 5px 10px;
	  border-radius: 4px;
	  font-size: 1.1rem;
	}
</style>

<button on:click={cancel}>
  Cancel
</button>