const API = import.meta.env.VITE_API_URL;

export const getHealth = async () => {
  try {
    const response = await fetch(`${API}/health`);
    if (!response.ok) throw new Error('Health check failed');
    return await response.json();
  } catch (error) {
    throw new Error('서버 연결 실패');
  }
};
