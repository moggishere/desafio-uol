export async function fetchFromEndpoint(endpointUrl: URL) {
  try {
    const response = await fetch(endpointUrl, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error('Error fetching JSON:', error);
    throw error;
  }
}
