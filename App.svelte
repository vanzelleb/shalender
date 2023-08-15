<script>
  import Auth from "./Auth.svelte";
  import Calendar from "./Calendar.svelte";
  import { supabase } from "./dbClient.js";
  import { user } from "./sessionStore";

  user.set(supabase.auth.user());

  supabase.auth.onAuthStateChange((_, session) => {
    user.set(session.user);
    console.log("User from session", $user);
  });
</script>

<style>
  main {
    font-family: Tahoma, sans-serif;
    text-align: center;
    height: 100vh;
    width: 100vw;
  }
  h1 {
    margin: 0px;
    padding: 20px 15px;
  }
  div {
    font-size: 1.2rem;
  }
</style>

<main>
	<h1>Henning's & Despi's Alicante Beach P(a)lace</h1>
  { #if $user }
	  <div>
      Hello { $user.user_metadata?.name }, let us know when you'd like to visit us.
    </div>
    <p/>
         <Calendar />
  {:else}
        <Auth />
        <p/>
        <a href="https://goo.gl/maps/nXwv7ppDKepRo4mi6">See where we live in Google Maps</a>
  {/if}
</main>