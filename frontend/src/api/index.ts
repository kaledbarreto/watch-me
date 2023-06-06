import axios from "axios";

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkbWluIiwiaWF0IjoxNjg2MDkwNTgyfQ.OCuE1SB-5m5Pk3ipk7lr_DhvttQtZlKOJBZB5kAdGO4';

export const api = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Content-type': 'application/json',
    'Authorization': token ? `Bearer ${token}` : undefined
  },
});