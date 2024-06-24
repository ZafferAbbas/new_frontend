"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from 'next/link';
import SideMenu from "@/components/sideMenu";
import TopNavbar from "@/components/topnavbar";
import MainContent from "@/components/maincontent";
import Banner from "@/components/banner";
import ProductCard from "@/components/productCard";
import { getUserProductsByCategory, updateProductItem, setProductStatus, reorderProducts } from "@/lib/services/product";
import { DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors, rectIntersection, useDroppable, DragOverlay } from "@dnd-kit/core";
import { SortableContext, useSortable, arrayMove, sortableKeyboardCoordinates, rectSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import withAuth from "@/lib/withAuth";
import Loader from "@/components/loader";

function DraggableProductCard({ id, children }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition,
    touchAction: 'none',
    opacity: isDragging ? 0.0 : 1,
    zIndex: isDragging ? 1000 : 'auto',
    marginRight: '16px',
    flex: '0 0 auto',
    width: '100%',
    maxWidth: '355px',
    height: 'auto',
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onMouseDown={(e) => e.preventDefault()}
      onTouchStart={(e) => e.preventDefault()}
    >
      {children}
    </div>
  );
}

function DroppableContainer({ id, children }) {
  const { setNodeRef } = useDroppable({
    id,
  });

  const style = {
    marginBottom: '5px',
    minHeight: '290px',
    display: 'flex',
    flexDirection: 'row',
    overflowX: 'auto',
    scrollSnapType: 'x mandatory',
    padding: '5px 0',
    WebkitOverflowScrolling: 'touch',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
  };

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
}

function AddNewCard() {
  const style = {
    flex: '0 0 auto',
    width: '100%',
    maxWidth: '355px',
    height: 'auto',
    flexShrink: 0,
  };

  return (
    <div style={style}>
      <Link href="/edit">
        <div style={{ width: '100%', height: '100%' }}>
          <ProductCard
            bgImgSrc="/images/cardbg3.png"
            num="+"
            title="Add New Package"
            description="Search for new package to add"
            members={[]}
          />
        </div>
      </Link>
    </div>
  );
}

function Home() {
  const [currentList, setCurrentList] = useState([]);
  const [draftList, setDraft] = useState([]);
  const [items, setItems] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [loading, setLoading] = useState(true);
  const currentListContainerRef = useRef(null);
  const draftListContainerRef = useRef(null);

  const fetchProducts = async () => {
    try {
      const response = await getUserProductsByCategory({ category: "package" });
      if (response.data.status === "success") {
        const data = response.data.data;
        let ActiveList = data.filter((i) => i.active);
        let DraftList = data.filter((i) => !i.active);

        setCurrentList(ActiveList);
        setDraft(DraftList);

        setItems(
          ActiveList.map((item) => ({ ...item, container: 'currentList' })).concat(
            DraftList.map((item) => ({ ...item, container: 'draftList' }))
          )
        );
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
    fetchProducts();
  }, []);

  const UpdateProduct = async (id, bool) => {
    try {
      const response = await updateProductItem({
        _id: id,
        active: bool,
      });

      if (response.status === 200) {
        fetchProducts();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = (event) => {
    setActiveId(event.active.id);
    document.body.style.overflow = 'hidden';
  };

  const handleDragEnd = async (event) => {
    document.body.style.overflow = 'auto';
    const { active, over } = event;
    setActiveId(null);

    if (!over) return;

    const activeIndex = items.findIndex((item) => item._id === active.id);
    const overIndex = items.findIndex((item) => item._id === over.id);

    if (activeIndex === overIndex) return; // No change in position

    const activeItem = items[activeIndex];

    if (over.id === 'currentList' || over.id === 'draftList') {
      // Dropping into an empty container
      const newItems = [...items];
      newItems[activeIndex] = { ...activeItem, container: over.id };
      setItems(newItems);

      if (over.id === 'currentList') {
        await setProductStatus({ _id: activeItem._id, active: true });
      } else {
        await setProductStatus({ _id: activeItem._id, active: false });
      }
      await reorderProducts({ reorderedProducts: newItems });
    } else if (activeItem.container === items[overIndex].container) {
      // Moving within the same container
      const newItems = arrayMove(items, activeIndex, overIndex);
      setItems(newItems);
      await reorderProducts({ reorderedProducts: newItems });
    } else {
      // Moving to a different container
      const newItems = arrayMove(items, activeIndex, overIndex);
      newItems[overIndex] = { ...activeItem, container: items[overIndex].container };
      setItems(newItems);

      if (items[overIndex].container === 'currentList') {
        await setProductStatus({ _id: activeItem._id, active: true });
      } else {
        await setProductStatus({ _id: activeItem._id, active: false });
      }
      await reorderProducts({ reorderedProducts: newItems });
    }
  };

  const currentListItems = items.filter((item) => item.container === 'currentList');
  const draftListItems = items.filter((item) => item.container === 'draftList');

  const scrollLeft = (containerRef) => {
    containerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = (containerRef) => {
    containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const getItemById = (id) => items.find((item) => item._id === id);

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
                <Banner bgImgSrc="/images/banner1.jpg" title="Your Digital Menu" />
                <div className="text-[22px] text-white font-semibold mb-1">Current Tap List</div>
                <DndContext sensors={sensors} collisionDetection={rectIntersection} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
                  <SortableContext items={currentListItems.map(item => item._id)} strategy={rectSortingStrategy}>
                    <DroppableContainer id="currentList" containerRef={currentListContainerRef}>
                      {currentListItems.map((i) => {
                        if (!i || !i._id) {
                          console.error('Product item is missing or undefined:', i);
                          return null;
                        }
                        const formattedItems = i?.pricintList?.map(
                          (item) => `${item.size}oz - ${item.price}$`
                        );
                        return (
                          <DraggableProductCard key={i._id} id={i._id}>
                            <div className="flex-0 flex-shrink-0 w-full max-w-[355px] h-auto">
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
                      <AddNewCard />
                    </DroppableContainer>
                  </SortableContext>
                  <div className="text-[22px] text-white font-semibold mt-1 mb-1">Inventory Package</div>
                  <SortableContext items={draftListItems.map(item => item._id)} strategy={rectSortingStrategy}>
                    <DroppableContainer id="draftList" containerRef={draftListContainerRef}>
                      {draftListItems.map((i) => {
                        if (!i || !i._id) {
                          console.error('Product item is missing or undefined:', i);
                          return null;
                        }
                        const formattedItems = i?.pricintList?.map(
                          (item) => `${item.size}oz - ${item.price}$`
                        );
                        return (
                          <DraggableProductCard key={i._id} id={i._id}>
                            <div className="flex-0 flex-shrink-0 w-full max-w-[355px] h-auto">
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
                    </DroppableContainer>
                  </SortableContext>
                  <DragOverlay>
                    {activeId ? (
                      <div className="flex-0 flex-shrink-0 w-full max-w-[355px] h-auto">
                        <ProductCard
                          bgImgSrc={getItemById(activeId)?.imageUrl}
                          num={getItemById(activeId)?.quantity}
                          title={getItemById(activeId)?.productName}
                          description={getItemById(activeId)?.description}
                          members={getItemById(activeId)?.pricintList?.map(item => `${item.size}oz - ${item.price}$`)}
                        />
                      </div>
                    ) : null}
                  </DragOverlay>
                </DndContext>
              </div>
            </MainContent>
          </div>
        </>
      )}
    </div>
  );
}

export default withAuth(Home);
