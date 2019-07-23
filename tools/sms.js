// Routes a message send request to a server that then sends through twillio
export default function sendSMS(to, body) {
  fetch("http://theedgeofforever.com/projects/carbon/twillo.php?" + queryParams({
    'code': 'moooooooo', // A secret key, verified by the server. Don't touch.
    'body': body,
    'to': '+1' + to, // Hacky, just add a +1 for now
  }));
}

// Helper function, takes an array of params and builds a query string
function queryParams(params) {
  return Object.keys(params)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    .join('&');
}