import cron from 'node-cron';
import axios from 'axios';

async function jobProfitabilityCalculation() {
  try {
    const token = await getToken();
    const response = await axios.get(`http://${process.env.HOST}:${process.env.PORT}/job-executor/profitability/calculate`, {
      headers: {
        Authorization: token,
      },
    });
    console.log('Resposta: ', response.data);

  } catch (error) {
    console.log(`API ERROR [${error.statusCode}]: ${error.status} - ${error.message}`)
  }
}

async function jobProfitabilitySum() {
  try {
    const token = await getToken();
    const response = await axios.get(`http://${process.env.HOST}:${process.env.PORT}/job-executor/profitability/sum`, {
      headers: {
        Authorization: token,
      },
    });

    console.log('Resposta: ', response.data);

  } catch (error) {
    const errorData = error.response.data;
    console.log(`API ERROR [${errorData.statusCode}]: ${errorData.status} - ${errorData.message}`)
  }
}

async function getToken() {
  try {
    const body = {
      username: process.env.JOB_USER_USERNAME,
      password: process.env.JOB_USER_PASSWORD,
    };
    const response = await axios.post(`http://${process.env.HOST}:${process.env.PORT}/sign-in`, body);

    //console.log('Resposta: ', response.data);
    return response.data.access_token;

  } catch (error) {
    const errorData = error.response.data;
    console.log(`API ERROR [${errorData.statusCode}]: ${errorData.status} - ${errorData.message}`)
  }
}

//05 0 * * 1-5
cron.schedule('05 0 * * 1-5', () => {
  console.log('PROFITABILITY_CALCULATION');
  jobProfitabilityCalculation();
});

//37 18 * * 1-5
cron.schedule('37 18 * * 1-5', () => {
  console.log('PROFITABILITY_SUM');
  jobProfitabilitySum();
});

export { jobProfitabilityCalculation, jobProfitabilitySum };