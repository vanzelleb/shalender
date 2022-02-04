<script>
		import { supabase } from "./dbClient.js";
		import { calendar, user } from "./sessionStore.js";

		export let date;

		async function book() {
		  const event = {
		    name: $user?.user_metadata?.name,
		    date: date,
		    email: $user?.email
		  };
		  // Insert an event into database
		  const { data, error } = await supabase.from("events").insert([event]);
		  if (error) console.error(error);
		  else {
		    event.booked = true;
		    $calendar[date] = event;
		    console.log("Booked: ", event);
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

<button on:click={book}>
  I'm coming!
</button>