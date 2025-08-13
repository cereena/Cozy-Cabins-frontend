
export const serverURL = "https://cozy-cabins-2.onrender.com"; 
export const joinURL = (base, path) => `${base.replace(/\/$/, "")}/${path.replace(/^\/+/, "")}`;
