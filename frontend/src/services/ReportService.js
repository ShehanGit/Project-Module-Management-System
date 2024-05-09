import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/report";

export const listReportDetails = () => axios.get(REST_API_BASE_URL);

export const createReport = (report) => axios.post(REST_API_BASE_URL, report);

export const getReportById = (reportId) => axios.get(REST_API_BASE_URL + '/' + reportId); 

export const deleteReportData = (reportId) => axios.delete(REST_API_BASE_URL + '/' + reportId);

export const updateReportData = (reportId, report) => axios.put(REST_API_BASE_URL + '/' + reportId, report);

