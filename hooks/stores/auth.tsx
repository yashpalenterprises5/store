import { create } from "zustand";
import {
  register,
  loginWithEmail,
  loginWithPhone,
  requestOtp,
  verifyPhone,
  refreshAccessToken,
} from "@/lib/api/auth";
import { User, UserRegister, ApiResponse, LoginResponse } from "@/lib/api/auth";
import CookieManager from "@/lib/cookie-manager";

// Auth state interface
interface AuthState {
  user: User | null;
  loading: boolean;
  registerUser: (userRegister: UserRegister) => Promise<ApiResponse<User>>;
  loginWithEmail: (
    email: string,
    password: string
  ) => Promise<ApiResponse<LoginResponse>>;
  loginWithPhone: (
    phone: string,
    otp: string
  ) => Promise<ApiResponse<LoginResponse>>;
  requestOtp: (phone: string) => Promise<ApiResponse>;
  verifyPhone: (phone: string, otp: string) => Promise<ApiResponse>;
  logout: () => void;
}

export const useAuth = create<AuthState>((set) => {
  const refresh_token = CookieManager.getCookie("refresh_token");
  const user_Data = CookieManager.getCookie("user_data");

  // Refresh token if available
  if (refresh_token) {
    refreshAccessToken(refresh_token)
      .then((response) => {
        if (response.success && response.data) {
          const { refresh } = response.data;
          set({ loading: false });
          CookieManager.setCookie("refresh_token", refresh, 7);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return {
    user: user_Data ? JSON.parse(user_Data) : null,
    loading: false,

    // Register function
    registerUser: async (
      userRegister: UserRegister
    ): Promise<ApiResponse<User>> => {
      set({ loading: true });
      try {
        const response = await register(userRegister);
        set({ user: response.success ? response.data : null, loading: false });
        return response;
      } catch (error) {
        set({ loading: false });
        return {
          success: false,
          message: error instanceof Error ? error.message : "Unknown error",
        };
      }
    },

    // Login with email and password
    loginWithEmail: async (email, password) => {
      set({ loading: true });
      try {
        const response = await loginWithEmail(email, password);
        if (response.success && response.data) {
          const { refresh, user } = response.data;

          set({ user, loading: false });
          CookieManager.setCookie("refresh_token", refresh, 7);
          CookieManager.setCookie("user_data", JSON.stringify(user), 7);
        } else {
          set({ loading: false });
        }
        return response;
      } catch (error) {
        set({ loading: false });
        return {
          success: false,
          message: error instanceof Error ? error.message : "Unknown error",
        };
      }
    },

    // Login with phone and OTP
    loginWithPhone: async (phone, otp) => {
      set({ loading: true });
      try {
        const response = await loginWithPhone(phone, otp);
        if (response.success && response.data) {
          const { refresh, user } = response.data;

          set({ user, loading: false });
          CookieManager.setCookie("refresh_token", refresh, 7);
          CookieManager.setCookie("user_data", JSON.stringify(user), 7);
        } else {
          set({ loading: false });
        }
        return response;
      } catch (error) {
        set({ loading: false });
        return {
          success: false,
          message: error instanceof Error ? error.message : "Unknown error",
        };
      }
    },

    // Request OTP function
    requestOtp: async (phone) => {
      set({ loading: true });
      try {
        const response = await requestOtp(phone);
        set({ loading: false });
        return response;
      } catch (error) {
        set({ loading: false });
        return {
          success: false,
          message: error instanceof Error ? error.message : "Unknown error",
        };
      }
    },

    // Verify phone function
    verifyPhone: async (phone, otp) => {
      set({ loading: true });
      try {
        const response = await verifyPhone(phone, otp);
        set({ loading: false });
        return response;
      } catch (error) {
        set({ loading: false });
        return {
          success: false,
          message: error instanceof Error ? error.message : "Unknown error",
        };
      }
    },

    // Logout function
    logout: () => {
      set({ user: null });
      CookieManager.deleteCookie("refresh_token");
      CookieManager.deleteCookie("user_data");
    },
  };
});
