<script>
  import { supabase, signUp, signIn } from "./dbClient.js";

  let loading = false;
  let email;
  let name;

  const handleLogin = async () => {
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
  };
</script>


 <div>
            <form on:submit|preventDefault={signUp(email, name)}>
                <h3>Sign Up</h3>
                <label for="name">Name</label><input type='text' name='name' bind:value={name}/><br/>
                <label for="email">Email</label><input type='email' name='email' bind:value={email}/>
                <button type='submit'>Sign Up</button>
            </form>
 
            <form on:submit|preventDefault={signIn(email)}>
                <h3>Log In</h3>
                <label for="email">Email</label><input type='email' name='email' bind:value={email}/>
                <button type='submit'>Sign In</button>
            </form>

            <form on:submit|preventDefault={handleLogin}>
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
          </form>
        
    </div>
