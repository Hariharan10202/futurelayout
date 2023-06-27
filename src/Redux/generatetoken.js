export const generateToken = async (credentials) => {
  try {
    let myHeaders = new Headers();
    myHeaders.append("referer-domain", "fwda.stagingship.freightbro.com");
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append(
      "Authorization",
      "Basic ZGY5M2FiNTAtN2YyZS0xMWVjLTkyMjgtNzNlM2Q5NTUxMDRmOkx5R3FHdTE2OUM2VE1Ta210SWlGdHNUTzdPSXp4ZmlDTGRlcVRmSDk="
    );
    myHeaders.append(
      "Cookie",
      "laravel_session=eyJpdiI6Ik1BdHNpYkducXZqenRYWCtcL25UTXZ3PT0iLCJ2YWx1ZSI6Ik1Rd2dhRzBlbGYybEhcLzZDd2Q5SVEyWUU0UzlFYjBqZXZCQm4zQTFLYVwvdVk1NU1SczVONXZxYWQzNERXNkZRZENDM2pkTUoxMGtqeDlsN0s4cUowdWc9PSIsIm1hYyI6IjQzYzk4NDYwNTExMGNhYTNjYzJlZjI0ZDI0ZDc1YzE0MjQzNTNjNzdhMGM2N2U3MWZjMmE4NzliNzJhNjdjN2QifQ%3D%3D; laravel_session=eyJpdiI6ImN6QzMxY292MVoyTjdJcUVmYU1KRHc9PSIsInZhbHVlIjoiSnRDMXVZbXNSZ1hJTE1rZmdtQnNMcndnbVhhTXoxV3ppSFNvc09yZkxDMjJBK1RYOFVPK2lmeEVGVzhwTjF6OFg3MUFlZldmQWtVWG5UT1FxV2s0dHc9PSIsIm1hYyI6IjRjOTkzNzMxNWI5NzI1NzA2YThiOWMzNzA4ZTQwMGZmNzUyOTYxZGZiNDBlYmNhMDRlNWE1YzYyMTk0ODQ1ZjMifQ%3D%3D"
    );

    let urlencoded = new URLSearchParams();
    urlencoded.append("grant_type", "password");
    urlencoded.append("username", credentials.username);
    urlencoded.append("password", credentials.password);
    urlencoded.append("scope", "");

    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    const res = await fetch(
      "https://stagingapi.freightbro.com/oauth2/token",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => result);

    return res;
  } catch (error) {
    console.log(error);
  }
};
