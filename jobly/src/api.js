import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    // console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      // console.error("API Error:", err.response);
      const message = err.response.data.error.message;
      // throw Array.isArray(message) ? message : [message];
      // Return an object with the error message
      return { error: message };
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Get details on all companies with optional query params */

  static async getAllCompanies(queryParams) {
    let url = "companies";
  
    if (queryParams) {
      // Convert the queryParams object into a URL query string
      const queryString = Object.keys(queryParams)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`)
        .join("&");
  
      // Append the query string to the URL
      url += `?${queryString}`;
    }
  
    let res = await this.request(url);
    return res.companies;
  }

  /** Get details on a job by id */

  static async getJob(id) {
    let res = await this.request(`jobs/${id}`);
    return res.job;
  }

  /** Get details on all jobs */

  static async getAllJobs() {
    let res = await this.request(`jobs`);
    return res.jobs;
  }

  /** Register user */

  static async register(username, password, firstName, lastName, email) {
    let res = await this.request(`auth/register`, {
        username,
        password,
        firstName,
        lastName,
        email
      }, 'POST');
    // Check for an error property in the result
    if (res.error) {
      // Handle the error, e.g., return it or throw an error
      return { error: res.error };
    }
    // Return the user token
    return res.token;
  }

  /** Edit user */

  static async editUser(username, password, firstName, lastName, email) {
    let res = await this.request(`users/${username}`, {
        password,
        firstName,
        lastName,
        email
      }, 'PATCH');
    // Check for an error property in the result
    if (res.error) {
      // Handle the error, e.g., return it or throw an error
      return { error: res.error };
    }
    // Return the user
    return res.user;
  }

  /** Login user - get token */

  static async getUserToken(username, password) {
    let res = await this.request(`auth/token`, {
      username,
      password
      }, 'POST');
    // Check for an error property in the result
    if (res.error) {
      // Handle the error, e.g., return it or throw an error
      return { error: res.error };
    }
    // Return the user token
    return res.token;
  }

  /** Get details on a user */

  static async getUserDetails(username) {
      let res = await this.request(`users/${username}`, {}, 'get');
      // Check for an error property in the result
      if (res.error) {
        // Handle the error, e.g., return it or throw an error
        return { error: res.error };
      }
      // Return the user
      return res.user;
  }

   /** Apply for a job */

   static async applyToJob(username, jobId) {
    let res = await this.request(`users/${username}/jobs/${jobId}`, {}, 'post');
    // Check for an error property in the result
    if (res.error) {
      // Handle the error, e.g., return it or throw an error
      return { error: res.error };
    }
    else if (res.body === {"applied": jobId}) console.log('matched')
    // Return the response object
    return res;
}

  static setToken(token) {
    JoblyApi.token = token;
}
}



// for now, put token ("testuser" / "password" on class)
JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
    "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
    "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";


export default JoblyApi;
