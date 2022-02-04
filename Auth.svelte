<script>
  import { supabase, signUp, signIn } from "./dbClient.js";

  let email;
  let name;
  let registered = false;

  function toggleLogin() {
    registered = !registered;
    console.log("toggled");
  }

  /*const handleLogin = async () => {
        try {
          loading = true;
          const { error } = await supabase.auth.signIn({ email });
          if (error) throw error;
          alert("Check your email for the login link!");
        } catch (error) {
          alert(error.error_description || error.message);
        } finally {
          loading = false;
        }
      };*/
</script>

<style>
  u {
    font-size: 1rem;
    cursor: pointer;
  }
  input {
    margin: 5px;
  }
  h3 {
  }
</style>


 <div>
                
                {#if !registered }
                <h3>Please sign up, so we know who's coming.</h3>
                <p/>
                <u on:click={() => toggleLogin()}>Been there, done that</u>
                {:else}
                <div>Already registered? Cool, just login.</div>
                <p/>
                <u on:click={() => toggleLogin()}>Ehmm...</u>
                {/if}
                <p/>
                {#if !registered }
                <input type='text' name='name' bind:value={name} placeholder="Name"/><br/>
                {/if}
                <input type='email' name='email' bind:value={email} placeholder="Email"/>
                <p/>
                {#if !registered }
                  <button on:click={signUp(email, name)}>Sign Up</button>
                {:else }
                  <button on:click={signIn(email)}>Login</button>
                {/if}

            <!--<form on:submit|preventDefault={handleLogin}>
            <div>
              <p>Sign in via magic link with your email below</p>
              <div>
                <input
                  class="inputField"
                  type="email"
                  placeholder="Your email"
                  bind:value={email}
                />
              </div>
              <div>
                <input type="submit" value={loading ? "Loading" : "Send magic link"} disabled={loading} />
              </div>
            </div>
          </form>-->
        
    </div>
