// Connect to our database
const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  process.env.DATABASE_URL,
  process.env.SUPABASE_SERVICE_API_KEY
);

// Our standard serverless handler function
exports.handler = async (event) => {
  const date = event.queryStringParameters.date;
  const name = event.queryStringParameters.name;

  // Insert a row
  const { data, error } = await supabase
    .from("events")
    .insert([{ date: date, name: name }]);
  return {
    statusCode: 200,
    body: JSON.stringify({ data, error })
  };
};
