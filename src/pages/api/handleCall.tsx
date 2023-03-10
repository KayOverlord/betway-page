const handleCall = async (
  req: { query: { email: any; password: any } },
  res: { json: (arg0: any) => any }
) => {
  const { email, password } = req.query;

  const api_url = `https://fn-uks-dev-eng-fe-mock-svc.azurewebsites.net/api/sign-in?email=${email}&password=${password}`;
  const apiResponse = await fetch(api_url);
  const jsonResponse = await apiResponse.json();

  return res.json(jsonResponse);
};

export default handleCall;

/**
 *  } catch (error) {
    return res.end(JSON.stringify({ error: error }));
  }
 */
