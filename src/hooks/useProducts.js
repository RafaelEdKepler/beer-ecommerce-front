import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await axios.get(`${API_BASE_URL}/products`);
      return data;
    },
  });
};

export const useSkuDetails = (skuCode) => {
  return useQuery({
    queryKey: ["sku", skuCode],
    queryFn: async () => {
      const { data } = await axios.get(`${API_BASE_URL}/sku/${skuCode}`);
      return data;
    },
    enabled: !!skuCode,
    refetchInterval: 5000,
  });
};