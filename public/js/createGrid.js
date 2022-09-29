const createGrid = async (e) => {
    e.preventDefault()
    console.log('made it')
    const gridHeight = document.getElementById('gridHeight').value.trim();
    const gridWidth = document.getElementById('gridWidth').value.trim()
    const payload = {gridHeight, gridWidth}
    console.log(payload)
    const response = await fetch('/api/grid/create', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' },
    })
    if (response.ok) {
        document.location.replace('/grid');
      } else {
        console.log('something')
      }
}

document.querySelector('.gridForm').addEventListener('submit', createGrid)