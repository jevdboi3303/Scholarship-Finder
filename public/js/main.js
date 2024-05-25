// public/js/main.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('filter-form');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const query = new URLSearchParams(formData).toString();
    console.log('Query:', query); // Log the query
    fetchScholarships(query);
  });

  async function fetchScholarships(query = '') {
    try {
      const response = await fetch(`/api/scholarships/filter?${query}`);
      const scholarships = await response.json();
      console.log('Results:', scholarships); // Log the results
      displayScholarships(scholarships);
    } catch (error) {
      console.error('Error fetching scholarships:', error);
    }
  }

  function displayScholarships(scholarships) {
    const list = document.getElementById('scholarship-list');
    list.innerHTML = ''; // Clear the list before adding new items
    scholarships.forEach(scholarship => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <h3>${scholarship.name}</h3>
        <p>Type: ${scholarship["scholarshipType"]}</p>
        <p>Description: ${scholarship.description}</p>
        <p>Amount: ${scholarship.amount}</p>
        <p>Faculty: ${scholarship.faculty}</p>
        <p>Year: ${scholarship.year}</p>
      `;
      list.appendChild(listItem);
    });
  }

  // Fetch all scholarships on initial load
  fetchScholarships();
});
