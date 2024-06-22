"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import SideMenu from "@/components/sideMenu";
import TopNavbar from "@/components/topnavbar";
import MainContent from "@/components/maincontent";
import Banner from "@/components/banner";
import ProductCard from "@/components/productCard";
import { getActiveProductsByCategory } from "@/lib/services/product";
import { Swiper, SwiperSlide } from "swiper/react";
import withAuth from "@/lib/withAuth";

const MyMenu = () => {
  const [draftProducts, setDraftProducts] = useState([]);
  const [packageProducts, setPackageProducts] = useState([]);
  const searchParams = useSearchParams();
  const category = searchParams.get('category');

  const fetchProducts = async () => {
    try {
      const response = await getActiveProductsByCategory(category);
      console.log("API Response:", response.data);

      if (response.data.status === "success") {
        const data = response.data.data;
        const draftList = data.filter((product) => product.category === "draft");
        const packageList = data.filter((product) => product.category === "package");

        setDraftProducts(draftList);
        setPackageProducts(packageList);
      } else {
        console.error("API Error:", response.data.message);
      }
    } catch (error) {
      console.error("Fetch Error:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [category]);

  return (
    <div className="main-container">
      <SideMenu />
      <div className="overflow-hidden">
        <TopNavbar />
        <MainContent>
          <div className="container">
            <Banner bgImgSrc="/images/banner1.jpg" title="Your Menu" border />

            {category.includes("draft") && (
              <>
                <div className="text-[22px] text-white font-semibold mb-2">Draft Products</div>
                <Swiper
                  spaceBetween={30}
                  breakpoints={{
                    550: { slidesPerView: 1.25 },
                    650: { slidesPerView: 1.5 },
                    700: { slidesPerView: 1.75 },
                    800: { slidesPerView: 2 },
                    850: { slidesPerView: 2.25 },
                    900: { slidesPerView: 2.5 },
                    1000: { slidesPerView: 2.75 },
                    1100: { slidesPerView: 3 },
                  }}
                  style={{ paddingBottom: 24 }}
                >
                  {draftProducts.map((product) => {
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
                </Swiper>
              </>
            )}

            {category.includes("package") && (
              <>
                <div className="text-[22px] text-white font-semibold mb-2">Package Products</div>
                <Swiper
                  spaceBetween={30}
                  breakpoints={{
                    550: { slidesPerView: 1.25 },
                    650: { slidesPerView: 1.5 },
                    700: { slidesPerView: 1.75 },
                    800: { slidesPerView: 2 },
                    850: { slidesPerView: 2.25 },
                    900: { slidesPerView: 2.5 },
                    1000: { slidesPerView: 2.75 },
                    1100: { slidesPerView: 3 },
                  }}
                  style={{ paddingBottom: 24 }}
                >
                  {packageProducts.map((product) => {
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
                </Swiper>
              </>
            )}
          </div>
        </MainContent>
      </div>
    </div>
  );
};

export default withAuth(MyMenu);
// export default MyMenu;
