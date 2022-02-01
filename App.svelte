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
    font-family: sans-serif;
    text-align: center;
  }
</style>

<main>
	<h2>Henning's & Despi's Alicante beach place</h2>
	<h3>Hello { $user?.user_metadata?.name }, let us know when you want to come!</h3>
      {#if $user}
         <Calendar />
    {:else}
        <Auth />
    {/if}

</main>