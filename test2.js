import { check } from 'k6';
import http from 'k6/http';

// Define the load test options
export let options = {
  vus: 10, // virtual users
  duration: '30s', // test duration
};

// The test function
export default function () {
  // Send an HTTP request to the server
  let res = http.get('https://example.com');

  // Perform a simple check to verify the response status code
  check(res, {
    'is status 200': (r) => r.status === 200,
  });
}
