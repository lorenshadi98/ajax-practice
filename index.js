async function createGETRequest() {
  let response = await axios.get('https://httpbin.org/ip');
  console.log(response);
  $('#get-request-response').html(response.data.origin);
}
function showBorrowed(response) {
  $('#post-request-response').html(response + ' Borrowed');
}
async function createPostRequest() {
  // get borrow amount
  let amount = Number($('#amount').val());
  console.log(amount);
  let response = await axios.post('https://httpbin.org/post', { amount });
  // get the response body and parse the JSON
  const json = JSON.parse(response.data.data);
  let amount_response = json.amount;
  showBorrowed(amount_response);
}
$('#request-info').on('click', createGETRequest);
$('#borrow-money').on('click', createPostRequest);
