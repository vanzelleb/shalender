<script>
  import { supabase, signUp, login, magicLogin } from "./dbClient.js";

  let email;
  let name;
  let registered = false;

  function toggleLogin() {
    registered = !registered;
    console.log("toggled");
  }
</script>

<style>
  u {
    font-size: 1rem;
    cursor: pointer;
  }

  input,
  button {
    margin: 5px;
    font-size: 1.2rem;
  }

  div {
    font-size: 1.2rem;
  }

  button:after {
    content: "";
    position: absolute;
    border: 1px solid #000000;
    bottom: 4px;
    left: 4px;
    width: calc(100% - 1px);
    height: calc(100% - 1px);
  }

  button {
    margin: auto;
    background-color: #3dd1e7;
    border: 0 solid #e5e7eb;
    box-sizing: border-box;
    color: #000000;
    display: flex;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.5rem;
    padding: 0.5rem 1.65rem 0.75rem;
    text-align: center;
    text-decoration: none #000000 solid;
    max-width: 460px;
    position: relative;
    cursor: pointer;
    transform: rotate(-2deg);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  button:hover {
    background-color: #f7fafa;
  }
</style>


 <div>
                
                {#if !registered }
                <div>Please sign up, so we know who's coming.</div>
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
                  <button on:click={login(email)}>Login</button>
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
