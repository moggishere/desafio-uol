export async function fetchFromEndpoint(endpointUrl) {
  try {
    const response = await fetch(endpointUrl);

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
