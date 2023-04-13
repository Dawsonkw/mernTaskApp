const API_URL = `http://localhost:8080`

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY4MDM2MjE4Mn0.efb2ld80ojw5Lk9l5P5_JvpC5Y5JyFSP_nRto2aZe94'

const readTaskReq = {
    getAllTasks: async () => {
        const response = await fetch(`${API_URL}/tasks`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": 'application/json'
            },
        });
        return response.json();
    },
    postNewTask: async (newTaskText) => {
        const response = await fetch(`${API_URL}/tasks`, {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: newTaskText })
        });
        return response;
    }
}

export default readTaskReq;