<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-0S56F43N93"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-0S56F43N93');
    </script>
    <link rel="stylesheet" href="main.css">
    <title>小工具</title>
</head>
<body>
  <div id="container">
    <h1>容積計算</h1>
	<div class="input-wrap">
    <input type="text" id="length" class="input-text" placeholder="長(英吋)">
    <span id="clear-search1" title="clear">×</span>
	</div><br>
	<div class="input-wrap">
    <input type="text" id="width" class="input-text" placeholder="寬(英吋)">
	<span id="clear-search2" title="clear">×</span>
	</div><br>
	<div class="input-wrap">
    <input type="text" id="height" class="input-text" placeholder="高(英吋)">
	<span id="clear-search3" title="clear">×</span>
	</div><br><br>
    <button id="css_button" onclick="transform()">計算</button>
    <h3>結果：</h3>
    <p id="result"></p>
  </div>
</body>
    <script src="script.js"></script>
</html>

