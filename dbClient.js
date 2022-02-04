import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jumyoetcqqeqmferdklb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQyODczODc0LCJleHAiOjE5NTg0NDk4NzR9.8cBgXmf2_gvPn1znBLz8Wp1_zPkjkhJQwkmBgaXOhhw";
export const supabase = createClient(supabaseUrl, supabaseKey);

//console.log(supabase);

export async function signUp(email, name) {
  const { user, error } = await supabase.auth.signUp(
    {
      email: email,
      password: "test123"
    },
    {
      data: {
        name: name
      }
    }
  );

  if (error) alert(error.message);
  if (user) console.log(user);
}

export async function login(email) {
  const { user, error } = await supabase.auth.signIn({
    email: email,
    password: "test123"
  });

  if (error) alert(error.message);
  if (user) console.log(user);
}

export async function magicLogin(email) {
  try {
    const { error } = await supabase.auth.signIn({ email });
    if (error) throw error;
    alert("Check your email for the login link!");
  } catch (error) {
    alert(error.error_description || error.message);
  } finally {
  }
}
