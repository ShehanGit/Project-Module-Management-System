import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/v1/exams";

export const listExamDetails = () => axios.get(REST_API_BASE_URL);

export const createExam = (exam) => axios.post(REST_API_BASE_URL, exam);

export const getExamById = (examId) => axios.get(REST_API_BASE_URL + '/' + examId); 

export const deleteExamData = (examId) => axios.delete(REST_API_BASE_URL + '/' + examId);
