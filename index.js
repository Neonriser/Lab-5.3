const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

var ctx = document.getElementById("myChart").getContext("2d");
var chart = new Chart(ctx, {
  type: "line",

  data: {
    labels: ["a", "b", "c", "d"],
    datasets: [
      {
        label: "Anywhere",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 0, 0, 0],
      },
    ],
  },
  options,
});

function drawChart(arrData) {
  chart.data.datasets[0].data = arrData;
  chart.update();
}

async function voting(e) {
  if (!e.target.matches("button")) return;

  const vote = e.target.id;
  const res = await fetch(
    `https://compassionate-mayer-07bc2f.netlify.app/.netlify/functions/hello?vote=${vote}`
  );
  const data = await res.json();
  drawChart(data);
}

voteArea.addEventListener("click", voting);
