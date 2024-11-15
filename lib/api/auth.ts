import { API_URL } from "@/settings";

// Interfaces
export interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  is_email_verified: boolean;
  is_phone_verified: boolean;
}

export interface UserRegister {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  password: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
}

export interface LoginResponse {
  refresh: string;
  user: User;
}

export interface RefreshAccessToken {
  refresh: string;
}

// Helper function to get CSRF token from cookies
function getCsrfToken(): string | null {
  const name = "csrftoken=";
  const cookies = document.cookie.split(";");
  for (let cookie of cookies) {
    cookie = cookie.trim();
    if (cookie.startsWith(name)) {
      return cookie.substring(name.length);
    }
  }
  return null;
}

// Function to prepare headers with CSRF token and authorization
function prepareHeaders(): Headers {
  const myHeaders = new Headers();
  const csrfToken = getCsrfToken();

  if (csrfToken) {
    myHeaders.append("Cookie", `csrftoken=${csrfToken}`);
  }

  return myHeaders;
}

// Register function using FormData and headers with CSRF token
export async function register({
  first_name,
  last_name,
  email,
  phone,
  password,
}: UserRegister): Promise<ApiResponse<User>> {
  const formdata = new FormData();
  formdata.append("first_name", first_name);
  formdata.append("last_name", last_name);
  formdata.append("email", email);
  formdata.append("phone", phone);
  formdata.append("password", password);

  const myHeaders = prepareHeaders();

  const response = await fetch(`${API_URL}/consumer/register/`, {
    method: "POST",
    headers: myHeaders,
    body: formdata,
  });

  const responsePayload = await response.json();

  if (response.ok) {
    return { success: true, data: responsePayload };
  } else {
    return { success: false, message: responsePayload.detail };
  }
}

// Login with email function
export async function loginWithEmail(
  email: string,
  password: string
): Promise<ApiResponse<LoginResponse>> {
  const formdata = new FormData();
  formdata.append("email", email);
  formdata.append("password", password);

  const myHeaders = prepareHeaders();

  const response = await fetch(`${API_URL}/consumer/login/`, {
    method: "POST",
    headers: myHeaders,
    body: formdata,
  });
  const responsePayload = await response.json();

  if (response.ok) {
    return { success: true, data: responsePayload };
  } else {
    return { success: false, message: responsePayload.detail };
  }
}

// Login with phone and OTP function
export async function loginWithPhone(
  phone: string,
  otp: string
): Promise<ApiResponse<LoginResponse>> {
  const formdata = new FormData();
  formdata.append("phone", phone);
  formdata.append("otp", otp);

  const myHeaders = prepareHeaders();

  const response = await fetch(`${API_URL}/consumer/otp/login/`, {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({
      phone: phone,
      otp: otp,
    }),
  });

  const responsePayload = await response.json();

  if (response.ok) {
    return { success: true, data: responsePayload };
  } else {
    return { success: false, message: responsePayload.detail };
  }
}

// Phone verification function
export async function verifyPhone(
  phone: string,
  otp: string
): Promise<ApiResponse> {
  const formdata = new FormData();
  formdata.append("phone", phone);
  formdata.append("otp", otp);

  const myHeaders = prepareHeaders();

  const response = await fetch(`${API_URL}/consumer/otp/verify/`, {
    method: "POST",
    headers: myHeaders,
    body: formdata,
  });

  const responsePayload = await response.json();

  if (response.ok) {
    return { success: true, data: responsePayload };
  } else {
    return { success: false, message: responsePayload.detail };
  }
}

// Request OTP function
export async function requestOtp(phone: string): Promise<ApiResponse> {
  const formdata = new FormData();
  formdata.append("phone", phone);

  const myHeaders = prepareHeaders();

  const response = await fetch(`${API_URL}/consumer/otp/`, {
    method: "POST",
    headers: myHeaders,
    body: formdata,
  });

  const responsePayload = await response.json();

  if (response.ok) {
    return { success: true, data: responsePayload };
  } else {
    return { success: false, message: responsePayload.detail };
  }
}


export async function refreshAccessToken(token: string): Promise<ApiResponse<RefreshAccessToken>> {
  const formdata = new FormData();
  formdata.append("refresh", token);

  const myHeaders = prepareHeaders();

  const response = await fetch(`${API_URL}/consumer/token/refresh/`, {
    method: "POST",
    headers: myHeaders,
    body: formdata
  });

  const responsePayload = await response.json();

  if (response.ok) {
    return { success: true, data: responsePayload };
  } else {
    return { success: false, message: responsePayload.detail };
  }
}