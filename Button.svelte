<script>
	//import axios from "axios";
	import { createClient } from "@supabase/supabase-js";

	const supabaseUrl = "https://jumyoetcqqeqmferdklb.supabase.co";
	const supabaseKey =
	  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQyODczODc0LCJleHAiOjE5NTg0NDk4NzR9.8cBgXmf2_gvPn1znBLz8Wp1_zPkjkhJQwkmBgaXOhhw";
	const supabase = createClient(supabaseUrl, supabaseKey);

	// Backend consists of Netlify functions that can access secret API keys
	// const backend = axios.create({
	//   baseURL: "https://shalendar.netlify.app/.netlify/functions/"
	// });

	async function createEvent() {
	  /* 	  const { data, error } = await backend.get("addEvent", {
			    params: { name: "test", date: "2022-01-22" }
			  });
			  console.log("Data: ", data);
				console.log("Error: ", error); */

	  // Insert a row
	  const { data, error } = await supabase
	    .from("events")
	    .insert([{ date: date, name: name }]);
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