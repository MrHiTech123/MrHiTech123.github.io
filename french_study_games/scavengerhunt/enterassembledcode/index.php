<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="shortcut icon" href="/images/franceMap.ico" type="image/x-icon">
  <link rel="stylesheet" href="/style.css">
  <title>Enter your code</title>
</head>
<body>
  <?php

  if ($_POST['code'] == "664189107143880") {
    $ipaddresses = fopen('ipaddresses.txt', 'a');
    fwrite($ipaddresses, ($_SERVER['REMOTE_ADDR'] . "\n"));
    fclose($ipaddresses);
    echo $_POST['code'] . "\n";
  }
  ?>
  <form action="" method="post">
    <input type="text" name="code" placeholder="Enter your code...">
    <input type="submit" value="Enter">
  </form>
</body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.2.0/p5.min.js"></script>
<script src="/scripts/nocred.js"></script>
</html>