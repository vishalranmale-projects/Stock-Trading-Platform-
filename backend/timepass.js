let data;
async function getData() {
  data = await fetch("http://localhost:3000/getHoldings");
  data = await data.json();
}
await getData();
console.log(data);
