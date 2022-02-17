<!DOCTYPE html>
<html>
<body>

<h2>JavaScript if</h2>

<p>Tampilan "Selamat siang!" jika jam kurang dari 18:00:</p>

<p id="demo">Good Evening!</p>

<script>
if (new Date().getHours() < 18) {
  document.getElementById("demo").innerHTML = "Good day!";
}
</script>

</body>
</html>
