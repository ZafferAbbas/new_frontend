"use client";
import React, { useState, useEffect, useRef } from "react";
import SideMenu from "@/components/sideMenu";
import TopNavbar from "@/components/topnavbar";
import MainContent from "@/components/maincontent";
import Banner from "@/components/banner";
import ProductCard from "@/components/productCard";
import { getUserProductsByCategory, updateProductItem, reorderProducts, setProductStatus } from "@/lib/services/product";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, useSortable, arrayMove, rectSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
// import withAuth from "@/lib/withAuth";

function DraggableProductCard({ id, children }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: 'transform 500ms ease, opacity 500ms ease',
    touchAction: 'none',
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 1000 : 'auto',
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>
  );
}

function Home() {
  const [currentList, setCurrentList] = useState([]);
  const [draftList, setDraft] = useState([]);
  const currentListContainerRef = useRef(null);
  const draftListContainerRef = useRef(null);

  const GetAllList = async () => {
    try {
      const response = await getUserProductsByCategory({ category: "package" });
      console.log("API Response:", response.data);

      if (response.data.status === "success") {
        const data = response.data.data;
        let ActiveList = data.filter((i) => i.active);
        setCurrentList(ActiveList);
        let DraftList = data.filter((i) => !i.active);
        setDraft(DraftList);
      } else {
        console.error("API Error:", response.data.message);
      }
    } catch (error) {
      console.error("Fetch Error:", error);
    }
  };

  useEffect(() => {
    GetAllList();
  }, []);

  const UpdateProduct = async (id, bool) => {
    try {
      const response = await updateProductItem({
        _id: id,
        active: bool,
      });

      if (response.status === 200) {
        GetAllList();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDragEnd = async (event) => {
    const { active, over } = event;

    if (!over) {
      return;
    }

    if (active.id !== over.id) {
      if (currentList.some(item => item._id === active.id) && draftList.some(item => item._id === over.id)) {
        // Moving from currentList to draftList
        setCurrentList(items => items.filter(item => item._id !== active.id));
        setDraft(items => [...items, currentList.find(item => item._id === active.id)]);
        await setProductStatus({ _id: active.id, active: false });
      } else if (draftList.some(item => item._id === active.id) && currentList.some(item => item._id === over.id)) {
        // Moving from draftList to currentList
        setDraft(items => items.filter(item => item._id !== active.id));
        setCurrentList(items => [...items, draftList.find(item => item._id === active.id)]);
        await setProductStatus({ _id: active.id, active: true });
      } else {
        setCurrentList(items => {
          const oldIndex = items.findIndex(item => item._id === active.id);
          const newIndex = items.findIndex(item => item._id === over.id);
          return arrayMove(items, oldIndex, newIndex);
        });

        setDraft(items => {
          const oldIndex = items.findIndex(item => item._id === active.id);
          const newIndex = items.findIndex(item => item._id === over.id);
          return arrayMove(items, oldIndex, newIndex);
        });
      }
    }
  };

  const scrollLeft = (containerRef) => {
    containerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = (containerRef) => {
    containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="main-container">
      <SideMenu />
      <div className="overflow-hidden">
        <TopNavbar />
        <MainContent>
          <div className="container">
            <Banner bgImgSrc="/images/banner1.jpg" title="Your Digital Menu" />
            <div className="text-[22px] text-white font-semibold mb-1">Current Package List</div>
            <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
              <SortableContext items={currentList} strategy={rectSortingStrategy}>
                <div className="relative" style={{ display: 'flex', alignItems: 'center', paddingBottom: '5px' }}>
                  <button 
                    onClick={() => scrollLeft(currentListContainerRef)} 
                    style={{ 
                      position: 'absolute', 
                      left: 0, 
                      top: '50%', 
                      transform: 'translateY(-50%)', 
                      zIndex: 10, 
                      backgroundColor: 'rgba(255, 255, 255, 0.7)', 
                      padding: '8px', 
                      borderRadius: '50%',
                      color: 'black',
                      opacity: 0.5
                    }}
                  >
                    {"<"}
                  </button>
                  <div
                    ref={currentListContainerRef}
                    className="flex space-x-4"
                    style={{
                      overflowX: 'auto',
                      scrollSnapType: 'x mandatory',
                      padding: '5px 0',
                      WebkitOverflowScrolling: 'touch',
                      scrollbarWidth: 'none',
                      msOverflowStyle: 'none',
                    }}
                  >
                    {currentList.map((i) => {
                      const formattedItems = i?.pricintList?.map(
                        (item) => `${item.size}oz - ${item.price}$`
                      );
                      return (
                        <DraggableProductCard key={i._id} id={i._id}>
                          <div style={{ width: '355px', height: '300px', flexShrink: 0 }}>
                            <ProductCard
                              recordId={i._id}
                              updateAction={() => {
                                UpdateProduct(i._id, false);
                              }}
                              bgImgSrc={i?.imageUrl}
                              num={i?.quantity}
                              title={i?.productName}
                              description={i?.description}
                              members={formattedItems}
                            />
                          </div>
                        </DraggableProductCard>
                      );
                    })}
                  </div>
                  <button 
                    onClick={() => scrollRight(currentListContainerRef)} 
                    style={{ 
                      position: 'absolute', 
                      right: 0, 
                      top: '50%', 
                      transform: 'translateY(-50%)', 
                      zIndex: 10, 
                      backgroundColor: 'rgba(255, 255, 255, 0.7)', 
                      padding: '8px', 
                      borderRadius: '50%',
                      color: 'black',
                      opacity: 0.5 
                    }}
                  >
                    {">"}
                  </button>
                </div>
              </SortableContext>
              <div className="text-[22px] text-white font-semibold mt-1 mb-1">Inventory Package</div>
              <SortableContext items={draftList} strategy={rectSortingStrategy}>
                <div className="relative" style={{ display: 'flex', alignItems: 'center' }}>
                  <button 
                    onClick={() => scrollLeft(draftListContainerRef)} 
                    style={{ 
                      position: 'absolute', 
                      left: 0, 
                      top: '50%', 
                      transform: 'translateY(-50%)', 
                      zIndex: 10, 
                      backgroundColor: 'rgba(255, 255, 255, 0.7)', 
                      padding: '8px', 
                      borderRadius: '50%',
                      color: 'black',
                      opacity: 0.5 
                    }}
                  >
                    {"<"}
                  </button>
                  <div
                    ref={draftListContainerRef}
                    className="flex space-x-4"
                    style={{
                      overflowX: 'auto',
                      scrollSnapType: 'x mandatory',
                      padding: '5px 0',
                      WebkitOverflowScrolling: 'touch',
                      scrollbarWidth: 'none',
                      msOverflowStyle: 'none',
                    }}
                  >
                    {draftList.map((i) => {
                      const formattedItems = i?.pricintList?.map(
                        (item) => `${item.size}oz - ${item.price}$`
                      );
                      return (
                        <DraggableProductCard key={i._id} id={i._id}>
                          <div style={{ width: '355px', height: '300px', flexShrink: 0 }}>
                            <ProductCard
                              recordId={i._id}
                              updateAction={() => {
                                UpdateProduct(i._id, true);
                              }}
                              bgImgSrc={i?.imageUrl}
                              num={i?.quantity}
                              title={i?.productName}
                              description={i?.description}
                              members={formattedItems}
                            />
                          </div>
                        </DraggableProductCard>
                      );
                    })}
                  </div>
                  <button 
                    onClick={() => scrollRight(draftListContainerRef)} 
                    style={{ 
                      position: 'absolute', 
                      right: 0, 
                      top: '50%', 
                      transform: 'translateY(-50%)', 
                      zIndex: 10, 
                      backgroundColor: 'rgba(255, 255, 255, 0.7)', 
                      padding: '8px', 
                      borderRadius: '50%',
                      color: 'black',
                      opacity: 0.5 
                    }}
                  >
                    {">"}
                  </button>
                </div>
              </SortableContext>
            </DndContext>
          </div>
        </MainContent>
      </div>
    </div>
  );
}

// export default withAuth(Home);
export default Home;
