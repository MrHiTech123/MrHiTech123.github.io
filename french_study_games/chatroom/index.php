<html>
  <head>
    <title>Chatroom</title>
    <link href="https://frenchstudygames.mrhitech.repl.co/style.css" rel="stylesheet" type="text/css" />
  </head>
  <body>
  <h2>Conversation:</h2>
    <?php
    $myfile = fopen("talking.txt", "a") or die("Unable to open file!");
    if (!in_array("", [$_POST['username'], $_POST['text'], $_POST['age']])) {
      fwrite($myfile, "<p>" .  $_POST['username'] . ": " . $_POST['text'] . "</p>\n");
    }
    fclose($myfile);
    echo "<div id=\"words\">";
    $mytext = file_get_contents("talking.txt");
    if ($mytext) {
      echo $mytext;
    }
    else {
      echo 'No messages';
    }
    echo "</div>";
    
    ?>
    <br>
    ––––––––––––––––––––––––––––––––––––––––––––––––
    <br>
    <h2>Write your message here:</h2>
    <form method="post">
    Name:  <input type="text" name="username" /><br>
    Text: <input type="text" name="text" /><br>
    Type anything here to confirm you are 13 years or older (I have to include this for legal reasons): <br> <input type="text" name="age" />
    <input type="submit" name="submit" value="Send/Refresh">
    </form>
    <script src="script.js"></script>
    <script src="/scripts/nocred.js"></script>
  </body>
</html>