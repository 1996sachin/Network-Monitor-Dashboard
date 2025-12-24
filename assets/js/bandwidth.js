const ctx = document.getElementById('bandwidthChart').getContext('2d');
const token = localStorage.getItem('token');

const chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: 'Bandwidth (Mbps)',
      data: [],
      borderColor: 'blue',
      fill: false
    }]
  },
  options: { responsive: true }
});

async function fetchBandwidth() {
  try {
    const res = await fetch('/api/bandwidth', {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    const data = await res.json();

    chart.data.labels = data.map(item => item.time);
    chart.data.datasets[0].data = data.map(item => item.value);
    chart.update();
  } catch (err) {
    console.error('Error fetching bandwidth:', err);
  }
}

fetchBandwidth();
setInterval(fetchBandwidth, 30000);
