# JavaScript library for Stackmash

Stackmash - User monitoring notifications and logs. Stackmash gives you real-time notifications for any activity on your website or app, such as user sign-ups, payments, orders, errors, contact requests and more.

### Install

Import the following script into your project before the closing body tag:

```html
<script src="https://cdn.stackmash.com/1.1.0/stackmash.min.js" integrity="sha384-sAGVDHR6USKTbmw+5PJHYsAaY1pRoFuO4XZqB0tvbWo/aL06WNwQspUCkdrYV+Jr" crossorigin="anonymous"></script><script>var stackmash = new Stackmash('YOUR_PUBLIC_KEY');</script>
```

### Start using Stackmash

You can then call an action anywhere in your code by using:

```javascript
stackmash.action('general', 'You have a new notification', {'Hello': 'Stackmash!'});
```

### Documentation

<a href="https://stackmash.com/docs/installations#javascript" target="_blank">Documentation</a>
For support, email <a href="mailto:support@stackmash.com">support@stackmash.com</a> or visit <a href="https://stackmash.com/support">https://stackmash.com/support</a>.
