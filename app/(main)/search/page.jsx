"use client";

import React, { useState, useEffect, useCallback } from "react";
import SideMenu from "@/components/sideMenu";
import TopNavbar from "@/components/topnavbar";
import MainContent from "@/components/maincontent";
import ProductCard from "@/components/productCard";
import { SwiperSlide } from "swiper/react";
import { getAllUserProducts, liveSearch } from "@/lib/services/product";
import Link from "next/link";
import withAuth from "@/lib/withAuth";
import Loader from "@/components/loader";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Debounce function to delay the API call
  const debounce = (func, delay) => {
    let debounceTimer;
    return function (...args) {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(this, args), delay);
    };
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const fetchAllProducts = async () => {
    try {
      const response = await getAllUserProducts(); // Fetch all products
      if (response.data.status === "success") {
        setAllProducts(response.data.data);
        setProducts(response.data.data); // Set initial products to all products
      } else {
        console.error("API Error:", response.data.message);
      }
    } catch (error) {
      console.error("Fetch Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const fetchSearchResults = useCallback(
    debounce(async (query) => {
      if (query.trim() === "") {
        setProducts(allProducts); // Show all products if search query is empty
        return;
      }

      try {
        const response = await liveSearch({ query });
        if (response.data.status === "success") {
          setProducts(response.data.data);
        } else {
          console.error("Search Error:", response.data.message);
        }
      } catch (error) {
        console.error("Fetch Error:", error);
      }
    }, 300),
    [allProducts]
  );

  useEffect(() => {
    fetchSearchResults(searchQuery);
  }, [searchQuery, fetchSearchResults]);

  return (
    <div className="main-container">
      {loading && <Loader />}
      {!loading && (
        <>
          <SideMenu />
          <div className="overflow-hidden">
            <TopNavbar />
            <MainContent>
              <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-3 text-white gap-y-6 md:gap-x-6 mb-6">
                  <div className="col-span-2 bg-[#060B28] rounded-[20px] p-6">
                    <p className="text-xs mb-3">Search for Product</p>
                    <input
                      className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-4 py-3 text-xs"
                      placeholder="hazy"
                      value={searchQuery}
                      onChange={handleSearchChange}
                    />
                  </div>
                  <div className="bg-[#060B28] rounded-[20px] p-6">
                    <p className="text-lg font-bold mb-3">Can't find what you're looking for?</p>
                    <Link href="/edit">
                      <div className="mx-auto bg-white rounded-xl w-[100px] h-8 grid place-items-center text-[10px] text-[#0F1535] cursor-pointer">
                        Add
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {products.map((product) => {
                    const formattedItems = product?.pricintList?.map((item) => `${item.size}oz - ${item.price}$`);
                    return (
                      <SwiperSlide key={product._id}>
                        <ProductCard
                          recordId={product._id}
                          bgImgSrc={product.imageUrl}
                          num={product.quantity}
                          title={product.productName}
                          description={product.description}
                          members={formattedItems}
                        />
                      </SwiperSlide>
                    );
                  })}
                </div>
              </div>
            </MainContent>
          </div>
        </>
      )}
    </div>
  );
}

export default withAuth(Home);
