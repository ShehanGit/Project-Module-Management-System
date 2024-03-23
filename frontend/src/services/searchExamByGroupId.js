import axios from 'axios';

// Function to search exams by Group ID
export const searchExamByGroupId = async (groupId) => {
  try {
    const response = await axios.get(`/api/exams?groupId=${groupId}`); // Assuming your API endpoint for searching exams by Group ID is '/api/exams'
    return response.data; // Assuming your API returns exam data in JSON format
  } catch (error) {
    throw error; // Throw error if there's an issue with the request
  }
};