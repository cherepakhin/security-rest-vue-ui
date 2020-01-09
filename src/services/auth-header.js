export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.accessToken) {
    // console.log(user.accessToken);
    // axios.defaults.headers.common.Authorization = `Bearer ${user.accessToken}`;
    return { Authorization: `Bearer ${user.accessToken}` };
  }
  return {};
}
