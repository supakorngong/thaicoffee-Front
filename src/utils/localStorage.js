const AccessToken = "ACCESS_TOKEN";

export const giveAccessToken = (token) => localStorage.setItem(AccessToken, token);
export const getAccessToken = () => localStorage.getItem(AccessToken);
export const deleteAccessToken = () => localStorage.removeItem(AccessToken);
