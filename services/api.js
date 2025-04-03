import axios from "axios";

export const api = axios.create({
    baseURL: `https://pcjxozzpvxifbqcntiim.supabase.co/rest/v1/`,
    headers:{
        apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBjanhvenpwdnhpZmJxY250aWltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM2NzMwODYsImV4cCI6MjA1OTI0OTA4Nn0.l-0rgpfL5WhqiE1kWhFE3bFM2yavPYCntFibSGzuKQc',
        authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBjanhvenpwdnhpZmJxY250aWltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM2NzMwODYsImV4cCI6MjA1OTI0OTA4Nn0.l-0rgpfL5WhqiE1kWhFE3bFM2yavPYCntFibSGzuKQc'
    }
}) 