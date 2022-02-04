<script>
  import Reserve from "./Reserve.svelte";
  import Cancel from "./Cancel.svelte";
  import { calendar, user } from "./sessionStore.js";
  import { supabase } from "./dbClient.js";

  let date = new Date();
  const options = { weekday: "short", month: "short", day: "numeric" };
  getEvents();

  function createCalendar(events) {
    for (let i = 0; i < 365; i++) {
      const day = new Date(date.setDate(date.getDate() + 1))
        .toISOString()
        .substring(0, 10);
      $calendar[day] = getReservation(day, events);
    }
  }

  function getReservation(day, events) {
    for (event of events) {
      if (event.date == day)
        return {
          date: day,
          booked: true,
          name: event.name,
          email: event.email
        };
    }
    return { date: day, booked: false, name: "", email: "" };
  }

  async function getEvents() {
    const { data, error } = await supabase.from("events").select("*");
    if (error) console.error(error);
    else createCalendar(data);
  }
</script>

<style>
  .box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px auto;
    height: 40px;
    max-width: 400px;
    padding: 4px 10px;
    font-size: 1rem;
  }
</style>

  {#each Object.entries($calendar) as [date, reservation] }
    { #if reservation.booked }
      <div class="box">
        <div>
          { new Date(date).toLocaleString('en-us', options)}
          <i>
          (Booked by { reservation.name })
          </i>
        </div>
        <div>
        {#if $user.email == reservation.email }
          <Cancel date={date} />
        {/if}
        </div>
      </div>
    {:else }
      <div class="box">
        <div>
          { new Date(date).toLocaleString('en-us', options)}
        </div>
        <Reserve date={date} />
      </div>
    { /if }
  {/each}



