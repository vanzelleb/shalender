<script>
  import AddEvent from "./AddEvent.svelte";
  import { calendar, user } from "./sessionStore.js";
  import { supabase } from "/supabaseClient.js";

  let date = new Date();
  getEvents();

  function createCalendar(events) {
    for (let i = 0; i < 20; i++) {
      const day = new Date(date.setDate(date.getDate() + 1))
        .toISOString()
        .substring(0, 10);
      $calendar[day] = getReservation(day, events);
    }
    console.log($calendar);
  }

  function getReservation(day, events) {
    for (event of events) {
      if (event.date == day) return { date: day, booked: true, name: event.name };
    }
    return { date: day, booked: false, name: "" };
  }

  async function getEvents() {
    const { data, error } = await supabase.from("events").select("*");
    if (error) alert(error);
    else createCalendar(data);
    //console.log(data);
  }
</script>

<style>
  .box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 6px auto;
    height: 30px;
    max-width: 400px;
  }
</style>

  {#each Object.entries($calendar) as [date, reservation] }
    { #if reservation.booked }
      <div class="box">
        <div>
          { date }
        </div>
        <div>
          Reserved by { reservation.name }
        </div>
      </div>
    {:else }
      <div class="box">
        <div>
          { date }
        </div>
        <AddEvent date={date} />
      </div>
    { /if }
  {/each}



