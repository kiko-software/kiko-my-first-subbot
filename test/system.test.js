const test = require('ava');
const axios = require('axios');

const port = process.env.PORT || '8080';
const url = process.env.SERVICE_URL || `http://localhost:${port}`;
const testRequestPayload = {
  conversationId: '1234',
};

test('process Kiko request on port ' + port, async (t) => {
  const res = await axios({
    url: url + '/',
    method: 'POST',
    data: testRequestPayload,
    timeout: 5000,
  });

  t.is(res.status, 200);
  t.is(res.data.success, true);
});
