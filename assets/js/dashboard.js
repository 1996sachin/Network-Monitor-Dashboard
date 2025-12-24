async function fetchDashboard() {
  try {
    // Fetch devices from backend API
    const devicesRes = await fetch('/api/devices');
    const devices = await devicesRes.json();

    const deviceTableBody = document.querySelector('#deviceTable tbody');
    deviceTableBody.innerHTML = '';

    devices.forEach(device => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${device.name}</td>
        <td>${device.ip}</td>
        <td>${device.status}</td>
      `;
      deviceTableBody.appendChild(row);
    });

    document.getElementById('deviceCount').textContent = devices.length;

    // Fetch alerts from backend API
    const alertsRes = await fetch('/api/alert');
    const alerts = await alertsRes.json();
    document.getElementById('alertCount').textContent = alerts.length;
  } catch (err) {
    console.error('Error fetching dashboard data:', err);
  }
}

// Refresh every 30 seconds
fetchDashboard();
setInterval(fetchDashboard, 30000);
