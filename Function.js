<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Functions</h2>

<p>Contoh ini memanggil fungsi yang melakukan perhitungan, dan mengembalikan hasilnya:</p>

<p id="demo"></p>

<script>
function myFunction(p1, p2) {
  return p1 * p2;
}
document.getElementById("demo").innerHTML = myFunction(4, 3);
</script>

</body>
</html>
