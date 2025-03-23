import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";

const API_BASE_URL = "http://localhost:3000";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const { data } = await axios.get(`${API_BASE_URL}/products`);
        return data;
      } catch (error) {
        throw new Error(`Erro na busca dos produtos - ${error}`);
      }
    },
  });
};

export const useSelectedProduct = (selectedSkuCode) => {
  const { id } = useParams();
  const { data: products, isLoading: isProductsLoading, error: isProductWithError } = useProducts();
  const product = products?.find((product) => product.id == id);
  const skuCode = product?.skus[selectedSkuCode].code;
  const { data: skuDetails, error: isSkuWithError } = useSkuDetails(skuCode);

  return {
    product,
    sizes: skuDetails,
    isLoading: isProductsLoading,
    error: {
      isProductWithError: !!isProductWithError,
      isSkuWithError: !!isSkuWithError
    }
  };
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
    onError: (error) => {
      throw new Error(`Erro na busca dos sku - ${error}`)
    }
  });
};